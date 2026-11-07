"""Minimal TopoJSON helpers (decode arcs, reindex geometries). Used by merge-data.py."""

def decode_arcs(topo):
    """Return arcs as absolute float coordinates (handles quantized delta-encoded topologies)."""
    tr = topo.get('transform')
    if not tr:
        return [[list(p[:2]) for p in arc] for arc in topo['arcs']]
    (sx, sy), (tx, ty) = tr['scale'], tr['translate']
    out = []
    for arc in topo['arcs']:
        x = y = 0
        pts = []
        for p in arc:
            x += p[0]; y += p[1]
            pts.append([round(x * sx + tx, 6), round(y * sy + ty, 6)])
        out.append(pts)
    return out

def _map_arcs(arcs, off):
    if isinstance(arcs, int):
        return arcs + off if arcs >= 0 else ~((~arcs) + off)
    return [_map_arcs(a, off) for a in arcs]

def shift_geometry(g, off):
    g = dict(g)
    if 'arcs' in g:
        g['arcs'] = _map_arcs(g['arcs'], off)
    if 'geometries' in g:
        g['geometries'] = [shift_geometry(x, off) for x in g['geometries']]
    return g

def geom_arc_ids(g, acc=None):
    acc = set() if acc is None else acc
    def walk(a):
        if isinstance(a, int):
            acc.add(a if a >= 0 else ~a)
        else:
            for x in a: walk(x)
    if 'arcs' in g: walk(g['arcs'])
    for x in g.get('geometries', []): geom_arc_ids(x, acc)
    return acc

def bbox_of(g, arcs):
    xs, ys = [], []
    for i in geom_arc_ids(g):
        for p in arcs[i]:
            xs.append(p[0]); ys.append(p[1])
    return (min(xs), min(ys), max(xs), max(ys)) if xs else None

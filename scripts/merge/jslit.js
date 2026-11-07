// Extract JS object/array literals from a minified bundle and print them as JSON.
// usage: node jslit.js '<json request>'   request = [{key, file, marker, from}]
// For each request the literal starting right after `marker` (first match at or after `from`)
// is located by bracket balancing (string-aware), evaluated, and returned with its offsets.
const fs = require('fs');
const cache = {};
function extract(s, marker, from) {
  const i = s.indexOf(marker, from || 0);
  if (i < 0) throw Error('marker not found: ' + marker);
  let st = i + marker.length;
  while (!'{['.includes(s[st])) st++;
  let d = 0, q = null, j = st;
  for (; j < s.length; j++) {
    const c = s[j];
    if (q) { if (c === '\\') { j++; continue } if (c === q) q = null; continue }
    if (c === '"' || c === "'" || c === '`') { q = c; continue }
    if (c === '{' || c === '[') d++;
    else if (c === '}' || c === ']') { d--; if (d === 0) break }
  }
  const src = s.slice(st, j + 1);
  return { start: st, end: j + 1, src, val: (0, eval)('(' + src + ')') };
}
const req = JSON.parse(process.argv[2]);
const out = {};
for (const r of req) {
  const s = cache[r.file] || (cache[r.file] = fs.readFileSync(r.file, 'utf8'));
  out[r.key] = extract(s, r.marker, r.from);
}
process.stdout.write(JSON.stringify(out));

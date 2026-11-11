# Language areas traced from reference maps

Two hand-kept data files in `site/data/` were traced from reference images, not drawn by hand.
Run a script again only to re-trace from a new image. Each fits the image to the real outline first,
so the shapes land on the right places, and prints how well the fit agrees.

| output | script | reference |
|---|---|---|
| `site/data/greece-areas.json`, key `Arvanitika` | `trace-arvanitika.py` | map supplied by the site owner (red = Arvanites) |
| `site/data/montenegro-areas.json` | `trace-montenegro.py` | Wikimedia Commons, `MontenegroLanguage2011.PNG` (Lazar Ilic), 2011 census by settlement |

```
python3 -m venv .areas-venv && .areas-venv/bin/pip install -r scripts/areas/requirements.txt
.areas-venv/bin/python scripts/areas/trace-montenegro.py . <image.png> <out-dir> [smoothing-km] [min-area-km2]
```

Montenegro rules: the light and dark shade of a language count as that language; Bosniak counts
as Bosnian; Romani, "others", undeclared, no-majority, protected and uninhabited settlements carry
no colour and take the language of the area around them. Areas are generalised (default 2.2 km
smoothing, nothing under 30 km2), so the map shows where each language is spoken, not single villages.
Copy the script's output file over the one in `site/data/` (for Arvanitika, replace that one key).

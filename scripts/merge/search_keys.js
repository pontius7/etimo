// Build helper: run the app's own search-key function (site/search-key.js) over many strings.
// usage: node search_keys.js in.json out.json   (in: array of strings, out: array of key arrays)
const fs = require('fs');
const EK = require('../../site/search-key.js');
const input = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
fs.writeFileSync(process.argv[3], JSON.stringify(input.map(s => EK.words(s))));

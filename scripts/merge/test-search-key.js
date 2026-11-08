// Tests for site/search-key.js (the shared search-key function). Run: node scripts/merge/test-search-key.js
// A case passes when one of the query's keys is a prefix of one of the word's keys
// (that is how both the app and the dictionary index match).
const EK = require('../../site/search-key.js');
const hit = (q, w) => EK.keys(q).some(k => EK.words(w).some(x => x.startsWith(k)));
const cases = [
  ['voda', 'вода', true], ['вода', 'вода', true], ['voda', 'voda', true],
  ['s', 'шума', true], ['sh', 'шума', true], ['sh', 'сума', false], ['š', 'šuma', true], ['ш', 'шума', true],
  ['sh', 'šuma', true], ['s', 'šuma', true], ['shch', 'щука', true],
  ['c', 'čovjek', true], ['c', 'човек', true], ['c', 'ćup', true], ['c', 'цвет', true], ['ch', 'човек', true],
  ['zena', 'žena', true], ['zena', 'жена', true], ['zh', 'жена', true], ['z', 'зима', true],
  ['uje', 'ujë', true], ['e', 'ëndërr', true],
  ['dj', 'ђак', true], ['dz', 'џеп', true], ['dz', 'džep', true], ['lj', 'љубав', true], ['nj', 'њива', true],
  ['g', 'ğ', true], ['i', 'ışık', true], ['a', 'ăla', true], ['o', 'ő', true], ['u', 'ű', true],
  ['ss', 'ß', true], ['ae', 'æble', true], ['nero', 'νερό', true], ['thalassa', 'θάλασσα', true],
  ['tsqali', 'წყალი', true], ['jur', 'ջուր', true], ['su', 'су', true], ['qol', 'қол', true], ['kol', 'қол', true],
  ['ab', 'آب', true], ['mama', 'мама', true], ['steam', 'steam', true],
];
// exact same-script form (ranks first): special letters count
const plainCases = [['šuma', 'šuma', true], ['suma', 'šuma', false], ['Вода', 'вода', true], ['săpun', 'sapun', false]];
let fail = 0;
for (const [a, b, want] of plainCases) {
  const got = EK.plain(a) === EK.plain(b);
  if (got !== want) fail++;
  console.log(`${got === want ? 'ok  ' : 'FAIL'} plain ${a} = ${b}: ${got}`);
}
for (const [q, w, want] of cases) {
  const got = hit(q, w);
  const ok = got === want;
  if (!ok) fail++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${JSON.stringify(q)} -> ${JSON.stringify(w)}: ${got} (keys ${JSON.stringify(EK.words(w))})`);
}
console.log(`${cases.length + plainCases.length - fail}/${cases.length + plainCases.length} search-key tests passed`);
process.exit(fail ? 1 : 0);

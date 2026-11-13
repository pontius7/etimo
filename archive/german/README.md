# German words kept from the retired German interface (2026-11-13)

The site no longer has a German interface (only English, Shqip, Srpski latinica and ћирилица). Its German texts were removed
from the page code; the German *words* in them were kept here for the day German is added as a language of the Germanic
family. Nothing in this folder is published (only `site/` is deployed) or read by any build.

| File | What | Rows |
|---|---|---|
| `words.csv` | one German word for each of the site's meanings, in the word-list format of `content/words/` (`language, word, meaning, source`) | see the file |
| `names.csv` | German names of the site's languages, countries and places, and families (`kind, english, german`) | see the file |

Unreviewed: these were interface glosses (what the German menu showed for a meaning), not dictionary entries with sources.
Before importing: check each word (lemma form, gender, spelling), give it a real source, then move the rows into a file in
`content/words/` once German exists as a language (`content/languages/`), and run `./scripts/add-words.sh`.
Interface sentences, help texts and category labels were not kept.

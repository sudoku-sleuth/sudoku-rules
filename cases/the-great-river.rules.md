---
format: open-rules
title: The Great River
setter: Blobz
source: https://sudokupad.app/blobz/the-great-river
case: https://sudoku-sleuth.com/cases/the-great-river
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c8=3 r6c5=2 r8c4=8 r9c1=9
exported: 5e9df3ed3c9b0f42e7d5d27399348439
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1-r8c2 total 6 repeats true connected true
cage-2: cage r1c3-r1c4 total 8 repeats true connected true
cage-3: cage r1c1-r2c1 total 10 repeats true connected true
cage-4: cage r7c7-r7c8 total 11 repeats true connected true
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.62,"height":0.62,"rounded":true,"fill":"#11d62772","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.62,"height":0.62,"rounded":true,"fill":"#11d62772","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.62,"height":0.62,"rounded":true,"fill":"#11d62772","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[1,10,11,12,13,22,29,30,31,38,47,48,57,58,59,68,69,78,79,80]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[36,45,46,55,56,65]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[19,20,21,27,28]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[17,23,24,26,33,34,35]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[66,67,76,77]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[4,5,6,7,14,16]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[43,51,52,53,62,71]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[32,40,41,49]}}
```

Even as they gazed, the Silverlode passed out into the currents of the Great River, and their boats turned and began to speed southward. Suddenly the River swept round a bend, and the banks rose upon either side, and the light of Lorien was hidden.

Normal sudoku rules apply.

Digits in cages MAY repeat, but must sum to the small clue, if given. Digits orthogonally adjacent to a cage may NOT be included within that cage.

The three digits in the Elven Boats (circles) are distinct.

---
format: open-rules
title: Caged Diamonds
setter: Dr Logic
source: https://sudokupad.app/9a9nxa0dr9
case: https://sudoku-sleuth.com/cases/caged-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c7-r3c8-r4c6-r4c7 connected true
cage-2: cage r8c4-r9c3-r9c4 connected true
diagonal direction "main"
thermo-1: thermo r1c1-r2c1-r3c1
thermo-2: thermo r3c3-r2c3-r1c3
kropki-1: kropki r8c7-r9c7 colour "white"
kropki-2: kropki r4c8-r4c9 colour "white"
whispers-1: whispers r5c1-r5c2-r5c3 gap 5
whispers-2: whispers r2c4-r2c5-r2c6 gap 5
whispers-3: whispers r6c4-r6c5-r5c6-r4c5-r4c4 gap 5
renban-1: renban r3c1-r3c2-r3c3
renban-2: renban r1c3-r1c2-r2c2
renban-3: renban r4c2-r5c2-r6c2
renban-4: renban r1c5-r2c5-r3c5
renban-5: renban r4c4-r5c4-r6c4
nabner-1: nabner r2c4-r1c5-r2c6-r3c5 distinct true
nabner-2: nabner r5c1-r4c2-r5c3-r6c2 distinct true
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[8,17,26],"label":"n","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[61,62,71],"label":"n","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[69,78,79],"label":"n","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[59,68,77],"label":"n","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku Rules Apply.
Digits Cannot repeat in a marked killer cage, and must sum to the small clue (if given). 
Digits cannot repeat along the marked diagonal. 
Digits along a pink renban line form a non-repeating set of consecutive digits (in any order). Digits along a thermometer must strictly increase from the bulb end. Digits joined by a black dot must be in a 1:2 ratio, digits separated by a white dot must be consecutive. Not all dots are necessarily given. Digits along a gold Nabner line cannot repeat and must not contain any consecutive digits. (E.g, 192 is not allowed as 1 and 2 are consecutive, but 163 is allowed). Neighboring digits along a green German Whispers line must have a difference of at least 5.

---
format: open-rules
title: Nothing Shall Divide Us
setter: sujoyku
source: https://sudokupad.app/sc9y08l19q
case: https://sudoku-sleuth.com/cases/nothing-shall-divide-us
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[7,8,17],"label":"10"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[5,6],"label":"9"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[26,35],"label":"9"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[18,19,20,29],"label":"26"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[59,60,69,78],"label":"23"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[23,24,33,34],"label":"24"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[3,12,21],"label":"18"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[49,50,51],"label":"12"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[47,56,65],"label":"18"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[36,45,54],"label":"12"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[64,73,74,75],"label":"26"}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Indivisibility Cages: Digits in a cage do not repeat and must sum to the clue in the top left.
Moreover, no cage may contain digits where one is an integer multiple of another. For example, 469 forms a valid 19-cage while 478 would not be allowed.

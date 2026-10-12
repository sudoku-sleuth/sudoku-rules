---
format: open-rules
title: Pelennor Fields
setter: Blobz
source: https://sudokupad.app/blobz/pelennor-fields
case: https://sudoku-sleuth.com/cases/pelennor-fields
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r9c6=1
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[0,9],"label":"11"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[10,19],"label":"18"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[37,38,46],"label":"22"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[43,44,53],"label":"22"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[29,30],"label":"19"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[59,68],"label":"18"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[67,76],"label":"14"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[49,50],"label":"13"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[7,16],"label":"17"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[5,14],"label":"16"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[13,22],"label":"16"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[56,57],"label":"15"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[71,79,80],"label":"7"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[73,74],"label":"14"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[55,64],"label":"7"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[54,63],"label":"4"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[3,4],"label":"10"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[32,41],"label":"10"}}
```

Upon the beast sat a shape, black-mantled, huge and threatening. A crown of steel he bore, but between rim and robe naught was there to see, save only a deadly gleam of eyes: the Lord of the Nazgul.

Normal sudoku rules apply.

Values in cages must sum to the given total.

Nine cells on the battlefield (grid) are 'Nazgul' cells -- the digits 1 to 9 once each -- one in every row, column and box. The value of a Nazgul cell is DOUBLE the digit it contains. Additionally, no Nazgul is a (chess) knight's move away from another Nazgul, and no cell a knight's move away from a Nazgul can contain the same digit.

The locations of the Nazgul are to be determined by the solver.

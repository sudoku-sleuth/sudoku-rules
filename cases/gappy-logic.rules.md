---
format: open-rules
title: Gappy Logic
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/13ymx1mqw3
case: https://sudoku-sleuth.com/cases/gappy-logic
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=5 r6c1=6 r8c8=2
exported: 7eed2972e604cad3776fbaec358c5040
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-3: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-4: arrow r8c2-r9c3 bulb ["r9c1"]
arrow-5: arrow r5c2-r5c3-r5c4 bulb ["r5c1"]
arrow-6: arrow r5c8-r5c7 bulb ["r5c9"]
arrow-7: arrow r2c7-r3c7 bulb ["r1c6"]
arrow-8: arrow r7c5-r7c6-r8c6 bulb ["r7c4"]
arrow-9: arrow r9c5-r9c4 bulb ["r9c6"]
negative relations [{"op":"difference","value":1}] except []
```

- Normal sudoku rules apply.
- Orthogonally adjacent cells cannot be consecutive.
- Digits on the shaft of an arrow sum to the digit in the attached circle.

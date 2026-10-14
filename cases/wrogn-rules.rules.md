---
format: open-rules
title: Wrogn Rules
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/wrogn-rules
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: 6cbbc7dced18c32a44dbe67275833c5a
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r4c3-r4c4-r5c4 total 35 connected true
cage-2: cage r4c6 total 5 connected true
parity-cells-1: parity-cells r2c8-r5c1-r5c5-r2c1-r2c2-r2c3-r2c7-r5c8-r8c9-r8c3-r6c6-r1c6-r1c2-r9c9-r7c4 parity "odd"
parity-cells-2: parity-cells r1c1-r1c3-r1c5-r1c7-r1c9-r9c5-r9c7-r5c3-r7c9-r3c6-r3c9-r5c6-r7c8-r7c2-r6c1-r2c4-r4c9-r9c6 parity "even"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[6.5,5.5],[7.5,4.5],[8.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5],[4.5,1.5],[5.5,2.5],[6.5,2.5]],"color":"#C9C883","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,8.5],[4.5,8.5],[3.5,8.5],[3.5,7.5]],"color":"#C9C883","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[7.5,0.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,2.5],[5.5,2.5]],"color":"#67F067","thickness":6,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0.6,3.94],[0.5,3.89],[0.4,3.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0.94,3.6],[0.89,3.5],[0.94,3.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0.4,3.06],[0.5,3.11],[0.6,3.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7.06,7.4],[7.11,7.5],[7.06,7.6]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.6,7.94],[7.5,7.89],[7.4,7.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7.94,7.6],[7.89,7.5],[7.94,7.4]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[7.4,7.06],[7.5,7.11],[7.6,7.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"D","textColor":"#000000","fontSize":20}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"R","textColor":"#000000","fontSize":20}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"L","textColor":"#000000","fontSize":20}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"C","textColor":"#000000","fontSize":20}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"I","textColor":"#000000","fontSize":20}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"G","textColor":"#000000","fontSize":20}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"O","textColor":"#000000","fontSize":20}}
```

Normal sudoku rules apply.
Exactly 1 clue in each row, column and box is lying to you. When using that clue, the opposite is taken to be true. (Given below)
For clues that are >1 cells long, there is a letter on the clue, which corresponds to the cell that that clue 'occupies' in the row, column and box. This is to be marked as incorrect.

Rules of correct clues:
German Whispers - Adjacent digits along a green german whispers line must differ by at least 5.

Renban - A renban forms a set of consecutive digits, in any order.

Thermometer - Digits along a thermometer must increase from the bulb end.

Killer Cage - Digits in a killer cage must sum to the clue in the top left (no repeated digits)

Odd - Digits on a grey circle must be odd.

Even - Digits on a grey square must be even.

Max, Min - Cells on a max or min clue must be bigger or smaller than surrounding cells (respectively).

Nabner - Forms a non-repeating set of digits, where no 2 digits may be consecutive.

Rules of incorrect (inverted) clues:

Incorrect German whispers ---> Adjacent digits must have a difference <5. No repeated digits

Renban <---> Nabner

Incorrect Thermometer ---> Digits must increase from the tip to the bulb (reversed).

Incorrect killer cage ---> Digits in an incorrect killer cage must sum to a total worked out by using this formula: 10n - S, where n is the number of cells in that cage, and s is the original clue given in the top left. No repeated digits.

 Odd <---> Even

Max <---> Min

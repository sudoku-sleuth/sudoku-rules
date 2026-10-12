---
format: open-rules
title: Pythagoras Day
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/83er1p8mnq
case: https://sudoku-sleuth.com/cases/pythagoras-day
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5 total 3 connected true
cage-2: cage r1c8-r2c8-r2c9 total 9 connected true
cage-3: cage r4c4-r5c4 total 16 connected true
cage-4: cage r4c3-r5c3 total 5 connected true
cage-5: cage r6c4-r6c5 total 4 connected true
cage-6: cage r9c3-r9c4-r9c5-r9c6 total 25 connected true
whispers-1: whispers r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r9c7-r9c8-r9c9 gap 5
whispers-3: whispers r3c5-r3c6-r3c7-r3c8 gap 5
whispers-4: whispers r5c8-r4c8-r3c8 gap 5
whispers-5: whispers r7c5-r7c4-r7c3-r7c2 gap 5
whispers-6: whispers r5c2-r6c2-r7c2 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.8,0.55],[0.4,0.55]],"color":"#67f06799","thickness":5,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.8,0.55],[0.4,2.3]],"color":"#67f06799","thickness":5,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.2,8.4],[8.6,6.7]],"color":"#67f06799","thickness":5,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.2,8.4],[8.6,8.4]],"color":"#67f06799","thickness":5,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.6,4.3],[4.3,7.6]],"color":"#67f06799","thickness":5,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.4,4.7],[4.7,1.4]],"color":"#67f06799","thickness":5,"rounded":true}}
```

**Sudoku, Whisper-5 Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

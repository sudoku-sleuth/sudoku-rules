---
format: open-rules
title: HMCS Sackville 1941
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eyfew8i72s
case: https://sudoku-sleuth.com/cases/hmcs-sackville-1941
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=1 r2c2=9 r3c8=4 r3c9=1
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1 total 3 connected true
cage-2: cage r5c1-r6c1 total 11 connected true
cage-3: cage r5c9-r6c9 total 9 connected true
cage-4: cage r5c5-r6c5 total 14 connected true
cage-5: cage r7c7-r7c8-r8c7 total 12 connected true
modular-1: modular r6c1-r7c1-r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c9
modular-2: modular r5c9-r4c8-r3c7-r2c6
modular-3: modular r5c1-r4c2-r3c3-r2c4-r1c5
whispers-1: whispers r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8 gap 5
whispers-2: whispers r1c5-r2c5-r3c5-r4c5-r5c5 gap 5
```

- Normal sudoku rules apply.
- Modular lines: Any set of three adjacent digits along a thin teal modular line has three different remainders when divided by 3.
- German Whispers: Adjacent digits along a thicker green German Whispers line must differ by at least five.
- Cages: Digits inside a cage sum to the value shown in the upper left corner of the cage.

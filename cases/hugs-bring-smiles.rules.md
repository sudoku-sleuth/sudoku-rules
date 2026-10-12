---
format: open-rules
title: Hugs Bring Smiles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cc5xyfpxom
case: https://sudoku-sleuth.com/cases/hugs-bring-smiles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r2c3 bulb ["r4c1"]
arrow-2: arrow r7c2-r8c3 bulb ["r6c1"]
arrow-3: arrow r7c8-r8c7 bulb ["r6c9"]
arrow-4: arrow r3c8-r2c7 bulb ["r4c9"]
arrow-5: arrow r6c4-r5c3 bulb ["r7c5"]
arrow-6: arrow r6c6-r5c7 bulb ["r7c5"]
whispers-1: whispers r4c2-r3c2-r2c3-r2c4 gap 5
whispers-2: whispers r3c2-r3c1 gap 5
whispers-3: whispers r2c3-r1c3 gap 5
whispers-4: whispers r6c2-r7c2-r8c3-r8c4 gap 5
whispers-5: whispers r7c2-r7c1 gap 5
whispers-6: whispers r8c3-r9c3 gap 5
whispers-7: whispers r2c6-r2c7-r3c8-r4c8 gap 5
whispers-8: whispers r2c7-r1c7 gap 5
whispers-9: whispers r3c8-r3c9 gap 5
whispers-10: whispers r6c8-r7c8-r7c9 gap 5
whispers-11: whispers r8c6-r8c7-r9c7 gap 5
whispers-12: whispers r4c3-r3c4-r4c5-r5c5-r6c5 gap 5
whispers-13: whispers r4c5-r3c6-r4c7 gap 5
whispers-14: whispers r6c4-r7c5-r6c6 gap 5
```

Hugs Bring Smiles
by FullDeck and Missing a Few Cards
-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-German Whispers: Adjacent digits along green German Whispers lines must differ by at least five.
-Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

---
format: open-rules
title: Doppelgänger
setter: sujoyku
source: https://tinyurl.com/5ayxvbmc
case: https://sudoku-sleuth.com/cases/doppelganger
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2 total 10 connected true
cage-2: cage r4c4-r5c4-r5c5 total 10 connected true
cage-3: cage r3c6-r4c5-r4c6 total 8 connected true
cage-4: cage r8c8-r9c8-r9c9 total 12 connected true
cage-5: cage r6c3-r7c3-r7c4 total 15 connected true
arrow-1: arrow r7c8 bulb ["r6c9"]
arrow-2: arrow r3c2 bulb ["r4c1"]
palindrome-1: palindrome r4c3-r3c4-r2c5-r1c6-r1c7-r2c8-r1c9
palindrome-2: palindrome r8c2-r9c2-r9c3-r8c4-r7c5-r6c6-r6c7-r5c8-r5c9
clone-1: clone r5c2-r1c4-r7c6-r3c8
clone-2: clone r5c3-r1c5-r7c7-r3c9
clone-3: clone r6c1-r2c3-r8c5-r4c7
clone-4: clone r6c2-r2c4-r8c6-r4c8
clone-5: clone r7c1-r3c3-r9c5-r5c7
```

Normal Sudoku rules apply. Grey shaded areas are clones, i.e. digits must appear in the same relative position in each of the four grey regions. For example, the cell R7C1 has to contain the same digit as R3C3. Digits in a cage do not repeat and sum to the clue in the top left. The digits on a gray line form a palindrome, i.e. they read the same forward and backward. Digits on an arrow sum to the digit in the circle from which the arrow emerges, i.e. the 1-cell arrows indicate two positions of the identical digit.

---
format: open-rules
title: Salt and Pepper
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/salt-and-pepper
case: https://sudoku-sleuth.com/cases/salt-and-pepper
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: b1fffe16a1e88540614b7e90c9759198
---

```rules
sudoku 9x9
pair-1: pair r4c4-r4c5 difference 4
pair-2: pair r5c5-r5c6 difference 2
pair-3: pair r5c4-r5c5 difference 4
pair-4: pair r6c6-r7c6 difference 2
pair-5: pair r7c5-r8c5 difference 4
pair-6: pair r7c8-r8c8 difference 3
pair-7: pair r7c3-r7c4 difference 5
pair-8: pair r6c3-r7c3 difference 5
pair-9: pair r7c6-r7c7 difference 3
pair-10: pair r8c7-r8c8 difference 2
pair-11: pair r8c5-r9c5 difference 3
pair-12: pair r8c3-r9c3 difference 4
pair-13: pair r6c7-r7c7 difference 5
pair-14: pair r6c2-r6c3 difference 3
kropki-1: kropki r4c6-r5c6 black
pair-15: pair r4c5-r4c6 ratio 3
pair-16: pair r6c3-r6c4 ratio 3
kropki-2: kropki r7c4-r7c5 black
kropki-3: kropki r9c5-r9c6 black
kropki-4: kropki r8c6-r9c6 black
kropki-5: kropki r9c4-r9c5 black
kropki-6: kropki r6c4-r6c5 black
pair-17: pair r8c3-r8c4 ratio 3
kropki-7: kropki r8c8-r8c9 black
pair-18: pair r7c2-r8c2 ratio 4
kropki-8: kropki r7c1-r7c2 black
quadruple-1: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,3,4,8]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [2,3,4,5]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5],[3.5,2.5],[2.5,3.5],[1.5,2.5],[0.5,1.5]],"color":"#FAD3AC","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,6.5],[2.5,5.5],[3.5,6.5],[2.5,7.5],[1.5,8.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
```

**Sudoku, Variable Kropki, Renban, Whisper-5 Variant**

-Renban: The salt shaker on the upper left is a Renban line consisting of a set of non-repeating consecutive digits in some order.
-Whisper-5 Variant: The pepper shaker on the upper right is a Whisper-5 line. Adjacent cells differ by at least five. VARIANT: Digits along the line DO NOT REPEAT.
-Quadruples: The digits in the large circles at the tips of the shakers must appear in the four surrounding cells.
-Variable Kropki: The numbers in the salt grains (smaller white circles) tell the difference between the cells they join. The numbers in the pepper flakes (smaller black circles) tell the ratio between the two cells they join.

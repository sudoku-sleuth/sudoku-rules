---
format: open-rules
title: Roman Hallway
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/puulvhwkn0
case: https://sudoku-sleuth.com/cases/roman-hallway
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r4c1-r4c2-r3c2-r3c3-r3c4-r3c5-r4c5-r4c6-r4c7-r4c8-r3c8-r3c9 segments [["r4c1","r4c2"],["r3c2","r3c3"],["r3c4","r3c5"],["r4c5","r4c6"],["r4c7","r4c8"],["r3c8","r3c9"]]
region-sum-2: region-sum r6c1-r6c2-r7c2-r7c3-r7c4-r7c5-r6c5-r6c6-r6c7-r6c8-r7c8-r7c9 segments [["r6c1","r6c2"],["r7c2","r7c3"],["r7c4","r7c5"],["r6c5","r6c6"],["r6c7","r6c8"],["r7c8","r7c9"]]
region-sum-3: region-sum r1c1-r1c2-r2c2-r2c3-r2c4-r2c5-r1c5-r1c6-r1c7-r1c8-r2c8-r2c9 segments [["r1c1","r1c2","r2c2","r2c3"],["r2c4","r2c5","r1c5","r1c6"],["r1c7","r1c8","r2c8","r2c9"]]
region-sum-4: region-sum r9c1-r9c2-r8c2-r8c3-r8c4-r8c5-r9c5-r9c6-r9c7-r9c8-r8c8-r8c9 segments [["r9c1","r9c2","r8c2","r8c3"],["r8c4","r8c5","r9c5","r9c6"],["r9c7","r9c8","r8c8","r8c9"]]
pair-1: pair r2c2-r3c2 relation {"op":"sum","value":10}
pair-2: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-3: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-4: pair r2c5-r3c5 relation {"op":"sum","value":10}
pair-5: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-6: pair r7c3-r8c3 relation {"op":"sum","value":10}
pair-7: pair r1c7-r1c8 relation {"op":"sum","value":10}
pair-8: pair r1c1-r1c2 relation {"op":"sum","value":10}
pair-9: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-10: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-11: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-12: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-13: pair r4c2-r5c2 relation {"op":"sum","value":10}
pair-14: pair r4c3-r5c3 relation {"op":"sum","value":10}
pair-15: pair r6c2-r6c3 relation {"op":"sum","value":10}
pair-16: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-17: pair r7c9-r8c9 relation {"op":"sum","value":5}
pair-18: pair r2c9-r3c9 relation {"op":"sum","value":5}
pair-19: pair r7c5-r8c5 relation {"op":"sum","value":5}
pair-20: pair r5c8-r6c8 relation {"op":"sum","value":5}
pair-21: pair r9c4-r9c5 relation {"op":"sum","value":5}
pair-22: pair r2c1-r2c2 relation {"op":"sum","value":5}
```

**Sudoku, Region Sum Line, XV**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- XV pairs: Digits in cells separated by an X sum to 10. Digits in cells separated by a V sum to 5.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

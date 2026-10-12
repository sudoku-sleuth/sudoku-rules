---
format: open-rules
title: Renbandrome
setter: Tingo
source: https://tinyurl.com/2sp4htu6
case: https://sudoku-sleuth.com/cases/renbandrome
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some source features still need to be checked against our reading.
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 29 connected true
cage-2: cage r8c1-r8c2-r9c1-r9c2 total 12 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 25 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r8c1-r8c2 colour "white"
kropki-3: kropki r8c4-r8c5 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
palindrome-1: palindrome r6c8-r7c7
palindrome-2: palindrome r6c7-r7c6
palindrome-3: palindrome r6c6-r7c5
palindrome-4: palindrome r6c5-r7c4
palindrome-5: palindrome r4c3-r3c4
palindrome-6: palindrome r4c2-r3c3
palindrome-7: palindrome r4c4-r3c5
palindrome-8: palindrome r4c5-r3c6
pair-1: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-2: pair r9c4-r9c5 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[8.5,7.5],[8.5,8.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5],[5.5,2.5],[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[6.5,6.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
Gray lines are palindromes. Digits along a palindrome must read the same forwards and backwards
Pink lines are Renban lines. All digits along a Renban line are consecutive in any order. Additionally, for this puzzle, adjacent digits along a renban line are not consecutive in value (neighboring values must differ by at least 2).
Digits in cages must sum to the total in the top left hand corner of the cage. Digits may not repeat within cages.
Cells joined by white dots are consecutive in value.
Cells joined by Xs sum to 10. Not all dots or Xs are given.

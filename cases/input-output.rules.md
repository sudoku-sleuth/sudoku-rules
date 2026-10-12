---
format: open-rules
title: Input Output
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xxgjlxv33o
case: https://sudoku-sleuth.com/cases/input-output
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c2=2 r1c3=3 r2c1=4
---

```rules
sudoku 9x9
palindrome-1: palindrome r5c5-r5c4-r6c3-r7c2-r7c1
palindrome-2: palindrome r8c6-r7c6-r6c7-r6c8
palindrome-3: palindrome r4c6-r4c5-r4c4-r5c3-r6c2-r6c1
palindrome-4: palindrome r1c5-r2c5-r3c6-r4c7-r5c7
palindrome-5: palindrome r5c1-r5c2-r4c3-r3c4-r2c4-r1c4
palindrome-6: palindrome r2c7-r3c7-r4c8-r5c8
palindrome-7: palindrome r2c8-r3c8-r4c9-r5c9-r6c9
palindrome-8: palindrome r6c6-r6c5-r6c4-r7c3-r8c3-r9c3
pair-1: pair r5c7-r6c7 relation {"op":"sum","value":10}
pair-2: pair r6c8-r7c8 relation {"op":"sum","value":10}
pair-3: pair r9c3-r9c4 relation {"op":"sum","value":10}
pair-4: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-5: pair r2c7-r2c8 relation {"op":"sum","value":10}
pair-6: pair r7c2-r7c3 relation {"op":"sum","value":10}
pair-7: pair r4c5-r5c5 relation {"op":"sum","value":5}
pair-8: pair r3c5-r3c6 relation {"op":"sum","value":5}
```

**Sudoku, Palindromes, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

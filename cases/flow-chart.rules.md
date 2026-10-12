---
format: open-rules
title: Flow Chart
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o6iphr1icy
case: https://sudoku-sleuth.com/cases/flow-chart
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r4c9=9 r9c7=1
---

```rules
sudoku 9x9
palindrome-1: palindrome r2c1-r2c2-r2c3-r3c4-r3c5-r3c6
palindrome-2: palindrome r5c1-r5c2-r5c3-r4c4-r4c5-r4c6
palindrome-3: palindrome r6c1-r6c2-r6c3-r7c4-r7c5-r7c6
palindrome-4: palindrome r9c1-r9c2-r9c3-r8c4-r8c5-r8c6
palindrome-5: palindrome r2c5-r2c6-r3c7-r3c8
palindrome-6: palindrome r5c5-r5c6-r4c7-r4c8
palindrome-7: palindrome r6c5-r6c6-r7c7-r7c8
palindrome-8: palindrome r9c5-r9c6-r8c7-r8c8
index-1: index r2c1-r3c6-r2c5-r3c8-r5c1-r4c6-r5c5-r6c5-r7c8-r6c1-r7c6-r8c6-r9c5-r8c8-r9c1 axis "column"
index-2: index r2c3-r3c4-r6c3-r3c7-r9c3 axis "row"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Column Indexing: Digits placed in red cells indicate the position of the corresponding column number in that row. For example, if r2c1 were a 6, then r2c6 would be a 1.
- Row Indexing: Digits placed in green cells indicate the position of the corresponding row number in that column. For example, if r2c3 were a 6, then r6c3 would be a 2.

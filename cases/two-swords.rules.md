---
format: open-rules
title: Two Swords
setter: The Bard
source: https://sudokupad.app/05jvnkxqo4
case: https://sudoku-sleuth.com/cases/two-swords
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r3c7-r4c8-r5c9 gap 5
whispers-2: whispers r6c4-r5c3-r4c2 gap 5
palindrome-1: palindrome r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3
palindrome-2: palindrome r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1
pair-1: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-2: pair r8c8-r9c8 relation {"op":"sum","value":10}
pair-3: pair r7c7-r8c7 relation {"op":"sum","value":10}
pair-4: pair r2c2-r3c2 relation {"op":"sum","value":10}
little-killer-1: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 59
little-killer-2: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 11
little-killer-3: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 51
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 24
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 12
little-killer-6: little-killer r1c3-r2c2-r3c1 sum 11
little-killer-7: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 20
```

Two Swords
Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whispers: Consecutive digits along the green line differ by at least 5.
Palindrome: Digits along the grey line read the same forward and backwards. 
Little Killer: Digits along the indicated diagonal add up to the number provided and may repeat if allowed by other rules. 
XY: digits with an X between them add to ten, and digits with a V between them add to 5.

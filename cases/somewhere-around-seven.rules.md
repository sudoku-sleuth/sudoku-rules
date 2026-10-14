---
format: open-rules
title: Somewhere Around Seven
setter: sujoyku
source: https://sudokupad.app/5fupuht6a6
case: https://sudoku-sleuth.com/cases/somewhere-around-seven
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - We have only read part of the published answer so far.
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
board:
  rows: 11
  cols: 11
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  givens: r7c8=7
exported: 8be5dd57eb31c3f59f310755d46f32d9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-11: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
unique-12: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1
unique-13: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2
unique-14: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-15: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-16: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-17: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-18: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-19: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-20: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-21: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-22: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
palindrome-1: palindrome r9c7-r8c8-r7c9-r6c10-r5c9
palindrome-2: palindrome r1c4-r2c3-r3c4-r4c3
palindrome-3: palindrome r10c3-r9c4-r8c3-r7c2-r6c1-r5c2
palindrome-4: palindrome r7c4-r6c5-r5c4-r4c5-r3c6-r4c7-r3c8
palindrome-5: palindrome r10c8-r9c9-r8c10
whispers-1: whispers r5c5-r4c6-r5c7-r6c8-r7c7-r7c6 loop false gap 5
whispers-2: whispers r10c4-r9c5-r8c4-r7c3-r6c2-r5c3 loop false gap 5
whispers-3: whispers r5c11-r4c11-r4c10-r3c9-r2c9-r2c8-r1c7-r2c6-r2c5 loop false gap 5
whispers-4: whispers r8c7-r9c6-r10c7-r11c8-r11c9-r10c10-r9c11-r8c11 loop false gap 5
whispers-5: whispers r1c9-r1c10-r2c11-r3c10-r2c10 loop false gap 5
```

DECONSTRUCTION SUDOKU
- There exist nine non-overlapping 3x3 square regions which must be located. Each region contains the digits from 1 to 9 once each, such that no digit repeats in any row or column.
- All cells that do not belong to a region contain a 0.

COUNTING PALINDROMES
- The digits on a grey line form a palindrome, i.e. they read the same forward and backward.
- Along a palindrome, there may not be two consecutive 0s.
- Any digit greater 0 that lies on a palindrome indicates exactly how many of its up to 8 surrounding cells contain a 0.

GERMAN WHISPERS
- Adjacent digits on a green line must have a difference of at least 5.

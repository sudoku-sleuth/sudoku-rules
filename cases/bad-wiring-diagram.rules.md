---
format: open-rules
title: Bad Wiring Diagram
setter: Tingo
source: ""
case: https://sudoku-sleuth.com/cases/bad-wiring-diagram
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r9c1 colour "white"
kropki-2: kropki r8c1-r8c2 colour "white"
kropki-3: kropki r2c1-r2c2 colour "white"
kropki-4: kropki r1c2-r2c2 colour "white"
kropki-5: kropki r1c1-r1c2 colour "white"
kropki-6: kropki r7c5-r8c5 colour "white"
palindrome-1: palindrome r3c5-r4c4
palindrome-2: palindrome r3c6-r4c5
palindrome-3: palindrome r6c6-r7c5
palindrome-4: palindrome r6c5-r7c4
whispers-1: whispers r5c4-r6c4-r5c5-r6c6-r5c6-r6c5 gap 5
whispers-2: whispers r6c5-r5c4 gap 5
whispers-3: whispers r5c1-r4c1-r5c2-r4c2-r5c3 gap 5
whispers-4: whispers r8c4-r8c5-r8c6-r7c6 gap 5
whispers-5: whispers r2c9-r3c9-r2c8-r3c8-r4c9-r4c8-r5c7 gap 5
renban-1: renban r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
renban-2: renban r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3
renban-3: renban r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
renban-4: renban r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
pair-1: pair r5c2-r6c2 sum 10
pair-2: pair r8c3-r9c3 sum 5
pair-3: pair r1c3-r2c3 sum 5
pair-4: pair r3c1-r3c2 sum 5
pair-5: pair r7c1-r7c2 sum 5
pair-6: pair r8c7-r9c7 sum 5
pair-7: pair r7c8-r7c9 sum 5
pair-8: pair r3c8-r3c9 sum 5
pair-9: pair r1c7-r2c7 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are Renban lines. All digits along a given Renban line are consecutive in any order, and may not repeat.
Cells joined by white dots are consecutive in value. Not all white dots are given.
Cells joined by Vs sum to 5. Cells joined by X sum to 10. Not all Vs or Xs are given.
Gray lines are palindromes and must read the same forwards and backwards.

Thanks, Robert, for the name! For anyone wondering who I'm speaking about, he's the Robert of "Name Series: Robert" fame.

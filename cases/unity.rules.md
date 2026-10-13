---
format: open-rules
title: Unity
setter: Blobz
source: https://sudokupad.app/blobz/unity
case: https://sudoku-sleuth.com/cases/unity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c8-r8c8-r7c8
thermo-2: thermo r9c8-r8c8-r8c7-r8c6-r7c6
kropki-1: kropki r4c2-r5c2 colour "black"
kropki-2: kropki r9c3-r9c4 colour "black"
palindrome-1: palindrome r2c4-r1c5-r2c6-r3c5-r4c4-r4c5-r4c6-r4c7
palindrome-2: palindrome r8c1-r9c2-r8c3-r7c4-r6c5-r6c6-r6c7-r6c8-r6c9
renban r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
pair-1: pair r9c1-r9c2 sum 10
pair-2: pair r8c1-r8c2 sum 10
pair-3: pair r7c3-r8c3 sum 10
pair-4: pair r6c4-r7c4 sum 10
pair-5: pair r6c5-r7c5 sum 10
pair-6: pair r7c5-r7c6 sum 10
pair-7: pair r9c8-r9c9 sum 10
pair-8: pair r1c8-r1c9 sum 10
pair-9: pair r2c9-r3c9 sum 10
pair-10: pair r3c7-r3c8 sum 10
pair-11: pair r3c7-r4c7 sum 10
pair-12: pair r4c5-r5c5 sum 10
pair-13: pair r1c4-r2c4 sum 10
pair-14: pair r1c3-r1c4 sum 10
pair-15: pair r1c1-r2c1 sum 10
pair-16: pair r3c2-r4c2 sum 10
pair-17: pair r4c1-r4c2 sum 10
pair-18: pair r5c2-r6c2 sum 10
pair-19: pair r5c3-r6c3 sum 10
negative relations [{"op":"sum","value":10}] except [["r4c2","r5c2"],["r9c3","r9c4"],["r9c1","r9c2"],["r8c1","r8c2"],["r7c3","r8c3"],["r6c4","r7c4"],["r6c5","r7c5"],["r7c5","r7c6"],["r9c8","r9c9"],["r1c8","r1c9"],["r2c9","r3c9"],["r3c7","r3c8"],["r3c7","r4c7"],["r4c5","r5c5"],["r1c4","r2c4"],["r1c3","r1c4"],["r1c1","r2c1"],["r3c2","r4c2"],["r4c1","r4c2"],["r5c2","r6c2"],["r5c3","r6c3"]]
```

Normal sudoku rules apply.

Grey lines (the “2” and the “square-root”) are palindromes which read the same in both directions.

Digits on the pink line form a consecutive sequence in any order.

Digits on the “4” thermometer must increase from the bulb end.

Digits separated by an X sum to 10; ALL such X’s are given.

Black dots separate digits where one is double the other; not all such dots are shown.

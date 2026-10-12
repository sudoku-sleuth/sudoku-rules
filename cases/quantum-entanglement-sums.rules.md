---
format: open-rules
title: Quantum Entanglement Sums
setter: Will Power
source: https://sudokupad.app/xx73kvn976
case: https://sudoku-sleuth.com/cases/quantum-entanglement-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 colour "white"
kropki-2: kropki r5c2-r5c3 colour "white"
kropki-3: kropki r5c3-r5c4 colour "white"
kropki-4: kropki r5c6-r5c7 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r5c8-r5c9 colour "white"
kropki-7: kropki r1c6-r2c6 colour "white"
kropki-8: kropki r1c8-r2c8 colour "white"
kropki-9: kropki r9c5-r9c6 colour "black"
kropki-10: kropki r7c5-r8c5 colour "black"
kropki-11: kropki r7c4-r8c4 colour "black"
kropki-12: kropki r8c8-r8c9 colour "black"
kropki-13: kropki r7c7-r8c7 colour "black"
kropki-14: kropki r1c8-r1c9 colour "black"
kropki-15: kropki r2c8-r2c9 colour "black"
kropki-16: kropki r2c3-r3c3 colour "black"
kropki-17: kropki r2c6-r3c6 colour "black"
kropki-18: kropki r9c1-r9c2 colour "black"
kropki-19: kropki r5c6-r6c6 colour "black"
kropki-20: kropki r5c4-r6c4 colour "black"
renban-1: renban r6c5-r6c6-r6c7-r5c7-r4c7-r3c7-r2c7-r2c6
renban-2: renban r5c6-r4c6-r3c6-r3c5-r3c4-r3c3-r3c2-r4c2
renban-3: renban r4c5-r4c4-r4c3-r5c3-r6c3-r7c3-r8c3-r8c4
renban-4: renban r5c4-r6c4-r7c4-r7c5-r7c6-r7c7-r7c8-r6c8
rotational-sums sums [9,18]
```

Normal Sudoku rules apply. ROTATIONAL SYMMETRY- Numbers 180 degrees apart sum to 9, except the nines, which sum to 18. RENBAN(+)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. In this puzzle, the four RENBAN lines contain the SAME set as one another. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

---
format: open-rules
title: 3 French Hens
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/3-french-hens
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c7-r5c7-r6c7-r7c7 total 11 connected true
cage-2: cage r2c7-r2c8 total 10 connected true
kropki-1: kropki r2c2-r3c2 colour "white"
kropki-2: kropki r9c4-r9c5 colour "white"
kropki-3: kropki r3c5-r3c6 colour "white"
kropki-4: kropki r1c1-r2c1 colour "white"
kropki-5: kropki r9c6-r9c7 colour "white"
kropki-6: kropki r9c8-r9c9 colour "white"
kropki-7: kropki r1c7-r1c8 colour "black"
kropki-8: kropki r3c3-r4c3 colour "black"
kropki-9: kropki r4c3-r4c4 colour "black"
kropki-10: kropki r3c4-r4c4 colour "black"
kropki-11: kropki r1c8-r1c9 colour "black"
kropki-12: kropki r3c8-r4c8 colour "black"
kropki-13: kropki r9c1-r9c2 colour "black"
kropki-14: kropki r8c2-r9c2 colour "black"
kropki-15: kropki r8c2-r8c3 colour "black"
whispers-1: whispers r2c3-r2c2-r3c1 gap 5
whispers-2: whispers r3c1-r3c2-r4c3-r5c3 gap 5
whispers-3: whispers r5c3-r6c3-r7c4-r8c5-r8c6-r7c7-r6c8-r6c9-r5c8-r4c7-r4c6-r4c5 gap 5
whispers-4: whispers r5c4-r4c5-r3c4-r2c3 gap 5
whispers-5: whispers r6c5-r6c6-r6c7-r6c8 gap 5
entropic-1: entropic r9c6-r9c7-r8c6
entropic-2: entropic r8c3-r9c4-r8c5
entropic-3: entropic r8c5-r8c6
renban r1c7-r1c8-r1c9-r2c9-r3c9-r3c8-r3c7-r2c8
```

French hens (one version) are known for the red tuft on their head, white body and blue legs. Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on the RED AND WHITE lines are at least 5 apart from their neighbors on the line. ENTROPY LINES- Each continuous set of 3 numbers on a blue line contains one low digit (1-3), one medium digit (4-6) and one high digit (7-9). RENBAN- Numbers on the purple line are a set of non-repeating, continuous numbers, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER- Numbers in cages sum to the number in the top left corner of the cage.

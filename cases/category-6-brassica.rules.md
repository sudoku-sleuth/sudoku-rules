---
format: open-rules
title: Category 6 - Brassica
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n0mrlvq747
case: https://sudoku-sleuth.com/cases/category-6-brassica
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r1c6=1 r1c9=9 r3c6=7 r3c9=4 r4c2=1 r5c8=1 r7c1=4 r7c4=5 r9c1=9 r9c9=6
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r2c1-r2c2 colour "white"
kropki-3: kropki r1c2-r2c2 colour "white"
kropki-4: kropki r1c2-r1c3 colour "white"
kropki-5: kropki r1c7-r1c8 colour "white"
kropki-6: kropki r1c8-r2c8 colour "white"
kropki-7: kropki r2c8-r2c9 colour "white"
kropki-8: kropki r2c9-r3c9 colour "white"
kropki-9: kropki r7c9-r8c9 colour "white"
kropki-10: kropki r8c8-r8c9 colour "white"
kropki-11: kropki r8c8-r9c8 colour "white"
kropki-12: kropki r9c7-r9c8 colour "white"
kropki-13: kropki r9c2-r9c3 colour "white"
kropki-14: kropki r8c2-r9c2 colour "white"
kropki-15: kropki r8c1-r8c2 colour "white"
kropki-16: kropki r7c1-r8c1 colour "white"
kropki-17: kropki r6c1-r6c2 colour "white"
kropki-18: kropki r4c8-r4c9 colour "white"
kropki-19: kropki r5c2-r5c3 colour "white"
kropki-20: kropki r5c7-r5c8 colour "white"
kropki-21: kropki r7c5-r8c5 colour "white"
kropki-22: kropki r2c5-r3c5 colour "white"
kropki-23: kropki r4c6-r5c6 colour "white"
kropki-24: kropki r4c5-r4c6 colour "white"
kropki-25: kropki r4c4-r4c5 colour "white"
kropki-26: kropki r4c4-r5c4 colour "white"
kropki-27: kropki r5c4-r5c5 colour "white"
kropki-28: kropki r5c6-r6c6 colour "white"
kropki-29: kropki r6c5-r6c6 colour "white"
kropki-30: kropki r6c4-r6c5 colour "white"
kropki-31: kropki r3c4-r3c5 colour "white"
kropki-32: kropki r7c5-r7c6 colour "white"
kropki-33: kropki r1c4-r1c5 colour "white"
kropki-34: kropki r9c5-r9c6 colour "white"
kropki-35: kropki r4c2-r4c3 colour "white"
kropki-36: kropki r6c7-r6c8 colour "white"
kropki-37: kropki r6c1-r7c1 colour "black"
kropki-38: kropki r3c9-r4c9 colour "black"
```

Normal sudoku rules and standard Kropki dots apply. 
(Digits separated by a white dot differ by 1. If two digits are separated by a black dot, then one is twice the other.) Not all possible dots are shown.

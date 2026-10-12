---
format: open-rules
title: Mostly Even Primes?
setter: Will Power
source: https://sudokupad.app/ov1uxbcnft
case: https://sudoku-sleuth.com/cases/mostly-even-primes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r6c5-r6c6 colour "white"
kropki-3: kropki r5c4-r6c4 colour "white"
kropki-4: kropki r5c5-r5c6 colour "white"
kropki-5: kropki r8c6-r9c6 colour "white"
kropki-6: kropki r7c4-r8c4 colour "white"
kropki-7: kropki r4c4-r4c5 colour "white"
kropki-8: kropki r4c2-r4c3 colour "white"
kropki-9: kropki r1c4-r1c5 colour "white"
kropki-10: kropki r1c4-r2c4 colour "white"
kropki-11: kropki r1c6-r2c6 colour "white"
kropki-12: kropki r2c6-r3c6 colour "white"
kropki-13: kropki r3c5-r3c6 colour "white"
kropki-14: kropki r1c5-r2c5 colour "white"
kropki-15: kropki r2c5-r3c5 colour "white"
kropki-16: kropki r1c2-r1c3 colour "white"
kropki-17: kropki r7c7-r8c7 colour "white"
kropki-18: kropki r8c7-r9c7 colour "white"
kropki-19: kropki r1c8-r1c9 colour "white"
kropki-20: kropki r5c4-r5c5 colour "black"
kropki-21: kropki r6c4-r6c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku rules apply. MOSTLY EVEN PRIMES- Pills each indicate a UNIQUE prime number that has 2 even digits and one odd digit. (POSSIBLE PRIMES- 241, 263, 269, 281, 283, 421, 461, 463, 467, 487, 641, 643, 647, 683, 821, 823, 827, 829, 863) KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

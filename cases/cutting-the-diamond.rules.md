---
format: open-rules
title: Cutting the diamond
setter: sujoyku
source: https://tinyurl.com/2dtr6mxc
case: https://sudoku-sleuth.com/cases/cutting-the-diamond
library: https://rules.sudoku-sleuth.com/
status: read
exported: 86fa4437d8a7edff77eb6e37fbc9b300
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 16 connected true
cage-2: cage r3c1-r4c1-r5c1 total 15 connected true
cage-3: cage r6c1-r7c1-r8c1 total 14 connected true
cage-4: cage r9c1-r9c2 total 13 connected true
cage-5: cage r1c8-r1c9-r2c9 total 17 connected true
cage-6: cage r3c9-r4c9-r5c9 total 14 connected true
cage-7: cage r6c9-r7c9-r8c9 total 17 connected true
cage-8: cage r9c8-r9c9 total 14 connected true
cage-9: cage r1c3-r1c4-r2c3 total 17 connected true
cage-10: cage r3c3-r4c3-r5c3 total 16 connected true
cage-11: cage r6c3-r7c3 total 14 connected true
cage-12: cage r8c3-r9c3-r9c4 total 13 connected true
cage-13: cage r1c6-r1c7-r2c7 total 16 connected true
cage-14: cage r3c7-r4c7 total 15 connected true
cage-15: cage r5c7-r6c7-r7c7 total 14 connected true
cage-16: cage r8c7-r9c6-r9c7 total 13 connected true
cage-17: cage r1c5-r2c5-r2c6 total 12 connected true
diagonal direction "main"
renban r6c5-r5c4-r4c5-r5c6
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. The purple line contains a set of consecutive non-repeating digits in any order. On the negative main diagonal digits do not repeat.

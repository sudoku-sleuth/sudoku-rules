---
format: open-rules
title: Subtraction Game
setter: sujoyku
source: https://sudokupad.app/qvwnr1p695
case: https://sudoku-sleuth.com/cases/subtraction-game
library: https://rules.sudoku-sleuth.com/
status: read
exported: 984fd5b38272b6540d7c6a01d3ef96cf
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 13 connected true
cage-2: cage r4c2-r4c3 total 10 connected true
cage-3: cage r2c4-r3c4-r4c4 total 15 connected true
cage-4: cage r4c5-r4c6 total 11 connected true
cage-5: cage r2c7-r3c7-r4c7 total 16 connected true
cage-6: cage r4c8-r4c9 total 9 connected true
cage-7: cage r5c1-r5c2 total 11 connected true
cage-8: cage r5c3-r6c3-r7c3 total 13 connected true
cage-9: cage r5c4-r5c5 total 10 connected true
cage-10: cage r5c6-r6c6-r7c6 total 13 connected true
cage-11: cage r5c7-r5c8 total 11 connected true
cage-12: cage r5c9-r6c9-r7c9 total 17 connected true
diagonal direction "main"
arrow-1: arrow r3c2-r4c3 bulb ["r2c1"]
arrow-2: arrow r4c1-r3c1 bulb ["r4c2"]
arrow-3: arrow r4c4-r3c4 bulb ["r4c5"]
arrow-4: arrow r3c5-r4c6 bulb ["r2c4"]
arrow-5: arrow r4c7-r3c7 bulb ["r4c8"]
arrow-6: arrow r3c8-r4c9 bulb ["r2c7"]
arrow-7: arrow r6c2-r5c1 bulb ["r7c3"]
arrow-8: arrow r5c3-r6c3 bulb ["r5c2"]
arrow-9: arrow r6c5-r5c4 bulb ["r7c6"]
arrow-10: arrow r5c6-r6c6 bulb ["r5c5"]
arrow-11: arrow r6c8-r5c7 bulb ["r7c9"]
arrow-12: arrow r5c9-r6c9 bulb ["r5c8"]
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. On the marked diagonal digits do not repeat. Digits in a cage sum to the clue in the top left. Digits on an arrow sum to the digit in the circle from which the arrow emerges.

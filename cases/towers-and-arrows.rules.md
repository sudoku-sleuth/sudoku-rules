---
format: open-rules
title: Towers and arrows
setter: Chip Sounder
source: https://sudokupad.app/dl9tf2l0na
case: https://sudoku-sleuth.com/cases/towers-and-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r7c4-r7c5-r6c5-r5c5-r6c4 bulb ["r8c3"]
arrow-2: arrow r9c2-r9c1 bulb ["r8c3"]
arrow-3: arrow r8c7-r8c6-r9c6 bulb ["r7c8"]
arrow-4: arrow r3c4-r3c5 bulb ["r2c3"]
arrow-5: arrow r3c3-r3c2 bulb ["r2c3"]
arrow-6: arrow r7c1-r6c1-r5c1 bulb ["r8c2"]
arrow-7: arrow r6c9-r5c9-r5c8 bulb ["r7c9"]
arrow-8: arrow r1c3-r1c2-r2c2 bulb ["r1c4"]
arrow-9: arrow r1c5-r1c6 bulb ["r1c4"]
arrow-10: arrow r5c2-r4c2 bulb ["r6c3"]
arrow-11: arrow r3c8 bulb ["r4c7"]
arrow-12: arrow r6c6-r6c5 bulb ["r5c7"]
skyscraper-1: skyscraper r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 visible 4
skyscraper-2: skyscraper r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 visible 5
skyscraper-3: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 5
skyscraper-4: skyscraper r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 visible 3
skyscraper-5: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 3
skyscraper-6: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 3
skyscraper-7: skyscraper r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 visible 2
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits on an arrowed line sum to the total given in the connected circle, digits may repeat if other rules allow.
Each digit in the grid represents the height of a building in its cell. Taller buildings obstruct the view of shorter ones behind them. Clues outside the grid give the number of buildings visible from that vantage point in the clue's row or column.

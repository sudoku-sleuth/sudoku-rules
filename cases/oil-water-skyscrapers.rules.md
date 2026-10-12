---
format: open-rules
title: Oil, Water, Skyscrapers
setter: Blobz
source: https://sudokupad.app/lbcmsbbii4
case: https://sudoku-sleuth.com/cases/oil-water-skyscrapers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=9 r8c2=1
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3-r5c3-r6c3-r6c4 connected true
cage-2: cage r4c7-r4c8-r5c7-r6c6-r6c7 connected true
cage-3: cage r3c5-r4c4-r4c5-r4c6-r5c5 connected true
cage-4: cage r7c7-r7c8-r8c7-r9c7 connected true
cage-5: cage r7c2-r7c3-r7c4 connected true
cage-6: cage r1c2-r1c3-r2c3-r3c3-r3c4 connected true
cage-7: cage r9c1-r9c2-r9c3-r9c4 connected true
cage-8: cage r6c9-r7c9-r8c8-r8c9 connected true
cage-9: cage r7c5-r8c5-r8c6 connected true
cage-10: cage r1c6-r1c7-r2c6-r2c7 connected true
cage-11: cage r2c1-r2c2-r3c1 connected true
layered-cage-1: layered-cage r4c2-r4c3-r5c3-r6c3-r6c4 upper [2,4,6,8]
layered-cage-2: layered-cage r4c7-r4c8-r5c7-r6c6-r6c7 upper [2,4,6,8]
layered-cage-3: layered-cage r3c5-r4c4-r4c5-r4c6-r5c5 upper [2,4,6,8]
layered-cage-4: layered-cage r7c7-r7c8-r8c7-r9c7 upper [2,4,6,8]
layered-cage-5: layered-cage r7c2-r7c3-r7c4 upper [2,4,6,8]
layered-cage-6: layered-cage r1c2-r1c3-r2c3-r3c3-r3c4 upper [2,4,6,8]
layered-cage-7: layered-cage r9c1-r9c2-r9c3-r9c4 upper [2,4,6,8]
layered-cage-8: layered-cage r6c9-r7c9-r8c8-r8c9 upper [2,4,6,8]
layered-cage-9: layered-cage r7c5-r8c5-r8c6 upper [2,4,6,8]
layered-cage-10: layered-cage r1c6-r1c7-r2c6-r2c7 upper [2,4,6,8]
layered-cage-11: layered-cage r2c1-r2c2-r3c1 upper [2,4,6,8]
skyscraper-1: skyscraper r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 visible 3
skyscraper-2: skyscraper r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 visible 5
skyscraper-3: skyscraper r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 visible 5
skyscraper-4: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 4
skyscraper-5: skyscraper r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 visible 5
skyscraper-6: skyscraper r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 visible 4
skyscraper-7: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 2
skyscraper-8: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 3
skyscraper-9: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 2
skyscraper-10: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 4
skyscraper-11: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 3
skyscraper-12: skyscraper r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 visible 3
skyscraper-13: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 4
skyscraper-14: skyscraper r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 visible 3
skyscraper-15: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 3
skyscraper-16: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 3
skyscraper-17: skyscraper r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 visible 3
skyscraper-18: skyscraper r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 visible 3
skyscraper-19: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 visible 2
skyscraper-20: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 3
```

Normal sudoku rules apply.

Digits in the grid represent the heights of skyscrapers, and clues outside the grid indicate the number of skyscrapers visible in the corresponding row or column.

Digits in cages do not repeat.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

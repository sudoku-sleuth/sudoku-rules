---
format: open-rules
title: High Low 4
setter: The Bard
source: https://sudokupad.app/0cm1gw2nsj
case: https://sudoku-sleuth.com/cases/high-low-4
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: fbc111a56bbb289843c5248beeba3b7c
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 white
kropki-2: kropki r1c6-r2c6 white
kropki-3: kropki r8c3-r8c4 white
kropki-4: kropki r7c3-r7c4 white
kropki-5: kropki r6c2-r6c3 black
skyscraper-1: skyscraper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 visible 4
skyscraper-2: skyscraper r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 visible 3
skyscraper-3: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 2
skyscraper-4: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 3
skyscraper-5: skyscraper r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 visible 2
skyscraper-6: skyscraper r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 visible 3
skyscraper-7: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 2
skyscraper-8: skyscraper r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 visible 4
skyscraper-9: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 5
skyscraper-10: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 2
skyscraper-11: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 6
skyscraper-12: skyscraper r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 visible 2
skyscraper-13: skyscraper r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 visible 3
skyscraper-14: skyscraper r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 visible 3
skyscraper-15: skyscraper r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 visible 3
skyscraper-16: skyscraper r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 visible 3
skyscraper-17: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 3
skyscraper-18: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,0.5],[8.5,1.5],[8.5,2.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,4.5],[4.5,4.5],[4.5,5.5],[4.5,6.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,4.5],[4.5,4.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5],[4.5,4.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,6.5],[2.5,5.5],[1.5,4.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,3.5],[1.5,4.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[7.5,5.5]],"color":"#FFA200","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5],[7.5,3.5]],"color":"#FFA200","thickness":8,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.

High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.

Skyscraper: Digits outside the grid indicate the number of digits “seen” from that vantage point with the higher numbers blocking lower numbers.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.

---
format: open-rules
title: Seven Fish Pie
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/seven-fish-pie
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 64f1e2f9cc1e9c637c95140095b9f7be
---

```rules
sudoku 9x9
thermo r8c5-r7c6-r8c7-r9c8-r8c8-r9c7-r9c6-r9c5
kropki-1: kropki r4c1-r4c2 white
kropki-2: kropki r4c2-r4c3 white
kropki-3: kropki r3c2-r3c3 white
kropki-4: kropki r3c3-r4c3 white
kropki-5: kropki r1c5-r2c5 white
kropki-6: kropki r2c6-r3c6 white
kropki-7: kropki r7c7-r7c8 white
kropki-8: kropki r7c4-r7c5 white
kropki-9: kropki r8c4-r9c4 white
kropki-10: kropki r5c3-r5c4 black
kropki-11: kropki r6c3-r6c4 black
kropki-12: kropki r8c2-r8c3 black
kropki-13: kropki r3c1-r4c1 black
kropki-14: kropki r3c1-r3c2 black
kropki-15: kropki r7c9-r8c9 black
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,1.5],[7.5,0.5],[6.5,0.5],[7.5,1.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,5.5],[5.5,4.5],[4.5,4.5],[5.5,5.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5],[2.5,1.5],[1.5,1.5],[2.5,2.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,6.5],[1.5,5.5],[0.5,5.5],[1.5,6.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,7.5],[3.5,6.5],[2.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#67F067","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,1.5],[5.5,0.5],[4.5,0.5],[4.5,1.5],[5.5,2.5]],"color":"#67F067","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. The purple fish are Renbanfish, consisting of a set of consecutive digits in any order. The green fish are German Whisperfish and successive digits along the fish must differ by at least 5. The anglerfish at the bottom of the grid is a thermo and digits must strictly increase from bulb to tip. Bubbles in the water are kropki difference dots; digits on either side of the bubble form a consecutive pair. The black dots are kropki fish food; digits on either side are in a 1:2 ratio. Not all possible dots are given.

Exported from f-puzzles.com. For more puzzles from us, visit https://missingdeck.net. For our Seven Fish Pie recipe, visit https://missingdeck.net/recipe-for-seven-fish-pie.

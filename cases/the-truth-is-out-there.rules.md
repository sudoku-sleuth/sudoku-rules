---
format: open-rules
title: The Truth is Out There
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/554kh28fdg
case: https://sudoku-sleuth.com/cases/the-truth-is-out-there
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 54d3dabc3a5eba693c6088a80d91dfa8
---

```rules
sudoku 9x9
thermo-1: thermo r8c3-r9c3
thermo-2: thermo r8c7-r9c7
kropki-1: kropki r8c2-r8c3 white
kropki-2: kropki r8c7-r8c8 white
kropki-3: kropki r5c2-r5c3 black
kropki-4: kropki r4c5-r5c5 black
kropki-5: kropki r5c8-r5c9 black
kropki-6: kropki r3c7-r4c7 black
kropki-7: kropki r3c3-r4c3 black
kropki-8: kropki r2c5-r3c5 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#d5d5d5ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#d5d5d5ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#d5d5d5ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#d5d5d5ff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#d5d5d5ff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,6.5],[0.5,4.5],[2.5,2.5],[2.5,1.5]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.3,4.3],[6.5,2.5],[6.5,1.5],[7.5,0.5],[8.5,0.5]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,7.5],[6.5,7.5],[6.5,6.5],[8.3,4.7]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,8.5],[4.5,7.5],[7.3,4.7]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[1.7,4.7]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,0.5],[4.5,1.5],[7.3,4.3]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[1.7,4.3]],"color":"#d5d5d5ff","thickness":16,"rounded":true}}
```

**Sudoku, Thermometers, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

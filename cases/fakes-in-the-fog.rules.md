---
fog:
  initiallyLit:
    - 33
    - 34
    - 35
    - 42
    - 43
    - 44
    - 51
    - 52
    - 53
format: open-rules
title: Fakes in the Fog
setter: Marty Sears
source: https://sudokupad.app/x56ymej4lq
case: https://sudoku-sleuth.com/cases/fakes-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
pair-1: pair r5c7-r5c8 sum 5
pair-2: pair r4c6-r5c6 sum 5
pair-3: pair r3c3-r3c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#c58efb","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#c58efb","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#c58efb","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#c58efb","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#c58efb","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,6.5],[3.5,6.5],[3.5,8.5],[4.5,8.5],[4.5,7.5]],"color":"#d7b1fc","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,5.5]],"color":"#d7b1fc","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,3.5],[4.5,2.5],[3.5,1.5],[3.5,0.5],[2.5,0.5],[1.5,1.5]],"color":"#d7b1fc","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,2.5],[0.5,3.5]],"color":"#d7b1fc","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,3.5],[7.5,4.5],[6.5,5.5]],"color":"#d7b1fc","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,3.5],[5.5,2.5],[4.5,1.5]],"color":"#02fff1","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,0.5],[5.5,1.5]],"color":"#02fff1","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[1.5,2.5],[0.5,1.5],[0.5,0.5]],"color":"#02fff1","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5],[1.5,6.5]],"color":"#02fff1","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,1.5],[7.5,0.5],[8.5,0.5],[7.5,1.5]],"color":"#02fff1","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,7.5]],"color":"#02fff1","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• Enter correct digits to clear fog. No guessing is necessary.
• In every row, column and box, there is exactly one 'pseudo cell'. The digits 1-9 each appear once in a pseudo cell.
• The real value of a pseudo cell is calculated by adding its row number to its column number. Eg: if there is a pseudo cell in r8c5, it has the value of 13, regardless of which digit is in that cell.
• On a lavender 'zipper' line, the values of any pair of cells that are an equal distance from the central spot  always sum to the value on that central spot.
• On a turquoise 'same difference' line, the values of adjacent cells always have the same difference (but this difference may be different for different turquoise lines.)
• Values joined by a V sum to 5.

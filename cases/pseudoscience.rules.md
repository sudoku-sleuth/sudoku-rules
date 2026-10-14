---
format: open-rules
title: Pseudoscience
setter: Marty Sears
source: https://tinyurl.com/26xbazjg
case: https://sudoku-sleuth.com/cases/pseudoscience
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 2ee98ea625b780fc3bb660ed8c39bbe0
---

```rules
sudoku 9x9
whispers r1c4-r1c5-r1c6 gap 5
nabner r3c1-r4c1-r3c2-r2c2-r2c1 distinct true
renban-1: renban r3c7-r3c8-r2c9-r1c8
renban-2: renban r6c2-r5c3
renban-3: renban r6c4-r5c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[2.5,3.5],[1.5,2.5]],"color":"#03b6f4","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,4.7],[3.5,5.5],[4.5,5.5],[3.5,6.5],[5.5,6.5],[4.5,7.5],[4.5,8.5],[3.5,7.5],[2.5,8.5],[1.5,7.5],[0.5,8.5]],"color":"#03b6f4","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[4.5,0.5],[4.5,1.3]],"color":"#52fff1","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6,4],[6.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,1.5],[3.5,2.5],[3.5,4.5],[5.5,4.5],[6,4]],"color":"#03d100","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,7.5],[7.5,8.5]],"color":"#ffe0c1","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,2.5]],"color":"#ffe0c1","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• In each row, column and box there is exactly one 'pseudo cell.'
• The digits 1-9 each appear once in a pseudo cell.
• The real value of a pseudo cell (for the purposes of the coloured lines) is determined by multiplying its row number by its column number. Eg; if there is a pseudo cell in r6c3, it has the value of 18, regardless of which digit appears in that cell.

GERMAN WHISPER: The values of adjacent cells on a green line have a difference of at least 5.
RENBAN: The values of the cells along a purple line form a non-repeating consecutive set, which can be arranged in any order.
NABNER: The value of a cell on a yellow line may not be consecutive with (or the same as) any other values on that line.
REGION SUM: The value of cells within each 3x3 box along a darker blue line sum to the same amount.
SAME DIFFERENCE: The values of adjacent digits on a turquoise line always have the same difference.
DIFFERENT DIFFERENCE: The difference between the values of adjacent cells on a peach line must be different for every pair of adjacent cells on that line. Eg: if there are two cells with values of 7 and 9 next to each other on the line, then cells with values of 4 and 6 may not appear next to each other on the same line (as both pairs would have a difference of 2.)

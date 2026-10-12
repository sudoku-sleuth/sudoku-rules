---
format: open-rules
title: Dutch Flat Mates (Omnipotent Lines)
setter: sujoyku
source: https://sudokupad.app/alv3r805u9
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-omnipotent-lines
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[5.5,0.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[3.5,1.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[1.5,3.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[3.5,7.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[5.5,8.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[7.5,1.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[7.5,2.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[8.5,0.5],[8.5,7.5],[4.5,7.5]],"color":"#FF9900","thickness":11,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[8.5,8.5]],"color":"#FF9900","thickness":11,"rounded":true}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Dutch flat mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.) The orange lines are so-called Omnipotent Lines, i.e. each pair of adjacent digits on such a line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on a line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on a line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).

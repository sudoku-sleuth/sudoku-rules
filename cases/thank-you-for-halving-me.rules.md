---
format: open-rules
title: Thank You For Halving Me!
setter: sujoyku
source: https://sudokupad.app/lvqxc6ndem
case: https://sudoku-sleuth.com/cases/thank-you-for-halving-me
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,5.5],[2.5,5.5],[3.5,6.5],[4.5,5.5],[4.5,4.5]],"color":"#1fc2e6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[2.5,7.5],[0.5,7.5],[1.5,6.5]],"color":"#1fc2e6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,4.5],[2.5,3.5],[3.5,2.5],[3.5,1.5],[4.5,0.5],[5.5,0.5]],"color":"#1fc2e6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[5.5,5.5],[5.5,4.5],[6.5,4.5],[7.5,3.5],[6.5,2.5],[6.5,1.5],[7.5,1.5]],"color":"#1fc2e6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[6.5,8.5],[5.5,7.5],[4.5,7.5]],"color":"#1fc2e6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[5.5,6.5]],"color":"#e6261fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[27],"label":"A"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[8],"label":"A"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[72],"label":"B"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[53],"label":"B"}}
```

- Normal sudoku rules apply, i.e. each, row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Halvers: Place one halver cell in each row, column and 3x3 region. The value of a halver cell is half its digit. No two halver cells may contain identical digits, i.e. each digit from 1 to 9 is in exactly one halver cell.

- Region Sum Lines: Box borders divide the blue and red lines into segments with the same sum. (Different lines may have different sums. The red colour is only meant to emphasize that the line connecting R9C4 and R6C7 is a separate Region Sum Line.)

- Clones: The cages indicate clone cells, i.e. cages with the same letter must contain the same digit.

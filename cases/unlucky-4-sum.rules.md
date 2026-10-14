---
format: open-rules
title: Unlucky 4 Sum
setter: Marty Sears
source: https://tinyurl.com/mu8p58xk
case: https://sudoku-sleuth.com/cases/unlucky-4-sum
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8d979442b454ff6e24dbae8b56112672
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r5c4-r6c4 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r3c3-r3c4 white
kropki-6: kropki r9c3-r9c4 white
parity-cells r3c9-r4c5-r7c9-r5c1 parity "odd"
```

```drawing
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,3],[9,3]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0,6],[9,6]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3,0],[3,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6,0],[6,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
```

• Normal Sudoku rules apply.
• Each orange square marks the largest digit on a tetromino whose digits are all different and sum to 13. None of these tetrominoes touch eachother, not even diagonally. 
• Digits connected by a white dot are consecutive. Not all possible white dots are given.
• Cells with a grey circle contain an odd digit.

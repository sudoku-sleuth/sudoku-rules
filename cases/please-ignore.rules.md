---
format: open-rules
title: Please Ignore
setter: Marty Sears
source: https://sudokupad.app/h1zrlsc75s
case: https://sudoku-sleuth.com/cases/please-ignore
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
region-sum-1: region-sum r5c1-r6c1-r7c1-r8c1 segments [["r5c1","r6c1"],["r7c1","r8c1"]]
region-sum-2: region-sum r3c7-r2c7-r1c6-r1c5-r1c4-r2c4-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2 segments [["r3c7","r2c7"],["r1c6","r1c5","r1c4","r2c4"],["r3c3","r3c2","r3c1","r2c1","r1c1","r1c2"]]
region-sum-3: region-sum r3c6-r4c6-r5c5-r5c6-r5c7-r6c7-r6c6-r6c5-r7c5-r7c4-r6c4-r5c4-r5c3-r5c2-r4c1-r4c2-r4c3-r4c4-r4c5-r3c5-r2c6 segments [["r3c6","r3c5","r2c6"],["r4c6","r5c5","r5c6"],["r5c7","r6c7"],["r6c6","r6c5"],["r7c5","r7c4"],["r6c4","r5c4"],["r5c3","r5c2","r4c1","r4c2","r4c3"],["r4c4","r4c5"]]
nabner-1: nabner r9c6-r9c7-r9c8-r9c9-r8c9-r7c9 distinct true
nabner-2: nabner r6c2-r6c3 distinct true
nabner-3: nabner r5c9-r4c9-r3c9 distinct true
nabner-4: nabner r8c3-r8c2-r7c2 distinct true
nabner-5: nabner r8c5-r8c4-r9c3 distinct true
renban-1: renban r8c7-r8c8
renban-2: renban r7c7-r7c8
renban-3: renban r9c1-r9c2-r9c3
renban-4: renban r6c9-r6c8-r5c8-r4c7
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"path","layer":"lines","d":"M178.304 525.696L169.152 534.848","bounds":[8.214,2.643,8.357,2.786],"color":"#ffe602ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"path","layer":"lines","d":"M141.696 544L150.848 544","bounds":[8.5,2.214,8.5,2.357],"color":"#ed68ffff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

One digit from 1-9 (to be determined) is 'inactive' and always gets ignored by any line it appears on.

REGION SUM: Box borders divide blue lines into segments which each have the same sum (not counting any inactive digits.) The region sum may be different for different blue lines.

RENBAN: All active digits on a pink line must form a non-repeating consecutive set.

NABNER: Any two active digits anywhere on a yellow line may not be consecutive or the same.

---
format: open-rules
title: Federation Marines are lost
setter: B.PEN
source: https://sudokupad.app/3a822qepwi
case: https://sudoku-sleuth.com/cases/federation-marines-are-lost
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r8c2-r8c3 sum 10
pair-2: pair r7c5-r8c5 sum 10
pair-3: pair r8c8-r9c8 sum 10
pair-4: pair r4c6-r5c6 sum 10
pair-5: pair r3c4-r4c4 sum 10
pair-6: pair r1c4-r2c4 sum 10
pair-7: pair r3c4-r3c5 sum 10
pair-8: pair r1c5-r1c6 sum 10
pair-9: pair r3c7-r4c7 sum 10
pair-10: pair r5c7-r6c7 sum 10
pair-11: pair r4c6-r4c7 sum 10
pair-12: pair r4c4-r4c5 sum 10
pair-13: pair r6c6-r6c7 sum 10
pair-14: pair r9c4-r9c5 sum 10
pair-15: pair r2c3-r2c4 sum 10
pair-16: pair r3c5-r4c5 sum 10
pair-17: pair r7c8-r7c9 sum 10
pair-18: pair r1c5-r2c5 sum 5
pair-19: pair r7c2-r7c3 sum 5
pair-20: pair r2c4-r3c4 sum 5
pair-21: pair r6c3-r7c3 sum 5
pair-22: pair r2c2-r3c2 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r1c5","r2c5"],["r7c2","r7c3"],["r8c2","r8c3"],["r7c5","r8c5"],["r8c8","r9c8"],["r4c6","r5c6"],["r3c4","r4c4"],["r2c4","r3c4"],["r1c4","r2c4"],["r3c4","r3c5"],["r1c5","r1c6"],["r3c7","r4c7"],["r5c7","r6c7"],["r4c6","r4c7"],["r4c4","r4c5"],["r6c6","r6c7"],["r6c3","r7c3"],["r9c4","r9c5"],["r2c2","r3c2"],["r2c3","r2c4"],["r3c5","r4c5"],["r7c8","r7c9"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[2.5,3.5],[3.5,2.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5],[4.5,6.5],[3.5,5.5],[3.5,3.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,8.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[6.5,5.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[5.5,1.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,6.5],[4.5,5.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Along the acidic Genesis' skin digits must be at least five apart.

Digits separated by a knights move cannot be the same.

Digits separated by a X sum to 10 and digits separated by a V sum to 5. All of the X and V are given.

"An ambush predator. This blind animal has adapted to hunt in the dark, relying on specialized senses to stalk prey. Its body offers little protection and will attempt to conceal itself in the shadows as a result. Its acidic blood is used as a projectile via autohemorraging. The Genesis naturally hunts in groups, making it a highly successful species with little need to evolve; Its DNA suggests it belongs to the oldest living lineage on SR388, granting its name."

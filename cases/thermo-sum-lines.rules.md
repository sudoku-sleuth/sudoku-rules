---
format: open-rules
title: Thermo Sum Lines
setter: Jobo
source: https://tinyurl.com/cd2vuemz
case: https://sudoku-sleuth.com/cases/thermo-sum-lines
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r3c2=2 r3c5=3 r3c8=4
exported: b17bdbffead7b66e075c3de9aace1a45
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 white
kropki-2: kropki r8c4-r9c4 white
kropki-3: kropki r8c6-r9c6 white
slow-thermo-1: slow-thermo r8c2-r7c3-r6c4
slow-thermo-2: slow-thermo r6c2-r5c3-r4c4
slow-thermo-3: slow-thermo r5c2-r4c3-r3c4
slow-thermo-4: slow-thermo r8c8-r7c7-r6c6
slow-thermo-5: slow-thermo r6c8-r5c7-r4c6
slow-thermo-6: slow-thermo r5c8-r4c7-r3c6
slow-thermo-7: slow-thermo r4c2-r3c3-r2c4
slow-thermo-8: slow-thermo r7c2-r6c3-r5c4
slow-thermo-9: slow-thermo r7c8-r6c7-r5c6
slow-thermo-10: slow-thermo r4c8-r3c7-r2c6
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,2.5],[1.5,3.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,3.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[3.5,3.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,2.5],[4.5,3.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5],[5.5,3.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[6.5,6.5],[5.5,5.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,6.5],[4.5,5.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,6.5],[3.5,5.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[3.5,6.5],[2.5,5.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,6.5],[1.5,5.5]],"color":"#00BBFF","thickness":21,"rounded":true}}
```

Normal sudoku rules apply.

All thermometers are slow thermometers, as well as region sum lines. Digits along these thermometers must either stay the same or increase from the bulb end, and sum to the same value in each 3x3 box the thermo passes through.

Digits separated by a white dot must be consecutive. Not all dots are given.

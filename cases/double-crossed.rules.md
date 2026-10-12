---
format: open-rules
title: Double Crossed
setter: Jobo
source: https://sudokupad.app/xentq665vf
case: https://sudoku-sleuth.com/cases/double-crossed
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=1 r3c7=2 r7c3=3 r7c7=4
---

```rules
sudoku 9x9
between-1: between r3c2-r2c3 ends ["r4c3","r3c4"]
between-2: between r2c7-r3c8 ends ["r3c6","r4c7"]
between-3: between r7c8-r8c7 ends ["r6c7","r7c6"]
between-4: between r8c3-r7c2 ends ["r7c4","r6c3"]
between-5: between r6c2-r7c1-r8c2-r9c3-r8c4 ends ["r5c3","r7c5"]
between-6: between r8c6-r9c7-r8c8-r7c9-r6c8 ends ["r7c5","r5c7"]
between-7: between r4c8-r3c9-r2c8-r1c7-r2c6 ends ["r5c7","r3c5"]
between-8: between r2c4-r1c3-r2c2-r3c1-r4c2 ends ["r3c5","r5c3"]
pair-1: pair r3c5-r4c5 relation {"op":"sum","value":10}
pair-2: pair r7c5-r8c5 relation {"op":"sum","value":10}
pair-3: pair r5c3-r5c4 relation {"op":"sum","value":5}
pair-4: pair r5c6-r5c7 relation {"op":"sum","value":5}
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply.

Digits cannot repeat on either diagonal.

Digits on between lines must be between the digits in the attached circles.

Digits separated by a V must sum to 5. Digits separated by an X must sum to 10. Not all X and V are given.

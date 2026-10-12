---
format: open-rules
title: Under Pressure
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4xlxw5wmad
case: https://sudoku-sleuth.com/cases/under-pressure
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r1c7=5 r6c2=5 r8c6=6
---

```rules
sudoku 9x9
pressure-gauge-1: pressure-gauge type "high" cell "r1c4" neighbours ["r1c3","r1c5","r2c3","r2c4","r2c5"]
pressure-gauge-2: pressure-gauge type "high" cell "r1c3" neighbours ["r1c2","r1c4","r2c2","r2c3","r2c4"]
pressure-gauge-3: pressure-gauge type "high" cell "r2c7" neighbours ["r1c6","r1c7","r1c8","r2c6","r2c8","r3c6","r3c7","r3c8"]
pressure-gauge-4: pressure-gauge type "high" cell "r3c4" neighbours ["r2c3","r2c4","r2c5","r3c3","r3c5","r4c3","r4c4","r4c5"]
pressure-gauge-5: pressure-gauge type "high" cell "r3c2" neighbours ["r2c1","r2c2","r2c3","r3c1","r3c3","r4c1","r4c2","r4c3"]
pressure-gauge-6: pressure-gauge type "high" cell "r9c3" neighbours ["r8c2","r8c3","r8c4","r9c2","r9c4"]
pressure-gauge-7: pressure-gauge type "high" cell "r9c4" neighbours ["r8c3","r8c4","r8c5","r9c3","r9c5"]
pressure-gauge-8: pressure-gauge type "high" cell "r5c6" neighbours ["r4c5","r4c6","r4c7","r5c5","r5c7","r6c5","r6c6","r6c7"]
pressure-gauge-9: pressure-gauge type "high" cell "r6c8" neighbours ["r5c7","r5c8","r5c9","r6c7","r6c9","r7c7","r7c8","r7c9"]
pressure-gauge-10: pressure-gauge type "low" cell "r1c6" neighbours ["r1c5","r1c7","r2c5","r2c6","r2c7"]
pressure-gauge-11: pressure-gauge type "low" cell "r3c6" neighbours ["r2c5","r2c6","r2c7","r3c5","r3c7","r4c5","r4c6","r4c7"]
pressure-gauge-12: pressure-gauge type "low" cell "r2c3" neighbours ["r1c2","r1c3","r1c4","r2c2","r2c4","r3c2","r3c3","r3c4"]
pressure-gauge-13: pressure-gauge type "low" cell "r3c1" neighbours ["r2c1","r2c2","r3c2","r4c1","r4c2"]
pressure-gauge-14: pressure-gauge type "low" cell "r6c1" neighbours ["r5c1","r5c2","r6c2","r7c1","r7c2"]
pressure-gauge-15: pressure-gauge type "low" cell "r6c4" neighbours ["r5c3","r5c4","r5c5","r6c3","r6c5","r7c3","r7c4","r7c5"]
pressure-gauge-16: pressure-gauge type "low" cell "r7c5" neighbours ["r6c4","r6c5","r6c6","r7c4","r7c6","r8c4","r8c5","r8c6"]
pressure-gauge-17: pressure-gauge type "low" cell "r6c7" neighbours ["r5c6","r5c7","r5c8","r6c6","r6c8","r7c6","r7c7","r7c8"]
```

- Normal sudoku rules apply.
- Low Pressure Gauges: Numbers inside a BLUE low pressure gauge indicate how many digits STRICTLY GREATER than that number appear in the up to 8 cells surrounding the gauge.
- High Pressure Gauges: Numbers inside a RED high pressure gauge indicate how many digits STRICTLY SMALLER than that number appear in the up to 8 cells surrounding the gauge.

---
format: open-rules
title: Snowflake
setter: Jobo
source: https://sudokupad.app/mrplzmf92z
case: https://sudoku-sleuth.com/cases/snowflake
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=1 r3c6=2 r5c3=2 r5c7=5 r7c4=3 r7c6=1
exported: 79466cd36bce225ef2a6572293c33e60
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r5c5-r4c5-r3c5-r2c5
slow-thermo-2: slow-thermo r5c5-r4c5-r3c5-r2c4
slow-thermo-3: slow-thermo r5c5-r4c5-r3c5-r2c6
slow-thermo-4: slow-thermo r5c5-r6c5-r7c5-r8c5
slow-thermo-5: slow-thermo r5c5-r6c5-r7c5-r8c4
slow-thermo-6: slow-thermo r5c5-r6c5-r7c5-r8c6
slow-thermo-7: slow-thermo r5c5-r5c6-r4c7-r3c8
slow-thermo-8: slow-thermo r5c5-r5c6-r4c7-r3c7
slow-thermo-9: slow-thermo r5c5-r5c6-r4c7-r4c8
slow-thermo-10: slow-thermo r5c5-r5c6-r6c7-r7c8
slow-thermo-11: slow-thermo r5c5-r5c6-r6c7-r6c8
slow-thermo-12: slow-thermo r5c5-r5c6-r6c7-r7c7
slow-thermo-13: slow-thermo r5c5-r5c4-r4c3-r3c2
slow-thermo-14: slow-thermo r5c5-r5c4-r4c3-r3c3
slow-thermo-15: slow-thermo r5c5-r5c4-r4c3-r4c2
slow-thermo-16: slow-thermo r5c5-r5c4-r6c3-r7c2
slow-thermo-17: slow-thermo r5c5-r5c4-r6c3-r6c2
slow-thermo-18: slow-thermo r5c5-r5c4-r6c3-r7c3
negative relations [{"op":"sum","value":10}] except []
```

Normal sudoku rules apply.

Along thermometers, digits must either stay the same or increase from the bulb end (slow thermos).

Any two orthogonally adjacent digits cannot sum to 10.

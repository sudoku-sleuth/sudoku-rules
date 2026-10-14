---
format: open-rules
title: A Very Maggie birthday!
setter: Timotab
source: https://sudokupad.app/jrr6dd4neg
case: https://sudoku-sleuth.com/cases/a-very-maggie-birthday
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: d893da6189cf61eb03e50ed5b006238a
---

```rules
sudoku 9x9
thermo-1: thermo r7c8-r7c7-r7c6-r6c6-r5c6-r4c6-r4c5
thermo-2: thermo r6c5-r6c4-r5c4-r4c4-r3c4-r3c3-r3c2
thermo-3: thermo r2c1-r2c2-r2c3-r2c4-r2c5
thermo-4: thermo r8c5-r8c6-r8c7-r8c8-r8c9
thermo-5: thermo r4c3-r5c2-r6c1-r7c1
thermo-6: thermo r3c9-r4c9-r5c8-r6c7
outside-1: outside r1c1-r1c2-r1c3 digits [1,3]
outside-2: outside r1c3-r2c3-r3c3 digits [3,7]
outside-3: outside r3c1-r3c2-r3c3 digits [7,9]
outside-4: outside r1c1-r2c1-r3c1 digits [1,9]
outside-5: outside r9c7-r8c7-r7c7 digits [3,7]
outside-6: outside r9c9-r8c9-r7c9 digits [1,9]
outside-7: outside r9c9-r9c8-r9c7 digits [7,9]
outside-8: outside r7c9-r7c8-r7c7 digits [1,3]
outside-9: outside r4c9-r4c8-r4c7 digits [5]
outside-10: outside r6c1-r6c2-r6c3 digits [5]
outside-11: outside r7c1-r7c2-r7c3 digits [8]
outside-12: outside r3c9-r3c8-r3c7 digits [2]
outside-13: outside r4c1-r4c2-r4c3 digits [7]
outside-14: outside r6c9-r6c8-r6c7 digits [3]
outside-15: outside r1c4-r2c4-r3c4 digits [8]
outside-16: outside r9c6-r8c6-r7c6 digits [2]
outside-17: outside r9c3-r8c3-r7c3 digits [4]
outside-18: outside r1c7-r2c7-r3c7 digits [6]
outside-19: outside r2c9-r2c8-r2c7 digits [3,9]
outside-20: outside r8c1-r8c2-r8c3 digits [1,7]
```

• Normal sudoku rules apply.
• Outside clues: Digits outside the grid must appear in the first three cells of the row or column indicated by the clue
• Thermos: Along a grey thermometer, digits must strictly increase from the bulb end.

---
format: open-rules
title: Meteor Shower
setter: Jobo
source: https://sudokupad.app/g1hr777pka
case: https://sudoku-sleuth.com/cases/meteor-shower
library: https://rules.sudoku-sleuth.com/
status: read
exported: c34649028d6fa9cfbeba20ba42999b7a
---

```rules
sudoku 9x9
thermo-1: thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
thermo-2: thermo r9c4-r8c5-r7c6-r6c7-r5c8-r4c9
thermo-3: thermo r9c6-r8c7-r7c8-r6c9
thermo-4: thermo r9c8-r8c9
thermo-5: thermo r6c1-r5c2-r4c3-r3c4-r2c5-r1c6
thermo-6: thermo r4c1-r3c2-r2c3-r1c4
thermo-7: thermo r2c1-r1c2
renban-1: renban r3c1-r2c2
renban-2: renban r4c2-r3c3-r2c4
renban-3: renban r8c6-r7c7-r6c8
renban-4: renban r8c8-r7c9
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Purple lines contain a non-repeating set of consecutive digits in any order.

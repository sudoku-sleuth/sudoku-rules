---
format: open-rules
title: Vamp
setter: Blobz
source: https://sudokupad.app/blobz/vamp
case: https://sudoku-sleuth.com/cases/vamp
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=9 r9c9=4
exported: 4087205497a66934a98a557650fe1385
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r6c2
thermo-2: thermo r6c3-r7c3-r8c3
thermo-3: thermo r6c4-r7c4
thermo-4: thermo r6c5-r7c5
thermo-5: thermo r6c6-r7c6
thermo-6: thermo r6c7-r7c7-r8c7
thermo-7: thermo r5c8-r6c8
whispers-1: whispers r3c2-r2c3-r3c4 gap 5
whispers-2: whispers r2c7-r3c6 gap 5
whispers-3: whispers r8c4-r8c5-r8c6-r7c7-r7c8-r6c9-r5c9-r4c9-r3c9-r2c8-r1c7-r2c6-r2c5-r2c4-r1c3-r2c2-r3c1-r4c1-r5c1-r6c1-r7c2-r7c3 gap 5 loop true
region-sum-1: region-sum r3c7-r4c6-r5c7-r4c8 segments [["r3c7"],["r4c6"],["r5c7","r4c8"]]
region-sum-2: region-sum r3c3-r4c2-r5c3-r4c4 segments [["r3c3"],["r4c2","r5c3"],["r4c4"]]
```

Normal sudoku rules apply. 

Along green lines, adjacent digits differ by 5 or more. 

Box borders divide blue lines into segments with the same sum. 

Along thermometers, digits increase from the bulb end.

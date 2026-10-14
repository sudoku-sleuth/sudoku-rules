---
format: open-rules
title: Behind Bars
setter: Jobo
source: https://tinyurl.com/2p8npz9d
case: https://sudoku-sleuth.com/cases/behind-bars
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=8
exported: 63d55fd1c100274c88cdca9f746dfd38
---

```rules
sudoku 9x9
diagonal direction "anti"
thermo-1: thermo r7c1-r6c1-r5c1-r4c1-r3c1
thermo-2: thermo r7c3-r6c3-r5c3-r4c3-r3c3
thermo-3: thermo r7c5-r6c5-r5c5-r4c5-r3c5
thermo-4: thermo r7c7-r6c7-r5c7-r4c7-r3c7
thermo-5: thermo r7c9-r6c9-r5c9-r4c9-r3c9
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits cannot repeat on the marked diagonal.

Digits in the first row mark the position of the digit 1 in that column.

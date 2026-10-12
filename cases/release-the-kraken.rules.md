---
format: open-rules
title: Release the Kraken
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k764c65v92
case: https://sudoku-sleuth.com/cases/release-the-kraken
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c5=3
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r3c3-r3c4-r4c4-r4c3-r4c2
thermo-2: thermo r3c8-r3c7-r3c6-r4c6-r4c7-r4c8
thermo-3: thermo r6c4-r6c3-r6c2-r7c2-r7c3-r7c4
thermo-4: thermo r7c6-r7c7-r7c8-r6c8-r6c7-r6c6
thermo-5: thermo r9c3-r9c2-r9c1-r8c1-r7c1
thermo-6: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-7: thermo r1c2-r1c1-r2c1-r3c1
thermo-8: thermo r1c8-r1c9-r2c9-r3c9
thermo-9: thermo r9c5-r8c4
thermo-10: thermo r9c5-r8c5
thermo-11: thermo r9c5-r8c6
thermo-12: thermo r2c5-r1c4
thermo-13: thermo r2c5-r1c5
thermo-14: thermo r2c5-r1c6
thermo-15: thermo r5c9-r4c9
thermo-16: thermo r5c5-r6c5
thermo-17: thermo r5c5-r5c6
thermo-18: thermo r5c1-r5c2
thermo-19: thermo r5c1-r6c1
thermo-20: thermo r5c9-r5c8
thermo-21: thermo r5c9-r6c9
```

- Normal sudoku rules apply.
- Along thermometers, digits must increase from bulb to tip.

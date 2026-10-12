---
format: open-rules
title: Pi Day 2024
setter: Dr Logic
source: https://sudokupad.app/uzrndnwu5y
case: https://sudoku-sleuth.com/cases/pi-day-2024
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c4 total 14 connected true
cage-2: cage r6c3-r7c3 total 15 connected true
cage-3: cage r4c6-r5c6-r5c7 total 9 connected true
cage-4: cage r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 total 31 connected true
cage-5: cage r1c7-r1c8-r1c9 total 24 connected true
cage-6: cage r1c1-r1c2 total 3 connected true
cage-7: cage r1c4-r1c5-r1c6 total 14 connected true
anti-knight
cage-8: cage r6c8 total 2 connected true
cage-9: cage r7c8 total 6 connected true
thermo-1: thermo r5c5-r4c5
thermo-2: thermo r6c6-r6c7
thermo-3: thermo r6c4-r6c3
kropki-1: kropki r4c3-r4c4 colour "black"
kropki-2: kropki r4c6-r4c7 colour "black"
kropki-3: kropki r3c9-r4c9 colour "black"
```

Normal Sudoku Rules Apply.
Killer Cage: Digits in a cage must not repeat and sum to the clue in the top left.
Ratio: Black dot separates cells in a 1:2 ratio. (Not all are given)
Thermo: Digits on a grey thermometer must increase from the bulb end.
Anti-Knight: Cells separated by a knights move (in chess) cannot contain the same digit.

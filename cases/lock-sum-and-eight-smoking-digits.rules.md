---
format: open-rules
title: Lock, Sum, and Eight Smoking Digits
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rf9iaxopav
case: https://sudoku-sleuth.com/cases/lock-sum-and-eight-smoking-digits
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r4c3=2 r4c6=7 r4c9=1 r5c2=7 r6c4=6 r6c7=2 r9c1=6
---

```rules
sudoku 9x9
lockout-1: lockout r3c2-r3c3-r4c3-r5c3-r6c3 ends ["r3c1","r7c4"] gap 4
lockout-2: lockout r4c7-r5c7-r6c7-r7c7-r7c8 ends ["r3c6","r7c9"] gap 4
lockout-3: lockout r1c5-r1c4-r1c3 ends ["r1c6","r1c2"] gap 4
lockout-4: lockout r9c5-r9c6-r9c7 ends ["r9c4","r9c8"] gap 4
lockout-5: lockout r3c4-r3c5-r4c5 ends ["r2c4","r5c5"] gap 4
lockout-6: lockout r3c2-r3c3-r4c3-r5c3-r6c3 ends ["r3c1","r7c4"] gap 4
lockout-7: lockout r4c7-r5c7-r6c7-r7c7-r7c8 ends ["r3c6","r7c9"] gap 4
lockout-8: lockout r1c5-r1c4-r1c3 ends ["r1c6","r1c2"] gap 4
lockout-9: lockout r9c5-r9c6-r9c7 ends ["r9c4","r9c8"] gap 4
lockout-10: lockout r3c4-r3c5-r4c5 ends ["r2c4","r5c5"] gap 4
region-sum-1: region-sum r3c1-r3c2-r3c3-r4c3-r5c3-r6c3-r7c4 segments [["r3c1","r3c2","r3c3"],["r4c3","r5c3","r6c3"],["r7c4"]]
region-sum-2: region-sum r3c6-r4c7-r5c7-r6c7-r7c7-r7c8-r7c9 segments [["r3c6"],["r4c7","r5c7","r6c7"],["r7c7","r7c8","r7c9"]]
region-sum-3: region-sum r1c6-r1c5-r1c4-r1c3-r1c2 segments [["r1c6","r1c5","r1c4"],["r1c3","r1c2"]]
region-sum-4: region-sum r9c4-r9c5-r9c6-r9c7-r9c8 segments [["r9c4","r9c5","r9c6"],["r9c7","r9c8"]]
region-sum-5: region-sum r2c4-r3c4-r3c5-r4c5-r5c5 segments [["r2c4","r3c4","r3c5"],["r4c5","r5c5"]]
```

- Normal sudoku rules apply.
- All lines are BOTH lockout lines AND region sum lines. On each line, the region sum line includes the diamonds at the ends of the lockout lines.
- On Lockout Lines digits in diamonds must differ by at least 4. Digits on the line must fall outside the range defined by their attached diamonds and may repeat if allowed by other rules.
- The sum of digits on a Region Sum Line within a particular region must be the same for all of the regions the line passes through.

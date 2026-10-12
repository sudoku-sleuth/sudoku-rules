---
format: open-rules
title: Scratching the Surface
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mjws7auxyz
case: https://sudoku-sleuth.com/cases/scratching-the-surface
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c2=3 r5c8=7
---

```rules
sudoku 9x9
entropic-1: entropic r3c1-r2c2-r1c3
entropic-2: entropic r4c1-r3c2-r2c3-r1c4
entropic-3: entropic r1c7-r2c8-r3c9
entropic-4: entropic r1c6-r2c7-r3c8-r4c9
entropic-5: entropic r9c3-r8c2-r7c1
entropic-6: entropic r6c1-r7c2-r8c3-r9c4
entropic-7: entropic r9c7-r8c8-r7c9
entropic-8: entropic r6c9-r7c8-r8c7-r9c6
entropic-9: entropic r4c4-r5c5-r6c6
entropic-10: entropic r4c3-r5c4-r6c5
entropic-11: entropic r4c5-r5c6-r6c7
entropic-12: entropic r4c2-r5c3-r6c4
entropic-13: entropic r4c6-r5c7-r6c8
entropic-14: entropic r3c3-r2c4
entropic-15: entropic r3c4-r2c5
entropic-16: entropic r3c5-r2c6
entropic-17: entropic r8c4-r7c5
entropic-18: entropic r8c5-r7c6
entropic-19: entropic r8c6-r7c7
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 15
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 18
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 25
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 18
little-killer-6: little-killer r6c1-r7c2-r8c3-r9c4 sum 25
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-8: little-killer r9c6-r8c7-r7c8-r6c9 sum 17
```

Entropic Lines, Little Killers

- Normal sudoku rules apply.
- Entropic lines: Any set of three sequential cells along an entropic line (usually peach in colour) must contain a low digit (123), a middle digit (456), and a high digit (789).
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

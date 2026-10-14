---
format: open-rules
title: Southpaw Gunslinger
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dgsve850qy
case: https://sudoku-sleuth.com/cases/southpaw-gunslinger
library: https://rules.sudoku-sleuth.com/
status: read
exported: 333071fb89e37ab8c365b371c0564f7e
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r7c2 white
kropki-2: kropki r2c5-r3c5 white
kropki-3: kropki r6c5-r7c5 white
kropki-4: kropki r3c9-r4c9 white
kropki-5: kropki r8c6-r8c7 white
kropki-6: kropki r5c5-r6c5 white
kropki-7: kropki r7c5-r8c5 white
kropki-8: kropki r7c3-r8c3 white
kropki-9: kropki r7c7-r8c7 white
kropki-10: kropki r7c9-r8c9 white
kropki-11: kropki r1c5-r1c6 black
kropki-12: kropki r1c7-r1c8 black
kropki-13: kropki r3c5-r4c5 black
kropki-14: kropki r3c2-r3c3 black
kropki-15: kropki r6c1-r6c2 black
kropki-16: kropki r7c8-r7c9 black
kropki-17: kropki r8c3-r8c4 black
arrow-1: arrow r3c3-r4c2-r5c1 bulb ["r3c4"]
arrow-2: arrow r3c7-r4c8-r5c9 bulb ["r3c6"]
arrow-3: arrow r6c3-r7c2-r8c2-r9c2 bulb ["r5c4"]
arrow-4: arrow r6c7-r7c8-r8c8-r9c8 bulb ["r5c6"]
arrow-5: arrow r2c5-r3c5 bulb ["r1c5"]
arrow-6: arrow r7c9-r8c9 bulb ["r6c8"]
```

**Sudoku, Arrows, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

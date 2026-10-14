---
format: open-rules
title: Arrows Hitting the Dot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ysbwru9mne
case: https://sudoku-sleuth.com/cases/arrows-hitting-the-dot
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6c6f1be69f6c82867182dec3331a6cd5
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 white
kropki-2: kropki r7c2-r8c2 white
kropki-3: kropki r2c7-r2c8 white
kropki-4: kropki r4c5-r5c5 white
kropki-5: kropki r6c1-r7c1 white
kropki-6: kropki r4c9-r5c9 white
kropki-7: kropki r2c2-r3c2 white
kropki-8: kropki r3c6-r3c7 white
kropki-9: kropki r6c8-r6c9 white
kropki-10: kropki r6c4-r6c5 black
arrow-1: arrow r3c3-r4c4-r3c5-r4c6-r5c7 bulb ["r4c2"]
arrow-2: arrow r7c6-r6c5-r7c4-r6c3-r7c2 bulb ["r6c7"]
arrow-3: arrow r2c5-r1c4-r2c3-r1c2 bulb ["r1c6"]
arrow-4: arrow r9c5-r8c6-r9c7-r8c8 bulb ["r8c4"]
arrow-5: arrow r2c7-r3c8-r4c9 bulb ["r3c6"]
```

**Sudoku, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

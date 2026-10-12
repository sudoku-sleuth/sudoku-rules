---
format: open-rules
title: Partners
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/630ci56jyr
case: https://sudoku-sleuth.com/cases/partners
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r3c4 colour "white"
kropki-2: kropki r2c6-r3c6 colour "white"
kropki-3: kropki r7c1-r8c1 colour "white"
kropki-4: kropki r7c9-r8c9 colour "white"
kropki-5: kropki r9c2-r9c3 colour "white"
kropki-6: kropki r9c7-r9c8 colour "white"
kropki-7: kropki r5c3-r5c4 colour "white"
kropki-8: kropki r5c6-r5c7 colour "white"
kropki-9: kropki r7c6-r8c6 colour "white"
kropki-10: kropki r6c4-r7c4 colour "white"
kropki-11: kropki r2c7-r2c8 colour "white"
kropki-12: kropki r7c4-r8c4 colour "white"
kropki-13: kropki r5c8-r5c9 colour "white"
kropki-14: kropki r2c8-r3c8 colour "white"
kropki-15: kropki r9c5-r9c6 colour "white"
kropki-16: kropki r9c4-r9c5 colour "white"
kropki-17: kropki r7c7-r8c7 colour "white"
kropki-18: kropki r7c3-r8c3 colour "white"
arrow-1: arrow r1c3-r2c4-r3c4 bulb ["r1c2"]
arrow-2: arrow r1c7-r2c6-r3c6 bulb ["r1c8"]
arrow-3: arrow r8c1-r7c1-r6c2 bulb ["r9c2"]
arrow-4: arrow r8c9-r7c9-r6c8 bulb ["r9c8"]
arrow-5: arrow r5c3-r5c4-r4c5 bulb ["r4c2"]
arrow-6: arrow r5c7-r5c6-r6c5 bulb ["r4c8"]
arrow-7: arrow r3c8-r4c7 bulb ["r3c9"]
parity-cells-1: parity-cells r6c5-r8c2-r8c8-r4c5 parity "odd"
parity-cells-2: parity-cells r1c3-r1c7-r6c2-r6c8-r7c4-r7c6-r2c8-r2c2 parity "even"
```

**Sudoku, Arrows, Consecutive Dots, Even/Odd**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Consecutive dots: Digits separated by a white dot are consecutive.
- Even/Odd: Even/Odd: Cells marked with a grey square contain even digits. Cells marked with a grey circle contain odd digits.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

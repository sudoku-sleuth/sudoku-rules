---
format: open-rules
title: Even Hotter Swirls
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u6q2jrug10
case: https://sudoku-sleuth.com/cases/even-hotter-swirls
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r1c4-r2c3-r3c2-r4c3-r5c4-r6c5-r5c6-r4c7-r3c6-r2c5
slow-thermo-2: slow-thermo r2c7-r3c8-r4c9-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3-r5c2-r4c1
slow-thermo-3: slow-thermo r6c1-r7c2-r8c3-r9c4-r9c5-r9c6
slow-thermo-4: slow-thermo r5c9-r6c9-r7c8-r8c7
parity-cells r8c5-r6c8-r6c5-r4c6-r4c7-r3c2-r9c9 parity "even"
```

**Sudoku, Slow Thermometers, Evens**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
- Even: Cells marked with a grey square contain even digits.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

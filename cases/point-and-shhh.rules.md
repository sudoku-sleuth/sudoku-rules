---
format: open-rules
title: Point and Shhh
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l6fmddn85p
case: https://sudoku-sleuth.com/cases/point-and-shhh
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c3=3 r6c5=8 r7c1=1 r8c9=2 r9c6=4
exported: f0b55a8d84778848c07e321e0eb5829f
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-2: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-3: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-4: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-5: arrow r5c2-r5c3 bulb ["r5c1"]
arrow-6: arrow r5c8-r5c7 bulb ["r5c9"]
arrow-7: arrow r2c5-r3c5 bulb ["r1c5"]
arrow-8: arrow r8c5-r7c5 bulb ["r9c5"]
arrow-9: arrow r3c2 bulb ["r4c3"]
arrow-10: arrow r2c3 bulb ["r3c4"]
arrow-11: arrow r6c3 bulb ["r5c4"]
arrow-12: arrow r6c7 bulb ["r5c6"]
arrow-13: arrow r8c7 bulb ["r7c6"]
arrow-14: arrow r3c8 bulb ["r4c7"]
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 gap 4
whispers-2: whispers r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 gap 4
whispers-3: whispers r6c6-r7c7-r8c8-r7c7 gap 4
whispers-4: whispers r8c8-r9c9-r8c8 gap 4
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.75,0.75],[0.55,0.55]],"color":"#ffa600ff","thickness":7.04,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.25,8.25],[8.45,8.45]],"color":"#ffa600ff","thickness":7.04,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.55,8.55]],"color":"#ffa600ff","thickness":7.04,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.45,0.45],[0.5,0.5]],"color":"#ffa600ff","thickness":7.04,"rounded":true}}
```

**Sudoku, Arrows, Whisper-4 Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Note: the Whisper 4 lines extend along both diagonals, from r1c1 to r9c9 and r1c9 to r9c1.  The arrows along the negative diagonal extend from r1c1 to r4c4, and r9c9 to r6c6.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

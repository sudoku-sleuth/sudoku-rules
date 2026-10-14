---
format: open-rules
title: Breakdown
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o16ljmac86
case: https://sudoku-sleuth.com/cases/breakdown
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c1=1 r2c9=3 r4c2=4 r4c8=7 r8c3=6 r8c7=8
exported: a6b8178cc937c9138c9953bdba9bfd55
---

```rules
sudoku 9x9
zipper-1: zipper r2c2-r3c3-r4c4-r5c5-r4c6-r3c7-r2c8
zipper-2: zipper r8c4-r8c5-r8c6
zipper-3: zipper r4c1-r5c2-r6c1
zipper-4: zipper r7c4-r6c5-r7c5
zipper-5: zipper r2c4-r2c5-r2c6
zipper-6: zipper r4c8-r3c9-r4c9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6,3],[7,2]],"color":"#ff76ae99","thickness":12.8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6,3],[4.5,4.5],[7.5,7.5]],"color":"#ff76ae99","thickness":12.8,"rounded":true}}
```

**Sudoku, Zipper Lines, Diagonal**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Diagonal: Digits along a marked diagonal cannot repeat.

Accessibility Note: The thin lines running from r1c1 to r9c9 and from r1c9 to r9c1 are reminders of the diagonal rules. All other lines are all Zipper Lines. Two colors thicknesses are used to distinguish the lines when two Zipper lines intersect.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

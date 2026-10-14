---
format: open-rules
title: Stay in Your Box
setter: Marty Sears
source: https://sudokupad.app/j0e1hqfsp4
case: https://sudoku-sleuth.com/cases/stay-in-your-box
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 26aab056fed26a7c7baf77cb5cf3522b
---

```rules
sudoku 9x9
kropki-1: kropki r5c9-r6c9 black
kropki-2: kropki r4c4-r5c4 black
kropki-3: kropki r4c2-r5c2 black
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#00ef0eff","stroke":"#000000","thickness":2.56,"angle":0}}
```

Normal sudoku rules apply.

INVISIBLE LINES:
- Every box contains an invisible 'index line' whose route must be determined.
- The index lines are all 9 cells long, only move orthogonally (not diagonally), and don't cross any 3x3 box borders. They don't cross themselves, or pass through any black or green spots.

DIAMONDS:
- Each row, column and box contains exactly one hidden diamond, which lies at one end of its index line, and contains its box number. (Boxes are numbered 1-9 in normal reading order from top left to bottom right.)

INDEXING:
- The digit in position N along an index line (starting at the end with the diamond) indicates the position along the line where the digit N should be placed. Eg: if the 1st digit is a 3, then the 3rd digit will be a 1.

SPOTS:
- Digits separated by a black spot are in a 1:2 ratio.
- Digits separated by a green spot have a difference of at least 5.

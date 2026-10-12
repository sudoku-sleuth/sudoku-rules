---
fog:
  initiallyLit:
    - 29
    - 51
format: open-rules
title: Riddles in the Dark
setter: Blobz
source: https://sudokupad.app/blobz/riddles-in-the-dark
case: https://sudoku-sleuth.com/cases/riddles-in-the-dark
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r3c2-r3c3-r3c4-r4c2-r4c3-r4c4-r5c2-r5c3-r5c4 connected true
cage-2: cage r5c6-r5c7-r5c8-r6c6-r6c7-r6c8-r7c6-r7c7-r7c8 connected true
cage-3: cage r4c1-r5c1 total 13 connected true
cage-4: cage r2c1-r2c2-r2c3-r3c1 total 11 connected true
cage-5: cage r3c7-r3c8 total 7 connected true
arrow-1: arrow r3c3-r3c4-r4c4 bulb ["r3c2"]
arrow-2: arrow r5c3-r5c4 bulb ["r5c2"]
arrow-3: arrow r5c7-r5c6 bulb ["r5c8"]
arrow-4: arrow r7c7-r7c6-r6c6 bulb ["r7c8"]
arrow-5: arrow r5c5-r4c5 bulb ["r6c5"]
arrow-6: arrow r7c4-r6c4 bulb ["r8c4"]
arrow-7: arrow r9c7-r9c8-r8c9 bulb ["r8c7"]
arrow-8: arrow r8c2-r7c1 bulb ["r7c3"]
arrow-9: arrow r1c7-r2c8 bulb ["r2c6"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF","stroke":"#92bef099","thickness":3,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF","stroke":"#92bef099","thickness":3,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#fcca65ff","thickness":6,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"Bilbo","textColor":"#d731f686","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"Gollum","textColor":"#d731f686","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"Ring","textColor":"#f6c13186","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
```

When Bilbo opened his eyes, he wondered if he had; for it was just as dark as with them shut. Very slowly he got up and groped about on all fours... and crawled along for a good way, till suddenly his hand met what felt like a tiny ring of cold metal lying on the floor of the tunnel. He put the ring in his pocket almost without thinking...

Normal sudoku rules apply.

Begin by filling in digits for Bilbo and Gollum that match the corresponding "diamond" digits in the previous puzzle.

Digits in cages do not repeat, and sum to the small clue, if given.

Digits along arrows sum to the digit in the attached circle. Arrows neither cross nor branch nor share cells.

The grid is covered in fog; placing a correct digit will clear the surrounding fog and may reveal more clues.

---
format: open-rules
title: Doctor Who
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/doctor-who
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source feature has no drawing in our reading yet.
  - A feature in the source still needs a drawing definition.
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
  - The setter's corrections are waiting for our rules check.
board:
  rows: 9
  cols: 9
  symbols:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  givens: r1c9=1
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
exported: f2a0cd7f540debe8a1375b0d3ad2ea76
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
thermo-1: thermo r4c7-r5c7-r6c7-r6c6-r6c5-r6c4-r5c3-r4c2
thermo-2: thermo r9c6-r9c5-r9c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[39,40],"label":"16"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[10,19],"label":"3"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[45,54,63],"label":"16"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[53,62,71],"label":"18"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[22,23,24],"label":"19"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#00058A","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#00058A","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

“Space is complicated full of wibbly wobbly timey wimey stuff."
So, let’s start simple.
Normal Sudoku Rules apply, place the digits 1-9 in each row, column, and box, EXCEPT one of the 5’s has been erased and replaced with a 0 due to the Flux. I can’t tell you which one, ‘spoilers’. 
Killer Cages: digits in each cage add up to the total in the corner. Be careful ‘don’t think’.
The bit more complicated:
Thermometers: digits along a thermometer strictly increase OR decrease in value. Remember ‘don’t breathe’. 
Now the really hard part:
The TARDIS needs to fly from the blue square to the other blue square through an orthogonally connected loop that does not touch itself even diagonally. Whatever you do ‘don’t blink’.
Digits on this path have negative values for all clues AND are only odd digits. This is important ‘don’t forget’.
But let’s have some fun too, it’s only the universe at stake!
River Song has left us an encoded message to encourage us! This message is “Hello Sweetie”, to decode it, you must rearrange all the letters of both words alphabetically and then assign them a number in order starting with 1. Each letter is represented by a number. Then these numbers act as a cipher to find the hidden message embedded within the puzzle. However, “Hello” has been erased and only “Sweetie" remains, it is found in a straight diagonal line in the puzzle and reads left to right. ‘Run you cleaver boy’!

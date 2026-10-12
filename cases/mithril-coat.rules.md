---
format: open-rules
title: Mithril Coat
setter: Blobz
source: https://sudokupad.app/blobz/mithril-coat
case: https://sudoku-sleuth.com/cases/mithril-coat
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 colour "white"
kropki-2: kropki r6c3-r6c4 colour "white"
kropki-3: kropki r3c7-r4c7 colour "white"
kropki-4: kropki r4c6-r5c6 colour "white"
kropki-5: kropki r5c6-r6c6 colour "white"
kropki-6: kropki r7c8-r8c8 colour "white"
kropki-7: kropki r2c9-r3c9 colour "white"
whispers-1: whispers r3c3-r4c3-r5c4-r6c4-r7c4 gap 5
whispers-2: whispers r7c5-r7c6-r6c6 gap 5
region-sum r6c7-r7c7-r8c7-r8c6-r8c5-r8c4-r8c3-r7c3-r6c3-r5c3-r4c2-r3c2-r2c2-r2c3-r2c4-r3c4-r4c5-r3c6-r2c6-r2c7-r2c8-r3c8-r4c8-r5c7 segments [["r6c7","r4c8","r5c7"],["r7c7","r8c7"],["r8c6","r8c5","r8c4"],["r8c3","r7c3"],["r6c3","r5c3","r4c2"],["r3c2","r2c2","r2c3"],["r2c4","r3c4"],["r4c5"],["r3c6","r2c6"],["r2c7","r2c8","r3c8"]]
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[2,3,4,5,6],"label":"Smaug","color":"#d928f390","labelColor":"#d928f390"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[65,66,67,68,69],"label":"Mithril","color":"#5c7ffb85","labelColor":"#0638e9b8"}}
```

"Mr. Baggins!" he cried. "Here is the first payment of your reward! Cast off your old coat and put on this!" With that he put on Bilbo a small coat of mail, wrought for some young elf-prince long ago. It was of silver-steel, which the elves call "mithril", and with it went a belt of pearls and crystals.

Normal sudoku rules apply.

Begin by writing digits into the cage marked "Smaug" from the corresponding digits in row 1 of the previous puzzle.

Box borders divide the blue line into segments of equal sum.

Along green lines, adjacent digits differ by at least 5.

White dots separate consecutive digits.

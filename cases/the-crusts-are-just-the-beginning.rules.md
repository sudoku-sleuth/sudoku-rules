---
format: open-rules
title: The Crusts Are Just The Beginning
setter: EPH
source: https://sudokupad.app/0ih04bqozh
case: https://sudoku-sleuth.com/cases/the-crusts-are-just-the-beginning
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 2fe5b3e067244d171642a1fc15c6f531
---

```rules
sudoku 9x9
arrow-1: arrow r8c6-r7c7-r6c8-r5c9 bulb ["r9c5"]
arrow-2: arrow r8c7-r7c8 bulb ["r9c6"]
arrow-3: arrow r4c5-r4c4 bulb ["r4c6"]
whispers-1: whispers r3c1-r2c1-r1c2-r1c3 gap 4
whispers-2: whispers r7c9-r8c9-r9c8-r9c7 gap 4
renban-1: renban r1c7-r1c8-r2c9-r3c9
renban-2: renban r7c1-r8c1-r9c2-r9c3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":0.941,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#9e5200ff","fontSize":35.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.6],"width":0,"height":0.941,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#9e5200ff","fontSize":35.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[-0.237,4.237],[-0.096,4.096]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[-0.267,4.5],[-0.067,4.5]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[-0.237,4.763],[-0.096,4.904]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.237,-0.237],[4.096,-0.096]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,-0.267],[4.5,-0.067]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.763,-0.237],[4.904,-0.096]],"color":"#9e5200ff","thickness":2,"headLength":0.1,"rounded":true}}
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Sandwich Variant: Clues outside the grid are sandwich clues with a twist:  in the appropriate row or column, digits between the 1 and the 9 must sum to the value of the clue. In addition, for each diagonal from the clue (of length at least 2), the digits between the first instance of each of 9 and 1 (as seen from the clue) must sum to the value of the clue.
• Dutch Whisper Lines (orange): Adjacent digits along a Dutch Whisper Line must have a difference of at least 4.
• Renban Lines (purple): Digits along a Renban Line must be a non-repeating set of consecutive digits, in any order.
• Arrows: Digits along a thin grey arrow must sum to the digit in the attached circle.

---
format: open-rules
title: "Shifter Lines 116: A multitude of constraints (without fog)"
setter: gUBBLOR
source: https://sudokupad.app/5gert1tqzu
case: https://sudoku-sleuth.com/cases/shifter-lines-116-a-multitude-of-constraints-without-fog
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage r2c7-r3c7-r4c7 total 6 connected true
thermo r7c8-r8c9-r9c9
kropki-1: kropki r2c1-r2c2 colour "white"
kropki-2: kropki r6c3-r6c4 colour "black"
arrow r8c6-r8c5 bulb ["r7c7"]
whispers-1: whispers r2c5-r1c6-r1c7 gap 5
whispers-2: whispers r5c6-r5c7-r6c7 gap 4
between r9c2 ends ["r8c1","r8c3"]
parity r4c3-r4c4-r5c4
palindrome r5c1-r6c1-r7c2
pair-1: pair r6c9-r7c9 relation {"op":"sum","value":10}
pair-2: pair r4c6-r5c6 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#b088deff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,3.5],[0.5,3.5],[0.5,4.5]],"color":"#2ecbffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,5.5],[7.5,4.5]],"color":"#d8ee25ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,2.5],[5.5,1.5]],"color":"#d8ee25ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,0.5],[1.5,0.5]],"color":"#d8ee25ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[3.5,7.5],[3.5,6.5]],"color":"#d8ee25ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,4.5],[2.5,3.5]],"color":"#b088deff","thickness":9.6,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Region sum line (box 1+2): Digits along the region sum line have the same sum in both boxes.

Kropki dots (box 1+4+5): A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values.

German Whisper (box 2+3): Adjacent digits along the German Whisper line must have a difference of at least 5.

Zipper line (box 2+5): Digits an equal distance from the center (the cell with the dot) of the zipper line must sum to the digit in the middle of the line.

Renban (box 3): Digits along the renban line must be a set of consecutive digits in any order, and must not repeat.

Killer cage (box 3+6): The digits in a cage must sum to the number printed in its corner.

Parity line (box 4+5): Adjacent digits along the parity line must alternate between odd and even.

Palindrome (box 4+7): Digits along the palindrome line read the same forwards or backwards.

Dutch Whisper (box 5+6): Adjacent digits along the Dutch Whisper line must have a difference of at least 4.

XV (box 5+6+9): Adjacent cells connected with the X must sum to 10. Adjacent cells connected with the V must sum to 5.

Between line (box 7): The cell between the two filled circles must have a value between those in the circles.

Arrow (box 8+9): The digits along each arrow must sum to the digit in the circled cell.

Thermometer (box 9): Digits along the thermometer must increase starting from the bulb end.

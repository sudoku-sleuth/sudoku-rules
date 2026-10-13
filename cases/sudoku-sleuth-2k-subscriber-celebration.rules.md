---
format: open-rules
title: Sudoku Sleuth 2k Subscriber Celebration
setter: gUBBLOR
source: https://sudokupad.app/bv8si3exag
case: https://sudoku-sleuth.com/cases/sudoku-sleuth-2k-subscriber-celebration
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c7-r8c8 colour "black"
kropki-2: kropki r5c4-r5c5 colour "black"
kropki-3: kropki r1c7-r2c7 colour "black"
kropki-4: kropki r7c4-r7c5 colour "white"
kropki-5: kropki r4c3-r5c3 colour "white"
kropki-6: kropki r1c2-r1c3 colour "white"
arrow-1: arrow r4c6-r3c6-r2c6 bulb ["r5c6"]
arrow-2: arrow r6c7-r7c8-r8c9 bulb ["r5c6"]
whispers r4c1-r3c1-r2c2-r2c3-r3c4-r4c4-r5c3-r6c2-r7c1-r8c1-r8c2-r8c3-r8c4 gap 5
pair-1: pair r8c2-r8c3 sum 10
pair-2: pair r7c1-r8c1 sum 10
pair-3: pair r1c4-r1c5 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r5c8-r5c9 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[7.5,5.5]],"color":"#cccf","thickness":19,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[1.5,8.5]],"color":"#cccf","thickness":19,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.

Thermometers: Digits along each thermometer must increase starting from the bulb end. Digits may repeat on thermometers.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

For clarity, R5C6 is the bulb of both a bidirectional arrow and a bidirectional thermo.

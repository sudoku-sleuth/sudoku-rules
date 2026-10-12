---
format: open-rules
title: "Equality Cages 123: A multitude of constraints"
setter: gUBBLOR and Jasura
source: https://sudokupad.app/pqgdlelnkc
case: https://sudoku-sleuth.com/cases/equality-cages-123-a-multitude-of-constraints
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r2c7-r3c7
equality-cage-2: equality-cage r1c5-r1c6
equality-cage-3: equality-cage r2c3-r3c3
equality-cage-4: equality-cage r6c2-r6c3
equality-cage-5: equality-cage r8c2-r8c3-r8c4-r9c4
equality-cage-6: equality-cage r7c6-r7c7
equality-cage-7: equality-cage r6c8-r6c9
equality-cage-8: equality-cage r3c5-r4c5
equality-cage-9: equality-cage r4c8-r4c9
thermo r2c3-r2c4-r1c5
kropki-1: kropki r7c9-r8c9 colour "black"
kropki-2: kropki r7c4-r7c5 colour "white"
parity r6c2-r7c3-r8c2
whispers-1: whispers r8c4-r9c5-r9c4 gap 4 loop true
palindrome r5c2-r4c1-r3c1
between r1c2 ends ["r2c1","r1c1"]
whispers-2: whispers r6c8-r6c9-r5c9 gap 5
nabner r5c7-r4c8-r3c8 distinct true
pair-1: pair r4c4-r4c5 relation {"op":"sum","value":10}
pair-2: pair r2c9-r3c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[0.5,5.5]],"color":"#2ecbff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5],[5.5,4.5]],"color":"#f067f0","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,6.5],[5.5,6.5]],"color":"#b088de","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.899,2.5],[5.5,2.5]],"color":"#aaa","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#555","thickness":1}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Between line (box 1): The cell between the two filled circles must have a value between those in the circles.

Thermometer (box 1+2): Digits along the thermometer must increase starting from the bulb end.

Palindrome (box 1+4): Digits along the palindrome line read the same forwards or backwards.

Region sum line (box 2+3): Digits along the region sum line have the same sum in both boxes.

XV (box 3+5): Adjacent cells connected with the X must sum to 10. Adjacent cells connected with the V must sum to 5.

Nabner (box 3+6): Digits on the nabner line may not be consecutive, and must not repeat.

Parity line (box 4+7): Adjacent digits along the parity line must alternate between odd and even.

Renban (box 5+8): Digits along the renban line must be a set of consecutive digits in any order, and must not repeat.

German Whisper (box 6): Adjacent digits along the German Whisper line must have a difference of at least 5.

Zipper line (box 6+9): Digits an equal distance from the center of the zipper line must sum to the digit in the middle of the line.

Dutch Whisper (box 8): Adjacent digits along the Dutch Whisper line must have a difference of at least 4.

Kropki dots (box 8+9): A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values.

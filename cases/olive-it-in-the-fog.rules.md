---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Olive It in the Fog
setter: Meggen033
source: https://sudokupad.app/o2htsyrql4
case: https://sudoku-sleuth.com/cases/olive-it-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo r3c7-r3c8-r4c8
kropki-1: kropki r7c4-r7c5 colour "white"
kropki-2: kropki r4c3-r4c4 colour "black"
arrow r8c6-r7c6-r7c7-r7c8 bulb ["r8c5"]
whispers-1: whispers r5c4-r5c5-r5c6 gap 5
whispers-2: whispers r4c4-r5c4 gap 5
whispers-3: whispers r6c6-r5c6 gap 5
between r6c5-r6c6-r5c5-r4c4-r4c5 ends ["r6c4","r4c6"]
palindrome r5c2-r4c2-r3c3-r2c4-r2c5
renban r9c7-r8c7-r8c8-r7c8-r6c8-r5c8
region-sum r7c5-r7c4-r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7 segments [["r7c5","r7c4"],["r6c3","r5c3","r4c3"],["r3c4","r3c5","r3c6"],["r4c7","r5c7"]]
nabner r8c3-r9c3-r9c4-r8c4 distinct true
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r5c7-r6c7 sum 5
parity-cells r3c4 parity "odd"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[2.5,1.5],[1.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5]],"color":"#FF0A2F","thickness":8,"rounded":true}}
```

•    Normal Sudoku rules apply.
•    The grid is partially covered with fog. Correct digits will clear fog around that cell.
•    Cells along lines between two filled circles must have values between those in the circles.
•    Adjacent digits along a green german whisper line must have a difference of at least 5.
•    Adjacent cells connected with a V must sum to 5.
•    Adjacent cells connected with a X must sum to 10.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
•    Digits along a blue line create a sumline where the sum of digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.
•    Digits along a thin grey palindrome line read the same forwards or backwards.
•    Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•    Digits along a yellow nabner line cannot repeat and none may be consecutive.
•    Digits along red Ten Line contain contiguous groups of cells that sum to 10. These groups of cells cannot overlap. Digits may repeat freely on the line, even within sums.
•    Digits along each thermometer must increase starting from the bulb end.
•    The digits along each arrow must sum to the digit in the circled cell.
•    Cells with a filled circle must be odd.
•    Cells with a filled square must be even.

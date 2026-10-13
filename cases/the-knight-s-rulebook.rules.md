---
format: open-rules
title: The Knight's Rulebook
setter: Tingo
source: https://tinyurl.com/theknightsrulebook
case: https://sudoku-sleuth.com/cases/the-knight-s-rulebook
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage r5c6-r5c7 total 11 connected true
anti-knight
diagonal direction "anti"
thermo r1c7-r1c6-r1c5-r1c4-r1c3-r1c2
kropki-1: kropki r2c2-r3c2 colour "white"
kropki-2: kropki r8c4-r8c5 colour "black"
arrow r6c6 bulb ["r7c5"]
palindrome r8c5-r8c4-r7c5-r6c4-r5c3-r4c2-r3c2-r2c2
between r3c3-r4c2-r4c3-r4c4-r3c5 ends ["r2c3","r2c5"]
whispers r4c6-r4c7 gap 5
renban r7c6-r8c5
pair-1: pair r7c5-r8c5 sum 10
pair-2: pair r2c2-r2c3 sum 5
sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 2
parity-cells-1: parity-cells r2c8 parity "odd"
parity-cells-2: parity-cells r1c9 parity "even"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,2.5],[5.5,2.5],[5.5,1.5],[5.5,0.5]],"color":"#0000FF","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
Cells that are a knight's move (in chess) apart cannot contain the same digit.
The green line is German Whispers line. Adjacent digits must differ by at least 5.
The pink line is a Renban line. All digits on the line are consecutive in any order.
The blue line is a region sums line, where the digits in each 3x3 box must sum to the same value as the digits in any other 3x3 box the line intersects.
The gray line is a palindrome and must be read the same forwards and backwards.
The diagonal must contain each digit 1-9 once.
Digits along an arrow must sum to the value in the arrow's circle.
Digits cannot repeat within killer cages and must sum to the value in the top left corner.
Cells joined by "V" sum to 5. Cells joined by "X" sum to 10. Not all Xs and Vs are given.
White dots separate cells of consecutive digits. Black dots separate cells of 2:1 ratio values. Not all black and white dots are given.
Clues outside the grid are sandwich clues and indicate the sum of digits between the 1 and the 9 in that row or column.
Values on a thermometer must increase from the bulb end.
Digits along a between line must be of a value between the digits in the circles on either end of the line. Values on the line may repeat if allowed by other rules.
The gray circle indicates an odd digit
The gray square indicates an even digit

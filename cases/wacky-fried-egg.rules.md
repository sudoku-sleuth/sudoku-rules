---
format: open-rules
title: Wacky Fried Egg
setter: Katie Splendor and Little Splendor
source: https://sudokupad.app/iuhhb783gx
case: https://sudoku-sleuth.com/cases/wacky-fried-egg
library: https://rules.sudoku-sleuth.com/
status: read
exported: 822d41f285928a2c2a3df3f122cab343
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 black
kropki-2: kropki r5c5-r5c6 black
kropki-3: kropki r5c3-r6c3 black
kropki-4: kropki r3c6-r3c7 black
kropki-5: kropki r2c2-r2c3 black
kropki-6: kropki r2c1-r2c2 black
kropki-7: kropki r8c7-r8c8 white
whispers-1: whispers r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3 gap 4 loop true
whispers-2: whispers r6c2-r7c2-r8c3 gap 5
whispers-3: whispers r4c8-r3c8-r2c7 gap 5
region-sum-1: region-sum r4c1-r3c2-r2c3-r2c4-r2c5 segments [["r4c1"],["r3c2","r2c3"],["r2c4","r2c5"]]
region-sum-2: region-sum r8c5-r8c6-r8c7-r7c8-r6c9 segments [["r8c5","r8c6"],["r8c7","r7c8"],["r6c9"]]
renban-1: renban r6c2-r5c1-r4c1
renban-2: renban r4c8-r5c9-r6c9
renban-3: renban r2c5-r2c6-r2c7
renban-4: renban r8c3-r8c4-r8c5
pair-1: pair r1c8-r2c8 sum 10
pair-2: pair r8c2-r9c2 sum 10
pair-3: pair r3c9-r4c9 sum 10
pair-4: pair r6c1-r7c1 sum 5
pair-5: pair r8c8-r8c9 sum 5
```

- Normal sudoku rules apply.
- Dutch Whispers - neighboring digits along an orange Dutch Whisper line differ in value by at least 4.
- German Whispers - neighboring digits along a green German Whisper line differ in value by at least 5.
- Region Sum Lines - Box borders divide blue Region Sum lines into segments that sum to the same value. Different RSLs can have different values.
- Renban - purple Renban lines contain some group of consecutive digits in any order.
- XV sums - digits separated by an X sum to 10; digits separated by a V sum to 5. No negative constraint.
- Kropki dots - digits separated by a white Kropki dot have a difference in value of 1; digits separated by a black Kropki dot have a value ratio of 1:2. No negative constraint.

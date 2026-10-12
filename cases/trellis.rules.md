---
format: open-rules
title: Trellis
setter: Katie Splendor
source: https://sudokupad.app/katie-splendor/trellis
case: https://sudoku-sleuth.com/cases/trellis
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c5-r6c5 total 6 connected true
cage-2: cage r1c2-r2c2 total 14 connected true
cage-3: cage r7c8-r8c8 total 14 connected true
cage-4: cage r9c2-r9c3 total 8 connected true
cage-5: cage r3c8-r3c9 total 8 connected true
kropki-1: kropki r2c7-r2c8 colour "black"
kropki-2: kropki r7c2-r7c3 colour "black"
kropki-3: kropki r7c9-r8c9 colour "black"
kropki-4: kropki r2c5-r3c5 colour "black"
whispers-1: whispers r7c7-r8c7-r9c8-r9c9-r8c9-r7c8 gap 5 loop true
whispers-2: whispers r7c7-r6c6-r6c5-r5c4-r4c4-r4c5-r5c6-r6c6 gap 5
whispers-3: whispers r4c4-r3c3-r3c2-r2c1-r1c1-r1c2-r2c3-r3c3 gap 5
whispers-4: whispers r7c1-r8c1-r9c2-r9c3-r8c3-r7c2 gap 5 loop true
whispers-5: whispers r1c7-r2c7-r3c8-r3c9-r2c9-r1c8 gap 5 loop true
whispers-6: whispers r2c6-r3c5-r3c4-r2c4-r1c5-r1c6 gap 5 loop true
whispers-7: whispers r4c3-r5c3-r6c2-r6c1-r5c1-r4c2 gap 5 loop true
whispers-8: whispers r7c5-r8c4-r9c4-r9c5-r8c6-r7c6 gap 5 loop true
whispers-9: whispers r6c7-r6c8-r5c9-r4c9-r4c8-r5c7 gap 5 loop true
pair-1: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-2: pair r6c9-r7c9 relation {"op":"sum","value":10}
pair-3: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-4: pair r2c6-r2c7 relation {"op":"sum","value":10}
pair-5: pair r6c1-r7c1 relation {"op":"sum","value":5}
```

- Normal Sudoku rules apply.
- German Whispers - each digit along a green German Whisper line differs in value from its neighbor by at least 5.
- XV sums - digits separated by an X sum to a value of 10; digits separated by a V sum to a value of 5. No negative constraint.
- Ratio Kropki dots - digits separated by a black dot have a value ratio of 1:2. No negative constraint.
- Killer Cages - digits inside a killer cage are distinct and add up to the number in the top left corner of the cage.

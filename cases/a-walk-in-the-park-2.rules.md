---
format: open-rules
title: A Walk in the Park
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/a-walk-in-the-park-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 colour "white"
kropki-2: kropki r2c5-r2c6 colour "white"
kropki-3: kropki r3c5-r4c5 colour "white"
arrow-1: arrow r3c3-r4c3-r5c3 bulb ["r2c3"]
arrow-2: arrow r4c7-r5c7 bulb ["r3c7"]
whispers-1: whispers r3c3-r4c2-r5c1 gap 5
whispers-2: whispers r3c3-r4c4-r5c5 gap 5
whispers-3: whispers r4c7-r4c6-r5c5 gap 5
whispers-4: whispers r4c7-r5c8 gap 5
whispers-5: whispers r8c2-r7c1-r6c2-r5c3 gap 5
whispers-6: whispers r5c3-r6c3-r7c3-r8c3-r8c4 gap 5
whispers-7: whispers r8c6-r7c5-r6c6-r5c7 gap 5
whispers-8: whispers r5c7-r6c7-r7c7-r8c7-r8c8 gap 5
whispers-9: whispers r1c1-r1c2-r1c3-r1c4-r1c5 gap 5
whispers-10: whispers r1c6-r1c7-r1c8-r1c9 gap 5
pair-1: pair r9c1-r9c2 sum 10
pair-2: pair r9c5-r9c6 sum 10
pair-3: pair r9c8-r9c9 sum 5
pair-4: pair r8c6-r9c6 sum 5
pair-5: pair r4c3-r5c3 sum 5
parity-cells-1: parity-cells r9c4-r9c5-r9c6-r9c7-r9c8 parity "odd"
parity-cells-2: parity-cells r9c1-r9c2-r9c3-r9c9 parity "even"
```

Normal Sudoku rules apply. HEADS and BODIES- Numbers on arrows sum to the number in the arrow's circle. ARMS and LEGS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. SKY- Numbers on blue lines are each a set of non-repeating, consecutive digits, in any order. PATH- Numbers in gray squares are even. Numbers in gray circles are odd. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all X, V and dots are given.

---
format: open-rules
title: Clown (小丑)
setter: Will Power
source: https://sudokupad.app/6jodv8qh8p
case: https://sudoku-sleuth.com/cases/clown
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4dbe5ebb3657b1cba900bc9230357bc6
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r3c6 white
kropki-2: kropki r2c5-r2c6 white
kropki-3: kropki r2c4-r2c5 white
kropki-4: kropki r6c4-r7c4 white
kropki-5: kropki r7c4-r7c5 white
kropki-6: kropki r5c3-r5c4 black
kropki-7: kropki r5c4-r6c4 black
kropki-8: kropki r4c3-r5c3 black
arrow-1: arrow r5c4-r6c4 bulb ["r4c4"]
arrow-2: arrow r5c6-r6c6 bulb ["r4c6"]
arrow-3: arrow r7c4-r7c5-r7c6 bulb ["r6c5"]
arrow-4: arrow r8c6-r8c5 bulb ["r7c7"]
arrow-5: arrow r8c4-r8c5 bulb ["r7c3"]
arrow-6: arrow r2c8-r1c9 bulb ["r3c7"]
arrow-7: arrow r2c6-r1c7 bulb ["r3c6"]
arrow-8: arrow r2c5-r1c5 bulb ["r3c5"]
arrow-9: arrow r2c4-r1c3 bulb ["r3c4"]
arrow-10: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-11: arrow r5c9-r6c9 bulb ["r4c8"]
arrow-12: arrow r5c1-r6c1 bulb ["r4c2"]
pair-1: pair r7c5-r8c5 sum 5
pair-2: pair r3c9-r4c9 sum 5
pair-3: pair r3c1-r4c1 sum 5
```

Normal Sudokuy rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with a V between them sum to 5. Not all possible dots and V are shown.

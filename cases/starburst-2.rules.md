---
format: open-rules
title: Starburst
setter: Will Power
source: https://sudokupad.app/df89ddueln
case: https://sudoku-sleuth.com/cases/starburst-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c7-r3c8-r3c9
thermo-2: thermo r3c3-r3c2-r3c1
thermo-3: thermo r5c1-r5c2-r5c3
thermo-4: thermo r5c9-r5c8-r5c7
thermo-5: thermo r6c4-r7c3-r8c2-r9c1
thermo-6: thermo r6c6-r7c7-r8c8
kropki r2c5-r3c5 colour "white"
arrow-1: arrow r4c4-r4c3 bulb ["r4c5"]
arrow-2: arrow r4c6-r4c7-r4c8 bulb ["r4c5"]
arrow-3: arrow r5c6-r6c7-r7c8-r8c9 bulb ["r4c5"]
arrow-4: arrow r5c5-r6c5-r7c5 bulb ["r4c5"]
arrow-5: arrow r5c4-r6c3-r7c2-r8c1 bulb ["r4c5"]
arrow-6: arrow r3c6-r2c7-r1c8 bulb ["r4c5"]
arrow-7: arrow r3c4-r2c3-r1c2 bulb ["r4c5"]
arrow-8: arrow r3c5-r2c5 bulb ["r4c5"]
pair-1: pair r2c7-r3c7 relation {"op":"sum","value":10}
pair-2: pair r4c8-r5c8 relation {"op":"sum","value":10}
pair-3: pair r7c7-r7c8 relation {"op":"sum","value":10}
pair-4: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-5: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-6: pair r8c8-r8c9 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS- Numbers on thermometers increase from the bulb end. KROPKI PAIRS- Numbers with a white dot between them are consecutive. XV PAIRS- Numbers with an X between them sum to 10. Not all possible dots and X are given.

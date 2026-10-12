---
format: open-rules
title: Mr. Owl
setter: Will Power
source: https://sudokupad.app/ryu9dv48z2
case: https://sudoku-sleuth.com/cases/mr-owl
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c3-r5c4 total 9 connected true
cage-2: cage r5c6-r5c7 total 9 connected true
cage-3: cage r2c5-r3c5-r3c6 total 9 connected true
cage-4: cage r4c1-r4c2-r5c1 total 9 connected true
thermo-1: thermo r3c5-r2c4-r2c3-r3c2
thermo-2: thermo r3c5-r2c6-r2c7-r3c8
thermo-3: thermo r7c8-r8c8-r9c8
thermo-4: thermo r7c2-r8c2-r9c2
kropki-1: kropki r2c5-r3c5 colour "white"
kropki-2: kropki r8c3-r8c4 colour "white"
arrow-1: arrow r4c5-r3c4-r3c3-r4c2 bulb ["r5c5"]
arrow-2: arrow r4c5-r3c6-r3c7-r4c8 bulb ["r5c5"]
arrow-3: arrow r6c5-r7c4-r7c3-r6c2 bulb ["r5c5"]
arrow-4: arrow r6c5-r7c6-r7c7-r6c8 bulb ["r5c5"]
arrow-5: arrow r8c4-r8c3 bulb ["r8c5"]
```

BOY: "Mr. Owl, how many licks does it take to get to the center of a Tootsie Pop?"
MR. OWL: "Let's find out.... ONE, TWO, THREE!" Crunch! "Three!"
Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS- Numbers on thermometers increase from the bulb end. KILLER CAGES- Numbers in cages sum to 9. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.

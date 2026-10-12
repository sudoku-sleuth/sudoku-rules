---
format: open-rules
title: Agents of Chaos
setter: Blobz
source: https://sudokupad.app/blobz/agents-of-chaos
case: https://sudoku-sleuth.com/cases/agents-of-chaos
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 20 connected true
cage-2: cage r2c2-r2c3-r3c2 total 9 connected true
cage-3: cage r3c3-r3c4-r4c3 total 9 connected true
cage-4: cage r1c4-r1c5-r1c6 total 17 connected true
cage-5: cage r1c8-r1c9-r2c9 total 16 connected true
cage-6: cage r2c7-r2c8-r3c8 total 11 connected true
cage-7: cage r3c6-r3c7-r4c7 total 14 connected true
cage-8: cage r4c1-r5c1-r6c1 total 12 connected true
cage-9: cage r4c9-r5c9-r6c9 total 15 connected true
cage-10: cage r6c3-r7c3-r7c4 total 15 connected true
cage-11: cage r7c2-r8c2-r8c3 total 20 connected true
cage-12: cage r8c1-r9c1-r9c2 total 8 connected true
cage-13: cage r6c7-r7c6-r7c7 total 13 connected true
cage-14: cage r7c8-r8c7-r8c8 total 19 connected true
cage-15: cage r8c9-r9c8-r9c9 total 8 connected true
cage-16: cage r9c4-r9c5-r9c6 total 23 connected true
whispers-1: whispers r5c3-r5c4-r6c5-r7c6-r7c7 gap 5
whispers-2: whispers r7c3-r7c4-r6c5-r5c6-r5c7 gap 5
whispers-3: whispers r6c2-r6c3-r6c4 gap 5
whispers-4: whispers r6c6-r6c7-r6c8 gap 5
region-sum-1: region-sum r5c2-r4c2-r3c2-r2c2-r3c3-r3c4-r3c5-r3c6-r3c7-r2c8-r3c8-r4c8-r5c8 segments [["r5c2","r4c2"],["r3c2","r2c2","r3c3"],["r3c4","r3c5","r3c6"],["r3c7","r2c8","r3c8"],["r4c8","r5c8"]]
region-sum-2: region-sum r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8 segments [["r7c2","r8c3"],["r8c4","r8c5","r8c6"],["r8c7","r7c8"]]
quadruple-1: quadruple r4c3-r4c4-r5c3-r5c4 digits [1]
quadruple-2: quadruple r4c6-r4c7-r5c6-r5c7 digits [1]
parity-cells r6c5 parity "odd"
```

Normal sudoku rules apply.

In cages, digits do not repeat, and sum to the given total.

Box borders divide blue lines into segments with the same sum.

Adjacent digits along green lines differ by at least 5.

Digits in white circles must appear at least once within the surrounding 2x2 area.

The grey circle contains an odd digit.

(Dedicated to my kittens "Wednesday" and "Edward ScissorPaws" !)

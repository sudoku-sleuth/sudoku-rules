---
format: open-rules
title: Stitched Lines
setter: Will Power
source: https://sudokupad.app/falhq6bz4v
case: https://sudoku-sleuth.com/cases/stitched-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: ba2afde91f694e68cffa31ec07b27837
---

```rules
sudoku 9x9
cage r9c8-r9c9 total 5 connected true
kropki-1: kropki r6c6-r6c7 white
kropki-2: kropki r6c7-r7c7 white
kropki-3: kropki r2c4-r2c5 white
kropki-4: kropki r2c5-r2c6 white
kropki-5: kropki r2c6-r2c7 white
kropki-6: kropki r5c7-r6c7 black
whispers-1: whispers r7c4-r8c3-r9c4-r8c5 gap 5
whispers-2: whispers r5c2-r4c1-r3c2-r4c3 gap 5
whispers-3: whispers r2c5-r1c6-r2c7-r3c6 gap 5
whispers-4: whispers r5c8-r6c9-r7c8-r6c7 gap 5
renban-1: renban r8c4-r7c5-r8c6-r7c7-r6c6
renban-2: renban r6c4-r7c3-r6c2-r5c3-r4c2
renban-3: renban r4c4-r3c3-r2c4-r3c5-r2c6
renban-4: renban r4c6-r3c7-r4c8-r5c7-r6c8
rotational-sums sums [10]
```

Thanks to NicoD's puzzle "Serpentine" as the inspiration for the line pattern.
Normal Sudoku rules apply.
ROTATIONAL SYMMETRY- Cells 180 degrees apart in the puzzle sum to 10.
KILLER CAGE- Numbers in the cage sum to the number in the top left corner of the cage.
GERMAN WHISPERS LINES- Numbers on green lines are at least 5 apart from their neighbors on the line.
RENBAN(+)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Also, each RENBAN line contains either a 1 or 9.
KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

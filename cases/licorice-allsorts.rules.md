---
format: open-rules
title: Licorice Allsorts
setter: Blobz
source: https://sudokupad.app/blobz/licorice-allsorts
case: https://sudoku-sleuth.com/cases/licorice-allsorts
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2134eed95a60d84db9f290ab7360c1dd
---

```rules
sudoku 9x9
kropki-1: kropki r7c9-r8c9 black
kropki-2: kropki r7c4-r7c5 black
kropki-3: kropki r4c7-r5c7 black
kropki-4: kropki r7c6-r7c7 black
kropki-5: kropki r7c5-r7c6 black
kropki-6: kropki r6c1-r7c1 black
kropki-7: kropki r9c7-r9c8 black
kropki-8: kropki r9c1-r9c2 black
whispers-1: whispers r1c5-r1c6-r2c6 gap 5
whispers-2: whispers r2c2-r3c2-r3c1 gap 5
whispers-3: whispers r1c7-r2c7-r2c8 gap 5
whispers-4: whispers r5c9-r5c8-r6c8 gap 5
whispers-5: whispers r8c5-r8c6-r9c6 gap 5
whispers-6: whispers r4c4-r4c5-r5c5 gap 5
whispers-7: whispers r7c3-r6c3-r6c4 gap 5
entropic-1: entropic r2c5-r3c5-r3c6
entropic-2: entropic r2c1-r1c1-r1c2
entropic-3: entropic r3c8-r3c9-r4c9
entropic-4: entropic r6c6-r6c7-r7c7
entropic-5: entropic r8c8-r8c7-r9c7
entropic-6: entropic r8c2-r8c1-r9c1
renban-1: renban r3c3-r3c4-r2c4
renban-2: renban r1c8-r1c9-r2c9
renban-3: renban r4c6-r5c6-r5c7
renban-4: renban r8c9-r9c9-r9c8
renban-5: renban r5c2-r5c3-r4c3
renban-6: renban r8c3-r8c4-r9c4
region-sum-1: region-sum r2c3-r1c3-r1c4 segments [["r2c3","r1c3"],["r1c4"]]
region-sum-2: region-sum r3c7-r4c7-r4c8 segments [["r3c7"],["r4c7","r4c8"]]
region-sum-3: region-sum r6c9-r7c9-r7c8 segments [["r6c9"],["r7c9","r7c8"]]
region-sum-4: region-sum r6c5-r7c5-r7c6 segments [["r6c5"],["r7c5","r7c6"]]
region-sum-5: region-sum r6c1-r6c2-r7c2 segments [["r6c1","r6c2"],["r7c2"]]
```

Normal sudoku rules apply. 

Orange “entropic” lines contain a low digit {123}, a medium digit {456}, and a high digit {789}.

Adjacent digits along green “whisper” lines differ by 5 or more. 

Box borders divide blue “region sum” lines into segments with the same sum.

Pink “renban” lines contain a non-repeating consecutive sequence in any order.

Black dots separate digits where one is double the other. Not all such dots are given.

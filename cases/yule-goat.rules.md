---
format: open-rules
title: Yule Goat
setter: gUBBLOR
source: https://sudokupad.app/utspnfcril
case: https://sudoku-sleuth.com/cases/yule-goat
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r3c9=5
exported: 855b67b837a99e938741a4fc2296e7e9
---

```rules
sudoku 9x9
kropki r3c2-r4c2 black
entropic-1: entropic r3c2-r4c1-r5c1-r5c2-r4c2-r5c3-r6c4-r7c4-r8c4-r9c4-r9c5-r8c5-r7c5-r7c6-r7c7-r8c7-r9c7-r9c8-r8c8-r7c8-r6c8-r5c8-r5c7-r5c6-r5c5-r4c4-r3c3 loop true
entropic-2: entropic r3c2-r2c3-r1c4-r1c5-r1c6-r2c7
entropic-3: entropic r5c8-r4c9-r3c9
renban-1: renban r8c4-r8c5
renban-2: renban r8c7-r8c8
renban-3: renban r4c4-r5c3
renban-4: renban r5c7-r6c7-r7c7
renban-5: renban r5c5-r6c5-r7c5
pair r5c1-r5c2 sum 10
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,0.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"❄","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Entropy (Yule goat body): The hay colored line is an entropic line. Each set of three consecutive digits on the line must be one each from (1,2,3), (4,5,6), and (7,8,9). Digits may repeat on the line.

Region Sum Line (Horn/tail): Digits along each brown region sum line have the same sum within each box the line passes through. Digits may repeat on the lines.

Renban (Ribbons): Digits along each red renban line must be a set of consecutive digits in any order, and must not repeat.

X (Mouth): Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Black kropki dot (Eye): A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

White kropki dots (Snowflakes): A snowflake between cells indicates cells with consecutive values. Not all dots are shown.

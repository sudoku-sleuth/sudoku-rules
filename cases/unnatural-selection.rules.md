---
format: open-rules
title: Unnatural Selection
setter: The Bard
source: https://sudokupad.app/1t5wu1cgzo
case: https://sudoku-sleuth.com/cases/unnatural-selection
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6-r3c4-r3c5-r3c6 total 42 connected true
cage-2: cage r1c4-r1c5-r2c4-r2c5 total 21 connected true
kropki-1: kropki r7c6-r8c6 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r4c3-r5c3 colour "white"
kropki-4: kropki r5c1-r5c2 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
kropki-6: kropki r8c4-r9c4 colour "white"
kropki-7: kropki r5c9-r6c9 colour "black"
kropki-8: kropki r6c8-r6c9 colour "black"
kropki-9: kropki r4c7-r4c8 colour "black"
arrow-1: arrow r8c8-r9c9 bulb ["r7c7"]
arrow-2: arrow r8c9-r9c8-r8c7 bulb ["r7c8"]
arrow-3: arrow r3c2-r2c2-r1c2 bulb ["r3c3"]
arrow-4: arrow r3c2-r2c2-r1c2 bulb ["r3c1"]
arrow-5: arrow r3c2-r2c2-r1c2 bulb ["r2c1"]
arrow-6: arrow r5c6-r6c5 bulb ["r4c6"]
arrow-7: arrow r5c5-r6c4 bulb ["r4c5"]
arrow-8: arrow r8c2-r9c3 bulb ["r7c3"]
arrow-9: arrow r8c1-r7c1 bulb ["r9c2"]
whispers-1: whispers r1c5-r1c6-r2c7-r3c8-r4c9-r5c9 gap 5
whispers-2: whispers r5c1-r6c1-r7c2-r8c3-r9c4-r9c5 gap 5
palindrome-1: palindrome r3c6-r4c7-r5c8-r6c7-r7c6
palindrome-2: palindrome r3c4-r4c3-r5c2-r6c3-r7c4
renban-1: renban r6c9-r7c8-r8c7-r9c6
renban-2: renban r1c4-r2c3-r3c2-r4c1
pair-1: pair r3c7-r3c8 relation {"op":"sum","value":10}
pair-2: pair r2c7-r2c8 relation {"op":"sum","value":10}
pair-3: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-4: pair r1c8-r2c8 relation {"op":"sum","value":10}
quadruple-1: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,3,4,9]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [7,7,8,9]
```

```drawing
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":18}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":18}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"<","textColor":"#000000","fontSize":18}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","textColor":"#000000","fontSize":18}}
```

Abnormal Sudoku
Normal sudoku rules DO NOT APPLY. Place the digits 1-9, nine times each. Each box must only contain three individual digits, and each digits repeats 3 times per box. 
Killer cages: digits in a cage add up to the value in the corner, and digits may repeat.
Arrows: digits along an arrow add up to the value in the circle.
X: Digits with an X between the add up to 10.
Kropki: Digits with a white dot between them are consecutive, and those with a black dot are in a ratio of 2:1.
Quad: Digits in the circle must appear in one of the 4 surrounding cells. 
Inequality: digits with an inequality symbol, <>, point to which digit is smaller. 
Renban: Digits along the purple line must be consecutive in some order.
Palindrome: Digits on the grey line must read the same forward or backwards.
German Whisper: Digits along the green line must differ by at least 5.

---
format: open-rules
title: We Raise Our Cups
setter: Persephone and Eurydice
source: https://sudokupad.app/wxgneejwid
case: https://sudoku-sleuth.com/cases/we-raise-our-cups
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e27bc4ae4e3fdf21f98c550b6c65fb75
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r7c1 black
kropki-2: kropki r5c5-r6c5 black
kropki-3: kropki r7c9-r8c9 black
kropki-4: kropki r9c7-r9c8 black
kropki-5: kropki r6c6-r6c7 black
whispers-1: whispers r3c2-r4c2-r5c2-r5c1 gap 4
whispers-2: whispers r5c2-r5c3 gap 4
whispers-3: whispers r5c5-r6c5-r7c5-r7c4 gap 4
whispers-4: whispers r7c5-r7c6 gap 4
whispers-5: whispers r4c8-r5c8-r6c8-r6c7 gap 4
whispers-6: whispers r6c8-r6c9 gap 4
parity r4c4-r4c5-r4c6
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.65,2.4],"width":0.2,"height":0.8,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.6,0.6],"width":0.2,"height":0.8,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.4,1.5],"width":1.3,"height":0.12,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.4,4.5],"width":1.3,"height":0.13,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[2.1,0.5],[2.5,0.9],[2.5,2.1],[2.2,2.4],[1.9,2.5],[0.5,2.5]],"color":"#ffa600ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[4.1,3.5],[4.5,3.9],[4.5,5.1],[4.1,5.5],[2.5,5.5]],"color":"#ffa600ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[3.1,6.5],[3.5,6.9],[3.5,8.1],[3.1,8.5],[1.5,8.5]],"color":"#ffa600ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.313,0.813],[2.313,2.188]],"color":"#a2020299","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.188,0.563],[1.188,2.438]],"color":"#a2020299","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.313,3.813],[4.313,5.188]],"color":"#a2020299","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.75,6.625],[2.75,8.375]],"color":"#a2020299","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.375,6.875],[3.375,8.125]],"color":"#a2020299","thickness":9.6,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,3.6],"width":0.2,"height":0.72,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,5.4],"width":0.2,"height":0.75,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.05,7.5],"width":1.68,"height":0.51,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.95,6.6],"width":0.12,"height":0.39,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.95,8.4],"width":0.12,"height":0.39,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.35,6.8],"width":0.07,"height":0.1,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.35,8.2],"width":0.07,"height":0.1,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,6.65],"width":0.05,"height":0.11,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,8.35],"width":0.07,"height":0.07,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.1,2.35],"width":0.12,"height":0.21,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.1,0.6],"width":0.2,"height":0.19,"rounded":false,"fill":"#ff909099","thickness":0,"angle":0}}
```

• Normal Sudoku rules apply.
• Whisper-4: Adjacent digits along an orange Whisper-4 line must differ by at least four. The thinner lines forming the wine glasses are Whisper-4 Lines.
• Parity Lines: Digits along a red parity line alternate odd/even. The thicker lines at the top and bottom of the wine are Parity Lines.
• Wine Drops (ratio pairs): Cells separated by a red wine drop are in a 2:1 ratio.

The red shading of the wine is cosmetic only.

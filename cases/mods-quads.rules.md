---
format: open-rules
title: Mods & Quads
setter: Marty Sears
source: https://tinyurl.com/2rjmajdn
case: https://sudoku-sleuth.com/cases/mods-quads
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2],"width":0.493,"height":0.493,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.4}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5],[2.5,2.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[5.5,6.5],[4.5,5.5],[5.5,4.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[7.5,8.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[8.5,0.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[8.5,5.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
```

Normal sudoku rules apply.

Turquoise lines are 'Same Difference' lines. Each pair of adjacent digits on one of these lines has the same difference. However, this 'difference value' may be different for different lines.

Each quad circle contains four digits which must appear in the four surrounding cells. Unfortunately these quad clues have all been written in white text, and so are invisible. Digits might repeat within a quad circle.

Furthermore, a digit in a quad circle indicates exactly how many times that digit appears in a quad circle.

Eg: if there is a 5 in a quad circle, there are five 5s in quad circles, and some of these might be in the same circle.

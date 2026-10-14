---
format: open-rules
title: Up to N-urikabe
setter: sujoyku
source: https://sudokupad.app/144lsr5q8r
case: https://sudoku-sleuth.com/cases/up-to-n-urikabe
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: a1a0fbd8564fe6dd9c337b89ae5e2e6e
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"21","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"28","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"25","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"22","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
```

𝐒𝐮𝐝𝐨𝐤𝐮
- Each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

𝐍𝐮𝐫𝐢𝐤𝐚𝐛𝐞
- Shade all cells either blue (water) or green (land) such that all water cells are orthogonally connected and form no 2x2 areas. Each area of orthogonally connected green cells is called an island.

𝐂𝐢𝐫𝐜𝐥𝐞𝐬
- If a circle cell is water, its digit counts the number of water cells in the (up to) 3x3 area around the clue, including itself.
- If a circle cell is land, its digit counts the number of cells in its island.

𝐔𝐩 𝐭𝐨 𝐍-𝐬𝐮𝐦𝐬
- A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
- Moreover, all cells before the digit N have the same shading and the cell containing N has the opposite shading. In other words: The sum entirely consists of water and N is land, or the sum entirely consists of land and N is water.

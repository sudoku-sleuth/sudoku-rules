---
format: open-rules
title: Omni-Peas
setter: sujoyku
source: https://sudokupad.app/ag1fd0lsfx
case: https://sudoku-sleuth.com/cases/omni-peas
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 129ba283c7ecc6a4dae14d472f1dcf71
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[6.5,0.5],[7.5,1.5],[7.5,2.5],[6.5,1.5],[6.5,2.5],[5.5,2.5],[4.5,1.5],[4.5,7.5],[2.5,7.5],[3.5,6.5],[3.5,5.5],[2.5,4.5],[1.5,4.5],[1.5,3.5],[0.5,4.5],[0.5,1.5],[1.5,2.5],[4.5,2.5]],"color":"#ff9d00ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,8.5],[4.5,8.5]],"color":"#ff9d00ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5],[8.5,6.5],[8.5,8.5]],"color":"#ff9d00ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":2.56,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Split Peas: The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.

- Omnipotent Lines: The orange lines are so-called Omnipotent Lines, i.e. each pair of adjacent digits on such a line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits (including circles!) on a line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two are fulfilled simultaneously.) For example, a 3 may be adjacent on a line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).

---
format: open-rules
title: "Zodiac Project: Cage Decoder"
setter: sujoyku
source: https://sudokupad.app/3jdtsh6b5a
case: https://sudoku-sleuth.com/cases/zodiac-project-cage-decoder
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[3,4,5],"label":"a","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[1,10,11],"label":"c","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[28,37,46],"label":"c","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[34,43,52],"label":"d","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[69,70,79],"label":"d","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[39,48,57],"label":"f","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[7,8,17,26],"label":"be","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[54,63,72,73],"label":"be","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[27,36,45],"label":"gb","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[13,21,22],"label":"gg","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[58,59,60],"label":"bc","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[74,75,76],"label":"bc","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[49,50,51],"label":"bc","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"be","textColor":"#000000","fontSize":14}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"cf","textColor":"#000000","fontSize":14}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. The diamonds contain a complete set of the digits from 1 to 9. In other words, no two diamonds may contain identical digits. Each letter represents a digit. If a letter appears multiple times in the grid, it always represents the same digit. Distinct letters must represent distinct digits. A digit in a circle must appear in one of the four surrounding cells. Digits in a cage must sum to the clue in the top left. (Two letter clues are read as standard two-digit numbers from left to right, i.e. if a represents 1 and b represents 2 the combination ab is a 12 clue.)

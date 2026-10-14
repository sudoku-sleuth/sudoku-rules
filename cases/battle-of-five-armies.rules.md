---
format: open-rules
title: Battle of Five Armies
setter: Blobz
source: https://sudokupad.app/blobz/battle-of-five-armies
case: https://sudoku-sleuth.com/cases/battle-of-five-armies
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0190fc733f9bc3f94acd8f67515ae6ce
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r2c2-r2c3-r3c3 connected true
cage-2: cage r2c5-r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7 connected true
cage-3: cage r2c4-r3c4-r4c4-r4c5-r5c2-r5c3-r5c4-r5c5-r6c4 connected true
cage-4: cage r5c7-r6c7-r6c8-r7c5-r7c6-r7c7-r7c8-r8c7-r9c7 connected true
cage-5: cage r6c3-r7c3-r7c4-r8c3-r8c4-r9c2-r9c3-r9c4-r9c5 connected true
pair-1: pair r5c3-r6c3 difference 8
pair-2: pair r7c4-r7c5 difference 3
pair-3: pair r2c4-r2c5 difference 2
pair-4: pair r1c6-r2c6 difference 4
kropki r4c5-r4c6 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Wolves","textColor":"#8383836d","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Elves","textColor":"#8383836d","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Goblins","textColor":"#8383836d","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Dwarves","textColor":"#8383836d","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Men","textColor":"#8383836d","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#6578e232","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#54df3f2a","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#a959ed3b","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#dc232334","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d09f3f34","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[5.38,4.06],[5.5,4.11],[5.62,4.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[5.62,4.94],[5.5,4.89],[5.38,4.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[5.06,4.62],[5.11,4.5],[5.06,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[5.94,4.38],[5.89,4.5],[5.94,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.38,4.06],[2.5,4.11],[2.62,4.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.62,4.94],[2.5,4.89],[2.38,4.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[2.06,4.62],[2.11,4.5],[2.06,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[2.94,4.38],[2.89,4.5],[2.94,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[4.38,5.06],[4.5,5.11],[4.62,5.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[4.62,5.94],[4.5,5.89],[4.38,5.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[4.06,5.62],[4.11,5.5],[4.06,5.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[4.94,5.38],[4.89,5.5],[4.94,5.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[3.38,1.06],[3.5,1.11],[3.62,1.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[3.06,1.62],[3.11,1.5],[3.06,1.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[3.94,1.38],[3.89,1.5],[3.94,1.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[7.62,5.94],[7.5,5.89],[7.38,5.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[7.06,5.62],[7.11,5.5],[7.06,5.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[7.94,5.38],[7.89,5.5],[7.94,5.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[7.38,4.06],[7.5,4.11],[7.62,4.06]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[7.06,4.62],[7.11,4.5],[7.06,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[7.94,4.38],[7.89,4.5],[7.94,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.62,2.94],[3.5,2.89],[3.38,2.94]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[3.06,2.62],[3.11,2.5],[3.06,2.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[3.94,2.38],[3.89,2.5],[3.94,2.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"cage","cells":[18,27,36,45,54],"label":"Arken","color":"#0813ee7e","labelColor":"#0813ee7e"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"cage","cells":[26,35,44,53,62],"label":"Stone","color":"#0813ee7e","labelColor":"#0813ee7e"}}
```

So began a battle that none had expected; and it was called the Battle of Five Armies, and it was very terrible. Upon one side were the Goblins and the Wild Wolves, and upon the other were Elves and Men and Dwarves. The elves were the first to charge. Their hatred for the goblins is cold and bitter. Their spears and swords shone in the gloom with a gleam of chill flame, so deadly was the wrath of the hands that held them.

Normal sudoku rules apply. 

Begin by filling in the "Arken" and "Stone" cages with the corresponding digits from the previous puzzle.

Digits in cages do not repeat.

Digits in "boulder" (grey) cells are SMALLER than digits in all orthogonally adjacent non-grey cells.

Digits separated by a white dot differ by the amount shown.

---
format: open-rules
title: Positive Negativity 4
setter: The Bard
source: https://sudokupad.app/huww43ut6t
case: https://sudoku-sleuth.com/cases/positive-negativity-4
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2 gap 5
whispers-2: whispers r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 gap 5
whispers-3: whispers r2c1-r2c2-r2c3 gap 5
whispers-4: whispers r2c8-r2c9 gap 5
whispers-5: whispers r3c1-r3c2 gap 5
whispers-6: whispers r3c4-r3c5-r3c6 gap 5
whispers-7: whispers r3c8-r3c9 gap 5
whispers-8: whispers r4c2-r4c3-r4c4 gap 5
whispers-9: whispers r5c1-r5c2 gap 5
whispers-10: whispers r5c4-r5c5-r5c6-r5c7-r5c8 gap 5
whispers-11: whispers r6c2-r6c3-r6c4 gap 5
whispers-12: whispers r6c5-r6c6-r6c7-r6c8-r6c9 gap 5
whispers-13: whispers r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 gap 5
whispers-14: whispers r7c2-r7c1 gap 5
whispers-15: whispers r8c1-r8c2-r8c3 gap 5
whispers-16: whispers r9c1-r9c2 gap 5
whispers-17: whispers r8c8-r8c9 gap 5
whispers-18: whispers r9c8-r9c7 gap 5
whispers-19: whispers r9c3-r9c4-r9c5 gap 5
negative relations [{"op":"at-least","value":5}] except [["r1c1","r1c2"],["r1c4","r1c5"],["r1c5","r1c6"],["r1c6","r1c7"],["r1c7","r1c8"],["r1c8","r1c9"],["r2c1","r2c2"],["r2c2","r2c3"],["r2c8","r2c9"],["r3c1","r3c2"],["r3c4","r3c5"],["r3c5","r3c6"],["r3c8","r3c9"],["r4c2","r4c3"],["r4c3","r4c4"],["r5c1","r5c2"],["r5c4","r5c5"],["r5c5","r5c6"],["r5c6","r5c7"],["r5c7","r5c8"],["r6c2","r6c3"],["r6c3","r6c4"],["r6c5","r6c6"],["r6c6","r6c7"],["r6c7","r6c8"],["r6c8","r6c9"],["r7c4","r7c5"],["r7c5","r7c6"],["r7c6","r7c7"],["r7c7","r7c8"],["r7c8","r7c9"],["r7c2","r7c1"],["r8c1","r8c2"],["r8c2","r8c3"],["r9c1","r9c2"],["r8c8","r8c9"],["r9c8","r9c7"],["r9c3","r9c4"],["r9c4","r9c5"]] direction "horizontal"
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","textColor":"#000000","fontSize":20}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":20}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"20","textColor":"#000000","fontSize":20}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":20}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#000000","fontSize":20}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":20}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":20}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"13","textColor":"#000000","fontSize":20}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"5","textColor":"#000000","fontSize":20}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":20}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"10","textColor":"#000000","fontSize":20}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","textColor":"#000000","fontSize":20}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"26","textColor":"#000000","fontSize":20}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#000000","fontSize":20}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":20}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","textColor":"#000000","fontSize":20}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#000000","fontSize":20}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"45","textColor":"#000000","fontSize":20}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"31","textColor":"#000000","fontSize":20}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":20}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"16","textColor":"#000000","fontSize":20}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"29","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Yin Yang: shade some cells so that all shaded and unshaded cells form 2 orthogonally connected areas such that no 2x2 area is entirely shaded or unshaded, and all the digits in the shaded area are negative values for all clues.
German Whispers: Adjacent digits on a green line must have a difference of at least 5. All horizonal German Whisper lines have been given, i.e. there is a negative constraint, but it only applies to digits horizontally adjacent to each other. 
X-Sums: A number outside the grid gives the sum of the first N digits in that row or column, where N is the digit in the cell closest to the given clue. However, the solver must determine if the sum is negative or positive.

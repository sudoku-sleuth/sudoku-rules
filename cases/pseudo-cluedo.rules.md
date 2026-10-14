---
format: open-rules
title: Pseudo Cluedo
setter: Marty Sears
source: https://sudokupad.app/el9sus7p0o
case: https://sudoku-sleuth.com/cases/pseudo-cluedo
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
exported: 8d49cc7849850c5e712a533cb67cb0d3
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
cage-1: cage r1c1-r1c2-r2c2-r2c3-r3c3 connected true
cage-2: cage r1c6-r2c5-r2c6-r3c5-r3c6 connected true
cage-3: cage r1c9-r2c8-r2c9-r3c8 connected true
cage-4: cage r4c6-r5c4-r5c5-r5c6-r6c4 connected true
cage-5: cage r7c5-r8c5-r8c6-r9c5 connected true
cage-6: cage r5c8-r6c8-r6c9-r7c9-r8c9 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,4.5],"width":1.17,"height":0.26,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,4.5],"width":1.17,"height":0.26,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0],"width":0.26,"height":1.17,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,9],"width":0.26,"height":1.17,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,0],"width":0.6,"height":0.6,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,9],"width":0.6,"height":0.6,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,0],"width":0.6,"height":0.6,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[9,9],"width":0.6,"height":0.6,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":9,"height":9,"rounded":false,"fill":"#f5ecdfff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,1.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,2.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1],"width":0.4,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2],"width":0.4,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#81e679ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,5.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,5],"width":1.6,"height":1.6,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":2.6,"height":0.6,"rounded":false,"fill":"#ca9befff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#ca9befff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#ca9befff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,3.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#ca9befff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,5.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#ca9befff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8],"width":0.4,"height":0.6,"rounded":false,"fill":"#90c8fcff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,7.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#90c8fcff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#90c8fcff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#90c8fcff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0.6,"height":2.6,"rounded":false,"fill":"#90c8fcff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.6,"height":2.6,"rounded":false,"fill":"#fee769ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#fee769ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5],"width":0.4,"height":0.6,"rounded":false,"fill":"#fee769ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#fe7575ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.6,"height":0.6,"rounded":false,"fill":"#fe7575ff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8],"width":1.6,"height":0.6,"rounded":false,"fill":"#fe7575ff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,7.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#fe7575ff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,8.5],"width":0.6,"height":0.4,"rounded":false,"fill":"#fe7575ff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#FFFFFF","fontSize":31}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"W","textColor":"#ffffffa9","fontSize":31}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"Z","textColor":"#ffffffa9","fontSize":31}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"P","textColor":"#ffffffa9","fontSize":31}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"N","textColor":"#ffffffa9","fontSize":31}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"S","textColor":"#ffffffa9","fontSize":31}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0,"height":0.816,"rounded":true,"thickness":0,"angle":0,"text":"T","textColor":"#bfbfbfa9","fontSize":31}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#b578edff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[6.2,1.8],[6.2,2.8],[6.8,2.8],[6.8,1.2],[5.8,1.2],[5.8,0.2],[5.2,0.2],[5.2,1.8],[6.2,1.8]],"color":"#FFFFFF","thickness":6,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[3.5,3],[3,3],[3,4]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[3,3],[3,2]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6,4],[6,3],[7.5,3]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[6,2],[6,3],[4.5,3]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[7.5,6],[6,6],[6,8]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[6,5],[6,6],[5.5,6]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3,7.5],[3,6],[4.5,6]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[1,6],[3,6],[3,5]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[6,1],[6,0],[9,0],[9,9],[0,9],[0,3],[2,3]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,1]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[9,3],[8.5,3]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[9,6],[8.5,6]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[3,9],[3,8.5]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[0,3],[0,0],[3,0]],"color":"#000000","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,0.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":23.2,"textStroke":"#000000ff","textStrokeWidth":1}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":23.2,"textStroke":"#000000ff","textStrokeWidth":1}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":23.2,"textStroke":"#000000ff","textStrokeWidth":1}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":23.2,"textStroke":"#000000ff","textStrokeWidth":1}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,6.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":23.2,"textStroke":"#000000ff","textStrokeWidth":1}}
```

A murder has been committed in Grid Mansion! Dr Awkward has been found dead, and there are six suspects. Can you work out who did it? 

Normal sudoku rules apply: place the digits 1-9 once each in every row, column, and 3x3 room.

FIND YOUR PATH:
• Draw a line passing through the centres of some cells to represent your journey from room to room, as you interrogate suspects and look for clues.
• Your path must start at one of the lettered cells  (these are initials labelling the six suspects and the victim.) The path must finish at another lettered cell, and visit all the other lettered cells along the way. 
• Your path may move orthogonally or diagonally between cells, but may not cross itself.
• You may not pass through a thick black wall; you can only get from room to room by travelling through the CENTRE of a doorway. For some doorways this may mean you have to go through diagonally.
• The value of digits along your path must constantly increase or stay the same (like a slow thermometer). You must never move from a higher value to a lower value.

PSEUDO CELLS:
• Every row, column and room has exactly one 'pseudo cell'. These 9 pseudo cells contain the digits 1-9 once each.
• For the purposes of your path, and for the weapon, victim and suspect rules below, the value of a pseudo cell equals its room number (regardless of which digit appears in the cell.) Rooms are numbered from 1-9 in reading order. Eg: room 1 is in the top left, room 7 is in the bottom left.

WEAPONS:
• Some weapons have been found, at locations marked by an X. The values of the two cells separated by a weapon sum to 10.

THE VICTIM:
• Dr Awkward's body was found lying awkwardly in the doorway between rooms 4 and 7. This has been marked by a white outline. All that's known about the victim is that the values of his cells form a palindrome, reading the same from either end.

THE SUSPECTS:
• Digits do not repeat in a killer cage (although their values might.) Each suspect has a particular trait:

• Miss Parity (red) - values of orthogonally adjacent cell have a different parity (one is odd, the other is even).
• Mrs Summer (blue) - a doorway divides her cells into two distinct groups, whose values both have the same sum.
• Miss Tenclumpz - (white) - her cells can be divided into smaller distinct groups of orthogonally connected cells, each of which sum to 10.
• Colonel Nabner (yellow) - none of his cell's values are consecutive with (or the same as) each other.
• Professor Zipworthy (purple) - cells an equal distance from his central spot sum to the digit on his central spot.
• The Whispering Reverend (green) - adjacent cells must have values with a difference of at least 5.

One particular digit (not value) appears in all of the suspects' cages, except for the real killer. Who is it?

---
format: open-rules
title: Friend Zone
setter: Marty Sears
source: https://sudokupad.app/rgapmgavlr
case: https://sudoku-sleuth.com/cases/friend-zone
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ef3e20df0ee6f6d8a2118de6b667b702
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#acddffff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#acddffff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#fbd5fcff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#fbd5fcff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#cda9f9ff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.78,"height":0.78,"rounded":true,"stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[9.333,8.667],[9.333,9.333],[-0.333,9.333],[-0.333,-0.333],[9.333,-0.333],[9.333,8.667]],"color":"#b0c3e2ff","thickness":14.08,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[7.75,1],[7.25,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"cage","cells":[30,32,39,40,41,48,50]}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"cage","cells":[0,1,10,18,19]}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"cage","cells":[4,12,13]}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"cage","cells":[6,7,8,16]}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"cage","cells":[71,79,80]}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"cage","cells":[77,78]}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"cage","cells":[67,76]}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"cage","cells":[63,64]}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"cage","cells":[72,73]}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"cage","cells":[35,43,44,53]}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"cage","cells":[36,37,45,46]}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"cage","cells":[65,74]}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0,"height":1.003,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#c1c1c1ff","fontSize":38.2}}
```

Normal sudoku rules apply.

Any cages that have the same total are cage friends.

A circled digit in a cage indicates how many friends that cage has.

The blue, pink and purple cages have no friends :(

The cage with a question mark may or may not have any friends.

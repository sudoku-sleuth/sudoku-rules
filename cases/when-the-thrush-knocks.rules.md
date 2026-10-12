---
format: open-rules
title: When the Thrush Knocks...
setter: Blobz
source: https://sudokupad.app/blobz/when-the-thrush-knocks
case: https://sudoku-sleuth.com/cases/when-the-thrush-knocks
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r1c8 colour "black"
kropki-2: kropki r1c9-r2c9 colour "black"
kropki-3: kropki r2c2-r3c2 colour "black"
kropki-4: kropki r5c2-r6c2 colour "black"
kropki-5: kropki r9c6-r9c7 colour "black"
kropki-6: kropki r7c6-r8c6 colour "black"
kropki-7: kropki r4c7-r5c7 colour "black"
pair-1: pair r1c4-r2c4 relation {"op":"sum","value":10}
pair-2: pair r2c5-r3c5 relation {"op":"sum","value":10}
pair-3: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-4: pair r6c4-r6c5 relation {"op":"sum","value":10}
pair-5: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-6: pair r7c8-r8c8 relation {"op":"sum","value":10}
pair-7: pair r8c9-r9c9 relation {"op":"sum","value":10}
pair-8: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-9: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-10: pair r6c2-r7c2 relation {"op":"sum","value":10}
pair-11: pair r6c6-r7c6 relation {"op":"sum","value":10}
pair-12: pair r2c8-r2c9 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c4c4c49a","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8e5127f","stroke":"#ccb30683","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8e5127f","stroke":"#ccb30683","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8e5127f","stroke":"#ccb30683","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8e5127f","stroke":"#ccb30683","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8e5127f","stroke":"#ccb30683","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.6,2.7],[8.8,2.7],[8.8,2.3],[8.3,2.3],[8.1,2.5],[8.3,2.7],[8.6,2.7]],"color":"#f3962e53","thickness":3,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.7,1.7],[8.9,1.5],[8.7,1.3],[8.2,1.3],[8.2,1.7],[8.7,1.7]],"color":"#f3962e53","thickness":3,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8.7,0.6],[8.7,0.8],[8.3,0.8],[8.3,0.3],[8.5,0.1],[8.7,0.3],[8.7,0.6]],"color":"#f3962e53","thickness":3,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.214,0.214],[2.214,0.643]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.357,0.071],[2.357,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2.5,0.214],[2.5,0.929]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.643,0.071],[2.643,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.786,0.214],[2.786,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.214,0.214],[3.214,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.357,0.071],[3.357,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.5,0.214],[3.5,0.929]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.643,0.214],[3.643,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.786,0.071],[3.786,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.214,0.214],[4.214,0.643]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.357,0.071],[4.357,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4.5,0.214],[4.5,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[4.643,0.071],[4.643,0.643]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.786,0.214],[4.786,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[5.214,0.214],[5.214,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5.357,0.071],[5.357,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[5.5,0.214],[5.5,0.929]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.643,0.214],[5.643,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5.786,0.071],[5.786,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[6.214,0.214],[6.214,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[6.357,0.071],[6.357,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[6.5,0.214],[6.5,0.929]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[6.643,0.071],[6.643,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6.786,0.071],[6.786,0.786]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[4.3,4.2],[4.35,4.25],[4.35,4.35],[4.3,4.4],[4.3,4.8],[4.4,4.9],[4.55,4.85],[4.85,4.85],[4.85,4.45],[4.8,4.4],[4.85,4.35],[4.85,4.25],[4.75,4.15],[4.65,4.15],[4.6,4.1],[4.3,4.1],[4.3,4.2]],"color":"#a19d9d9f","thickness":3,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"cage","cells":[40],"label":"Grey Stone","color":"#0000","labelColor":"#a19d9d9f"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0,"height":0.676,"rounded":true,"thickness":0,"angle":0,"text":"Cliff Wall","textColor":"#FFFFFF","fontSize":25.6,"textStroke":"#ffffff00","textStrokeWidth":1}}
```

"Stand by the grey stone when the thrush knocks, and the setting sun with the last light of Durin's Day will shine upon the key-hole." ... Evening was coming on. Then suddenly when their hope was lowest a red ray of the sun escaped like a finger through a rent in the cloud. A gleam of light came straight through the opening into the bay and fell on the smooth rock-face...

Normal sudoku rules apply.

Begin by filling in the "boat" cells in box 7 with the corresponding digits from the previous puzzle.

An X separates digits that sum to 10.

A black dot separates digits where one is double the other.

As the sun sets in the west, a shaft of light will break through the clouds from one of the marked cells in column 1 to form a straight line in that row, illuminating the key-hole in the cliff wall in column 8. Starting from column 1 and ending in column 8, digits along this shaft of light increase as they move towards the key-hole. The remaining four cloud cells contain odd digits.

The secret door in the mountainside is in column 8, three cells in length and centred on the key-hole, containing digits that sum to 24.

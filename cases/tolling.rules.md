---
fog:
  initiallyLit:
    - r2c1
    - r3c1
    - r3c2
    - r3c3
format: open-rules
title: Tolling
setter: Sandra & Nala
source: https://sudokupad.app/67altc36ct
case: https://sudoku-sleuth.com/cases/tolling
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: c98252a4d01eb27d0f0846a9a84f572d
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 white
kropki-2: kropki r6c6-r7c6 white
arrow-1: arrow r3c1-r3c2-r4c2-r3c3 bulb ["r2c1"]
arrow-2: arrow r1c4-r1c5-r2c6 bulb ["r1c3"]
arrow-3: arrow r3c8-r4c7 bulb ["r2c8"]
arrow-4: arrow r6c7-r7c8-r8c9 bulb ["r5c7"]
arrow-5: arrow r9c6-r8c5 bulb ["r8c7"]
arrow-6: arrow r5c4-r5c5 bulb ["r6c3"]
arrow-7: arrow r6c1-r7c1 bulb ["r7c2"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,0.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,4.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,2.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,3.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,3.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,4.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,5.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,5.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,6.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,6.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,7.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,7.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,8.5],"width":0.61,"height":0.62,"rounded":false,"fill":"#cbe7ffff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,7.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-1.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-1.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,5.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,6.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-1.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,1.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[-1.5,2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[-3.5,2.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,3.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[-4.5,3.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[-4.5,4.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,4.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[-4.5,5.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[-4.5,6.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[-4.5,7.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,8.5],"width":0.62,"height":0.62,"rounded":false,"fill":"#80c679ff","stroke":"#bbf2b5ff","thickness":1.28,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[-2.5,6.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-2.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[1.3,7.3],[1.2,7.2],[1.4,7.2],[1.55,7.05],[1.35,7.05],[1.2,7.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[1.2,7.2],[1.2,7.1],[1.25,7.05],[1.35,7.05],[1.35,7.15],[1.3,7.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[1.35,7.15],[1.4,7.1],[1.25,7.15],[1.35,7.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[1.3,7.1],[1.4,7.1],[1.45,7.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[1.3,0.7],[1.2,0.7],[1.2,0.9],[1.25,0.95],[1.55,0.95],[1.35,0.75],[1.25,0.75],[1.2,0.8]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[1.2,0.8],[1.3,0.8],[1.35,0.85],[1.45,0.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[1.3,0.8],[1.25,0.85],[1.3,0.9],[1.5,0.9]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[1.35,0.85],[1.25,0.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[0.3,2.3],[0.2,2.2],[0.25,2.05],[0.55,2.05],[0.4,2.2],[0.3,2.2],[0.45,2.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[0.3,2.2],[0.25,2.15],[0.4,2.1],[0.3,2.1],[0.25,2.15]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[0.25,2.65],[0.15,2.65],[0.15,2.85],[0.25,2.95],[0.35,2.95],[0.4,3],[0.4,2.9],[0.3,2.8],[0.3,2.7],[0.25,2.75],[0.3,2.9],[0.35,2.95]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[0.25,2.75],[0.2,2.7],[0.2,2.8],[0.3,2.9],[0.2,2.7]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[4.3,6.7],[4.2,6.7],[4.25,6.75],[4.35,6.75],[4.45,6.85],[4.3,6.8],[4.2,6.7]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[4.25,6.75],[4.4,6.9],[4.5,6.9],[4.45,6.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.3,6.8],[4.2,6.8],[4.2,6.7],[4.15,6.65],[4.15,6.85],[4.2,6.9],[4.3,6.9],[4.45,6.95],[4.55,6.95],[4.5,6.9],[4.35,6.85],[4.25,6.85],[4.2,6.8]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[4.25,6.85],[4.4,6.9]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.25,2.65],[5.15,2.65],[5.15,2.85],[5.2,2.9],[5.4,2.9],[5.25,2.85],[5.15,2.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[5.15,2.65],[5.3,2.7],[5.4,2.8],[5.35,2.85],[5.2,2.8],[5.15,2.75]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[5.35,2.75],[5.25,2.75],[5.2,2.8],[5.25,2.85],[5.45,2.85],[5.4,2.8],[5.3,2.8],[5.25,2.75]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[5.25,2.75],[5.2,2.7],[5.45,2.95],[5.55,2.95],[5.45,2.85],[5.2,2.7]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[5.35,2.85],[5.3,2.8]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[5.65,2.05],[5.25,2.05],[5.2,2.1],[5.2,2.2],[5.25,2.25],[5.35,2.25],[5.45,2.15],[5.35,2.15],[5.2,2.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[5.55,2.05],[5.45,2.15]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[5.45,2.05],[5.25,2.25]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[5.35,2.15],[5.25,2.15],[5.4,2.1],[5.5,2.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[5.4,2.1],[5.3,2.1],[5.25,2.15]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[7.25,6.75],[7.2,6.8],[7.2,6.9],[7.25,6.95],[7.55,6.95],[7.3,6.8],[7.2,6.8]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[7.2,6.9],[7.3,6.9],[7.2,6.8],[7.45,6.85],[7.5,6.9],[7.25,6.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[7.55,6.95],[7.5,6.9],[7.3,6.9],[7.4,6.9],[7.25,6.85],[7.3,6.8],[7.4,6.8],[7.45,6.85],[7.4,6.9]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[7.25,6.85],[7.45,6.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[7.5,6.9],[7.4,6.9]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[6.3,1.7],[6.2,1.7],[6.15,1.75],[6.15,1.85],[6.2,1.9],[6.5,1.9],[6.3,1.8],[6.2,1.8],[6.15,1.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[6.2,1.9],[6.25,1.95],[6.45,1.95],[6.5,1.9]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[6.4,1.9],[6.35,1.85],[6.2,1.8],[6.25,1.75],[6.35,1.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[6.2,1.8],[6.25,1.85],[6.35,1.85]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[6.55,1.15],[6.6,1.1],[6.5,1.1],[6.55,1.05],[6.6,1.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[6.55,1.05],[6.45,1.05],[6.5,1.1],[6.45,1.15],[6.3,1.2],[6.2,1.2],[6.2,1.1],[6.25,1.05],[6.45,1.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[6.5,1.1],[6.2,1.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[6.3,1.1],[6.25,1.15],[6.3,1.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[6.4,1.1],[6.45,1.15],[6.25,1.15],[6.4,1.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[7.3,6.1],[7.45,6.05],[7.55,6.05],[7.5,6.1],[7.3,6.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[7.3,6.1],[7.2,6.1],[7.2,6.2],[7.25,6.25],[7.3,6.2],[7.4,6.2],[7.5,6.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[7.2,6.1],[7.25,6.05],[7.45,6.05],[7.4,6.1],[7.25,6.15],[7.25,6.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[7.4,6.1],[7.35,6.15],[7.25,6.15],[7.3,6.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[4.4,6.1],[4.6,6.1],[4.55,6.15],[4.45,6.15],[4.5,6.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[4.6,6.1],[4.55,6.05],[4.45,6.05],[4.4,6.1],[4.25,6.15],[4.3,6.1],[4.4,6.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[4.45,6.05],[4.25,6.05],[4.2,6.1],[4.2,6.2],[4.25,6.15],[4.35,6.15],[4.3,6.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[4.2,6.2],[4.25,6.25],[4.3,6.2],[4.4,6.2],[4.45,6.15],[4.35,6.15],[4.3,6.2]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[1.25,0.15],[1.25,0.25],[1.35,0.15],[1.25,0.15]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[1.35,0.15],[1.4,0.1],[1.25,0.15],[1.3,0.1],[1.4,0.1]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[1.25,0.15],[1.25,0.05],[1.45,0.05],[1.4,0.1],[1.5,0.1],[1.45,0.15],[1.3,0.2],[1.35,0.25],[1.45,0.15]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[1.25,0.15],[1.2,0.2],[1.2,0.3],[1.3,0.3],[1.45,0.15],[1.3,0.3]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[1.45,0.05],[1.55,0.05],[1.5,0.1],[1.6,0.1],[1.55,0.05]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[1.3,7.7],[1.35,7.75],[1.35,7.85],[1.3,7.8],[1.3,7.7]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[1.35,7.85],[1.45,7.95],[1.55,7.95],[1.45,7.85],[1.3,7.8],[1.25,7.75],[1.3,7.7],[1.2,7.8],[1.35,7.95],[1.45,7.95]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[1.3,7.7],[1.2,7.7],[1.2,7.9],[1.25,7.95],[1.35,7.95]],"color":"#ffaf7cff","thickness":4.48,"rounded":true}}
```

In this puzzle you get to create a river for Nala and tag along with her while she is alternately playing and hiding along the shoreline! This special kind of behaviour known as 'tolling' is very typical for her fathers breed: The Nova Scotia Duck Tolling Retriever. It is meant to get ducks curious so they will swim closer to the shore and is very interesting thing to experience. Join us!

Part 1: The River
Using the clues outside the grid shade some cells to form a river (blue clues) such that all shaded cells are orthogonally connected and no 2x2 is entirely shaded. The rest of the cells are the unshaded shoreline (green clues). 

If a clue has a number in it, that number indicates how many cells of that color are shaded in the direction the clue is looking at (row or column). If a clue has no number in it, the amount of shaded or unshaded cells has to be deduced by the solver, but cannot be 0. 

All clues are given and in order. In the final grid all cells are either blue or green. 

Part 2: Tolling 
Use the shaded grid to solve the Sudoku as Nala is tolling alongside the shoreline. 

Normal 9x9 Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Digits along an arrow must sum to the digit in the corresponding circle. Arrows do not cross or overlap. 

Digits separated by a white dot are consecutive.

The river functions as an entropic line. Any set of three sequential cells along the river must contain a low digit (123), a middle digit (456), and a high digit (789).

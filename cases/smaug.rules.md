---
format: open-rules
title: Smaug
setter: Blobz
source: https://sudokupad.app/blobz/smaug
case: https://sudoku-sleuth.com/cases/smaug
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6-r4c3-r4c4-r4c5-r4c6-r5c3-r5c4 connected true
cage-2: cage r5c2-r6c1-r6c2-r6c3-r6c4-r7c1 total 23 connected true
cage-3: cage r5c5-r5c6-r5c7-r6c7-r6c8-r7c8-r7c9 total 29 connected true
cage-4: cage r6c5-r6c6-r7c4-r7c5-r7c6-r7c7 total 36 connected true
cage-5: cage r7c2-r7c3-r8c2-r8c3-r8c4-r8c5 total 35 connected true
cage-6: cage r4c7-r4c8-r5c8-r5c9-r6c9 total 18 connected true
cage-7: cage r1c1-r1c2-r2c1-r3c1 total 20 connected true
cage-8: cage r1c8-r1c9-r2c9 total 16 connected true
cage-9: cage r8c1-r9c1-r9c2-r9c3 total 18 connected true
cage-10: cage r8c8-r8c9-r9c5-r9c6-r9c7-r9c8 total 34 connected true
cage-11: cage r1c3-r1c4-r1c5-r1c6-r1c7 total 27 connected true
cage-12: cage r2c7-r2c8-r3c8 total 18 connected true
cage-13: cage r3c9-r4c9 total 15 connected true
cage-14: cage r4c1-r5c1 total 13 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f8f02721","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbf58220","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbf58220","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbf58220","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbf58220","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbf58220","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ff55501c","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d1a42534","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d1a42534","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d1a42534","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d1a42534","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#d3b4172c","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#c9c5c52f","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.42,"height":0.62,"rounded":true,"fill":"#30f97b82","stroke":"#087f05ff","thickness":1,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.62,"height":0.42,"rounded":true,"fill":"#1ca1fd81","stroke":"#0404acd6","thickness":1,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.62,"height":0.42,"rounded":true,"fill":"#1ca1fd81","stroke":"#0404acd6","thickness":1,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.62,"height":0.42,"rounded":true,"fill":"#1ca1fd81","stroke":"#0404acd6","thickness":1,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.62,"height":0.42,"rounded":true,"fill":"#1ca1fd81","stroke":"#0404acd6","thickness":1,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"S","textColor":"#b810a630","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"M","textColor":"#b810a630","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#b810a630","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"U","textColor":"#b810a630","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"G","textColor":"#b810a630","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[3.35,4.15],[3.45,4.25],[3.55,4.25],[3.65,4.15],[3.7,4],[3.65,4.05],[3.65,4.15]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[3.6,4.2],[3.5,4.3],[3.4,4.3],[3.25,4.15]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[3.7,4],[3.7,3.9],[3.75,3.85],[3.75,3.65],[3.6,3.5]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[3.7,3.9],[3.7,3.8],[3.65,3.65]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[3.5,2.3],[3.55,2.25],[3.65,2.25],[3.7,2.3],[3.8,2.3],[3.85,2.35],[3.85,2.45],[4,2.6]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[3.8,2.3],[3.65,2.15],[3.55,2.15],[3.45,2.25]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[3.85,2.35],[3.9,2.3],[3.9,2.4],[4,2.5]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[3.9,2.3],[3.8,2.2]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[2.5,3.6],[2.55,3.65],[2.55,3.85],[2.6,4],[2.65,4.05],[2.65,4.15],[2.7,4.2],[2.7,4.3],[2.75,4.35],[2.75,4.45],[2.8,4.5],[2.85,4.65],[2.95,4.75]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[2.4,3.8],[2.4,3.9],[2.45,4.05],[2.45,4.15],[2.5,4.3],[2.55,4.35],[2.6,4.5],[2.85,4.75]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[2.3,4.3],[2.4,4.4],[2.4,4.5],[2.55,4.55]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[2.25,4.95],[2.3,5.1],[2.65,5.45]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[3.25,3.25],[3.15,3.15],[3.35,2.95]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[3.2,4.9],[3.3,5],[3.3,5.1],[3.35,5.15]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[3.15,4.95],[3.2,5.1],[3.3,5.2]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[4.3,3.7],[4.35,3.65],[4.45,3.65],[4.6,3.5],[4.65,3.35]],"color":"#db1f1719","thickness":10,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[2.5,3.8],[2.55,3.85],[2.55,3.95],[2.6,4],[2.6,4.1],[2.65,4.15],[2.65,4.25],[2.7,4.3],[2.75,4.45],[2.8,4.5]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[2.45,4.25],[2.55,4.35],[2.6,4.5],[2.7,4.6]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[3.75,4.95],[3.75,5.15],[3.7,5.2],[3.75,5.25],[3.75,5.35],[3.7,5.4],[3.7,5.6],[3.55,5.75]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[3.7,5.4],[3.75,5.45]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[3.5,3.1],[3.45,3.15],[3.75,3.45],[3.75,3.55],[3.8,3.6],[3.8,3.7],[3.85,3.75],[3.85,3.95],[3.8,4],[3.8,4.1],[3.7,4.3],[3.65,4.35],[3.45,4.35],[3.3,4.3],[2.95,3.95],[2.95,3.85],[2.9,3.8],[2.9,3.7]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[3.7,3],[3.8,3],[3.9,3.1],[3.9,3],[3.75,2.85],[3.65,2.85],[3.6,2.8],[3.5,2.8],[3.65,2.65],[3.75,2.65],[3.85,2.75],[3.85,2.85],[3.95,2.95],[3.95,3.05],[4,3.1],[4,3.2],[4.1,3.3],[4.1,3.4],[4.15,3.45],[4.15,3.55],[4.2,3.6],[4.25,3.75],[4.45,3.75],[4.6,3.7],[4.65,3.65],[4.65,3.55],[4.7,3.5],[4.7,2.8],[4.4,2.5],[4.45,2.45],[4.25,2.45],[4.3,2.6],[4.4,2.7],[4.4,2.6],[4.6,2.8],[4.6,3],[4.55,3.05],[4.55,3.15],[4.5,3.2],[4.5,3.4],[4.4,3.5],[4.3,3.4],[4.3,3.3],[4.25,3.25],[4.25,3.05],[4.2,2.9],[4.15,2.85],[4.15,2.75],[4.1,2.7],[4.1,2.5],[4.05,2.45],[4.05,2.35],[4,2.3],[4,2.2],[3.95,2.15],[3.85,2.15],[3.8,2.1],[3.6,2.1],[3.55,2.15],[3.45,2.15],[3.25,2.35],[3.2,2.5],[3.1,2.6],[3.1,2.8],[3.05,2.85],[3.05,2.95],[3,3]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[3.5,2.8],[3.45,2.85],[3.3,2.9],[3.1,3.1],[3.1,3.2],[3.25,3.35],[3.3,3.5],[3.4,3.6]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[4.25,3.05],[4.2,3]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[3.75,3.05],[3.85,3.15]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[3.7,3.1],[3.85,3.25]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[2.75,3.65],[2.7,3.6],[2.8,3.5],[2.8,3.4],[2.85,3.35],[2.85,3.25],[2.9,3.2],[2.9,3.1],[2.95,3.05]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3,4.5],[3.1,4.4],[3.3,4.4],[3.35,4.35],[3.45,4.45],[3.45,4.65],[3.55,4.75]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[3.4,4.7],[3.5,4.8]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[3.5,4.9],[3.3,4.8],[3.3,4.7],[3.25,4.75],[3.15,4.75]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[3.4,5.3],[3.35,5.35],[3.25,5.35],[3.2,5.4],[3.4,5.4],[3.45,5.35],[3.45,5.25],[3.5,5.2],[3.5,5.1],[3.55,5.05],[3.55,4.95],[3.7,4.8],[3.8,4.8],[3.85,4.85],[3.85,5.45],[3.8,5.6],[3.8,5.7],[3.65,5.85],[3.6,5.8],[3.5,5.8],[3.45,5.85],[3.25,5.85],[3.2,5.8],[3.1,5.8],[2.95,5.65],[2.85,5.65],[2.75,5.55],[2.7,5.4],[2.45,5.15],[2.45,5.05],[2.4,5],[2.4,4.8],[2.35,4.75],[2.35,4.55],[2.4,4.6],[2.5,4.6],[2.55,4.65],[2.65,4.65],[2.85,4.85],[2.95,4.85],[3.05,4.95],[3.05,4.85],[2.95,4.75],[2.95,4.65],[2.9,4.6],[2.9,4.5],[2.85,4.45],[2.85,4.35],[2.8,4.3],[2.8,4],[2.75,3.95],[2.75,3.85],[2.7,3.8],[2.7,3.7],[2.65,3.65],[2.65,3.55],[2.6,3.5],[2.6,3.4],[2.55,3.35],[2.55,3.25],[2.5,3.2],[2.45,3.25],[2.45,3.55],[2.35,3.65],[2.3,3.6],[2.3,3.5],[2.2,3.6],[2.2,3.8],[2.3,3.9],[2.3,4],[2.35,4.05],[2.35,4.15],[2.3,4.2],[2.25,4.15],[2.15,4.15],[2.2,4.2],[2.2,4.3],[2.25,4.35],[2.25,4.45],[2.35,4.55]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[2.8,5.6],[2.7,5.6],[2.5,5.4],[2.35,5.35],[2.3,5.3],[2.3,5.2],[2.25,5.15],[2.25,5.05],[2.2,5],[2.2,4.8],[2.4,5]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[3.4,5.5],[3.3,5.6],[3.2,5.6],[3.25,5.65],[3.35,5.65]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[3.4,4.8],[3.45,4.85]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[3.65,4.95],[3.7,4.9],[3.7,5],[3.65,4.95]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[3.55,5.25],[3.55,5.35],[3.6,5.4],[3.6,5.3],[3.55,5.25]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[3.55,5.35],[3.5,5.4],[3.55,5.45],[3.6,5.4]],"color":"#e6261f3a","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"cage","cells":[10,11],"label":"Cliff Wall","color":"#f2a114ff","labelColor":"#f2a114ff"}}
```

There he lay, a vast red-gold dragon, fast asleep; a thrumming came from his jaws and nostrils, and wisps of smoke, but his fires were low in slumber. Beneath him, under all his limbs and his huge coiled tail, and about him on all sides stretching away across the unseen floors, lay countless piles of precious things, gold wrought and unwrought, gems and jewels, and silver red-stained in the ruddy light.

Normal sudoku rules apply.

Begin by filling in the "Cliff Wall" labelled digits from the previous puzzle.

In cages, digits do not repeat, and sum to the small clue, if given.

A digit in an emerald (green) indicates how many emeralds contain that digit. A digit in a sapphire (blue) indicates how many sapphires contain that digit.

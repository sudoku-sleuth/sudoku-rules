---
format: open-rules
title: Colour Coordinated Sums
setter: Marty Sears
source: https://sudokupad.app/gcme2530d6
case: https://sudoku-sleuth.com/cases/colour-coordinated-sums
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[9.333,8.667],[9.333,9.333],[-0.333,9.333],[-0.333,-0.333],[9.333,-0.333],[9.333,8.667]],"color":"#fff9caff","thickness":42.88,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[-0.167,8.5],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.5]],"color":"#7af288ff","thickness":16.64,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[9.167,3.833],[9.167,4.833]],"color":"#7af288ff","thickness":16.64,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[9.333,8.667],[9.333,9.333],[-0.333,9.333],[-0.333,-0.333],[9.333,-0.333],[9.333,8.667]],"color":"#f9acf6ff","thickness":17.28,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[-0.25,9.25],[9.25,9.25],[9.25,-0.25],[-0.25,-0.25],[-0.25,9.25]],"color":"#000000","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.8,-0.8],[4.2,-0.8]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[9.8,4.4],[9.8,4.8]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4,9.8],[4.4,9.8]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[-0.8,4.2],[-0.8,4.6]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9,7],[9,9],[6,9],[6,6],[9,6],[9,7]],"color":"#d9d9d9ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,9],[3,9],[3,6],[6,6],[6,0],[9,0],[9,6]],"color":"#d9d9d9ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[9,3],[3,3],[3,6],[0,6],[0,9],[3,9]],"color":"#d9d9d9ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#d9d9d9ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#d9d9d9ff","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[9,1],[8,1],[8,2],[9,2]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[9,4],[8,4],[8,2],[7,2],[7,4],[8,4]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8,4],[8,5],[9,5]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7,9],[7,8],[9,8]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8,9],[8,5],[7,5],[7,4],[5,4],[5,5],[7,5]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7,5],[7,8],[5,8],[5,9]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[9,7],[5,7],[5,5],[4,5],[4,7],[5,7]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5,7],[5,8],[4,8],[4,7],[2,7],[2,8],[4,8]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4,8],[4,9]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2,9],[2,8],[1,8],[1,9]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8,0],[8,1],[7,1],[7,2],[5,2],[5,4],[4,4],[4,5],[1,5],[1,8],[0,8]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7,0],[7,1],[5,1],[5,2],[4,2],[4,4],[2,4],[2,7],[0,7]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1],[4,1],[4,2],[2,2],[2,4],[1,4],[1,5],[0,5]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4],[1,2],[2,2],[2,1],[4,1],[4,0]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2,0],[2,1],[1,1],[1,2],[0,2]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,1],[1,1],[1,0]],"color":"#d9d9d9ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.66,"height":0.16,"rounded":false,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0.66,"height":0.16,"rounded":false,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":270}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8.5],"width":0.66,"height":0.16,"rounded":false,"fill":"#000000","stroke":"#FFFFFF","thickness":3.2,"angle":270}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0.75,"height":0.16,"rounded":false,"fill":"#2ce524ff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":0.75,"height":0.16,"rounded":false,"fill":"#2ce524ff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.75,"height":0.16,"rounded":false,"fill":"#2ce524ff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.66,"height":0.16,"rounded":false,"fill":"#2ce524ff","stroke":"#FFFFFF","thickness":3.2,"angle":270}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.66,"height":0.16,"rounded":false,"fill":"#ffe20aff","stroke":"#FFFFFF","thickness":3.2,"angle":270}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6],"width":0.66,"height":0.16,"rounded":false,"fill":"#ffe20aff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.73,"height":0.16,"rounded":false,"fill":"#ffe20aff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.73,"height":0.16,"rounded":false,"fill":"#ffe20aff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.66,"height":0.16,"rounded":false,"fill":"#f794f4ff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.66,"height":0.16,"rounded":false,"fill":"#f794f4ff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.786,8.429],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.786,8.571],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.214,8.429],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.214,8.571],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.571,7.214],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.786,2.429],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.786,2.571],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.3,2.8],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,2.7],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":90}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,2.3],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":90}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.7,2.2],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.7,1.2],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,1.3],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":90}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.7,4.2],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,4.3],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":90}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.2,7.3],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":90}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.3,7.2],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":180}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.429,7.214],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.429,1.786],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.571,1.786],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.786,1.571],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.786,1.429],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.429,4.214],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.571,4.214],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.429,5.786],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":135}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.571,5.786],"width":0.35,"height":0.16,"rounded":false,"fill":"#ff1f1fff","stroke":"#FFFFFF","thickness":3.2,"angle":45}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.61,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":180}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0.61,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":270}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8.5],"width":0.61,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":270}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0.7,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":135}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":0.7,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":135}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.7,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":135}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.61,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":270}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.61,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":270}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6],"width":0.61,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":180}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.68,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":135}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.68,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":45}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.61,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":180}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.61,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":180}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.786,8.429],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":135}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.786,8.571],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.214,8.429],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.214,8.571],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":135}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.571,7.214],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":135}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.786,2.429],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":135}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.786,2.571],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":45}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.3,2.8],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":180}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,2.7],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":90}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.8,2.3],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":90}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.7,2.2],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":180}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.7,1.2],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":180}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,1.3],"width":0.3,"height":0.11,"rounded":false,"fill":"#2ce524ff","thickness":0,"angle":90}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.7,4.2],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":180}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,4.3],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":90}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.2,7.3],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":90}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.3,7.2],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":180}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.429,7.214],"width":0.3,"height":0.11,"rounded":false,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.429,1.786],"width":0.3,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":135}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.571,1.786],"width":0.3,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":45}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.786,1.571],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":45}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.786,1.429],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":135}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.429,4.214],"width":0.3,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":45}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.571,4.214],"width":0.3,"height":0.11,"rounded":false,"fill":"#f794f4ff","thickness":0,"angle":135}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.429,5.786],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":135}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.571,5.786],"width":0.3,"height":0.11,"rounded":false,"fill":"#ffe20aff","thickness":0,"angle":45}}
```

Normal sudoku rules apply.

The two digits on an arrow give the coordinates of a particular target cell somewhere in the grid. The digit on the arrow's shaft indicates the target cell's row, and the digit on the arrowhead indicates the target cell's column. The sum of the two digits should be placed into the target cell. No two arrows target the same cell.

Also:
- A pink arrow contains two consecutive digits.
- A yellow arrow contains two non-consecutive digits.
- A green arrow contains two digits with a difference of at least 5.
- On a black arrow, one digit is double the other.

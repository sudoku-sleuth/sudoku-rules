---
format: open-rules
title: Hit Count
setter: Marty Sears
source: https://sudokupad.app/o39fgip872
case: https://sudoku-sleuth.com/cases/hit-count
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[8.5,0.5],[8.5,4.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[3.5,1.5],[3.5,0.5],[2.5,1.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5],[6.5,3.5],[5.5,2.5],[2.5,2.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[2.5,6.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[1.5,5.5],[1.5,6.5],[0.5,5.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[7.5,8.5],[6.5,8.5],[6.5,7.5],[2.5,7.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,8.5],[1.5,7.5],[1.5,8.5],[5.5,8.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5],[0.5,3.5],[0.5,2.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[0.5,1.5],[1.5,0.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,4.5]],"color":"#FFFFFF","thickness":13.44,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[8.5,0.5],[8.5,4.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[3.5,1.5],[3.5,0.5],[2.5,1.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5],[6.5,3.5],[5.5,2.5],[2.5,2.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[2.5,6.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[1.5,5.5],[1.5,6.5],[0.5,5.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[7.5,8.5],[6.5,8.5],[6.5,7.5],[2.5,7.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,8.5],[1.5,7.5],[1.5,8.5],[5.5,8.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5],[0.5,3.5],[0.5,2.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[0.5,1.5],[1.5,0.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,4.5]],"color":"#e1d7b3ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1,6],[6,6],[6,9],[9,9],[9,6],[6,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1,6],[0,6],[0,9],[6,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6,6],[6,3],[9,3],[9,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3],[3,3],[3,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,3],[0,0],[3,0]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,1],[9,1]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[9,2],[8,2],[8,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[7,0],[7,2],[8,2],[8,4],[9,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[9,5],[8,5],[8,4],[7,4],[7,2],[5,2],[5,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4,0],[4,2],[5,2],[5,4],[7,4],[7,5],[8,5],[8,7],[9,7]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[9,8],[8,8],[8,7],[7,7],[7,5],[5,5],[5,4],[4,4],[4,2],[2,2],[2,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[8,9],[8,8],[7,8],[7,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1,0],[1,2],[2,2],[2,4],[4,4],[4,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5,9],[5,8],[2,8],[2,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2],[1,4],[2,4],[2,5],[5,5],[5,7],[2,7],[2,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2,5],[1,5],[1,4],[0,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1,9],[1,8],[2,8],[2,7],[1,7],[1,5],[0,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[0,8],[1,8],[1,7],[0,7]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7,7],[7,8],[5,8],[5,7],[7,7]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.75],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,4.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,1.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,3.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,2.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,6.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.5],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":180}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.25],"width":0.22,"height":0.33,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.333,0.667],"width":0.22,"height":0.19,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":45}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.53,"height":0.53,"rounded":false,"fill":"#e1d7b3ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.25,0.75],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":45}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.75],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":90}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.25,4.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,1.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,3.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,2.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,6.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,7.5],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":180}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.25],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":90}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,5.75],"width":0.17,"height":0.37,"rounded":false,"fill":"#e1d7b3ff","thickness":0,"angle":135}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.91,"height":0.91,"rounded":true,"stroke":"#FFFFFF","thickness":7.04,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.87,"height":0.87,"rounded":true,"stroke":"#7fedffff","thickness":4.48,"angle":0}}
```

Normal sudoku rules apply.

Digits may not repeat on a beige hitline. A circled digit on a hitline indicates how many digits match their position number along that line, starting at the end with the square (which is 'position 1'.) 

Eg: If a line reads 97325, then the 2 would be circled because there are two digits in their correct positions: 3 is in the 3rd position, and 5 is in the 5th position.

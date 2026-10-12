---
format: open-rules
title: Do Geese See God?
setter: Marty Sears
source: https://sudokupad.app/45mhxocnse
case: https://sudoku-sleuth.com/cases/do-geese-see-god
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c3=1 r3c5=2 r3c7=3 r5c3=4 r5c5=5 r5c7=6 r7c3=7 r7c5=8 r7c7=9
---

```rules
sudoku 9x9
palindrome-1: palindrome r4c1-r3c1-r2c1-r2c2-r1c3-r1c4-r1c5-r2c5-r2c6
palindrome-2: palindrome r1c6-r2c7-r3c8
palindrome-3: palindrome r5c2-r6c1-r7c2-r8c3
palindrome-4: palindrome r3c6-r4c7-r5c8
palindrome-5: palindrome r3c4-r4c5-r5c6
palindrome-6: palindrome r5c1-r4c2-r3c2
palindrome-7: palindrome r5c9-r4c8-r3c9-r2c8
palindrome-8: palindrome r7c1-r8c2-r9c3-r8c4-r7c4-r6c4-r6c3
palindrome-9: palindrome r5c4-r6c5-r7c6-r6c7
palindrome-10: palindrome r9c4-r8c5-r9c6-r8c7-r8c8-r7c8-r6c8
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.375,-0.125],[4.125,-0.125],[9.125,-0.125],[9.125,9.125],[-0.125,9.125],[-0.125,-0.125],[4.125,-0.125]],"color":"#c5eeabff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.375,9.125],[1.875,9.125]],"color":"#c5eeabff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[-0.25,4.75],[-0.25,-0.25],[9.25,-0.25],[9.25,9.25],[-0.25,9.25],[-0.25,4.5]],"color":"#c5eeab64","thickness":12.16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,2.5]],"color":"#FFFFFF","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,0.5],[3.5,1.5]],"color":"#FFFFFF","thickness":16,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0,0],[0,3],[6,3],[6,9],[9,9],[9,0],[6,0],[6,3]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,0],[3,0],[3,6],[0,6],[0,3]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6,3],[9,3]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6,9],[3,9],[3,6],[9,6]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,6],[0,9],[3,9]],"color":"#000000","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[9,1],[8,1],[8,2],[9,2]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[9,4],[8,4],[8,2],[7,2],[7,4],[8,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[8,4],[8,5],[9,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5,9],[5,2],[7,2],[7,1],[8,1],[8,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[9,7],[8,7],[8,5],[7,5],[7,4],[4,4],[4,7],[8,7]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8,7],[8,8],[7,8],[7,5],[2,5],[2,7],[4,7],[4,8],[7,8]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7,8],[7,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[9,8],[8,8],[8,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4,9],[4,8],[2,8],[2,7],[1,7],[1,8],[2,8]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2,8],[2,9]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1,9],[1,8],[0,8]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7,0],[7,1],[5,1],[5,2],[4,2],[4,4],[2,4],[2,5],[1,5],[1,7],[0,7]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1],[4,1],[4,2],[2,2],[2,4],[1,4],[1,5],[0,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1],[2,1],[2,2],[1,2],[1,4],[0,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2],[1,1],[2,1],[2,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0,1],[1,1],[1,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.48,"height":0.48,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#59a070ff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#9ec2edff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#98e8afff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.38,"height":0.38,"rounded":true,"fill":"#9ce5e1ff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.38,"height":0.38,"rounded":true,"fill":"#769fb7ff","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#7fcaebff","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#68a7dcff","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#9bf3e1ff","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.38,"height":0.38,"rounded":true,"fill":"#84eefaff","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.38,"height":0.38,"rounded":true,"fill":"#7ef8c9ff","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,1.5],"width":0.15,"height":0.5,"rounded":false,"fill":"#59a070ff","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,1.25],"width":0.15,"height":0.5,"rounded":false,"fill":"#59a070ff","thickness":0,"angle":45}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.15,"height":0.5,"rounded":false,"fill":"#7ef8c9ff","thickness":0,"angle":135}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,3.5],"width":0.15,"height":0.5,"rounded":false,"fill":"#9ec2edff","thickness":0,"angle":180}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,3.25],"width":0.15,"height":0.5,"rounded":false,"fill":"#9ec2edff","thickness":0,"angle":225}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,6.25],"width":0.15,"height":0.5,"rounded":false,"fill":"#98e8afff","thickness":0,"angle":225}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.75],"width":0.15,"height":0.56,"rounded":false,"fill":"#98e8afff","thickness":0,"angle":90}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.15,"height":0.56,"rounded":false,"fill":"#9ce5e1ff","thickness":0,"angle":135}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.15,"height":0.56,"rounded":false,"fill":"#68a7dcff","thickness":0,"angle":135}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.15,"height":0.56,"rounded":false,"fill":"#7fcaebff","thickness":0,"angle":135}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.15,"height":0.56,"rounded":false,"fill":"#769fb7ff","thickness":0,"angle":45}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.15,"height":0.56,"rounded":false,"fill":"#84eefaff","thickness":0,"angle":135}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.75],"width":0.15,"height":0.56,"rounded":false,"fill":"#9bf3e1ff","thickness":0,"angle":90}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.75,2.25],"width":0.15,"height":0.56,"rounded":false,"fill":"#9bf3e1ff","thickness":0,"angle":45}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.5,"height":0.1,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.5,"height":0.02,"rounded":false,"fill":"#000000","thickness":0,"angle":90}}
```

Normal sudoku rules apply.

On a palindrome line, two digits that are the same distance from the central spot are the same.

---
format: open-rules
title: Ying Yang Yogn
setter: Marty Sears
source: https://sudokupad.app/jrw6hr29ba
case: https://sudoku-sleuth.com/cases/ying-yang-yogn
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 colour "white"
kropki-2: kropki r1c3-r1c4 colour "white"
kropki-3: kropki r1c4-r1c5 colour "white"
kropki-4: kropki r7c3-r8c3 colour "white"
kropki-5: kropki r4c9-r5c9 colour "black"
kropki-6: kropki r5c9-r6c9 colour "black"
kropki-7: kropki r6c3-r6c4 colour "black"
pair-1: pair r8c1-r8c2 relation {"op":"sum","value":5}
pair-2: pair r9c1-r9c2 relation {"op":"sum","value":5}
pair-3: pair r8c8-r9c8 relation {"op":"sum","value":5}
pair-4: pair r8c9-r9c9 relation {"op":"sum","value":5}
pair-5: pair r2c8-r2c9 relation {"op":"sum","value":5}
pair-6: pair r1c8-r1c9 relation {"op":"sum","value":5}
pair-7: pair r1c1-r2c1 relation {"op":"sum","value":5}
pair-8: pair r1c2-r2c2 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[9.167,4.833],[9.167,9.167],[-0.167,9.167],[-0.167,-0.167],[9.167,-0.167],[9.167,4.833]],"color":"#69cdf6ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,-0.167],[7.167,-0.167]],"color":"#69cdf6ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[-0.5,3.5],[-0.5,9.5],[9.5,9.5],[9.5,-0.5],[-0.5,-0.5],[-0.5,3.5]],"color":"#c0eaf9ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[9.333,8.667],[9.333,9.333],[-0.333,9.333],[-0.333,-0.333],[9.333,-0.333],[9.333,8.667]],"color":"#94ddfbff","thickness":17.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,3.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,4.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.05,8.55],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,8.55],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,4.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,3.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.05,2.55],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,1.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,4.05],"width":0.36,"height":0.36,"rounded":true,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,0.55],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.55,4.05],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.05,5.55],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.05,0.55],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.55,5.05],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.55,6.05],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,7.55],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.05,6.55],"width":0.34,"height":0.34,"rounded":false,"fill":"#0000003a","thickness":0,"angle":45}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.37,"height":0.37,"rounded":true,"fill":"#f85757ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4],"width":0.37,"height":0.37,"rounded":true,"fill":"#f85757ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.35,"height":0.35,"rounded":false,"fill":"#ffea36ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#ffea36ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#ffea36ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#ffea36ff","stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6],"width":0.35,"height":0.35,"rounded":false,"fill":"#60ee49ff","stroke":"#000000","thickness":3.2,"angle":45}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0.35,"height":0.35,"rounded":false,"fill":"#60ee49ff","stroke":"#000000","thickness":3.2,"angle":45}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#60ee49ff","stroke":"#000000","thickness":3.2,"angle":45}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#60ee49ff","stroke":"#000000","thickness":3.2,"angle":45}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.72,"height":0.72,"rounded":true,"stroke":"#FFFFFF","thickness":7.68,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.75],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.75],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.25],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.75],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.75,4.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.75,7.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,6.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,2.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.75,1.5],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.75],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.75],"width":0.35,"height":0.35,"rounded":false,"fill":"#828de9ff","stroke":"#FFFFFF","thickness":1.92,"angle":45}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.67,"height":0.67,"rounded":true,"fill":"#FFFFFF","stroke":"#828de9ff","thickness":4.48,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.55,8.05],"width":1.71,"height":0.5,"rounded":false,"fill":"#00000027","thickness":0,"angle":356}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8],"width":1.71,"height":0.5,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":356}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8],"width":0,"height":0.629,"rounded":true,"thickness":0,"angle":356,"text":"By Marty","textColor":"#000000","fontSize":23.8}}
```

Normal sudoku rules apply.

YIN YANG YONG:
Divide the grid into three regions of orthogonally connected cells. No 2x2 area can be entirely within one region.

TWO TRUTHFUL REGIONS AND A LIAR REGION:
Clues always sit entirely within one region. For two of the regions, all of its clues tell the truth, obeying the rules listed below. But the 3rd region is a liar region. All of the clues in the liar region break their rule.

CLUES TYPES:

• If a V sits between two digits, they sum to 5.

• If a BLACK DOT sits between two digits, one is double the other.

• If a WHITE DOT sits between two digits, they are consecutive.

• If a YELLOW SQUARE sits between two digits, they are not consecutive.

• If a GREEN DIAMOND sits between two digits, they have a difference of at least 5.

• If a RED DOT sits between two digits, one is odd and the other is even.

• A digit in a CIRCLE indicates the sum of all the digits seen in the direction of its arrow, until the first region border is reached.

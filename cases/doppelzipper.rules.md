---
format: open-rules
title: Doppelzïpper
setter: Marty Sears
source: https://sudokupad.app/n35uglixx1
case: https://sudoku-sleuth.com/cases/doppelzipper
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
board:
  rows: 13
  cols: 13
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
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
    - - r1c12
      - r2c12
      - r3c12
      - r4c12
      - r5c12
      - r6c12
      - r7c12
      - r8c12
      - r9c12
    - - r12c1
      - r12c2
      - r12c3
      - r12c4
      - r12c5
      - r12c6
      - r12c7
      - r12c8
      - r12c9
    - - r11c11
      - r11c12
      - r11c13
      - r12c11
      - r12c12
      - r12c13
      - r13c11
      - r13c12
      - r13c13
exported: b77f0d0204cd5bd1b5f1384b597427a1
---

```rules
counting-circles r1c1-r1c2-r1c3-r1c5-r2c2-r3c3-r4c5-r4c7-r4c9-r5c1-r5c6-r5c7-r5c9-r6c8-r6c9-r7c2-r7c3-r7c4-r7c6-r7c7-r7c9-r8c1-r8c8-r9c3-r9c5-r9c7-r9c8
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[10,10.333],[13,10.333]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[13,10.667],[12.667,10.667],[12.667,10]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[12.333,10],[12.333,10.667],[12.667,10.667],[12.667,13]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[13,11.333],[11.667,11.333],[11.667,13]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[13,12.667],[11.333,12.667],[11.333,13]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[12.333,13],[12.333,10.667],[10.667,10.667],[10.667,10]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[13,11.667],[11.333,11.667],[11.333,12.333],[13,12.333]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[10.667,13],[10.667,12.667],[11.333,12.667],[11.333,12.333],[10.667,12.333],[10.667,12.667]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[10.667,12.667],[10.333,12.667],[10.333,13]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[10.333,10],[10.333,10.667],[10.667,10.667],[10.667,12.333],[10.333,12.333],[10.333,12.667],[10,12.667]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[11.333,10],[11.333,11.667],[10.333,11.667],[10.333,12.333],[10,12.333]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[10,10.667],[10.333,10.667],[10.333,11.667],[10,11.667]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[11.667,10],[11.667,11.333],[10,11.333]],"color":"#0000001a","thickness":0.64,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[7.5,0.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[1.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,7.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,7.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[5.5,4.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[2.5,2.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[6.5,2.5],[5.5,2.5],[5.5,3.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,6.5],[4.5,7.5],[2.5,7.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[8.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[7.5,0.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[1.5,8.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,7.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,7.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[5.5,4.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[2.5,2.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[6.5,2.5],[5.5,2.5],[5.5,3.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,6.5],[4.5,7.5],[2.5,7.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[8.5,8.5]],"color":"#e7c6f9ff","thickness":10.88,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[10,13],[0,13],[0,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[9,13],[9,12],[10,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[8,13],[8,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[7,13],[7,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[6,13],[6,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5,13],[5,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4,13],[4,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[3,13],[3,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[2,13],[2,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[1,13],[1,12]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[0,11],[0,10],[10,10],[10,9],[11,9],[11,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0,10],[0,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[1,11],[1,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[2,11],[2,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3,11],[3,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[4,11],[4,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5,11],[5,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[6,11],[6,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[7,11],[7,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[8,11],[8,9]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[10,11],[9,11],[9,9],[10,9],[10,8],[11,8]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[11,1],[10,1],[10,2],[11,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3],[10,2],[9,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4],[10,3],[9,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5],[10,4],[9,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6],[10,5],[9,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7],[10,6],[9,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[9,0],[10,0],[10,1],[9,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[10,0],[11,0]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[13,10],[13,0],[12,0]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[13,9],[12,9],[12,10]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[13,8],[12,8]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[13,7],[12,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[13,6],[12,6]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[13,5],[12,5]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[13,4],[12,4]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[13,3],[12,3]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[13,2],[12,2]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[13,1],[12,1]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[9,8],[10,8],[10,7],[9,7]],"color":"#FFFFFF","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[11,8],[11,9],[12,9],[12,0],[11,0],[11,8]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[9,11],[9,12],[0,12],[0,11],[9,11]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[10,10],[13,10],[13,13],[10,13],[10,10]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[6,7],[6,9],[9,9],[9,6],[6,6],[6,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[6,9],[0,9],[0,6],[6,6],[6,3],[9,3],[9,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[3,9],[3,3],[6,3],[6,0],[9,0],[9,3]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[0,6],[0,3],[3,3],[3,0],[6,0]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[0,3],[0,0],[3,0]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[6.9,9.1],[7.1,9.1],[-0.1,9.1],[-0.1,-0.1],[9.1,-0.1],[9.1,9.1],[7.1,9.1]],"color":"#405eb0ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[9.25,8.25],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.25]],"color":"#567adaff","thickness":17.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[12.1,4.3],[12.1,4.1],[12.1,9.1],[10.9,9.1],[10.9,-0.1],[12.1,-0.1],[12.1,4.1]],"color":"#b4a55bff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[6.1,10.9],[6.9,10.9],[6.5,10.9]],"color":"#b4a55bff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[6.1,10.9],[-0.1,10.9],[-0.1,12.1],[9.1,12.1],[9.1,10.9],[6.9,10.9]],"color":"#b4a55bff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[9.9,9.9],[9.9,13.1],[13.1,13.1],[13.1,9.9],[9.9,9.9]],"color":"#b4a55bff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[13.167,12.5],[13.167,13.167],[9.833,13.167],[9.833,9.833],[13.167,9.833],[13.167,12.5]],"color":"#e4d69fff","thickness":10.24,"rounded":true,"layer":"over"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[9.167,11.833],[9.167,12.167],[-0.167,12.167],[-0.167,10.833],[9.167,10.833],[9.167,11.833]],"color":"#e4d69fff","thickness":10.24,"rounded":true,"layer":"over"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[12.167,8.167],[12.167,9.167],[10.833,9.167],[10.833,-0.167],[12.167,-0.167],[12.167,8.167]],"color":"#e4d69fff","thickness":10.24,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6],[9,9],[6,9],[6,6],[7,6]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[9,6],[9,3],[6,3],[6,6],[3,6],[3,3],[6,3]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[6,9],[0,9],[0,6],[3,6],[3,9]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
```

DOPPELGÄNGER SUDOKU:
• Fill each cell of the main 9x9 grid such that every row, column and 3x3 box contains a 0 and eight different digits from 1-9.
• No two rows, no two columns and no two boxes may be missing the same digit.
• For each 0 in the grid, the digits missing in its row, column and region must be three different digits.
• Use the cells outside the main grid to keep track of which digit is missing for each row, column and box.

COUNTING CIRCLES:
• A digit in a circle indicates exactly how many circles contain that digit.

ZIPPERS:
• Any two digits on a lavender zipper line that are an equal distance from the central spot sum to the digit on that central spot.

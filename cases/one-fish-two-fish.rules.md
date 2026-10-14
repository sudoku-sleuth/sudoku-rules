---
format: open-rules
title: One Fish, Two Fish
setter: Blobz
source: https://sudokupad.app/blobz/one-fish-two-fish
case: https://sudoku-sleuth.com/cases/one-fish-two-fish
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c8=3 r9c2=3
exported: e70d41ba03898373076b51c50a00a243
---

```rules
sudoku 9x9
thermo-1: thermo r4c3-r3c4-r2c4-r2c3-r1c3
thermo-2: thermo r4c7-r3c6-r2c6-r2c7-r2c8
thermo-3: thermo r6c3-r7c4-r8c4-r8c3-r8c2
thermo-4: thermo r6c7-r7c6-r8c6-r8c7-r9c7
thermo-5: thermo r2c1-r3c1-r4c1
thermo-6: thermo r8c9-r7c9-r6c9
thermo-7: thermo r5c8-r5c9-r4c9
thermo-8: thermo r5c2-r5c1-r6c1
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#bb730233","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.11,3.62],[4.06,3.5],[4.11,3.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.89,3.38],[4.94,3.5],[4.89,3.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.11,4.62],[4.06,4.5],[4.11,4.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.89,4.38],[4.94,4.5],[4.89,4.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.11,5.62],[4.06,5.5],[4.11,5.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.89,5.38],[4.94,5.5],[4.89,5.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.62,6.89],[4.5,6.94],[4.38,6.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.11,6.62],[4.06,6.5],[4.11,6.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.89,6.38],[4.94,6.5],[4.89,6.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[8.62,4.89],[8.5,4.94],[8.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.38,4.11],[0.5,4.06],[0.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.38,2.11],[4.5,2.06],[4.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4.11,2.62],[4.06,2.5],[4.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.89,2.38],[4.94,2.5],[4.89,2.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[8.11,3.62],[8.06,3.5],[8.11,3.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0.89,5.38],[0.94,5.5],[0.89,5.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[7.38,4.11],[7.5,4.06],[7.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[7.62,4.89],[7.5,4.94],[7.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[1.38,4.11],[1.5,4.06],[1.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[1.62,4.89],[1.5,4.94],[1.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[6.38,4.11],[6.5,4.06],[6.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6.62,4.89],[6.5,4.94],[6.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[6.11,4.62],[6.06,4.5],[6.11,4.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[2.38,4.11],[2.5,4.06],[2.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[2.62,4.89],[2.5,4.94],[2.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[2.89,4.38],[2.94,4.5],[2.89,4.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[8.38,2.11],[8.5,2.06],[8.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[8.11,2.62],[8.06,2.5],[8.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[0.62,6.89],[0.5,6.94],[0.38,6.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[0.89,6.38],[0.94,6.5],[0.89,6.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[2.38,6.11],[2.5,6.06],[2.62,6.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.62,6.89],[2.5,6.94],[2.38,6.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.11,6.62],[2.06,6.5],[2.11,6.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.89,6.38],[2.94,6.5],[2.89,6.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5.38,1.11],[5.5,1.06],[5.62,1.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[5.62,1.89],[5.5,1.94],[5.38,1.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.11,1.62],[5.06,1.5],[5.11,1.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.89,1.38],[5.94,1.5],[5.89,1.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[8.62,0.89],[8.5,0.94],[8.38,0.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[8.11,0.62],[8.06,0.5],[8.11,0.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[8.38,8.11],[8.5,8.06],[8.62,8.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[8.11,8.62],[8.06,8.5],[8.11,8.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[0.38,8.11],[0.5,8.06],[0.62,8.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[0.89,8.38],[0.94,8.5],[0.89,8.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[0.62,0.89],[0.5,0.94],[0.38,0.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[0.89,0.38],[0.94,0.5],[0.89,0.62]],"color":"#000000","thickness":1.92,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits increase from the bulb end.

Digits in shaded cells are greater than all digits in adjacent non-shaded cells.

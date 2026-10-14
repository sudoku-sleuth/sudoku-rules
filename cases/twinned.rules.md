---
format: open-rules
title: Twinned
setter: Marty Sears
source: https://sudokupad.app/3uz3y611dl
case: https://sudoku-sleuth.com/cases/twinned
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d923bc134fd8fe0eb7faad5cba651123
---

```rules
sudoku 9x9
thermo-1: thermo r6c1-r7c1-r8c2-r9c3-r9c4
thermo-2: thermo r4c9-r3c9-r2c8-r1c7-r1c6
kropki-1: kropki r5c2-r6c2 black
kropki-2: kropki r5c3-r6c3 white
kropki-3: kropki r4c7-r5c7 black
kropki-4: kropki r4c8-r5c8 white
parity-1: parity r1c5-r1c4-r1c3-r1c2
parity-2: parity r9c5-r9c6-r9c7-r9c8
whispers-1: whispers r5c1-r5c2-r5c3-r5c4 gap 5
whispers-2: whispers r5c6-r5c7-r5c8-r5c9 gap 5
region-sum-1: region-sum r6c2-r6c3-r6c4-r6c5-r7c5-r8c5 segments [["r6c2","r6c3"],["r6c4","r6c5"],["r7c5","r8c5"]]
region-sum-2: region-sum r4c8-r4c7-r4c6-r4c5-r3c5-r2c5 segments [["r4c8","r4c7"],["r4c6","r4c5"],["r3c5","r2c5"]]
nabner-1: nabner r1c1-r2c1-r3c1
nabner-2: nabner r7c9-r8c9-r9c9
pair-1: pair r9c4-r9c5 sum 10
pair-2: pair r1c5-r1c6 sum 10
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,0.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,1.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,2.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,2.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,3.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,4.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,4.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,5.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,6.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,6.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,7.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,8.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,8.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,0.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,1.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,2.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,2.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,3.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,4.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,4.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,5.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,6.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,6.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,7.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,8.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,8.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#dadbf5ff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.833,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,-0.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,0.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,1.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,1.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,2.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,3.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,3.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,4.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,5.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,5.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,6.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,7.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,7.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,8.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.833,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,9.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,0.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,1.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,1.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,2.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,3.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,3.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,4.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,5.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,5.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,6.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,7.167],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,7.833],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.167,8.5],"width":0.33,"height":0.33,"rounded":false,"fill":"#bebfecbe","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,3.5]],"color":"#e39df4ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,8.5]],"color":"#e39df4ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[9.071,8.786],[9.071,9.071],[-0.071,9.071],[-0.071,-0.071],[9.071,-0.071],[9.071,8.786]],"color":"#37188d23","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,1.55],"width":0.3,"height":0.3,"rounded":true,"fill":"#0000002b","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,2.55],"width":0.3,"height":0.3,"rounded":true,"fill":"#0000002b","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.05,6.55],"width":0.3,"height":0.3,"rounded":true,"fill":"#0000002b","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.05,7.55],"width":0.3,"height":0.3,"rounded":true,"fill":"#0000002b","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

BLACK DOTS: If two digits are joined by a black dot, one is double the other.

WHITE DOTS: If two digits are joined by a white dot, they are consecutive.

X: If two digits are joined by an X, they sum to 10.

TWIN TOTALS:
Two lines of the same colour are twins, meaning their digits have the same sum.

• GERMAN WHISPERS - Adjacent digits on a green line have a difference of at least 5.

• RENBANS - Digits on a pink line form a non-repeating, conseuctive sequence which can be arranged in any order along the line.

• REGION SUM LINES - Box borders divide a blue line into segments, each of which have the same sum.

• THERMOMETERS - Digits along a grey thermometer must strictly increase as they get further away from the bulb.

• PARITY LINES - On a red line, digits must alternate between even and odd.

• NABNERS - No two digits anywhere on a yellow line may be consecutive.

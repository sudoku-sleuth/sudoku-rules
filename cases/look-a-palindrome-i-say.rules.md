---
format: open-rules
title: Look! A palindrome i say!
setter: Chip Sounder
source: https://sudokupad.app/e1oxd77hum
case: https://sudoku-sleuth.com/cases/look-a-palindrome-i-say
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,1.5],[7.5,3.5],[7.5,4.5],[5.5,4.5],[2.5,7.5],[0.5,7.5],[0.5,6.5],[1.5,5.5],[1.5,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[5.5,3.5],[4.5,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,6.5],[7.5,5.5],[6.5,5.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,4.5],[2.5,5.5],[2.5,6.5],[1.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[49,58,66,67,72,73,74,75,76],"label":"322723"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[71,78,79,80],"label":"1714"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[7,16,24,25,33,42],"label":"2718"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[17,26,35,43,44],"label":"1324"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[0,9,18,27,28,36],"label":"271214"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[11,12,20,21],"label":"1219"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[6,13,14,15],"label":"14"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[52,61,70],"label":"1516"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[63,64,65],"label":"1516"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[68,77],"label":"15"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[1,2,3,4,10,19],"label":"26"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[37,38,39,45,46],"label":"29"}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Read the clue out loud, which describes the nature of the cage. E.g. 1522 says there is “one five and two two(s)” in the cage.
Digits along a grey line must read the same forwards as backwards.

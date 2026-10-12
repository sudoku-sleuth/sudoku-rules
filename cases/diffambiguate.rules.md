---
format: open-rules
title: Diffambiguate
setter: Marty Sears
source: https://tinyurl.com/ymjy8f4c
case: https://sudoku-sleuth.com/cases/diffambiguate
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.55,"height":0.55,"rounded":false,"fill":"#27ffe9","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.55,"height":0.55,"rounded":false,"fill":"#ffc54d","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5],[3.5,4.5],[3.5,3.5],[2.5,3.5],[0.7,1.7]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,1.3],[0.5,0.5],[4.3,0.5],[4.3,1.3]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[8.5,3.5],[8.5,0.5],[4.7,0.5],[4.7,1.3]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[5.5,3.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[1.5,1.5],[2.5,2.5],[3.5,2.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[1.5,3.5],[1.5,4.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,5.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,4.3],[5.7,4.3],[6.3,3.7],[6.3,2.3],[5.7,1.7],[4.5,1.7]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,4.7],[5.7,4.7],[6.5,5.5],[8.5,5.5],[8.5,6.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.7,3.5],[6.7,1.5],[7.5,1.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.7,6.3],[4.7,7.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.3,7.5],[4.3,6.3],[3.5,5.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[8.5,4.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5],[2.5,7.5],[2.5,6.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[7.5,8.5],[8.5,7.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,8.5],[5.5,7.5]],"color":"#dfdfdf","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• Digits separated by a black dot are in a 1:2 ratio (one is double the other.) Not all possible black dots are shown.
• It must be determined whether each grey line is a 'Same Difference' line or a 'Different Difference' line.
• SAME DIFFERENCE: Adjacent digits on a Same Difference line always differ by the same amount, but this 'difference value' may be different for different Same Difference lines.
• DIFFERENT DIFFERENCE: Every pair of adjacent digits on a Different Difference line must differ by a different amount. Eg: if there's a 3 next to a 5 on the line, there can't be a 7 next to a 9 anywhere on the same line.
• The digit in the turquoise diamond indicates how many Same Difference lines are in the grid.
• The digit in the peach diamond indicates how many Different Difference lines are in the grid.

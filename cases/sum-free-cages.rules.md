---
format: open-rules
title: Sum-Free Cages
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/sum-free-cages
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c3=3 r6c4=2 r6c5=9
exported: fc176138033200144b6fea4fd0ccc9c4
---

```rules
sudoku 9x9
thermo-1: thermo r5c4-r5c5-r5c6
thermo-2: thermo r3c7-r4c7-r5c7-r6c7-r7c7
thermo-3: thermo r9c4-r8c3-r7c2
thermo-4: thermo r2c6-r2c5-r2c4-r2c3
cage-1: cage r4c1-r4c2-r5c1-r6c1 connected true
sum-free-cage-1: sum-free-cage r4c1-r4c2-r5c1-r6c1 modulus 10
cage-2: cage r5c2-r5c3-r6c2-r6c3 connected true
sum-free-cage-2: sum-free-cage r5c2-r5c3-r6c2-r6c3 modulus 10
cage-3: cage r8c1-r8c2-r9c1-r9c2 connected true
sum-free-cage-3: sum-free-cage r8c1-r8c2-r9c1-r9c2 modulus 10
cage-4: cage r7c4-r8c4-r9c4-r9c5-r9c6 connected true
sum-free-cage-4: sum-free-cage r7c4-r8c4-r9c4-r9c5-r9c6 modulus 10
cage-5: cage r7c8-r8c7-r8c8-r8c9-r9c8 connected true
sum-free-cage-5: sum-free-cage r7c8-r8c7-r8c8-r8c9-r9c8 modulus 10
cage-6: cage r1c7-r2c7-r3c7-r3c8 connected true
sum-free-cage-6: sum-free-cage r1c7-r2c7-r3c7-r3c8 modulus 10
cage-7: cage r1c8-r1c9-r2c8-r2c9 connected true
sum-free-cage-7: sum-free-cage r1c8-r1c9-r2c8-r2c9 modulus 10
cage-8: cage r4c5-r5c4-r5c5-r5c6-r6c5 connected true
sum-free-cage-8: sum-free-cage r4c5-r5c4-r5c5-r5c6-r6c5 modulus 10
cage-9: cage r1c4-r1c5-r1c6-r2c6-r3c6 connected true
sum-free-cage-9: sum-free-cage r1c4-r1c5-r1c6-r2c6-r3c6 modulus 10
allowed-digits-1: allowed-digits r9c6-r8c7-r7c8-r6c9 digits [2,3,5,7]
allowed-digits-2: allowed-digits r1c8-r2c9 digits [2,3,5,7]
allowed-digits-3: allowed-digits r3c1-r2c2-r1c3 digits [2,3,5,7]
allowed-digits-4: allowed-digits r8c1-r9c2 digits [2,3,5,7]
```

Normal sudoku rules apply. Digits on thermometers must increase from bulb to tip. Digits on purple lines are prime.
 
Cages are sum-free modulo 10. That means that for any pair of numbers (including doubles) within the cage, the ones digit of their sum cannot be within the cage. For example, if 6 and 7 are in the cage, then neither 2, 3, nor 4 can be in the cage since 6 + 6 = 12, 6 + 7 = 13, and 7 + 7 = 14. Note that while the sum-free condition includes doubles, digits cannot repeat within a cage.

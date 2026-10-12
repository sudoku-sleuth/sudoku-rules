---
format: open-rules
title: IKEA Skylines
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/ikea-skylines
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=8 r5c5=3 r6c2=4
---

```rules
sudoku 9x9
skyscraper-1: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 7
skyscraper-2: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 3
skyscraper-3: skyscraper r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 visible 3
skyscraper-4: skyscraper r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 visible 3
skyscraper-5: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 5
skyscraper-6: skyscraper r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 visible 5
skyscraper-7: skyscraper r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 visible 2
skyscraper-8: skyscraper r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 visible 2
skyscraper-9: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 3
skyscraper-10: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 visible 2
hidden-modular-1: hidden-modular r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 extent "to-max"
hidden-modular-2: hidden-modular r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 extent "to-max"
hidden-modular-3: hidden-modular r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 extent "to-max"
hidden-modular-4: hidden-modular r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 extent "to-max"
hidden-modular-5: hidden-modular r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 extent "to-max"
hidden-modular-6: hidden-modular r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 extent "to-max"
hidden-modular-7: hidden-modular r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 extent "to-max"
hidden-modular-8: hidden-modular r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 extent "to-max"
hidden-modular-9: hidden-modular r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 extent "to-max"
hidden-modular-10: hidden-modular r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 extent "to-max"
```

Normal sudoku rules apply. 

The value of each cell gives the height of the skyscraper occupying that cell. Taller skyscrapers hide smaller skyscrapers. Clues outside the grid indicate the number of skyscrapers seen along that row or column from the direction of the clue. The skyscrapers between the clue and the tallest skyscraper in that sightline form a modular line, including the tallest skyscraper and hidden buildings as part of the modular line.

On modular lines, every set of three contiguous cells contains one digit from {147}, one from {258}, and one from {369}.

Exported from f-puzzles.com

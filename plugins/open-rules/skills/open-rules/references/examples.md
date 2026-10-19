# Worked case files

Copy a complete outer `markdown` block into a `.rules.md` file. The setter names and wording below are sample inputs. Empty source and case URLs are deliberate. The first uses an explicit six-symbol board; the assignments below demonstrate individual rules, not full Sudoku solutions.

## A six-symbol Sudoku with a thermometer

````markdown
---
format: open-rules
title: Six-symbol thermometer
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 6
  cols: 6
  symbols: [1, 2, 3, 4, 5, 6]
  regions:
    - [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]
    - [r1c4, r1c5, r1c6, r2c4, r2c5, r2c6]
    - [r3c1, r3c2, r3c3, r4c1, r4c2, r4c3]
    - [r3c4, r3c5, r3c6, r4c4, r4c5, r4c6]
    - [r5c1, r5c2, r5c3, r6c1, r6c2, r6c3]
    - [r5c4, r5c5, r5c6, r6c4, r6c5, r6c6]
---

```rules
row_1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
row_2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
row_3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
row_4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
row_5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
row_6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
col_1: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
col_2: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
col_3: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
col_4: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
col_5: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
col_6: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
region_1: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
region_2: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
region_3: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
region_4: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
region_5: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
region_6: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
thermo r1c1-r1c2-r1c3
```

## Setter wording

Normal 6×6 Sudoku rules apply with digits 1–6 and the six listed 2×3 regions. Digits on the thermometer strictly increase from the bulb at r1c1 to the tip at r1c3.
````

Satisfies: r1c1=1, r1c2=3, r1c3=6 increases at both steps. Breaks: 1, 4, 3 decreases at the last step.

The 18 `unique` declarations impose the six rows, six columns and six regions. Each house has six cells and six available symbols, so distinctness gives one of each symbol. Removing those declarations leaves board metadata without house rules.

## Two whisper lines and marked pairs

````markdown
---
format: open-rules
title: Green lines and marked pairs
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers_1: whispers r2c1-r2c2 gap 5
whispers_2: whispers r4c1-r4c2 gap 5
pair_1: pair r6c1-r6c2 ratio 3
pair_2: pair r7c1-r7c2 difference 2
pair_3: pair r8c1-r8c2 sum 10
kropki r9c1-r9c2 white
```

## Setter wording

Normal Sudoku rules apply. Adjacent digits on each green line differ by at least 5. The lines are r2c1-r2c2 and r4c1-r4c2. The brown dot at r6c1-r6c2 means one value is three times the other. The grey dot at r7c1-r7c2 means the values differ by 2. The marked pair at r8c1-r8c2 totals 10. The white Kropki dot at r9c1-r9c2 means the values differ by 1.
````

Satisfies: 1, 6 on the first line and 2, 8 on the second. Breaks: 2, 6 on either line differs by only 4. Numbered IDs keep repeated kinds separate. For the pairs, 2/6, 3/5 and 3/7 satisfy their relations; 2/5, 3/6 and 3/8 respectively break them. The white Kropki shorthand is pair difference 1: 3/4 satisfies it and 3/5 breaks it. Brown and grey describe the drawing; the pair lines carry their meanings.

## A custom weighted triple

````markdown
---
format: open-rules
title: Weighted triple
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
weighted_1: #weighted-triple r1c1-r1c2-r1c3
```

## Definitions

### Weighted triple

```custom-rules
- id: weighted-triple
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Exactly three cells in order, from the marked start.
      default: Required.
  definition: The third face digit equals the first face digit plus twice the second face digit.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: r1c1=1, r1c2=2, r1c3=5 because 5=1+2×2. Breaks: r1c1=1, r1c2=2, r1c3=6 because 6≠1+2×2."
```

## Setter wording

Normal Sudoku rules apply. Starting at r1c1, follow r1c1-r1c2-r1c3. The third digit is the first digit plus twice the second digit.
````

The declaration references the local id `weighted-triple`. Its complete definition is embedded; no external URL is needed. The formula uses D because the setter specified face digits. It defines the three positions explicitly rather than assigning a nearby library kind.

## Different white-dot pairs across the grid

List all white-dot endpoints in one rule, two cells at a time. This custom condition
compares every drawn dot with every other dot. Separate Kropki declarations supply
the difference-one relationship at each dot.

````markdown
---
format: open-rules
title: Different white-dot pairs
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r1c1-r1c2 white
kropki r4c3-r4c4 white
kropki r7c6-r7c7 white
all-dots: #different-dot-pairs cells ["r1c1","r1c2","r4c3","r4c4","r7c6","r7c7"]
```

```custom-rules
- id: different-dot-pairs
  name: Different white-dot pairs
  parameters:
    cells:
      type: list<cell>
      description: All white-dot endpoints across the grid, two cells per dot; retain repeated endpoints when dots share a cell.
      default: Required.
  definition: Every white dot joins a different unordered pair of digits.
  maths: >-
    |cells| mod 2=0 ∧ ∀i∈[0,|cells|-1): ∀j∈[0,|cells|-1): (i mod 2=0 ∧ j mod 2=0 ∧ i≠j) → ¬((D(cells[i])=D(cells[j]) ∧ D(cells[i+1])=D(cells[j+1])) ∨ (D(cells[i])=D(cells[j+1]) ∧ D(cells[i+1])=D(cells[j])))
  example: "Satisfies: pairs (1,2), (3,4), (5,6). Breaks: (1,2), (2,1), (5,6), since the first two dots repeat an unordered pair."
```

## Setter wording

Normal Sudoku rules apply. White dots join consecutive digits. Every white dot
joins a different unordered pair of digits. All three dots are listed above.
````

Pair order does not matter: (1,2) and (2,1) repeat the same pair. The list order
groups endpoints into dots; it does not connect dots into a line.

## Decorative ribbon

The puzzle text states: “Normal Sudoku rules apply. The grey ribbon is decorative.”
Add this declaration beside the board declaration in the case file:

```rules
decoration r1c1-r1c2-r2c2 note "The grey ribbon is decorative." element "grey-ribbon"
```

The declaration records the ribbon without adding a constraint. Other clues on
these cells keep their own meanings.

---
name: Sudoku
url: https://rules.sudoku-sleuth.com/sudoku.md
parameters:
  board:
    type: record{rows:position,cols:position}
    description: The board dimensions and standard boxes; write 9x9.
    default: Required.
kind: sudoku
reading:
  terms: ["normal sudoku", "standard sudoku", "classic sudoku", "regular sudoku"]
  variants:
    - when: {board: {rows: 9, cols: 9}}
      heading: Normal sudoku rules
      one: "Each row, column and 3×3 box holds 1 to 9 once."
  header:
    board:
      variants:
        - when: {condition: standardBoard}
          silent: true
        - when: {regions: present}
          heading: Board
          one: "The grid is {rows}×{cols} and uses the digits {symbols|range}. It has {regions.length|words} regions."
        - heading: Board
          one: "The grid is {rows}×{cols} and uses the digits {symbols|range}."
    givens:
      variants:
        - when: {condition: hiddenGivens, givens: {length: 1}}
          heading: Givens
          noun: given digits
          list: always
          spoiler: reveals cells under fog
          one: "One digit is given, and its cell starts hidden under fog."
          item: "{cell} = {digit}"
        - when: {condition: hiddenGivens}
          heading: Givens
          noun: given digits
          list: always
          spoiler: reveals cells under fog
          one: "{count|Words} digits are given. {hiddenGivens|Words} of them start hidden under fog."
          item: "{cell} = {digit}"
        - when: {condition: underFog, givens: {length: 1}}
          heading: Givens
          noun: given digits
          list: always
          spoiler: reveals cells under fog
          one: "One digit is given. Fog may hide it until its cell is lit."
          item: "{cell} = {digit}"
        - when: {condition: underFog}
          heading: Givens
          noun: given digits
          list: always
          spoiler: reveals cells under fog
          one: "{count|Words} digits are given. Fog hides those whose cells are not yet lit."
          item: "{cell} = {digit}"
        - when: {givens: {length: {max: 4}}}
          heading: Givens
          one: "{items|and}."
          item: "{digit|a} in {cell}"
        - when: {givens: {length: {max: 12}}}
          heading: Givens
          one: "{count|Words} digits are given: {items}."
          item: "{cell} = {digit}"
        - heading: Givens
          noun: given digits
          list: always
          one: "{count} digits are given."
          item: "{cell} = {digit}"
---

# Sudoku

Every row, column and standard 3×3 box contains the digits 1–9 exactly once.

## Parameters

- Board: write `sudoku 9x9`. It declares the 9×9 board, digits 1–9 and standard boxes together.
- Givens: list cells such as `r4c8=1`, or use a grid string with one character per cell and a dot for an empty cell.

## Maths

Class: **with aggregates**.

[Shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define D and distinct. H ranges over the rows, columns and standard boxes.

```text
rows=9 ∧ cols=9 ∧ board.rows=rows ∧ board.cols=cols ∧ (∀c∈C:D(c)∈[1,10)) ∧ (∀house∈standardHouses(): |house|=9 ∧ distinct_D(house))
```

Every house contains nine different digits from 1 to 9.

## Example

````markdown
---
format: open-rules
title: Sudoku example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
```
````

Satisfies a row: 1, 2, 3, 4, 5, 6, 7, 8, 9 contains every digit once.
Breaks a row: 1, 2, 3, 4, 5, 6, 7, 8, 8 repeats 8 and omits 9.

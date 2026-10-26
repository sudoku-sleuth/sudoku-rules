/** Distinct meanings sharing depth-3 structure; the guard rejects stale entries. */
export const overlapAllowlist: Record<string,string> = {
  "rule:minmax-cages / rule:signed-shading-cage": "Both use nonempty cages of distinct digits. Minmax Cages adds the smallest and largest digits; Signed Shading Cage adds every shaded digit and subtracts every unshaded digit, with a connected-unshaded-subset policy.",
  "block:shade-components / rule:cave-layout": "Shade Components derives components of a chosen selection within a scope and optionally counts them; Cave Layout derives shaded walls across the board, requires each wall to touch an edge, and requires a connected unshaded cave containing every clue.",
  "rule:shaded-successors / rule:treasures": "Shaded Successors exhaustively marks cells one greater than a king-neighbour in their own region; Treasures bounds every orthogonal neighbour of every five by four, without marking or region conditions.",
  "predicate:moveRelation / predicate:selectedPair": "moveRelation selects a geometric move; selectedPair additionally selects all, incident or scoped pairs.",
  "predicate:connectedRegionPartition / predicate:partition": "partition requires disjoint nonempty coverage; connectedRegionPartition also requires connected regions.",
  "predicate:marked / predicate:selectedCells": "selectedCells constructs the set of marked cells; marked tests membership of one cell.",
  "predicate:segmentCross / predicate:segmentSide": "segmentSide returns an oriented numeric cross product; segmentCross tests a segment intersection.",
  "predicate:markedRun / predicate:markedStart": "markedStart tests only the beginning of an interval; markedRun requires a maximal marked interval.",
  "predicate:operandBounds / predicate:operandSlice": "operandSlice extracts the corresponding occurrences; operandBounds produces validated slice endpoints.",
  "predicate:classParity / predicate:odd": "odd tests whether that residue is one; classParity returns a residue.",
  "predicate:channelValue / predicate:read": "read obtains those arguments from a board cell; channelValue selects supplied face/effective numeric arguments.",
  "predicate:cyclicCut / predicate:window": "window selects a bounded window with optional wrapping; cyclicCut rotates a whole path.",
  "predicate:decimal / predicate:reversal": "reversal returns a reversed cell list; decimal evaluates a base-ten numeral."
};

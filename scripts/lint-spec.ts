// Stable CI/skill entry point. Slice 1 checks formulas; later slices add case and example checks.
import { main } from "../src/cli";
process.exitCode = await main(["lint", process.argv[2] ?? "rules", ...process.argv.slice(3)]);

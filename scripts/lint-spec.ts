// Stable CI/skill entry point for formulas, case parameters, boards and definition references.
import { main } from "../src/cli";
process.exitCode = await main(["lint", process.argv[2] ?? "rules", ...process.argv.slice(3)]);

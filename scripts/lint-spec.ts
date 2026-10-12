// Stable CI/skill entry point. Checks formulas, case headers and known references; complete rule lines and examples follow.
import { main } from "../src/cli";
process.exitCode = await main(["lint", process.argv[2] ?? "rules", ...process.argv.slice(3)]);

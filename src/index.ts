import { program } from "commander";
import translate from "translate";
import logSymbols from "log-symbols";
import chalk from "chalk";

program
  .argument("<from>", "From language. Example: en")
  .argument("<to>", "To language. Example: es")
  .argument("<text>", "Text to translate. Example: Hello World")
  .action(async (from, to, str) => {
    console.log(
      logSymbols.info,
      `Translating ${chalk.bold.cyan(str)} from ${chalk.bold.magenta(
        from
      )} to ${chalk.bold.magenta(to)}`
    );
    console.log();

    const result = await translate(str, { from, to });

    console.log(logSymbols.success, chalk.bold.green(result));
    console.log();
  });

program.parse();

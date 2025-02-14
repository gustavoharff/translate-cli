import { program } from "commander";
import translate from "translate";
import logSymbols from "log-symbols";
import chalk from "chalk";

program
  .argument("<text>", "Text to translate")
  .option("-f, --from <language>", "From language", "en")
  .option("-t, --to <language>", "To language", "pt")
  .action(async (str, options) => {
    const from = options.from;
    const to = options.to;

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

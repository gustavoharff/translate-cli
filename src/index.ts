import translate from "translate";
import logSymbols from "log-symbols";
import chalk from "chalk";
import * as readline from "readline";
import isoConv from 'iso-language-converter'
import { getFlagEmoji } from 'locale2emoji';

let from = 'en'
let to = 'pt'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "➜ ",
});

function clear() {
  console.clear();

  console.log('Welcome to the translator!');

  console.log();

  const fromLang = isoConv(from.split('-')[0])
  const toLang = isoConv(to.split('-')[0])

  const fromEmoji = getFlagEmoji(from)
  const toEmoji = getFlagEmoji(to)
  
  console.log('› Current translating from', chalk.cyan(fromLang), `(${fromEmoji})`, 'to', chalk.cyan(toLang) , `(${toEmoji}).`);

  console.log();
  console.log('Commands:');

  console.log(chalk.bold('› /switch <from> <to>'.padEnd(21)), chalk.gray('│'), 'Switch the translation from and to languages.');
  console.log(chalk.bold('› /clear /c'.padEnd(21)), chalk.gray('│'), 'Clear the screen.');
  console.log(chalk.bold('› /exit /e'.padEnd(21)), chalk.gray('│'), 'Exit the program.');
  
  console.log();
  console.log();
}

clear();

rl.prompt();

rl.on("line", async (line) => {
  const str = line.trim();

  if (str === "/exit" || str === "/e") {
    rl.close();
  }

  if (str === "/clear" || str === "/c") {
    clear();
    rl.prompt();
    return;
  }

  if (str.startsWith('/switch')) {
    const [_, newFrom, newTo] = str.split(' ');

    if (!newFrom || !newTo) {
      console.log(logSymbols.error, 'Invalid syntax. Use /switch <from> <to>');
      rl.prompt();
      return;
    }

    from = newFrom;
    to = newTo;

    clear();

    rl.prompt();
    return;
  }

  if (!str) {
    rl.prompt();
    return;
  }

  const result = await translate(str, { from, to })

  console.log(logSymbols.success, 'Translation:', chalk.bold.green(result));
  console.log();

  rl.prompt();
});

rl.on("close", () => {
  process.exit(0);
});

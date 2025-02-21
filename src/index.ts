import translate from "translate";
import logSymbols from "log-symbols";
import chalk from "chalk";
import * as readline from "readline";
import isoConv from "iso-language-converter";
import { getFlagEmoji } from "locale2emoji";
import { Config } from "./config";

Config.init();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "➜ ",
});

const commands = [
  {
    name: "/switch <from> <to>",
    description: "Switch the translation from and to languages.",
  },
  {
    name: "/clear /c",
    description: "Clear the screen.",
  },
  {
    name: "/exit /e",
    description: "Exit the program.",
  },
];

function clear() {
  console.clear();

  console.log("Welcome to the translator!");

  console.log();

  const from = Config.get<string>("from");
  const to = Config.get<string>("to");

  const fromLang = isoConv(from.split("-")[0]);
  const toLang = isoConv(to.split("-")[0]);

  const fromEmoji = getFlagEmoji(from);
  const toEmoji = getFlagEmoji(to);

  console.log(
    "› Current translating from",
    chalk.cyan(fromLang),
    `(${fromEmoji})`,
    "to",
    chalk.cyan(toLang),
    `(${toEmoji}).`
  );

  console.log();
  console.log("Commands:");

  for (const command of commands) {
    console.log(
      chalk
        .bold("› " + command.name.padEnd(21))
        .concat(chalk.gray("│"))
        .concat(" ".repeat(2))
        .concat(command.description)
    );
  }

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

  if (str.startsWith("/switch")) {
    const [_, newFrom, newTo] = str.split(" ");

    if (!newFrom || !newTo) {
      console.log(logSymbols.error, "Invalid syntax. Use /switch <from> <to>");
      rl.prompt();
      return;
    }

    Config.set("from", newFrom);
    Config.set("to", newTo);

    clear();

    rl.prompt();
    return;
  }

  if (!str) {
    rl.prompt();
    return;
  }

  const result = await translate(str, {
    from: Config.get<string>("from"),
    to: Config.get<string>("to"),
  });

  console.log(logSymbols.success, "Translation:", chalk.bold.green(result));
  console.log();

  rl.prompt();
});

rl.on("close", () => {
  process.exit(0);
});

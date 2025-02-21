import { homedir } from "os";
import path from "path";
import fs from "fs";

const CONFIG_DIR = path.join(homedir(), ".translation-cli");

const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

export class Config {
  static init() {
    if (!fs.existsSync(CONFIG_DIR)) {
      fs.mkdirSync(CONFIG_DIR);
    }

    if (!fs.existsSync(CONFIG_FILE)) {
      fs.writeFileSync(CONFIG_FILE, JSON.stringify({ from: "en", to: "es" }));
    }
  }

  static set(key: string, value: string) {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));

    config[key] = value;

    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config));
  }

  static get<T>(key: string): T {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));

    return config[key];
  }
}

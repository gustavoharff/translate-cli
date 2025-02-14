# t-cli

A command-line interface to translate any text.

## Installing

```sh
$ bun i
$ bun run compile
$ mv ./dist/t ~/bin # ~/bin or any directory in your $PATH

# Reload your terminal
```

## Usage

```sh
$ t --help
```

After installing it, run `t --help` without arguments to see list of options:

```console
Usage: t [options] <from> <to> <text>

Arguments:
  from        From language. Example: en
  to          To language. Example: es
  text        Text to translate. Example: Hello World

Options:
  -h, --help  display help for command
```
## Examples

Translate text from English to Portuguese:

```sh
$ t en pt "Hello, world!"
```

## Development

```sh
$ bun i
$ bun run start en pt "Hello, world\!"
```

```console
ℹ Translating Hello, world! from en to pt

✔ Olá, mundo!
```

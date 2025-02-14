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
Usage: t [options] <text>

Arguments:
  text                   Text to translate

Options:
  -f, --from <language>  From language (default: "en")
  -t, --to <language>    To language (default: "pt")
  -h, --help             display help for command
```
## Examples

Translate text from English to Portuguese:

```sh
$ t -f en -t pt "Hello, world!"
```

Translate text using default languages (English to Portuguese):

```sh
$ t "Hello, world!"
```

## Development

```sh
$ bun i
$ bun run start --from en --to pt "Hello, world\!"
```

```console
ℹ Translating Hello, world! from en to pt

✔ Olá, mundo!
```

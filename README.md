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

After installing it, run t --help without arguments to see list of options:

```console
Usage: t [options] <text>

Arguments:
  text                   Text to translate

Options:
  -f, --from <language>  From language (default: "en")
  -t, --to <language>    To language (default: "pt")
  -h, --help             display help for command
```


## Development

```sh
$ bun i
$ bun run start --from en --to pt Example
```

# {{name}}

{{description}}

## Configurations

As this project is based on [reveal-md](https://github.com/webpro/reveal-md),
every [configuration
option](https://github.com/webpro/reveal-md?tab=readme-ov-file#reveal-md-options)
for reveal-md is also applied to this project. Configuration is done using YAML
Front matter at `src/start.md`.

We also add new *mikroways* options that can be:

```yaml
mikroways:
  # Will print debug information
  debug: false
  # Base path to look for files
  basePath: 'src'
  # Base path to look for code blocks to import
  codePath: 'code'
  # Custom named slide formats
  formats:
    main: 'class="main-cover" data-transition="zoom"'
    new-topic: 'class="dark-logo-left" data-transition="zoom"'
    new-topic-center: 'class="dark-logo-center" data-transition="zoom"'
```

> This is the default configuration

And this configuration are used by **helper functions** provided with our
preprocesor, `preproc.js`. This helpers are:

* **`SLIDE_FMT: format-name[, extra string]`:** format-name is one of the
  formats configured by `mikroways.format`. A comma is needed to append any
  string.
* **`FILE: path/to/file.md`:** will load an external file that will be located
  under `mikroways.basePath` named `path/to/file.md`. This allows to organize
  courses in a better way.
* **`CODE: path/to/code.ext highlight [lines] [class=name]`:** loads a
  highlighted code using syntax highlighting from an external file. This file
  will be located under `mikroways.codePath` named `path/to/code.ext`. Note that
  **highlight** is needed. Also accepts numbers to highlight specific lines,
  separated with comma or dash. After, a custom class can be set to change some
  styles.

## Example usage

Change slide format:

```
---
SLIDE_FMT: main

# Any title
---
```
> Will set slide format to `<!-- .slide: class="main-cover"
> data-transition="zoom" -->` with default configuration.

Extra options can be added:

```
---
SLIDE_FMT: main, data-transition-spped="fast"

# Any title
---
```

> Will set slide format to `<!-- .slide: class="main-cover"
> data-transition="zoom" data-transition-spped="fast" -->`.

To load an external file:

```
FILE: sections/some-slide.md
```
> Will load `some-slide.md` from a file located at `mikroways.basePath` and in
> this case, inside `sections/` directory.

A highlighted code example:

```
CODE: example.sh bash
```
> Will look for example.sh file inside `mikroways.basePath`, under directory
> `mikroways.codePath`. By default this is `src/code`.

Now we will highlight only lines 1, and from 3 to 6: 

```
CODE: example.sh bash 1,3-6
```

Finally, is possible to add a custom class:

```
CODE: example.sh bash 1,3-6 class="my-code"
CODE: example.sh bash class="my-code"
```

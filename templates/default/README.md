# {{name}}

{{description}}

## Configurations

As this project is based on [reveal-md](https://github.com/webpro/reveal-md),
every [configuration
option](https://github.com/webpro/reveal-md?tab=readme-ov-file#reveal-md-options)
for reveal-md is also applied to this project. Configuration is done using YAML
Front matter at `src/start.md`.

We also add new *mikroways* options that are proided by **`@mikroways/reveal-md-common`**
dependency. To understand every option, please read the [documentation](https://github.com/Mikroways/reveal-md-common).


## Containers support

This repo provides a Containerfile and a npm script to build a Container image
using buildah:

```
npm run container
```

This image can be tested using podman:

```
podman run -p 8080:8080 {{ name }}:latest
```

Try it with:

```
xdg-open http://localhost:8080
```

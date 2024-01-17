# {{name}}

{{description}}

## Uso

El primer paso luego de descargar este curso, es instalar las dependencias:

```
npm i
```

Luego, es recomendable ajustar el campo **`name`** dentro del `package.json`
dado que será el nombre que se utilice en:

* El HEAD del slide para el navegador
* El título en el encabezado de los documentos a generar como pdf

Con frecuencia, es recomendable actualizar las dependencias:

```
npm update
```

Para iniciar la presentación en modo desarrollo:

```
npm run start
```
> Con `npm run` podemos ver otros scripts propuestos

Para generar una versión lista para ser servida de forma estática:

```
npm run static
```
> Genera la salida en en la carpeta `_static/`. Si el slide se publicará en una
> URL absoluta conocida a priori, se recomienda modificar `package.json`
> agergando a este script, las opciones `--absolute-url` y `--featured-slide

Además se ofrece la funcionalidad de generar una imagen de contenedor lista para
ser usada:

```
npm run container
```

Para imprimir el curso como pdf:

```bash
npm run as-pdf
```

> El pdf tendrá el nombre `{{kebab.name }}.pdf`

Para generar la documentación asociada para actividades, talleres u otro
documento que se entregará como pdf:

```bash
npm run docs
```

> Notar que todo lo referente a documentación se debe mantener bajo la carpeta
> `docs/` usando Markdown.

## Configuraciones

Como este proyecto se basa íntegramente en [reveal-md](https://github.com/webpro/reveal-md),
entonces cualquier [configuración posible](https://github.com/webpro/reveal-md?tab=readme-ov-file#reveal-md-options) podrá ser usada acá.

Sin embargo, nuestra forma de trabajo propone mantener centralizada la mayoría
de las configuraciones, themes, plugins y demás. Esto nos ofrece un
desacoplamiento del contenido del curso respecro de estilos visuales o
cuestiones de forma que son manejadas desde una dependencia de éste proyecto.

Entonces, como podrá verse desde `package.json`, tenemos una dependencia con 
[**@mikroways/reveal-md-common**](https://github.com/Mikroways/reveal-md-common).
Al instalar las dependencias, las configuraciones globales se linkearán desde
dicha librería. Cualquier cambio por sobre estos valores heredados debe
realizarse directamente en `src/start.md` utilizando el concepto de [YAML
Front
matter](https://github.com/webpro/reveal-md?tab=readme-ov-file#yaml-front-matter).


## Probando el contenedor

Es importante aclarar que la generación de la imagen no se realiza con docker,
sino con [buildah](https://buildah.io/). Para ello:

```
npm run container
```

Luego podemos probarla con [podman](https://podman.io/):

```
podman run -p 8080:8080 {{kebab.name }}:latest
```

Y la probamos con:

```
xdg-open http://localhost:8080
```

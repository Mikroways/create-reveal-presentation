# Actividades de moodle

Para simplificar la gestión de las actividades de moodle, se usa la herramienta
`gift-wrapper`. La misma se configura usando el archivo `parameters.yaml` y las
actividades se toman del archivo `bank.yaml`

## Uso

El primer paso luego de descargar el repositorio, es instalar las dependencias:

```bash
pip install -r requirements.txt
```

Una vez instladas las dependencias, podemos probar generar las consignas ejecutando:

```bash
wrap.py

# Como alternativa, se puede ejecutar
python -c 'import gift_wrapper.core; gift_wrapper.core.main()'
```

Más información en la [página de la
librería](https://github.com/Mikroways/gift-wrapper)

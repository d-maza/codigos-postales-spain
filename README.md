<div align="center" background-color ="rgba(41, 37, 37, 0.795)"><img width="400" src="https://raw.githubusercontent.com/d-maza/static_web_react_demo/main/src/assets/DiveCode-bg.png" alt="d- maza" /></div>

# codigos-postales-spain 📫

![My etiqueta](https://img.shields.io/badge/David%20Maza-DiveCode%F0%9F%90%99-blue) ![GitHub repo size](https://img.shields.io/github/repo-size/d-maza/mystrore_back-MEAN) ![GitHub repo licence](https://img.shields.io/github/license/d-maza/mystrore_back-MEAN) ![Codigoutil](https://img.shields.io/badge/Co--Founder-CodigoUtil%F0%9F%92%A1-orange) 

Listados en JSON de todos los Codigos Postales 📫 de las poblaciones de España

En codigo-postal.json tienes todo combinado y anidado listo para ser procesaro por tu app.

## JSON SCHEMA

```
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "type": "array",
    "items": {
        "$ref": "#/definitions/ZipElement"
    },
    "definitions": {
        "ZipElement": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "codigo_postal": {
                    "$ref": "#/definitions/CodigoPostal"
                },
                "municipio_id": {
                    "$ref": "#/definitions/CodigoPostal"
                },
                "municipio_nombre": {
                    "type": "string"
                }
            },
            "required": [],
            "title": "ZipElement"
        },
        "CodigoPostal": {
            "anyOf": [
                {
                    "type": "integer"
                },
                {
                    "type": "string"
                }
            ],
            "title": "CodigoPostal"
        }
    }
}
```

Todos los archivos tienen el codigo de referencia correspondiente para poder conseguir sus hijos o padres según se necesite.

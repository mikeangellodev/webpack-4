# Curso de Webpack 4

1. Conceptos básicos de Webpack

Webpack es un empaquetador para Javascript y sus amigos. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.

Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros.

* **User Experience**. Se logra con una aplicación que:

  - Funcione
  - Sea rápida
  - Cumpla sus necesidades
  - Se actualice
  - Responda a sus interacciones
  - Producto de calidad

* **Developer Experience**

  - Escribir aplicaciones de manera eficiente.
  - Tener un código limpio.
  - Aplicar tecnología para resolver sus problemas.
  - Tener un conjunto de reglas y convenciones.
  - Entorno de desarrollo optimizado en productividad.

### Instalación y configuración

```bash
➜  yarn add -D webpack webpack-cli --exact

➜  yarn add style-loader css-loader -D --exact

➜  yarn add mini-css-extract-plugin html-webpack-plugin -D --exact

➜  yarn add webpack-dev-server -D --exact
```

- webpack.config.js

```js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    prices: path.resolve(__dirname, "src/js/prices.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: "Plugins"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
```

- package.json

```json
{
  "scripts": {
    "build": "webpack",
    "build:dev": "webpack-dev-server"
  }
}
```

* src/js/index.js

```js
import '../css/index.css';

import text from './text';

text();

if (module.hot) {
  module.hot.accept("./text.js", function() {
    console.log('Hot Module Replacement');
    
    text();
  });
}
```

```bash
➜  yarn run build:dev
```

2. Trabajando con loaders y plugins
3. Conceptos Avanzados de Webpack
4. Practicando

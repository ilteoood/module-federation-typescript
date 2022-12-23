const path = require('path')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const {FederatedTypesPlugin} = require('@module-federation/typescript')

const deps = require('./package.json').dependencies;

module.exports = () => ({
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'auto'
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    liveReload: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new FederatedTypesPlugin({
      federationConfig: {
        name: 'moduleFederationTypescript',
        filename: 'remoteEntry.js',
        exposes: {
          './button': './src/components/button',
          // Warning: if you enable this, the generated types will not be valid anymore
          // './anotherButton': './src/components/anotherButton'
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }
        },
      }
    })
  ]
})
const path = require('path')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const {NativeFederationTypeScriptHost} = require('native-federation-typescript/webpack')

const deps = require('./package.json').dependencies;

const moduleFederationConfig = {
  name: 'moduleFederationHost',
  filename: 'remoteEntry.js',
  remotes: {
    'moduleFederationTypescript': 'http://localhost:3000/remoteEntry.js',
  },
  shared: {
    ...deps,
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }
  },
}

module.exports = () => ({
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'auto',
    clean: true
  },
  devServer: {
    port: 3001,
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
    new ModuleFederationPlugin(moduleFederationConfig),
    NativeFederationTypeScriptHost({moduleFederationConfig})
  ]
})
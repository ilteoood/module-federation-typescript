import react from '@vitejs/plugin-react'
import { NativeFederationTypeScriptRemote } from 'native-federation-typescript/vite'
import { defineConfig } from 'vite'
import packageJson from './package.json'

const moduleFederationConfig = {
    name: 'moduleFederationTypescript',
    filename: 'remoteEntry.js',
    exposes: {
        './button': './src/components/button',
        './anotherButton': './src/components/anotherButton'
    },
    shared: {
        ...packageJson.dependencies,
        react: { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["react-dom"] }
    },
}

export default defineConfig({
    plugins: [
        NativeFederationTypeScriptRemote({moduleFederationConfig}),
        react()
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es']
        }
    },
    server: {
        port: 3000
    }
})

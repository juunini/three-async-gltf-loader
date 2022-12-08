# three-async-gltf-loader

## Install

```bash
# npm
npm install three-async-gltf-loader

# yarn
yarn add three-async-gltf-loader

# pnpm
pnpm add three-async-gltf-loader

# bun
bun add three-async-gltf-loader
```

## Usage

```ts
import { asyncGltfLoader } from 'three-async-gltf-loader`;

// ...

const gltf = await asyncGltfLoader({
  url: '...',
  onProgress: (e) => { /** ... */ }, // optional
});
```

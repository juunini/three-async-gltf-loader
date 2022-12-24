<h1 align="center">ThreeJS Async GLTF Loader</h1>

<div align="center">
  <img src="https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="ThreeJS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

---

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
import { AsyncGLTFLoader } from 'three-async-gltf-loader';

// Instantiate a loader
const loader = new AsyncGLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(dracoLoader);

// Load a glTF resource
const gltf = await loader.loadAsync(
  // resource URL
  'models/gltf/duck/duck.gltf',
  // called while loading is progressing. optional
  function (xhr: XMLHttpRequest) {
    console.log(`${xhr.loaded / xhr.total * 100} % loaded`)
  },
);
```

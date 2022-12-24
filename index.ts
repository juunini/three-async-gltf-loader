import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class AsyncGLTFLoader extends GLTFLoader {
  loadAsync = (
    url: string,
    onProgress?: (event: ProgressEvent) => void
  ): Promise<GLTF> =>
    new Promise((resolve, reject) => {
      this.load(url, resolve, onProgress, reject);
    });
}

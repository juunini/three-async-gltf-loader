import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface Props {
  url: string;
  onProgress?: (event: any) => void;
}

export function asyncGltfLoader({ url, onProgress }: Props): Promise<GLTF> {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(url, resolve, onProgress, reject);
  });
}

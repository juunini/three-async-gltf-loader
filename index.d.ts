import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
interface Props {
    url: string;
    onProgress?: (event: any) => void;
}
export declare function asyncGltfLoader({ url, onProgress }: Props): Promise<GLTF>;
export {};

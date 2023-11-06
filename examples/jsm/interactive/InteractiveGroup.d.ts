import { Camera, Group, Object3D, WebGLRenderer } from '../../../src/Three.js';

export class InteractiveObject3D extends Object3D {}

export class InteractiveGroup extends Group {
    constructor(renderer: WebGLRenderer, camera: Camera);
}

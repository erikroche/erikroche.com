import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
CameraControls.install( { THREE: THREE } );
globalThis.THREE = THREE;

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  ngOnInit(): void {
    const width = 500;
    const height = 500;
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 28, width / height, 0.01, 100 );
    let directionalLight: THREE.DirectionalLight | null = null;

    // @ts-ignore
    globalThis.camera = camera;
    camera.position.set( 0, 0, 5 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.querySelector("app-earth")?.appendChild( renderer.domElement );

    const cameraControls = new CameraControls( camera, renderer.domElement );
    cameraControls.mouseButtons.left = CameraControls.ACTION.ROTATE;
    cameraControls.mouseButtons.right = CameraControls.ACTION.NONE;
    cameraControls.mouseButtons.wheel = CameraControls.ACTION.NONE;

    // @ts-ignore
    globalThis.cameraControls = cameraControls;

    const loader = new GLTFLoader();
    loader.load(
      'assets/gltf/low_poly_earth.gltf',
      ( gltf ) => {
        const model = gltf.scene;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.copy(camera.position);
        scene.add(directionalLight);

        scene.add( model );
        renderer.setClearColor(new THREE.Color(0xff181a1b));
        renderer.render( scene, camera );
      },
      ( xhr ) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      ( error ) => {
        console.error( 'An error happened', error );
      }
    );

    ( function anim () {
      const delta = clock.getDelta();
      const updated = cameraControls.update( delta );
      updateLightPosition(camera);
      requestAnimationFrame( anim );
      if ( updated ) {
        renderer.render( scene, camera );
        console.log( 'rendered' );
      }
    } )();

    function updateLightPosition(camera: THREE.PerspectiveCamera) {
      if (directionalLight !== null) {
        directionalLight.position.copy(camera.position);
      }
    }
  }


}

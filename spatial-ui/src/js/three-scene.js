import * as THREE from "three";

export function initThreeScene() {

    const canvas = document.querySelector("#spatial-canvas");

    if (!canvas) return;


    /* =========================================
       SCENE
    ========================================= */

    const scene = new THREE.Scene();


    /* =========================================
       CAMERA
    ========================================= */

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.z = 6;


    /* =========================================
       RENDERER
    ========================================= */

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    /* =========================================
       MAIN OBJECT
    ========================================= */

    const geometry = new THREE.IcosahedronGeometry(
        1.55,
        2
    );


    const material = new THREE.MeshPhysicalMaterial({

        color: 0xb7ff2a,

        roughness: 0.22,

        metalness: 0.35,

        clearcoat: 1,

        clearcoatRoughness: 0.15,

        transmission: 0.05
    });


    const object = new THREE.Mesh(
        geometry,
        material
    );
    object.scale.set(
    1.15,
    1.15,
    1.15
);


    scene.add(object);


    /* =========================================
       WIREFRAME OUTER LAYER
    ========================================= */

    const wireGeometry =
        new THREE.IcosahedronGeometry(1.75, 2);


    const wireMaterial =
        new THREE.MeshBasicMaterial({

            color: 0xb7ff2a,

            wireframe: true,

            transparent: true,

            opacity: 0.12
        });


    const wireObject = new THREE.Mesh(
        wireGeometry,
        wireMaterial
    );
    wireObject.scale.set(
    1.08,
    1.08,
    1.08
);


    scene.add(wireObject);


    /* =========================================
       LIGHTING
    ========================================= */

    const ambientLight =
        new THREE.AmbientLight(
            0xffffff,
            1.2
        );

    scene.add(ambientLight);


    const limeLight =
        new THREE.PointLight(
            0xb7ff2a,
            25,
            12
        );

    limeLight.position.set(
        2,
        2,
        3
    );

    scene.add(limeLight);


    const whiteLight =
        new THREE.PointLight(
            0xffffff,
            12,
            10
        );

    whiteLight.position.set(
        -3,
        -2,
        4
    );

    scene.add(whiteLight);


    /* =========================================
       MOUSE
    ========================================= */

    const mouse = {
        x: 0,
        y: 0
    };


    window.addEventListener(
        "mousemove",
        (event) => {

            mouse.x =
                (event.clientX / window.innerWidth) * 2 - 1;

            mouse.y =
                -(event.clientY / window.innerHeight) * 2 + 1;

        }
    );


    /* =========================================
       ANIMATION
    ========================================= */

    const clock = new THREE.Clock();


    function animate() {

        const elapsed =
            clock.getElapsedTime();


        /* Continuous rotation */

        object.rotation.x =
            elapsed * 0.12;

        object.rotation.y =
            elapsed * 0.18;


        wireObject.rotation.x =
            -elapsed * 0.06;

        wireObject.rotation.y =
            -elapsed * 0.1;


        /* Floating movement */

        object.position.y =
            Math.sin(elapsed * 0.8) * 0.22;

        wireObject.position.y =
            object.position.y;


        /* Mouse interaction */

        object.rotation.x +=
            mouse.y * 0.15;

        object.rotation.y +=
            mouse.x * 0.15;


        wireObject.rotation.x +=
            mouse.y * 0.08;

        wireObject.rotation.y +=
            mouse.x * 0.08;


        renderer.render(
            scene,
            camera
        );

        requestAnimationFrame(
            animate
        );
    }


    animate();


    /* =========================================
       RESPONSIVE
    ========================================= */

    function resize() {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );
    }


    window.addEventListener(
        "resize",
        resize
    );
}
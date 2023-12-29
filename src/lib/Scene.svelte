<script>
    import Model from "$lib/Model.svelte";

    import { T } from "@threlte/core";
    import { OrbitControls, Float } from "@threlte/extras";
</script>

<T.PerspectiveCamera makeDefault position={[2.5, 0, 2.5]}>
    <OrbitControls
        enabled={true}
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.08}
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={1}
        minPolarAngle={1}
    />
</T.PerspectiveCamera>
<T.DirectionalLight position={[1, 3, 2]} intensity={Math.PI} />
<T.AmbientLight intensity={0.3} />

<Float
    floatIntensity={[0, 0.5, 0]}
    rotationIntensity={[0, 0, 1]}
    rotationSpeed={4}
    speed={6}
>
    <T.Group position.y={0.8}>
        <Model />
    </T.Group>
</Float>

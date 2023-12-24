<script lang="ts">
    import { T } from "@threlte/core";
    import { Grid, OrbitControls, interactivity } from "@threlte/extras";

    interactivity();
</script>

<T.PerspectiveCamera
    makeDefault
    position={[8, 8, 8]}
>
    <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 10, 7]} intensity={Math.PI} />

<T.AmbientLight intensity={0.3} />

<T.Mesh position.y={2}>
    <T.SphereGeometry args={[2]} />
    <T.MeshStandardMaterial color="#8caaee" toneMapped={false} />
</T.Mesh>

<Grid cellColor="#737994" sectionColor="#838ba7" />

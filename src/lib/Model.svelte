<script>
  import { Group, OrthographicCamera, PerspectiveCamera } from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { useGltf, Grid, OrbitControls, Float } from "@threlte/extras";

  export const ref = new Group();

  const gltf = useGltf("/model.glb", {
    useDraco: true,
  });

  const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <Float
      floatIntensity={[0, 1, 0]}
      rotationIntensity={[0, 0, 1]}
      rotationSpeed={4}
      speed={2}
    >
      <T.Group position.y={1}>
        <T.Mesh
          geometry={gltf.nodes.Cube005.geometry}
          material={gltf.materials.Mat0}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_1.geometry}
          material={gltf.materials.Mat1}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_2.geometry}
          material={gltf.materials.Mat2}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_3.geometry}
          material={gltf.materials.Window_Frame}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_4.geometry}
          material={gltf.materials.Mat4}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_5.geometry}
          material={gltf.materials.Mat3}
        />
        <T.Mesh
          geometry={gltf.nodes.Cube005_6.geometry}
          material={gltf.materials.Window}
        />
      </T.Group>
    </Float>
    <T.AmbientLight intensity={0.3} />
    <T.PerspectiveCamera makeDefault position={[1.8, 1.6, 2.8]}>
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
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>

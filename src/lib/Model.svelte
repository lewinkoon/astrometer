<script>
  import { Group } from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { useGltf, Grid, OrbitControls } from "@threlte/extras";

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
    <T.AmbientLight intensity={0.3} />
    <T.PerspectiveCamera makeDefault position={[2, 2, 3]}>
      <OrbitControls />
    </T.PerspectiveCamera>
    <T.DirectionalLight position={[1, 3, 2]} intensity={Math.PI} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>

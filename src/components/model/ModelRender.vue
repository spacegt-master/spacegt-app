<!-- <script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
</script>

<template>
  <TresCanvas clear-color="#82DBC5">
    <TresPerspectiveCamera :position="[9, 9, 9]" />
    <OrbitControls />
    <TresMesh :position="[-2, 2, 0]" :rotation="[0, Math.PI, 0]">
      <TresConeGeometry :args="[1, 1.5, 3]" />
      <TresMeshToonMaterial color="#82DBC5" />
    </TresMesh>
    <TresMesh :position="[0, 0, 0]" cast-shadow>
      <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
      <TresMeshToonMaterial color="#4F4F4F" />
    </TresMesh>
    <TresMesh :position="[2, -2, 0]">
      <TresSphereGeometry />
      <TresMeshToonMaterial color="#FBB03B" />
    </TresMesh>
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template> -->
<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import UgglyBunny from './UgglyBunny.vue';

const gl = {
  clearColor: '#eeeeee',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: false,
}
</script>
<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[2, 2, 9]" :look-at="[0, 2, 0]" />
    <OrbitControls />
    <Suspense>
      <UgglyBunny />
    </Suspense>
    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>

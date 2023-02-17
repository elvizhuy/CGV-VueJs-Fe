<template>
    <slot>
        <showing-place></showing-place>
    </slot>
  
</template>

<script>
import ShowingPlace from "./ShowingPlace.vue";
export default {
  components: { ShowingPlace },
};
</script>

<style></style>

<template>
    <div class="flex-grow-1 d-flex flex-column" v-class="['container']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutContainer'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.container {
    position: relative;
}
</style>

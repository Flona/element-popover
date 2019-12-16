<template>
    <header class="d-flex align-center" v-class="['header']">{{ $route.name }}</header>
</template>

<script>
export default {
    name: 'AppHeader'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.header {
    font-size: 20px;
    color: $app-black-65;
    padding-top: $app-offset-small;
    padding-bottom: $app-offset-small;
}
</style>

<template>
    <div class="d-flex flex-grow-1" v-class="['app']">
        <div class="flex-shrink-0 d-flex flex-column" v-class="['aisde']">
            <slot name="aside"></slot>
        </div>

        <div class="flex-grow-1 d-flex flex-column" v-class="['main']">
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutApp'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.app {
    min-width: 100vw;
    min-height: 100vh;
    background: $app-background-color;
}

.main {
    margin-left: $app-offset-small;
    margin-right: $app-offset-small;
    min-width: $app-main-width;
}
</style>

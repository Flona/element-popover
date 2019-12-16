<template>
    <footer v-class="['footer']">
        &copy;是小黑呀智能科技有限公司 2018-2019 版权所有
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.footer {
    text-align: center;
    color: $app-black-25;
    font-size: 12px;
    padding: $app-offset-large 0;
}
</style>

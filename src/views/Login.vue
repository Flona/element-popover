<template>
    <div class="d-flex align-center justify-center" v-class="['login']">
        <div class="d-flex flex-column align-center justify-center" v-class="['login__inner']">
            <p class="color-danger mb-large">注意，此时用户是未登录状态，但路由是正常路由</p>

            <el-button @click="onSignIn" type="primary" size="large">登录</el-button>
        </div>
    </div>
</template>

<script>
import { signIn } from '../services/user';

export default {
    name: 'Login',

    methods: {
        async onSignIn() {
            try {
                await signIn();
            } catch (err) {
                alert(err.message);
            }
        }
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.login {
    width: 100vw;
    height: 100vh;
    background: $app-background-color;

    &__inner {
        width: $app-main-width;
        height: 700px;
        margin: auto;
        background: #fff;
        border-radius: 4px;
    }
}
</style>

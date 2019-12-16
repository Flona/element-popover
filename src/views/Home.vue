<template>
    <LayoutContainer v-class="['home']">
        <div class="flex-grow-1 d-flex flex-column justify-center align-center">
            <div v-class="['brand']">
                <img src="../assets/logo.png" alt="logo" v-class="['brand__logo']" />

                <p class="d-flex align-center justify-center" v-class="['brand__park']">
                    <SvgIcon name="park"></SvgIcon>
                    小黑园区
                    <el-button type="danger" class="ml-small" @click="onSignOut">退出</el-button>
                </p>
            </div>

            <div v-class="['todo']">
                <h2 v-class="['todo__head']">Todo</h2>
                <p v-class="['todo__title']">{{ todo.title }}</p>
            </div>
        </div>
    </LayoutContainer>
</template>

<script>
import LayoutContainer from '../components/layout/LayoutContainer';
import SvgIcon from '../components/SvgIcon';
import { getTodo } from '../services/todo';
import { signOut } from '../services/user';

export default {
    components: {
        LayoutContainer,
        SvgIcon
    },

    name: 'Home',

    data() {
        return {
            todo: {
                title: '...'
            }
        };
    },

    mounted() {
        this.initData();
    },

    methods: {
        async initData() {
            try {
                this.todo = await getTodo();
            } catch (err) {
                alert(err.message);
            }
        },

        async onSignOut() {
            await signOut();
        }
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';

.home {
    background: #fff;
}

.brand {
    margin-bottom: $app-offset-large;

    &__logo {
        max-width: 600px;
        height: auto;
        margin-bottom: $app-offset-xlarge;
    }

    &__park {
        font-size: 20px;
        color: $app-black-65;

        .svg-icon {
            margin-right: $app-offset-xsmall;
        }
    }
}

.todo {
    color: $app-black-65;

    &__head {
        font-weight: normal;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
    }

    &__title {
        font-size: 16px;
    }
}
</style>

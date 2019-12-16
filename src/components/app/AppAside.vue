<template>
    <aside class="flex-grow-1" v-class="['aside']">
        <div v-class="['brand']">
            <svg-icon v-class="['brand__logo']" name="logo"></svg-icon>
            <h1 v-class="['brand__name']">element-popover</h1>
        </div>

        <nav v-class="['nav']">
            <ul>
                <li v-class="['nav__item']" v-for="nav in navList" :key="nav.name">
                    <router-link :to="nav.path">
                        <svg-icon v-class="['nav__icon']" :name="nav.icon"></svg-icon>
                        <span v-class="['nav__name']">{{ nav.name }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'AppAside',

    data() {
        return {
            navList: [
                { name: '首页', path: '/home', icon: 'nav-home' },
                { name: '气泡框', path: '/popover', icon: 'nav-popover' }
            ]
        };
    }
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.aside {
    width: $app-aside-width;
    background: #4f6a8a;
}

.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $app-offset-small 0;

    &__logo {
        width: 40px;
        height: 40px;
    }

    &__name {
        line-height: 20px;
        font-size: 16px;
        color: #fff;
        border-left: 1px solid currentColor;
        padding-left: $app-offset-small;
        margin-left: $app-offset-small;
        font-weight: 500;
    }
}

.nav {
    &__item {
        margin-bottom: $app-offset-small;
        padding: 0 $app-offset-xsmall;
    }

    a {
        display: block;
        line-height: 44px;
        color: #fff;
        padding: 0 $app-offset-xsmall;
        border-radius: 4px;
        font-size: 14px;

        &:hover {
            background: #405a79;
            color: #fff;
        }

        &:global(.router-link-active) {
            background: $app-primary-color;
        }
    }

    &__icon {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    &__name {
        margin-left: $app-offset-small;
    }
}
</style>

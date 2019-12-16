<template>
    <LayoutApp v-if="userToken">
        <template v-slot:aside>
            <AppAside></AppAside>
        </template>

        <template v-slot:main>
            <AppHeader></AppHeader>
            <router-view></router-view>
            <AppFooter></AppFooter>
        </template>
    </LayoutApp>

    <Login v-else></Login>
</template>

<script>
import { mapState } from 'vuex';
import LayoutApp from './components/layout/LayoutApp';
import AppAside from './components/app/AppAside';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';
import Login from './views/Login';

export default {
    name: 'App',

    components: {
        AppFooter,
        AppHeader,
        LayoutApp,
        AppAside,
        Login
    },

    computed: {
        ...mapState(['userToken'])
    }
};
</script>

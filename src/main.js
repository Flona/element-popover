import './styles/reset.css';
import './styles/color.css';
import './styles/flex.css';
import './styles/offset.css';
import './styles/text.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import SvgIcon from './components/SvgIcon';
import elementUI from './plugins/element-ui';
import cssModule from './plugins/css-module';

Vue.component('svg-icon', SvgIcon);
Vue.use(elementUI());
Vue.use(cssModule());
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

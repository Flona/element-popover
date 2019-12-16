'use strict';

import { Button, Popover, Table, TableColumn, Tooltip } from 'element-ui';

export default function elementUI() {
    return {
        install(Vue) {
            Vue.use(Button);
            Vue.use(Popover);
            Vue.use(Table);
            Vue.use(TableColumn);
            Vue.use(Tooltip);
        }
    };
}

'use strict';

export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/popover',
        name: 'Popover',
        component: () => import('../views/Popover')
    },
    {
        path: '*',
        redirect: '/home'
    }
];

'use strict';

import axios from 'axios';
import qs from 'blear.utils.querystring';

const service = axios.create();

service.interceptors.request.use(
    config => {
        const isGetMethod = config.method.toUpperCase() === 'GET';

        if (!isGetMethod) {
            const data = config.data || {};
            const isFormData = data instanceof FormData;

            if (!isFormData) {
                config.headers['content-type'] = 'application/json';
                config.data = JSON.stringify(data);
            }
        }

        config.paramsSerializer = params => {
            return qs.stringify(params);
        };

        return config;
    },
    err => {
        throw err;
    }
);

service.interceptors.response.use(
    res => {
        const { code, message } = res.data;

        if (code && message) {
            throw new Error(message);
        }

        return res;
    },
    err => {
        const message = (err.response && err.response.data && err.response.data.message) || '网络出现了问题';
        throw new Error(message);
    }
);

export default service;

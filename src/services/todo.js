'use strict';

import service from '../utils/service';

/**
 * 获取一个随机值
 * @returns {Promise}
 */
export async function getTodo() {
    const res = await service.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.data;
}

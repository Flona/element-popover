'use strict';

import service from '../utils/service';

/**
 * 获取表格数据
 * @returns {Promise}
 */
export async function getTableData() {
    return new Promise(resolve => {
        setTimeout(() => {
            let data = [];
            for (let i = 1; i <= 20; i++) {
                let obj = {};
                for (let n = 1; n <= 30; n++) {
                    obj[`date${n}`] = `2020-${i}-${n}`;
                    // obj[`visible${n}`] = false;
                }
                data.push(obj);
            }
            resolve(data);
        }, 500);
    });
}

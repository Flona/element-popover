'use strict';

import { addClassName, delClassName, applyClassName } from './utils';

export default function classContext(el, vnode, adds, dels) {
    const { $style = {} } = vnode.context;
    const mod = (list, add) => {
        list.forEach(([key]) => {
            const className = $style[key];

            if (!className) {
                return;
            }

            if (add) {
                addClassName(el, className);
            } else {
                delClassName(el, className);
            }
        });
    };

    mod(adds, true);
    mod(dels, false);
    applyClassName(el);
}

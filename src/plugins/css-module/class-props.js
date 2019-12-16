'use strict';

import { addClassName, delClassName, applyClassName } from './utils';

export default function classProps(el, vnode, adds, dels) {
    const { $style: context$style = {} } = vnode.context;
    const { $style: child$style = {} } = vnode.child;
    const elMap = new Map();
    const mod = (list, add) => {
        list.forEach(([childKey, contextKey]) => {
            const childClassName = child$style[childKey];
            const contextClassName = context$style[contextKey];

            if (!childClassName || !contextClassName) {
                return;
            }

            Array.from(el.getElementsByClassName(childClassName)).forEach(el => {
                if (add) {
                    addClassName(el, contextClassName);
                } else {
                    delClassName(el, contextClassName);
                }

                applyClassName(el);
                elMap.set(el, true);
            });

            if (el.classList.contains(childClassName)) {
                if (add) {
                    addClassName(el, contextClassName);
                } else {
                    delClassName(el, contextClassName);
                }

                elMap.set(el, true);
            }
        });
    };

    mod(adds, true);
    mod(dels, false);

    for (el of elMap.keys()) {
        applyClassName(el);
    }
}

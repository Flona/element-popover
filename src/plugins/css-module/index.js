'use strict';

import { different, parseValue } from './utils';
import { filter } from 'blear.utils.object';
import classContext from './class-context';
import classProps from './class-props';

const CLASS_CONTE_KEY = Symbol();
const CLASS_PROPS_KEY = Symbol();

export default function cssModule() {
    return {
        install(Vue) {
            Vue.directive('class', function(el, binding, vnode, oldVnode) {
                const props = binding.modifiers.props;
                const { data: nowData } = vnode;
                const { data: oldData } = oldVnode;
                let { value: nowValue } = binding;
                nowValue = parseValue(nowValue);
                nowValue = filter(nowValue, val => val);

                if (props) {
                    nowData[CLASS_PROPS_KEY] = nowValue;
                    const { [CLASS_PROPS_KEY]: oldValue = {} } = oldData;
                    const { adds, dels } = different(oldValue, nowValue);
                    classProps(el, vnode, adds, dels);
                } else {
                    nowData[CLASS_CONTE_KEY] = nowValue;
                    const { [CLASS_CONTE_KEY]: oldValue = {} } = oldData;
                    const { adds, dels } = different(oldValue, nowValue);
                    classContext(el, vnode, adds, dels);
                }
            });
        }
    };
}

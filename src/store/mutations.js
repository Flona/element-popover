'use strict';

import { SET_USER_TOKEN } from './types';

export default {
    [SET_USER_TOKEN](state, userToken) {
        state.userToken = userToken;
    }
};

/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */
 import { CFG_STATE_IDLE } from '../../meep-constants';

const CFG_CHANGE_STATE = 'CFG_CHANGE_STATE';

const initialState = CFG_STATE_IDLE;

// CHANGE_STATE
function cfgChangeState(state) {
  return {
    type: CFG_CHANGE_STATE,
    payload: state
  };
}

export { cfgChangeState };

export function stateReducer(state = initialState, action) {
  switch (action.type) {
  case CFG_CHANGE_STATE:
    return action.payload;
  default:
    return state;
  }
}

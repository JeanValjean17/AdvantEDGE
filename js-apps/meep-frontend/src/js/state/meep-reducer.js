/*
 * Copyright (c) 2019
 * InterDigital Communications, Inc.
 * All rights reserved.
 *
 * The information provided herein is the proprietary and confidential
 * information of InterDigital Communications, Inc.
 */
 import { combineReducers } from 'redux';

import uiReducer from './ui';
import cfgReducer from './cfg';
import execReducer from './exec';
import settingsReducer from './settings';

const meepReducer = combineReducers({
  ui: uiReducer,
  cfg: cfgReducer,
  exec: execReducer,
  settings: settingsReducer
});

export default meepReducer;

/* @flow */

import {fromJS} from 'immutable';
import Cursor from 'immutable/contrib/cursor';

var state = fromJS({
  app: {}
});

export function cursor(path: Array<string>) {
  var onChange = function(newState, prevState, changedPath) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('App State changed in', changedPath, newState.toJS());
    }
    if (prevState !== state) {
      throw new Error('Attempted to alter an expired cursor', path);
    }
    state = newState;
  };
  return Cursor.from(state, path, onChange);
}

export var appPath = ['app'];

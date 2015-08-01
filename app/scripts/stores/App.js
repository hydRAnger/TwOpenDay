/* @flow */

//import {fromJS} from 'immutable';

import Store from './Store';
import {ActionTypes} from '../Constants';

class Session extends Store {
  constructor() {
    super();
  }

  getActionName(): any {
    return this.get('actionName');
  }
}

var store = new Session();
export default store;

store.addHandler(ActionTypes.ACTION_DONE, function(body: any) {
  var {actionName} = body;
  store.cursor().set('actionName', actionName);
  store.emitChange();
});

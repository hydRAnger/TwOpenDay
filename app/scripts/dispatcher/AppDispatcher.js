/* @flow */

import {Dispatcher} from 'flux';


class AppDispatcher extends Dispatcher {
  handleAction(type: string, body?: Object) {
    body = body || {};
    this.dispatch({
      type,
      body
    });
  }
}

export default new AppDispatcher();

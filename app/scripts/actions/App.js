/* @flow */

import AppDispatcher from '../dispatcher/AppDispatcher';
import {ActionTypes} from '../Constants';

export function action(actionName: String) {
  AppDispatcher.handleAction(ActionTypes.ACTION_DONE, {
    actionName
  });
}

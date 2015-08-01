/* @flow */

import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

import * as State from '../State';

var CHANGE_EVENT = 'change';

type ActionHandler = (body: Object) => void;
type PayloadHandlers = {[key:string]: ActionHandler};
type PayloadItem = {type: string; body: Object};
type Dispatcher = typeof AppDispatcher;

var dispatchToHandlers = function(payload: PayloadItem) {
  var {type, body} = payload;
  if (type in this.handlers) {
    this.handlers[type](body);
  }
};

class Store extends EventEmitter {

  handlers: PayloadHandlers;

  dispatcherIndex: ?string;

  path: Array<string>;

  waitFor: (...stores: Array<Store>) => void;

  constructor(path?: Array<string>, dispatcher?: Dispatcher) {
    super();

    dispatcher = dispatcher || AppDispatcher;
    this.handlers = {};
    this.dispatcherIndex = dispatcher.register(payload => dispatchToHandlers.call(this, payload));
    this.path = path ? path : [];
    this.waitFor = function(...stores) {
      dispatcher && dispatcher.waitFor(stores.map(store => store.dispatcherIndex));
    };
  }

  cursor(): any {
    return State.cursor(this.path);
  }

  get(path: string | Array<string>, notSetValue?: any): any {
    if (!Array.isArray(path)) {
      path = [path];
    }
    return this.getIn(path, notSetValue);
  }

  getIn(path: Array<string>, notSetValue?: any): any {
    var result = this.cursor().getIn(path, notSetValue);
    return (result && result.deref) ? result.deref() : result;
  }

  has(path: string): boolean {
    return this.cursor().has(path);
  }

  hasIn(path: Array<string>): boolean {
    return this.cursor().hasIn(path);
  }

  addHandler(key: string, handler: ActionHandler) {
    this.handlers[key] = handler;
  }

  addChangeListener(callback: Function) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: Function) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default Store;

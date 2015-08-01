/* @flow */

class Storage<T> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  set(value: T): boolean {
    return window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  get(): ?T{
    try {
      return JSON.parse(window.localStorage.getItem(this.key));
    } catch (err) {
      return null;
    }
  }

  remove(): boolean {
    return window.localStorage.removeItem(this.key);
  }
}

export default Storage;

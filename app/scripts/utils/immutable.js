/* @flow */

type Predicate <K, V> = (value: V, key?: K) => boolean;
type Mapper <V> = (value: V) => V;

export function mapIf(predicate: Predicate, mapper: Mapper): Mapper {
  return function (v) {
    return predicate(v) ? mapper(v) : v;
  };
}

export function replaceIf(predicate: Predicate, newItem: Object): Mapper {
  return mapIf(predicate, () => newItem);
}

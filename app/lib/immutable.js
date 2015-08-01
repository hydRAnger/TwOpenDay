declare module "immutable" {
	declare class Iterable<K, V> {
		static isIterable(maybeIterable: any): boolean;
		static isKeyed(maybeKeyed: any): boolean;
		static isIndexed(maybeIndexed: any): boolean;
		static isAssociative(maybeAssociative: any): boolean;
		static isOrdered(maybeOrdered: any): boolean;

		toArray(): Array<V>;
		toIndexedSeq(): IndexedSeq<V>;
		toJS(): any;
		toKeyedSeq(): KeyedSeq<K, V>;
		toMap(): Map<K, V>;
		toObject(): { [key: string]: V };
		toOrderedMap(): Map<K, V>;
		toOrderedSet(): Set<V>;
		toSet(): Set<V>;
		toSetSeq(): SetSeq<V>;
		toSeq(): Seq<K, V>;
		toStack(): Stack<V>;
		toList(): List<V>;
		toString(): string;
		concat(...valuesOrIterables: any[]): Iterable<K, V>;
		contains(value: V): boolean;
		entries(): Iterator<Array<any>>;
		every(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): boolean;
		filter(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		find(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any,
		    notSetValue?: V
		    ): V;
		forEach(
		    sideEffect: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
		    context?: any
		    ): number;
		join(separator?: string): string;
		keys(): Iterator<K>;
		map<M>(
		    mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => M,
		    context?: any
		    ): Iterable<K, M>;
		reduce<R>(
		    reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
		    initialReduction?: R,
		    context?: any
		    ): R;
		reduceRight<R>(
		    reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
		    initialReduction?: R,
		    context?: any
		    ): R;
		reverse(): Iterable<K, V>;
		slice(begin?: number, end?: number): Iterable<K, V>;
		some(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): boolean;
		sort(comparator?: (valueA: V, valueB: V) => number): Iterable<K, V>;
		values(): Iterator<V>;
		butLast(): Iterable<K, V>;
		count(): number;
		count(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): number;
		countBy<G>(
		    grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
		    context?: any
		    ): Map<G, number>;
		equals(other: Iterable<K, V>): boolean;
		entrySeq(): IndexedSeq<Array<any>>;
		filterNot(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		findLast(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any,
		    notSetValue?: V
		    ): V;
		first(): V;
		flatMap<MK, MV>(
		    mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => Iterable<MK, MV>,
		    context?: any
		    ): Iterable<MK, MV>;
		flatMap<MK, MV>(
		    mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
		    context?: any
		    ): Iterable<MK, MV>;
		flatten(depth?: number): Iterable<any, any>;
		flatten(shallow?: boolean): Iterable<any, any>;
		get(key: K, notSetValue?: V): V;
		getIn(searchKeyPath: Array<any>, notSetValue?: any): any;
		getIn(searchKeyPath: Iterable<any, any>, notSetValue?: any): any;
		groupBy<G>(
		    grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
		    context?: any
		    ): KeyedSeq<G, Iterable<K, V>>;
		has(key: K): boolean;
		isSubset(iter: Iterable<any, V>): boolean;
		isSubset(iter: Array<V>): boolean;
		isSuperset(iter: Iterable<any, V>): boolean;
		isSuperset(iter: Array<V>): boolean;
		keySeq(): IndexedSeq<K>;
		last(): V;
		max(comparator?: (valueA: V, valueB: V) => number): V;
		maxBy<C>(
		    comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
		    comparator?: (valueA: C, valueB: C) => number
		    ): V;
		min(comparator?: (valueA: V, valueB: V) => number): V;
		minBy<C>(
		    comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
		    comparator?: (valueA: C, valueB: C) => number
		    ): V;
		rest(): Iterable<K, V>;
		skip(amount: number): Iterable<K, V>;
		skipLast(amount: number): Iterable<K, V>;
		skipWhile(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		skipUntil(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		sortBy<C>(
		    comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
		    comparator?: (valueA: C, valueB: C) => number
		    ): Iterable<K, V>;
		take(amount: number): Iterable<K, V>;
		takeLast(amount: number): Iterable<K, V>;
		takeWhile(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		takeUntil(
		    predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
		    context?: any
		    ): Iterable<K, V>;
		valueSeq(): IndexedSeq<V>;
		size: number;
	}

	declare class IndexedIterable<T> extends Iterable<number, T> {
		static <T>(iter: IndexedIterable<T>): IndexedIterable<T>;
		static <T>(iter: SetIterable<T>): IndexedIterable<T>;
		static <K, V>(iter: KeyedIterable<K, V>): IndexedIterable<any>;
		static <T>(array: Array<T>): IndexedIterable<T>;
		static <T>(iterator: Iterator<T>): IndexedIterable<T>;
		static <T>(iterable: Object): IndexedIterable<T>;

		toSeq(): IndexedSeq<T>;
		findIndex(
		  predicate: (value?: T, index?: number, iter?: IndexedIterable<T>) => boolean,
		  context?: any
		  ): number;
		indexOf(searchValue: T): number;
		lastIndexOf(searchValue: T): number;
		splice(
		  index: number,
		  removeNum: number,
		  ...values: any[]
		  ): IndexedIterable<T>;
		findLastIndex(
		  predicate: (value?: T, index?: number, iter?: IndexedIterable<T>) => boolean,
		  context?: any
		  ): number;
		fromEntrySeq(): KeyedSeq<any, any>;
		get(index: number, notSetValue?: T): T;
		interpose(separator: T): IndexedIterable<T>;
	}

	declare class KeyedIterable<K, V> extends Iterable<K, V> {
		static <K, V>(iter: KeyedIterable<K, V>): KeyedIterable<K, V>;
		static <K, V>(iter: Iterable<any, any>): KeyedIterable<K, V>;
		static <K, V>(array: Array<any>): KeyedIterable<K, V>;
		static <K, V>(obj: {[key: string]: V}): KeyedIterable<string, V>;
		static <K, V>(iterator: Iterator<any>): KeyedIterable<K, V>;
		static <K, V>(iterable: Object): KeyedIterable<K, V>;

		toSeq(): KeyedSeq<K, V>;
		flip(): KeyedIterable<V, K>;
		findKey(
		  predicate: (value?: V, key?: K, iter?: KeyedIterable<K, V>) => boolean,
		  context?: any
		  ): K;
		findLastKey(
		  predicate: (value?: V, key?: K, iter?: KeyedIterable<K, V>) => boolean,
		  context?: any
		  ): K;
		keyOf(searchValue: V): K;
		lastKeyOf(searchValue: V): K;
		mapEntries<KM, VM>(
		  mapper: (entry?: Array<any>, index?: number, iter?: KeyedIterable<K, V>) => Array<any>,
		  context?: any
		  ): KeyedIterable<KM, VM>;
		mapKeys<M>(
		  mapper: (key?: K, value?: V, iter?: KeyedIterable<K, V>) => M,
		  context?: any
		  ): KeyedIterable<M, V>;
	}

	declare class SetIterable<T> extends Iterable<T, T> {
		static isSeq(maybeSeq: any): boolean;
		static of<T>(...values: T[]): IndexedSeq<T>;

		static <T>(iter: SetIterable<T>): SetIterable<T>;
		static <T>(iter: IndexedIterable<T>): SetIterable<T>;
		static <K, V>(iter: KeyedIterable<K, V>): SetIterable<any>;
		static <T>(array: Array<T>): SetIterable<T>;
		static <T>(iterator: Iterator<T>): SetIterable<T>;
		static <T>(iterable: Object): SetIterable<T>;

		toSeq(): SetSeq<T>;
		toKeyedSeq(): KeyedSeq<T, T>;
	}

	declare class Collection<K, V> extends Iterable<K, V> {
		size: number;
	}

	declare class IndexedCollection<T> extends Collection<number, T>, IndexedIterable<T> {
		toSeq(): IndexedSeq<T>;
	}

	declare class KeyedCollection<K, V> extends Collection<K, V>, KeyedIterable<K, V> {
		toSeq(): KeyedSeq<K, V>;
	}

	declare class SetCollection<T> extends Collection<T, T>, SetIterable<T> {
		toSeq(): SetSeq<T>;
	}

	declare class Seq<K, V> extends Iterable<K, V> {
		static isSeq(maybeSeq: any): boolean;
		// this method should be here, however it breaks flow typesystem
		// if added in version 0.13.1
		// static of<T>(...values: T[]): IndexedSeq<T>;

		static <K, V>(): Seq<K, V>;
		static <K, V>(seq: Seq<K, V>): Seq<K, V>;
		static <K, V>(iterable: Iterable<K, V>): Seq<K, V>;
		static <T>(array: Array<T>): IndexedSeq<T>;
		static <V>(obj: {[key: string]: V}): KeyedSeq<string, V>;
		static <T>(iterator: Iterator<T>): IndexedSeq<T>;
		static <T>(iterable: Object): IndexedSeq<T>;

		cacheResult(): Seq<K, V>;
		size: number;
	}

	declare class KeyedSeq<K, V> extends Seq<K, V>, KeyedIterable<K, V> {
		static <K, V>(): KeyedSeq<K, V>;
		static <K, V>(seq: KeyedIterable<K, V>): KeyedSeq<K, V>;
		static <K, V>(seq: Iterable<any, any>): KeyedSeq<K, V>;
		static <K, V>(array: Array<any>): KeyedSeq<K, V>;
		static <V>(obj: {[key: string]: V}): KeyedSeq<string, V>;
		static <K, V>(iterator: Iterator<any>): KeyedSeq<K, V>;
		static <K, V>(iterable: Object): KeyedSeq<K, V>;

		toSeq(): KeyedSeq<K, V>;
	}

	declare class IndexedSeq<T> extends Seq<number, T>, IndexedIterable<T> {
		static of<T>(...values: T[]): IndexedSeq<T>;

		static <T>(): IndexedSeq<T>;
		static <T>(seq: IndexedIterable<T>): IndexedSeq<T>;
		static <T>(seq: SetIterable<T>): IndexedSeq<T>;
		static <T>(array: Array<T>): IndexedSeq<T>;
		static <T>(iterator: Iterator<T>): IndexedSeq<T>;
		static <T>(iterable: Object): IndexedSeq<T>;

		toSeq(): IndexedSeq<T>;
	}

	declare class SetSeq<T> extends Seq<T, T>, SetIterable<T> {
		static of<T>(...values: T[]): SetSeq<T>;

		static <T>(): SetSeq<T>;
		static <T>(seq: SetIterable<T>): SetSeq<T>;
		static <T>(seq: IndexedIterable<T>): SetSeq<T>;
		static <K, V>(seq: KeyedIterable<K, V>): SetSeq<any>;
		static <T>(array: Array<T>): SetSeq<T>;
		static <T>(iterator: Iterator<T>): SetSeq<T>;
		static <T>(iterable: Object): SetSeq<T>;

		toSeq(): SetSeq<T>;
	}

	declare class Stack<T> extends IndexedCollection<T> {
		static isStack(maybeStack: any): boolean;
		static of<T>(...values: T[]): Stack<T>;

		static <T>(): Stack<T>;
		static <T>(iter: IndexedIterable<T>): Stack<T>;
		static <T>(iter: SetIterable<T>): Stack<T>;
		static <K, V>(iter: KeyedIterable<K, V>): Stack<any>;
		static <T>(array: Array<T>): Stack<T>;
		static <T>(iterator: Iterator<T>): Stack<T>;
		static <T>(iterable: Object): Stack<T>;

		clear(): Stack<T>;
		unshift(...values: T[]): Stack<T>;
		unshiftAll(iter: Iterable<any, T>): Stack<T>;
		unshiftAll(iter: Array<T>): Stack<T>;
		shift(): Stack<T>;
		push(...values: T[]): Stack<T>;
		pushAll(iter: Iterable<any, T>): Stack<T>;
		pushAll(iter: Array<T>): Stack<T>;
		pop(): Stack<T>;
		peek(): T;
		withMutations(mutator: (mutable: List<T>) => any): List<T>;
		asMutable(): List<T>;
		asImmutable(): List<T>;
	}

	declare class Set<T> extends SetCollection<T> {
		static isSet(maybeSet: any): boolean;
		static of<T>(...values: T[]): Set<T>;
		static fromKeys<T>(iter: Iterable<T, any>): Set<T>;
		static fromKeys(obj: {[key: string]: any}): Set<string>;

		static <T>(): Set<T>;
		static <T>(iter: SetIterable<T>): Set<T>;
		static <T>(iter: IndexedIterable<T>): Set<T>;
		static <K, V>(iter: KeyedIterable<K, V>): Set<any>;
		static <T>(array: Array<T>): Set<T>;
		static <T>(iterator: Iterator<T>): Set<T>;
		static <T>(iterable: Object): Set<T>;

		add(value: T): Set<T>;
		remove(value: T): Set<T>;
		delete(value: T): Set<T>;
		clear(): Set<T>;
		merge(...iterables: Iterable<any, T>[]): Set<T>;
		merge(...iterables: Array<T>[]): Set<T>;
		union(...iterables: Iterable<any, T>[]): Set<T>;
		union(...iterables: Array<T>[]): Set<T>;
		intersect(...iterables: Iterable<any, T>[]): Set<T>;
		intersect(...iterables: Array<T>[]): Set<T>;
		subtract(...iterables: Iterable<any, T>[]): Set<T>;
		subtract(...iterables: Array<T>[]): Set<T>;
		withMutations(mutator: (mutable: Set<T>) => any): Set<T>;
		asMutable(): Set<T>;
		asImmutable(): Set<T>;
	}

	declare class OrderedSet<T> extends Set<T> {
		static isOrderedSet(maybeOrderedSet: any): boolean;
		static of<T>(...values: T[]): OrderedSet<T>;
		static fromKeys<T>(iter: Iterable<T, any>): OrderedSet<T>;
		static fromKeys(obj: {[key: string]: any}): OrderedSet<string>;

		static <T>(): OrderedSet<T>;
		static <T>(iter: SetIterable<T>): OrderedSet<T>;
		static <T>(iter: IndexedIterable<T>): OrderedSet<T>;
		static <K, V>(iter: KeyedIterable<K, V>): OrderedSet<any>;
		static <T>(array: Array<T>): OrderedSet<T>;
		static <T>(iterator: Iterator<T>): OrderedSet<T>;
		static <T>(iterable: Object): OrderedSet<T>;
	}

	declare class Map<K, V> extends KeyedCollection<K, V> {
		static <K, V>(): Map<K, V>;
		static <K, V>(iter: KeyedIterable<K, V>): Map<K, V>;
		static <K, V>(iter: Iterable<any, Array<any>>): Map<K, V>;
		static <K, V>(array: Array<Array<any>>): Map<K, V>;
		static <V>(obj: {[key: string]: V}): Map<string, V>;
		static <K, V>(iterator: Iterator<Array<any>>): Map<K, V>;
		static <K, V>(iterable: Object): Map<K, V>;

		set(key: K, value: V): Map<K, V>;
		setIn(keyPath: Array<any>, value: V): Map<K, V>;
		setIn(KeyPath: Iterable<any, any>, value: V): Map<K, V>;
		remove(key: K): Map<K, V>;
		delete(key: K): Map<K, V>;
		removeIn(keyPath: Array<any>): Map<K, V>;
		removeIn(keyPath: Iterable<any, any>): Map<K, V>;
		clear(): Map<K, V>;
		update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>;
		update(key: K, updater: (value: V) => V): Map<K, V>;
		update(key: K, notSetValue: V, updater: (value: V) => V): Map<K, V>;
		updateIn(
		    keyPath: Array<any>,
		    updater: (value: any) => any
		    ): Map<K, V>;
		updateIn(
		    keyPath: Array<any>,
		    notSetValue: any,
		    updater: (value: any) => any
		    ): Map<K, V>;
		updateIn(
		    keyPath: Iterable<any, any>,
		    updater: (value: any) => any
		    ): Map<K, V>;
		updateIn(
		    keyPath: Iterable<any, any>,
		    notSetValue: any,
		    updater: (value: any) => any
		    ): Map<K, V>;
		merge(...iterables: Iterable<K, V>[]): Map<K, V>;
		merge(...iterables: {[key: string]: V}[]): Map<string, V>;
		mergeWith(
		    merger: (previous?: V, next?: V) => V,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeWith(
		    merger: (previous?: V, next?: V) => V,
		    ...iterables: {[key: string]: V}[]
		    ): Map<string, V>;
		mergeIn(
		    keyPath: Iterable<any, any>,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeIn(
		    keyPath: Array<any>,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeIn(
		    keyPath: Array<any>,
		    ...iterables: {[key: string]: V}[]
		    ): Map<string, V>;
		mergeDeep(...iterables: Iterable<K, V>[]): Map<K, V>;
		mergeDeep(...iterables: {[key: string]: V}[]): Map<string, V>;
		mergeDeepWith(
		    merger: (previous?: V, next?: V) => V,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeDeepWith(
		    merger: (previous?: V, next?: V) => V,
		    ...iterables: {[key: string]: V}[]
		    ): Map<string, V>;
		mergeDeepIn(
		    keyPath: Iterable<any, any>,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeDeepIn(
		    keyPath: Array<any>,
		    ...iterables: Iterable<K, V>[]
		    ): Map<K, V>;
		mergeDeepIn(
		    keyPath: Array<any>,
		    ...iterables: {[key: string]: V}[]
		    ): Map<string, V>;
		withMutations(mutator: (mutable: Map<K, V>) => any): Map<K, V>;
		asMutable(): Map<K, V>;
		asImmutable(): Map<K, V>;
	}

	declare class OrderedMap<K, V> extends Map<K, V> {
		static isOrderedMap(maybeOrderedMap: any): boolean;

		static <K, V>(): OrderedMap<K, V>;
		static <K, V>(iter: KeyedIterable<K, V>): OrderedMap<K, V>;
		static <K, V>(iter: Iterable<any, Array<any>>): OrderedMap<K, V>;
		static <K, V>(array: Array<Array<any>>): OrderedMap<K, V>;
		static <K, V>(obj: {[key: string]: V}): OrderedMap<string, V>;
		static <K, V>(iterator: Iterator<Array<any>>): OrderedMap<K, V>;
		static <K, V>(iterable: Object): OrderedMap<K, V>;
	}

	declare class RecordType {
		(): Map<string, any>;
		(values: {[key: string]: any}): Map<string, any>;
 	}

	declare function Record(
		defaultValues: {[key: string]: any}, name?: string
	): RecordType;

	declare class List<T> extends IndexedCollection<T> {
		static <T>(): List<T>;
		static <T>(array: Array<T>): List<T>;
		static <T>(iter: IndexedIterable<T>): List<T>;
		static <K, V>(iter: KeyedIterable<K, V>): List<any>;
		static <T>(iterator: Iterator<T>): List<T>;
		static <T>(iterable: Object): List<T>;

		static isList(maybeList: any): bool;
		static of<T>(...values: T[]): List<T>;

		set(index: number, value: T): List<T>;
		setIn(keyPath: Array<any>, value: T): List<T>;
		setIn(keyPath: Iterable<any, any>, value: T): List<T>;
		remove(index: number): List<T>;
		delete(index: number): List<T>;
		removeIn(keyPath: Array<any>): List<T>;
		removeIn(keyPath: Iterable<any, any>): List<T>;
		clear(): List<T>;
		push(...values: T[]): List<T>;
		pop(): List<T>;
		unshift(...values: T[]): List<T>;
		shift(): List<T>;
		update(updater: (value: List<T>) => List<T>): List<T>;
		update(index: number, updater: (value: T) => T): List<T>;
		update(index: number, notSetValue: T, updater: (value: T) => T): List<T>;
		updateIn(
		    keyPath: Array<any>,
		    updater: (value: any) => any
		    ): List<T>;
		updateIn(
		    keyPath: Array<any>,
		    notSetValue: any,
		    updater: (value: any) => any
		    ): List<T>;
		updateIn(
		    keyPath: Iterable<any, any>,
		    updater: (value: any) => any
		    ): List<T>;
		updateIn(
		    keyPath: Iterable<any, any>,
		    notSetValue: any,
		    updater: (value: any) => any
		    ): List<T>;
		merge(...iterables: IndexedIterable<T>[]): List<T>;
		merge(...iterables: Array<T>[]): List<T>;
		mergeWith(
		    merger: (previous?: T, next?: T) => T,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeWith(
		    merger: (previous?: T, next?: T) => T,
		    ...iterables: Array<T>[]
		    ): List<T>;
		mergeIn(
		    keyPath: Iterable<any, any>,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeIn(
		    keyPath: Array<any>,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeIn(
		    keyPath: Array<any>,
		    ...iterables: Array<T>[]
		    ): List<T>;
		mergeDeep(...iterables: IndexedIterable<T>[]): List<T>;
		mergeDeep(...iterables: Array<T>[]): List<T>;
		mergeDeepWith(
		    merger: (previous?: T, next?: T) => T,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeDeepWith(
		    merger: (previous?: T, next?: T) => T,
		    ...iterables: Array<T>[]
		    ): List<T>;
		mergeDeepIn(
		    keyPath: Iterable<any, any>,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeDeepIn(
		    keyPath: Array<any>,
		    ...iterables: IndexedIterable<T>[]
		    ): List<T>;
		mergeDeepIn(
		    keyPath: Array<any>,
		    ...iterables: Array<T>[]
		    ): List<T>;
		setSize(size: number): List<T>;
		withMutations(mutator: (mutable: List<T>) => any): List<T>;
		asMutable(): List<T>;
		asImmutable(): List<T>;
	}
	declare class Iterator<T> {
		next(): { value: T; done: boolean; }
	}

	declare function Range(start?: number, end?: number, step?: number): IndexedSeq<number>;
	declare function Repeat<T>(value: T, times?: number): IndexedSeq<T>;
}

interface PromiseIteratorResult<T> {
	done: boolean;
	value: T;
}

interface PromiseIterator<T> {
	next(value?: any): PromiseIteratorResult<T>;
	return?(value?: any): PromiseIteratorResult<T>;
	throw?(e?: any): PromiseIteratorResult<T>;
}

interface PromiseIterable<T> {
	[Symbol.iterator](): PromiseIterator<T>;
}

interface PromiseThenable<T> {
	then<U>(onFulfilled?: (value: T) => U | PromiseThenable<U> | undefined | null, onRejected?: (error: any) => U | PromiseThenable<U>): PromiseThenable<U>;
	then<U>(onFulfilled?: (value: T) => U | PromiseThenable<U> | undefined | null, onRejected?: (error: any) => void): PromiseThenable<U>;
}

declare class Promise<T> {
	constructor(executor: (resolve: (value?: T | PromiseThenable<T>) => void, reject: (reason?: any) => void) => void);

	static all<T>(iterable: PromiseIterable<(T | PromiseThenable<T>)> | (T | PromiseThenable<T>)[]): Promise<T>;
	static race<T>(iterable: PromiseIterable<(T | PromiseThenable<T>)> |  (T | PromiseThenable<T>)[]): Promise<T>;
	static reject<T>(reason?: Error): Promise<T>;
	static resolve(): Promise<undefined>;
	static resolve<T>(value: (T | PromiseThenable<T>)): Promise<T>;
	static resolve<T>(value?: any): Promise<T>;
	catch<T, U>(onRejected: (reason: Error) => (U | PromiseThenable<U>)): Promise<U>;
	catch<T, U>(onRejected: (reason: Error) => void): Promise<U>;
	then<T, U>(onFulfilled?: (value: T) => U | PromiseThenable<U> | undefined | null, onRejected?: (reason: Error) => void): Promise<U>;
	then<T, U>(onFulfilled?: (value: T) => U | PromiseThenable<U> | undefined | null, onRejected?: (reason: Error) => (U | PromiseThenable<U>)): Promise<U>;
}

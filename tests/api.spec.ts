import {it, describe, expect, afterAll, afterEach} from 'vitest';
import {hotkey, Hotkey} from '../src';
import {spyFn} from './utils';

describe('Module Exports', () => {
	it('hotkey', () => {
		expect(hotkey).to.be.a('function');
	});

	it('Hotkey', () => {
		expect(hotkey()).to.be.an.instanceOf(Hotkey);
	});
});

describe('Instance', () => {
	const instance = new Hotkey();
	const spy = spyFn();

	afterEach(() => {
		instance.destruct();
		spy.mockRestore();
	});

	afterAll(() => {
		instance.destruct();
		spy.mockRestore();
	});

	it('.hotkeys', () => {
		expect(instance.hotkeys).to.be.a('Map');
	});

	it('.debugMode', () => {
		expect(instance.debugMode).toBe(false);
	});

	it('.bindKey()', () => {
		expect(instance.bindKey).to.be.a('function');

		const inst = instance.bindKey('a', spy);

		expect(inst).toBe(instance);
	});

	it('.bindKeys()', () => {
		expect(instance.bindKeys).to.be.a('function');

		const inst = instance.bindKeys({'a': spy});

		expect(inst).toBe(instance);
	});

	it('.unbindKey()', () => {
		expect(instance.unbindKey).to.be.a('function');
		instance.bindKey('a', spy);

		const inst = instance.unbindKey('a');

		expect(inst).toBe(instance);
	});

	it('.unbindKeys()', () => {
		expect(instance.unbindKeys).to.be.a('function');

		instance.bindKeys({'a': spy, 'b': spy, 'c': spy});

		const inst = instance.unbindKeys(['a', 'b']);

		expect(inst).toBe(instance);
	});

	it('.unbindAll()', () => {
		expect(instance.unbindAll).to.be.a('function');
		instance.bindKeys({'a': spy, 'b': spy});

		const inst = instance.unbindAll();

		expect(inst).toBe(instance);
	});

	it('.mount()', () => {
		expect(instance.mount).to.be.a('function');

		const inst = instance.mount();

		expect(inst).toBe(instance);
	});

	it('.unmount()', () => {
		expect(instance.unmount).to.be.a('function');

		const inst = instance.unmount();

		expect(inst).toBe(instance);
	});

	it('.destruct()', () => {
		expect(instance.destruct).to.be.a('function');

		const inst = instance.destruct();

		expect(inst).toBe(instance);
	});
});

import type {ContextElement, CombinationHandlers, KeyHandler} from './types';
import {logKbEvent} from './log-keyboard-event';
import {
	unifyModifiers,
	isEventModifier,
	parseHotKey,
	isCapitalLetter,
} from './internals';

export function hotkey (ctxElm: ContextElement = document) {
	return new Hotkey(ctxElm).mount();
}

export class Hotkey {
	public hotkeys = new Map<string, CombinationHandlers>();
	public debugMode: boolean = false;

	constructor (public ctxElm: ContextElement = document) {}

	public bindKey (hotkey: string, handlerFn: KeyHandler) {
		const {targetKey, unifiedModifier} = parseHotKey(hotkey);

		if (this.hotkeys.has(targetKey)) {
			const hotKeys = this.hotkeys.get(targetKey) as CombinationHandlers;

			if (hotKeys[unifiedModifier]) {
				// TODO:! Currently replacing. Throw or add.
				console.log('Dup:', targetKey);
			}

			hotKeys[unifiedModifier] = handlerFn;
		}
		else {
			this.hotkeys.set(targetKey, {[unifiedModifier]: handlerFn});
		}

		return this;
	}

	public bindKeys (hotkeysObj: Record<string, KeyHandler>) {
		for (const [hotkey, keyHandler] of Object.entries(hotkeysObj)) {
			this.bindKey(hotkey, keyHandler);
		}

		return this;
	}

	// TODO: test
	public unbindAll () {
		this.hotkeys.clear();

		return this;
	}

	private keydownHandler = (ev: KeyboardEvent) => {
		this.debugMode && logKbEvent(ev);

		const {key: kValue, code: kId} = ev;

		if (isEventModifier(kValue)) return;

		const upperKeyValue = kValue.toUpperCase();
		const key = isCapitalLetter(upperKeyValue)
			? upperKeyValue
			: this.hotkeys.has(kValue)
				? kValue
				: kId
		;

		const uniMod = unifyModifiers(ev);
		const handler = this.hotkeys.get(key)?.[uniMod];

		handler?.(ev);
	};

	public mount () {
		// TODO: prevent multi mounting
		this.ctxElm.addEventListener('keydown', this.keydownHandler as EventListener);

		return this;
	}

	public unmount () {
		this.ctxElm.removeEventListener('keydown', this.keydownHandler as EventListener);

		return this;
	}

	public destruct () {
		this.unmount();
		this.unbindAll();
	}
}

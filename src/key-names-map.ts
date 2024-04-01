export const ModifierAliases = {
	CONTROL: 'Control',
	CTRL: 'Control',
	ALT: 'Alt',
	SHIFT: 'Shift',
	META: 'Meta',
} as const;

export const SymbolIDs = {
	'[': 'BracketLeft',
	']': 'BracketRight',
	';': 'Semicolon',
	'\'': 'Quote',
	'\\': 'Backslash',
	',': 'Comma',
	'`': 'Backquote',
	'.': ['Period', 'NumpadDecimal'],
	'/': ['Slash', 'NumpadDivide'],
	/* TODO:
		maybe Slash can be removed
		If so, consider special treatment for period and remove it and
		all the array handling
	*/
} as const;

export type SymbolKeyID = typeof SymbolIDs[keyof typeof SymbolIDs];

// export const ImplicitShiftQwertyAliases = {
// 	'{': 'BracketLeft',
// 	'}': 'BracketRight',
// 	':': 'Semicolon',
// 	'"': 'Quote',
// 	'|': 'Backslash',
// 	'<': 'Comma',
// 	'>': 'Period',
// 	'?': 'Slash',
// 	'~': 'Backquote',
// } as const;

// 	MINUS: 'Minus',
// 	PLUS: 'Equal',
// 	EQUAL: 'Equal',

// 	ENTER: 'Enter',
// 	SPACE: 'Space',
// 	BACKSPACE: 'Backspace',
// 	ESCAPE: 'Escape',
// 	CAPSLOCK: 'CapsLock',
// 	TAB: 'Tab',

// 	CONTEXTMENU: 'ContextMenu',

// 	PAUSE: 'Pause',
// 	PAGEUP: 'PageUp',
// 	PGUP: 'PageUp',
// 	PAGEDOWN: 'PageDown',
// 	PGDOWN: 'PageDown',
// 	HOME: 'Home',
// 	END: 'End',
// 	INSERT: 'Insert',
// 	DELETE: 'Delete',
// 	UP: 'ArrowUp',
// 	RIGHT: 'ArrowRight',
// 	DOWN: 'ArrowDown',
// 	LEFT: 'ArrowLeft',

// 	/*
// 		With 'NumLock' off NUMPAD 0-9 and Decimal have no KeyPress
// 		Also ev.code is the same but ev.key is: 1=end, 2=arrowDwn, 3=pgDwn etc.
// 	*/
// 	NUMLOCK: 'NumLock',
// 	NUMPAD0: 'Numpad0',
// 	NUMPAD1: 'Numpad1',
// 	NUMPAD2: 'Numpad2',
// 	NUMPAD3: 'Numpad3',
// 	NUMPAD4: 'Numpad4',
// 	NUMPAD5: 'Numpad5',
// 	NUMPAD6: 'Numpad6',
// 	NUMPAD7: 'Numpad7',
// 	NUMPAD8: 'Numpad8',
// 	NUMPAD9: 'Numpad9',
// 	NUMPADDECIMAL: 'NumpadDecimal',
// 	NUMPADMULTIPLY: 'NumpadMultiply',
// 	NUMPADDIVIDE: 'NumpadDivide',
// 	NUMPADADD: 'NumpadAdd',
// 	NUMPADSUBTRACT: 'NumpadSubtract',
// 	NUMPADENTER: 'NumpadEnter',
// } as const;

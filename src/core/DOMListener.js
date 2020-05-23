import {indentCapitalize} from './utils.js';

export class DOMListener {
    constructor($root, listeners = []) {
        this.$root = $root;
        this.listeners = listeners;

        if (!$root)
            throw new Error('Error: $root is not defined by the current component');
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = indentCapitalize(listener);
            const nameEventType = getNameEventType(method);
            this.$root.on(listener, this[nameEventType]);
        })
    }

    removeDOMListeners() {
        // some code...
    }
}

function getNameEventType(eventType) {
    return 'on' + eventType;
}
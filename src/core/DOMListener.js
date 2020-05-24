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
            const nameEventType = getNameEventType(listener);
            if (!this[nameEventType]) {
                const name = this.name || '';
                throw new Error(`Method listener ${nameEventType} is not implemented in ${name} component`);
            }

            this[nameEventType] = this[nameEventType].bind(this);
            this.$root.on(listener, this[nameEventType]);
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const nameEventType = getNameEventType(listener);
            this.$root.off(listener, this[nameEventType]);
        })
    }
}

function getNameEventType(eventType) {
    const method = indentCapitalize(eventType);
    const nameEventType = 'on' + method;

    return nameEventType;
}
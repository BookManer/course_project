export class DOMListener {
    constructor($root, listeners = []) {
        this.listeners = listeners;

        if (!$root)
            throw new Error('Error: $root is not defined by the current component');
    }

    initDOMListeners() {
    }

    removeDOMListeners() {
        // some code...
    }
}
import {DOMListener} from './DOMListener.js';

export class ExelComponent extends DOMListener {
    constructor($root, {name, listeners} = {}) {
        super($root, listeners);
        this.name = name;
    }

    toHTML() {
        return '<h1>Test</h1>';
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
    }
}
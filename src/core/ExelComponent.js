import {DOMListener} from './DOMListener.js';

export class ExelComponent extends DOMListener {
    constructor($root, {listeners} = {}) {
        super($root, listeners);
    }

    toHTML() {
        return '<h1>Test</h1>';
    }

    init() {
        this.initDOMListeners();
    }
}
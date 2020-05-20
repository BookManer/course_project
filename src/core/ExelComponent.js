import {DOMListener} from './DOMListener.js';

export class ExelComponent extends DOMListener {
    toHTML() {
        return '<h1>Test</h1>';
    }
}
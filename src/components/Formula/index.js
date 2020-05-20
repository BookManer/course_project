import {ExelComponent} from '@core/ExelComponent.js';

export class Formula extends ExelComponent {
    static componentName = 'formula';

    constructor(parentDOMClass, $root) {
        Formula.componentName = `${parentDOMClass}__${Formula.componentName}`;
        super($root);
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `;
    }
}
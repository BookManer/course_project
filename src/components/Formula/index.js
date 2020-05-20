import {ExelComponent} from '@core/ExelComponent.js';

export class Formula extends ExelComponent {
    static componentName = 'excel__formula';

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `;
    }
}
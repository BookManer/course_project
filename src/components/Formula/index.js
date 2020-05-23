import {ExelComponent} from '@core/ExelComponent.js';

export class Formula extends ExelComponent {
    static componentName = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
        });
    }

    onInput(event) {
        console.log(event.target.textContent);
    }

    onClick(event) {
        console.log('Нажал!');
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `;
    }
}
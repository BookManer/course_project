import {ExelComponent} from '@core/ExelComponent.js';

export class Header extends ExelComponent {
    static componentName = 'excel__header';

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['mouseover'],
        });
    }

    onMouseover(event) {
        console.log('Навёл :)');
    }

    toHTML() {
        return `
            <input type="text" class="input" value="Новая таблица" />

            <div>
    
            <div class="button">
                <i class="material-icons">delete</i>
            </div>
    
            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
    
            </div>
        `;
    }
}
import {ExelComponent} from '@core/ExelComponent.js';

export class Header extends ExelComponent {
    static componentName = 'header';

    constructor(parentDOMClass, $root) {
        Header.componentName = `${parentDOMClass}__${Header.componentName}`;
        super($root);
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
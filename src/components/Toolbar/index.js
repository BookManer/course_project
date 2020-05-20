import { ExelComponent } from "@core/ExelComponent";

export class Toolbar extends ExelComponent {
    static componentName = 'toolbar';

    constructor(parentDOMClass, $root) {
        Toolbar.componentName = `${parentDOMClass}__${Toolbar.componentName}`;
        super($root);
    }

    toHTML() {
        return `
            <div class="button">
            <i class="material-icons">format_align_left</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>

            <div class="button">
                <i class="material-icons">format_bold</i>
            </div>

            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>

            <div class="button">
                <i class="material-icons">format_underlined</i>
            </div>
        `;
    }
}
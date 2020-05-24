import {$} from '@core/dom.js';

export class Exel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        // Create root virtual node
        const $root = $.create('div', ['excel']);
        // Append user components in root
        this.components = this.components.map(Component => {
            const $el = $.create('div', [Component.componentName]);
            // Provided the root's class name node and container node into the Component
            const componentInstance = new Component($el);
            // DEBUG
            if (componentInstance.name === 'Header') {
                window.cHeader = componentInstance;
            }
            $el.html(componentInstance.toHTML());
            $root.append($el);

            return componentInstance;
        })

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        this.components.forEach(component => { component.init(); });
    }
}
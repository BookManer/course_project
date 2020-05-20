import {$} from '@core/dom.js';

export class Exel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {
        // Create root virtual node
        const $root = $.create('div', ['excel']);
        // Append user components in root
        this.components.forEach(Component => {
            const $el = $.create('div', [Component.componentName]);
            // Provided the root's class name node and container node into the Component
            const componentIstance = new Component($el);
            $el.insertAdjacentHTML('afterbegin', componentIstance.toHTML());
            $root.append($el);
        })

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
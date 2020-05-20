export class Exel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {
        // Create root virtual node
        const $root = document.createElement('div');
        $root.classList.add('excel');
        // Append user components in root
        this.components.forEach(ComponentClass => {
            const $componentContainer = document.createElement('div');
            // Provided the root's class name node and container node into the Component
            const componentIstance = new ComponentClass($root.className, $componentContainer);

            $componentContainer.classList.add(ComponentClass.componentName);
            $componentContainer.insertAdjacentHTML('afterbegin', componentIstance.toHTML());
            $root.append($componentContainer);
        })

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
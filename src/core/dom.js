const regexpHTML = /<\/?[a-z][\s\S]*>/i;

class Dom {
    /**
     * 
     * @param {String|HTMLElement|Dom} selector - the selector by the DOMNnode
     */
    constructor(selector) {
        this.$nativeElement = null;

        if (selector instanceof HTMLElement) {
            this.$nativeElement = selector;
        } else if (selector instanceof Dom) {
            const { $nativeElement:$el } = selector;
            this.$nativeElement = $el;
        } else if (typeof selector === 'string') {
            // There maybe a two situations such as an inline html value and a simple string
            // Don't the selector contains a HTML code ? 
            if (!regexpHTML.test(selector)) {
                this.$nativeElement = document.querySelector(selector); 
            } else {
                throw new Error(`Dom.js error: constructor can\'t contains a HTML code as parametrs
                values: ${selector}`);
            }
        }
    }

    /**
     * 
     * @param {String|HTMLElement|Dom} html 
     * @returns {Dom|String} returns html value or Dom object 
     */
    html(html) {
        if (html) {
            if (html instanceof HTMLElement) {
                this.$nativeElement = html;
            } else if (html instanceof Dom) {
                const { $nativeElement:$el } = html;

                this.$nativeElement = $el;
            } else if (typeof html === 'string') {
                if (regexpHTML.test(html)) {
                    this.$nativeElement.innerHTML = html;
                } else {
                    console.log("querySelector");
                    this.$nativeElement.innerHTML = this.$nativeElement.querySelector(html).innerHTML;
                }
            }

            return this;
        }

        return this.$nativeElement.outerHTML.trim();
    }

    /**
     * It inserts HTML code
     * @param {String|HTMLElement|Dom} node - it contains DOM value for insert html code
     * @returns {Dom} it returns the Dom object
     */
    append(node) {
        if (node instanceof HTMLElement) {
            this.$nativeElement.append(node);
        } else if (node instanceof Dom) {
            const { $nativeElement:$el } = node;

            this.$nativeElement.append($el);
        } else if (typeof node === 'string') {
            if (!regexpHTML.test(node)) {
                this.$nativeElement.append(document.querySelector(node));
            } else {
                this.$nativeElement.insertAdjacentHTML('afterbegin', node);
            }
        }

        return this;
    }
}

export function $(selector) {
    return new Dom(selector);
};

/**
 * It's creating a DOM node
 * @param {String} tagName A tag name DOM node
 * @param {Array} classes A classes's list. 
 * 
 * @returns {HTMLElement} it returns html element with classes
 */
$.create = (tagName, classes = []) => {
    const $node = document.createElement(tagName);
    $node.classList = classes;

    return $($node);
}
export function $() {

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

    return $node;
}
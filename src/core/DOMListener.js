export class DOMListener {
    constructor($root) {
        if (!$root)
            throw new Error('Error: $root is not defined by the current component');
        else
            console.log($root);
    }
}
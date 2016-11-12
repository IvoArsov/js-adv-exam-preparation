let BaseElement = require('./base-element.js').BaseElement;

class Footer extends BaseElement {
    constructor (message) {
        super();
        this.message = message;
    }

    getElementString () {
        return `<footer>Copyright &copy; ${this.message}</footer>`;
    }
}

module.exports.Footer = Footer;
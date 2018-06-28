const dictionary = require('./dictionary');
const store = require('./store');
class Helper {
    constructor(_filePath) {
        this.args = [...process.argv];
    }

    /**
     * Check command existing or not 
     */
    isCRUDCommands() {
        return this.args.join(' ').match(/(set|get|list|clear|remove|add)/) ? true : false;
    }

    getCommand() {
        return this.args.join(' ').match(/(set|get|list|clear|remove|add)/)[0];
    }

    getKeyValue() {
        const result = this.args.slice(3);
        return new dictionary(result[0], result[1]);
    }

    getKey() {
        const result = this.args.slice(3);
        return result[0];
    }

    isValidKey() {
        const result = this.args.slice(3);
        return !(result.length < 1);
    }

    isValidValue() {
        const result = this.args.slice(3);
        return !(result.length < 2);
    }

    isValidKeyValue() {
        return (this.isValidKey() && this.isValidValue());
    }

    isKeyExists(key) {
        return store.get(key) ? true : false;
    }
}

module.exports = new Helper();
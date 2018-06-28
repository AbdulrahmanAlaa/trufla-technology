const fs = require('fs');
const dictionary = require('./dictionary');
const consts = require('./defines');
class Store {
    constructor(_filePath) {
        this.args = [...process.argv];
        this.filePath = _filePath || `./common/dictionary.store`;
    }

    /**
     * Adding Items to Storage
     * @param {string} key Identifier
     * @param {String} value Value of related Key
     */
    add(dictionary) {
        fs.appendFileSync(this.filePath, `${dictionary.key}:${dictionary.value};`);
        return consts.ADDED_SUCCESSFULLY(dictionary.key,dictionary.value);
    }

    /**
     * Display list of dictionary values 
     * @param {string} key Identifier
     */
    list() {
        return fs.readFileSync(this.filePath, 'utf8').replace(/;/g, '\n').replace(/:/g, ' : ');
    }

    /**
     * Get Specific Key from dictionary 
     * @param {string} key Identifier
     */
    get(key) {
        const result = fs
            .readFileSync(this.filePath, 'utf8')
            .split(';')
            .map(keyValue => new dictionary(keyValue.split(':')[0], keyValue.split(':')[1]))
            .find(dic => dic.key.toLowerCase() === key.toLowerCase());
        return result ? result.toString() : result;
    }

    /**
     * Remove Specific Key in dictionary 
     * @param {string} key Identifier
     */
    remove(key) {

    }

    /**
     * Clear Stored list of dictionary values 
     */
    clear() {
        fs.writeFileSync(this.filePath, '');
        return consts.SUCCESSFULLY_CLEARED
    }
}
module.exports = new Store();
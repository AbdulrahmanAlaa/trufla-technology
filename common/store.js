class Store {
    constructor() {
        this.args = [...process.argv];
    }

    /**
     * Adding Items to Storage
     * @param {string} key Identifier
     * @param {String} value Value of related Key
     */
    add(key, value) {
    }

    /**
     * Display list of dictionary values 
     * @param {string} key Identifier
     */
    list() {

    }

    /**
     * Get Specific Key from dictionary 
     * @param {string} key Identifier
     */
    get(key) {

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

    }
}
module.exports = Store;
const store = require('./common/store');
const helper = require('./common/helper');
const consts = require('./common/defines');
const dic = require('./common/dictionary');
// TODO:
// 1- Validate Commands
if (helper.isCRUDCommands()) {
    const command = helper.getCommand();
    let result = null;

    // 2- Fire function that affect the store 
    switch (command) {
        case 'list':
            result = store.list();
            break;
        case 'get':
            helper.isValidKey() ? result = store.get(helper.getKey()) : result = consts.MISSING_KEY;
            break;
        case 'remove':
            helper.isValidKey() ? result = store.remove(helper.getKey()) : result = consts.MISSING_KEY;
            break;
        case 'add':
            !helper.isValidKeyValue() ?  result = consts.MISSING_KEY_VALUE:
            (helper.isKeyExists(helper.getKey())?result = consts.EXISTING_KEY:result = store.add(helper.getKeyValue()))
            break;
        case 'clear':
            result = store.clear();
            break;
        default:
            break;
    }
    console.log(result);   

} else {
    console.log(consts.INVALID_COMMAND)
}

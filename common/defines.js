const command = 'command <Key> <Value>';
module.exports = {
    INVALID_COMMAND:`Please enter valid command\n commands: (set|get|list|clear|remove|add) \n example: ${command}`,
    MISSING_KEY:`Please enter key: ${command}`,
    MISSING_VALUE:`Please enter value: ${command}`,
    MISSING_KEY_VALUE:`Please enter missing key Or value: ${command}`,
    SUCCESSFULLY_CLEARED:'The store was cleared successfully...',
    ADDED_SUCCESSFULLY:(key,value)=>`${key} : ${value} was added successfully...`,
    EXISTING_KEY: 'The key already found...'
}
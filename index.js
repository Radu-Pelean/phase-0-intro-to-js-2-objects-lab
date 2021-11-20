// Write your solution in this file!

const employee ={}

employee['name'] = 'Devin';
employee['streetAddress'] = '11 Broadway';

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updateEmployeeWithKeyAndValue = {...obj}
    updateEmployeeWithKeyAndValue[key] = value;
    return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;

}

function deleteFromEmployeeByKey(obj) {
    const deleteFromEmployeeByKey ={obj}
    delete obj.key;
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}


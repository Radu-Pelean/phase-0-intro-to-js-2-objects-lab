// Write your solution in this file!

const employee ={}

employee['name'] = 'Devin';
employee['streetAddress'] = '11 Broadway';

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {...obj}
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;

}

function deleteFromEmployeeByKey(obj,keys) {
    const deleted ={...obj}
    delete deleted[keys]
    return deleted;
}

function destructivelyDeleteFromEmployeeByKey(obj,keys) {
    delete obj[keys];
    return obj;
}


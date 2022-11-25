const employee = {
    name :"Mercy",
    streetAddress:"Nairobi"

}
function updateEmployeeWithKeyAndValue(object,key,value){
    return{...object,[key]:value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    return {...object,[key]:value,};
}

function deleteFromEmployeeByKey(object,key){
    let newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key];
    return object;
}
function Validation(values){
    let error = {}

    if(values.firstName === ""){
        error.firstName = "Can't be Empty"
    } else {
        error.firstName = ""
    }

    if(values.lastname === ""){
        error.lastname = "Can't be Empty"
    } else {
        error.lastname = ""
    }

    if(values.Mobile === ""){
        error.Mobile = "Can't be Empty"
    } else {
        error.Mobile = ""
    }

    return error;
}

export default Validation;
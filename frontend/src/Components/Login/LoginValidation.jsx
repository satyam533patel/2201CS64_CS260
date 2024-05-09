function Validation(values){
    // alert("")
    let error = {}
    const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,15}$/

    if(values.email === ""){
        error.email = "Can't be empty"
    } else if(!email_pattern.test(values.email)){
        error.email = "Didn't match"
    } else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Can't be empty"
    } else if(!password_pattern.test(values.password)){
        error.password = "Didn't match"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;
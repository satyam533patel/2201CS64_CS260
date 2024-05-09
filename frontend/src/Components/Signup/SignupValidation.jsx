function Validation(values){
    // alert("")
    let error = {}
    const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,15}$/
    const name_pattern = /[A-Za-z]+$/

    if(values.firstName === ""){
        error.firstName = "Can't be empty"
    } else if(!name_pattern.test(values.firstName)){
        error.firstName = "Wrong Pattern"
    } else {
        error.firstName = ""
    }

    if(values.lastName === ""){
        error.lastName = "Can't be empty"
    } else if(!name_pattern.test(values.lastName)){
        error.lastName = "Wrong Pattern"
    } else {
        error.lastName = ""
    }

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

    // if(values.reEnterPassword === ""){
    //     error.reEnterPassword = "Can't be empty"
    // } else if(!password_pattern.test(values.reEnterPassword)){
    //     error.reEnterPassword = "Didn't match"
    // }
    
    // if(values.reEnterPassword === values.password){
    //     error.reEnterPassword = ""
    // } else {
    //     error.reEnterPassword = "Both values must be same"
    //     error.password = "Both values must be same"
    // }
    
    // if(values.cap === "captcha"){
    //     error.cap = ""
    // } else {
    //     error.cap = "Wrong Captcha"
    //     if(values.cap === ""){
    //         error.cap = "Enter Captcha"
    //     }
    // }

    return error;
}

export default Validation;
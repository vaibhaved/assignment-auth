const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function newUserValidation(data) {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name is required";
    }
    if(Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name is required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    /* reg=/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)(?=.*[a-z]).{8,}$/;
    if(!reg.test(data.password)) {
        errors.passwordType = "Password must contain atleast 8 characters and must have atleast one Uppercase letter, one Lowercase Letter, a Number, and a special character";
    } */

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
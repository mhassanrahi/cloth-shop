export default function validate (values) {
    let errors = {};

    if (!values.displayName) errors.displayName = 'Name Required.'
    else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.displayName)) {
        errors.displayName = 'Please Enter your correct Name.';
    }
    
    if (!values.email) errors.email = 'Email Required.';
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Please enter a valid Email address.'
    }
    
    if (!values.password) errors.password = 'Password Required.';
    else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.'
    } else if (!values.cPassword) {

    } else {
        if (values.cPassword !== values.password) {
            errors.cPassword="Passwords do not match."
        }
    }

    if (!values.cPassword) errors.cPassword = 'Confirm Password Required';

    return errors;
    }
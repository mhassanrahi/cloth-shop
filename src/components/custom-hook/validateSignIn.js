export default function validate (values) {
let errors = {};

if (!values.email) errors.email = 'Email Required.';
else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'Please enter a valid Email address.'
}

if (!values.password) errors.password = 'Password Required.';
else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.'
}
return errors;
}
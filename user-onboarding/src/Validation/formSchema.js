import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('A username is required.')
        .min(5, 'Usernames must contain at least 5 characters.'),
    email: yup
        .string()
        .email('An email is required.')
        .required('A valid email is required.'),
    password: yup
        .string()
        .required('A password is required.')
        .min(10, 'Usernames must contain at least 10 characters.'),
    tos: yup
        .boolean()
        .oneOf([true], 'Terms of Services must be accepted to create an account')
})

export default formSchema;
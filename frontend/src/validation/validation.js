import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup.string().required('Field is required').min(4, 'Too short!').max(15, 'Too long!'),
    password: yup.string().required('Field is required').min(6, 'Too short!').max(10, 'Too long!')
});

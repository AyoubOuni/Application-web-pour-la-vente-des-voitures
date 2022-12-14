import * as yup from 'yup'


export const emailvalidation=yup.object().shape({
  email:yup.string().email().required()})
export const passwordvalidation=yup.object().shape({
  password: yup.string().required() .min(8).matches("^([A-Za-z])").max(30)})
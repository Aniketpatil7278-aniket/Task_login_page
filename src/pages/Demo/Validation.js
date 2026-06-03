import * as Yup from "yup";

export const Validation =Yup.object({
    firstname: Yup.string().required("enter the name ")
    .min(5, "minimum 6 char "),
})

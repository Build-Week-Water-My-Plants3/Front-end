import * as  yup from "yup";

const formSchema = yup.object().shape ({
    name: yup.string().min(3).required("Name is a required field"),
    email: yup.string().email("Please use valid e-mail address").required("E-mail is a requied field"),
    password: yup.string().min(8).required("Password is a required field"),
}) ;

export default formSchema;
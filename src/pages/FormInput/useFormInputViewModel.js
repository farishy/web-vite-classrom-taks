import { contactsAtom } from "@/shared/atoms/atoms";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "@/shared/constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  image: yup.string().required("Image is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Email is invalid format"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(PHONE_NUMBER_REGEX, "Phone Number is invalid format"),
});

const defaultValues = {
  name: "",
  image:
    "https://th.bing.com/th/id/OIP.ybB2a0HimX1I-ybBY4pOPwHaHa?rs=1&pid=ImgDetMain",
  email: "",
  phone: "",
};

export const useFormInputViewModel = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const [contacts, setContacts] = useRecoilState(contactsAtom);

  const handleCloseModal = () => document.getElementById("form_input").close();

  const handleAddContact = form.handleSubmit(async (data) => {
    console.log("Loading on...");
    const contactsClone = contacts.map((contact) => contact);
    contactsClone.push(data);
    setContacts(contactsClone);
    toast.success("Data updated successfully");
    form.reset();
    handleCloseModal();
    console.log("Data contacts updated...");
    console.log("Loading off...");
  });

  return { form, handleAddContact, contacts, handleCloseModal };
};

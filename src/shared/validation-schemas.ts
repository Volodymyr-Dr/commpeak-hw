import * as yup from "yup";

export const applySchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  referrerFullName: yup.string(),
  file: yup.array(),
});

export type ApplySchema = yup.InferType<typeof applySchema>;

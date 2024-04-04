import * as yup from "yup";

export const applySchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  isReferrerFullName: yup.boolean().default(true),
  referrerFullName: yup
    .string()
    .when("isReferrerFullName", ([isReferrerFullName], schema) => {
      return isReferrerFullName ? schema.required(" ") : schema;
    }),
  file: yup.array(),
  isAgreedTermsOfService: yup
    .bool()
    .oneOf([true], "You must agree to the terms"),
  isAgreedPrivacyPolicy: yup
    .bool()
    .oneOf([true], "You must agree to the privacy policy"),
});

export type ApplySchema = yup.InferType<typeof applySchema>;

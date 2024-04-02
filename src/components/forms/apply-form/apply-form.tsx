"use client";
import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputField } from "../../form-fields/input";
import { ApplySchema, applySchema } from "@/shared";

export const ApplyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<ApplySchema>({
    resolver: yupResolver<ApplySchema>(applySchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ApplySchema) {
    console.log(data);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Apply</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          fieldName="firstName"
          label="First Name"
          placeholder="Enter first name"
          type="text"
          register={register}
          errors={errors}
        />
        <InputField
          fieldName="lastName"
          label="Last Name"
          placeholder="Enter last name"
          type="text"
          register={register}
          errors={errors}
        />
        <InputField
          fieldName="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          register={register}
          errors={errors}
          customStyles="mb-4"
        />
        <div>checkbox</div>
        <InputField
          fieldName="referrerFullName"
          label="Referrer Full Name"
          placeholder="Enter name"
          type="text"
          register={register}
          errors={errors}
          customStyles="mb-4"
        />
        <div>dropzone</div>
        <div>checkbox</div>
        <div>checkbox</div>
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          className={`px-4 py-2 rounded-full bg-blue-500 text-white  ${
            (!isValid || !isDirty) && "opacity-50 cursor-not-allowed"
          } ${isSubmitting && "cursor-wait bg-gray-500"}`}
        >
          APPLY APPLICATION
        </button>
      </form>
    </div>
  );
};

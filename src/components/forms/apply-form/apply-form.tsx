"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Dropzone } from "@/components/dropzone";
import { ApplySchema, applySchema } from "@/shared/utils";
import { Button, Modal } from "@/shared/ui";
import { CheckboxField, InputField } from "@/components/form-fields";
import cls from "./apply-form.module.scss";

export const ApplyForm = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<ApplySchema>({
    resolver: yupResolver<ApplySchema>(applySchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ApplySchema) {
    console.log(data);
    await new Promise<void>((resolve) => {
      const idTimer = setTimeout(() => {
        resolve();
        reset();
        clearTimeout(idTimer);
      }, 300);
    });

    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className={cls.formWrap}>
      <h2>Apply</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
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
        />
        <CheckboxField
          fieldName="isReferrerFullName"
          label="Referrered by a CommPeak emplloyee"
          register={register}
          defaultChecked
        />
        {watch("isReferrerFullName") && (
          <InputField
            fieldName="referrerFullName"
            label="Referrer Full Name"
            placeholder="Enter name"
            type="text"
            register={register}
            errors={errors}
            hideRequiredStar
          />
        )}
        <Controller
          name="file"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Dropzone dropFiles={field.value} setDropFiles={field.onChange} />
          )}
        />
        <CheckboxField
          fieldName="isAgreedTermsOfService"
          label="I have read and agree to CommPeak's "
          register={register}
          errors={errors}
          showLink
          linkText="Terms of Service"
          linkPath="https://www.commpeak.com/legal/terms-of-service"
        />
        <CheckboxField
          fieldName="isAgreedPrivacyPolicy"
          label="Referrered by a CommPeak emplloyee "
          register={register}
          errors={errors}
          showLink
          linkText="Privacy Policy"
          linkPath="https://www.commpeak.com/legal/privacy-policy"
        />
        <Button
          type="submit"
          // if need to disable button when form is invalid or not dirty
          // disabled={!isValid || !isDirty}
          customStyles={`${cls.applyButton} ${
            isSubmitting && cls.isSubmitting
          }`}
          onClick={handleSubmit(onSubmit)}
        >
          Submit application
        </Button>
      </form>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className={cls.appliedContent}>
          <h2>Thank You!</h2>
          <p>We got your application.</p>
          <Image src="/folder.png" alt="folder" width={300} height={300} />
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

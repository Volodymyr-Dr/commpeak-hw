"use client";
import React, { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../form-fields/input";
import { ApplySchema, applySchema } from "@/shared";
import { Dropzone } from "@/components/dropzone";
import { FilePreview } from "@/components/dropzone/dropzone.interface";
import { Button, Modal } from "@/shared/ui";
import Image from "next/image";
import cls from "./apply-form.module.scss";

export const ApplyForm = () => {
  // const [dropFiles, setDropFiles] = useState<FilePreview[]>([]);
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
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
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
        />
        <InputField
          fieldName="isReferrerFullName"
          label="Referrered by a CommPeak emplloyee"
          type="checkbox"
          register={register}
          errors={errors}
          hideRequiredStar
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
        <InputField
          fieldName="isAgreedTermsOfService"
          label="I have read and agree to CommPeak's "
          type="checkbox"
          register={register}
          errors={errors}
          hideRequiredStar
          showLink
          linkText="Terms of Service"
          linkPath="https://www.commpeak.com/legal/terms-of-service"
        />
        <InputField
          fieldName="isAgreedPrivacyPolicy"
          label="Referrered by a CommPeak emplloyee "
          type="checkbox"
          register={register}
          errors={errors}
          hideRequiredStar
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
        <div className="text-center bg-white">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-lg">We got your application.</p>
          <p>Your ID is</p>
          <Image src="/folder.png" alt="folder" width={300} height={300} />
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

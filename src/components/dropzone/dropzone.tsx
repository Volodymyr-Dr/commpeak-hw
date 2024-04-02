import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FilePreview, IDropzone } from "./dropzone.interface";
import { UploadFile } from "@/assets/icons";
import cls from "./dropzone.module.scss";

export const Dropzone: FC<IDropzone> = ({ setDropFiles, dropFiles }) => {
  const maxSize = 4 * 1024 * 1024;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setDropFiles(acceptedFiles as FilePreview[]);
    },
    [dropFiles]
  );
  const { getRootProps, getInputProps, open, fileRejections } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: maxSize,
  });

  const isFileTooLarge =
    fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

  const removeFile = (file: FilePreview) => () => {
    const newFiles = [...(dropFiles || [])] as FilePreview[];
    newFiles.splice(newFiles.indexOf(file), 1);
    setDropFiles(newFiles);
  };

  return (
    <div className={cls.wrapper}>
      <div
        {...getRootProps({
          className: cls.dropContent,
        })}
      >
        <input {...getInputProps()} />
        <span>Add a Resume</span>
        <span>Allowed file types: .pdf, .docx</span>
        <span>Maximum accepted number of files is 1</span>
        <span>Max file size: 4MB</span>
        <UploadFile fill="#C0C0C0" />
        {!dropFiles?.length ? (
          <button type="button" onClick={open}>
            BROWSE YOUR FILES
          </button>
        ) : null}
      </div>
      <aside>
        <ul>
          {(dropFiles || []).map((file: FilePreview) => (
            <li key={file.path} className={cls.uploadedFile}>
              <span>{file.path}</span>
              <button onClick={removeFile(file)}>CLEAR FILES</button>
            </li>
          ))}
        </ul>
        {isFileTooLarge && (
          <p className="field-error-message">File is too large!</p>
        )}
      </aside>
    </div>
  );
};

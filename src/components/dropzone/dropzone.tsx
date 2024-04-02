import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FilePreview, IDropzone } from "./dropzone.interface";
import { UploadFile } from "@/assets/icons";

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

  console.log(isFileTooLarge);

  const removeFile = (file: FilePreview) => () => {
    const newFiles = [...(dropFiles || [])] as FilePreview[];
    newFiles.splice(newFiles.indexOf(file), 1);
    setDropFiles(newFiles);
  };

  return (
    <section className={`border-2 border-dashed rounded-lg py-8 px-24 mb-4`}>
      <div
        {...getRootProps({
          className: `text-center flex flex-col items-center`,
        })}
      >
        <input {...getInputProps()} />
        <span className="text-xl text-gray-700">Add a Resume</span>
        <span className="text-base text-gray-400">
          Allowed file types: .pdf, .docx
        </span>
        <span className="text-base text-gray-400">
          Maximum accepted number of files is 1
        </span>
        <span className="text-base text-gray-400">Max file size: 4MB</span>
        <UploadFile fill="#C0C0C0" />
        {!dropFiles?.length ? (
          <button type="button" onClick={open}>
            BROWSE YOUR FILES
          </button>
        ) : null}
      </div>
      <aside>
        <ul className="mt-2">
          {(dropFiles || []).map((file: FilePreview) => (
            <li key={file.path} className="flex item-center flex-col">
              <span
                className={`text-center text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {file.path}
              </span>
              <button onClick={removeFile(file)} className="mt-4 ">
                CLEAR FILES
              </button>
            </li>
          ))}
        </ul>
        {isFileTooLarge && (
          <p className="text-red-200 text-center mt-2">File is too large!</p>
        )}
      </aside>
    </section>
  );
};

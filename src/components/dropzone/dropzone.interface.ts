export interface IDropzone {
  dropFiles?: FilePreview[];
  setDropFiles: (arg: FilePreview[]) => void;
}

export interface FilePreview extends File {
  path: string;
}

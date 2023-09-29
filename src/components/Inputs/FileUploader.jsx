import { FileArrowUp, Paperclip, Trash } from "phosphor-react";

const FileUploader = ({ selectedFile, setSelectedFile, id }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const sizeFormat = (byte) => {
    if (byte < 1024 * 1024) {
      return `${(byte / 1024).toFixed(2)}KB`;
    } else {
      return `${(byte / (1024 * 1024)).toFixed(2)}MB`;
    }
  };

  const nameFormat = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    }
    const ellipsis = "..";
    const lastFullStopIndex = name.lastIndexOf(".");
    const lastPart = name.slice(lastFullStopIndex - 4);
    const firstPart = name.slice(0, maxLength - 8);
    return `${firstPart}${ellipsis}${lastPart}`;
  };

  return (
    <div
      className="w-full bg-gray-25"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <div className="flex items-center justify-between p-4 md:p-8">
          <div className="flex items-center gap-3">
            <FileArrowUp weight="fill" className="text-green-500 text-3xl" />
            <div>
              <p className="text-sm font-medium leading-tight  text-gray-600">
                File Attached
              </p>
              <div className="h-1"></div>
              <div className="flex items-center gap-1">
                <Paperclip weight="fill" className="text-lg" />

                <p className="text-xs leading-none text-gray-400">
                  {nameFormat(selectedFile.name, 20)} (
                  {sizeFormat(selectedFile.size)})
                </p>
              </div>
            </div>
          </div>
          <button
            className="p-2 rounded-lg bg-gray-0"
            onClick={() => {
              setSelectedFile(null);
            }}
          >
            <Trash weight="bold" />
          </button>
        </div>
      ) : (
        <label htmlFor={id} className="w-full p-4 md:p-8 ">
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            id={id}
            onChange={handleFileInputChange}
            hidden
          />
          <div className="flex center gap-3">
            {/* <img src={fileUpload} alt="" /> */}
            <FileArrowUp weight="fill" className="text-3xl" />
            <div>
              <p className="text-sm font-medium leading-tight underline text-primary-500">
                Click or drag to upload file
              </p>
              <div className="h-1"></div>
              <p className="text-xs leading-none text-gray-400">
                PDF, JPG or PNG, 3MB max
              </p>
            </div>
          </div>
        </label>
      )}
      {/* {selectedFile ? (
          <p>Selected File: {selectedFile.name}</p>
        ) : (
          <p>Drag and drop a file or click here to select a file</p>
        )} */}
    </div>
  );
};

export default FileUploader;

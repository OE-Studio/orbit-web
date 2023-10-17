import { FileImage, Paperclip, Trash, UploadSimple } from "phosphor-react";
import { createRef, useEffect, useState } from "react";

const FileUploader = ({ selectedFile, setSelectedFile, id }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    e.dataTransfer.dropEffect = "none";
  };

  const dropAreaRef = createRef(null);

  useEffect(() => {
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      // Check if the file was dropped inside the specific element (ref)
      if (dropAreaRef.current?.contains(e.target)) {
        // Handle the file drop here
        console.log("File dropped inside the specific element:", file);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    };

    dropAreaRef.current?.addEventListener("drop", handleDrop);
    dropAreaRef.current?.addEventListener("dragover", handleDragOver);

    return () => {
      dropAreaRef.current.removeEventListener("drop", handleDrop);
      // eslint-disable-next-line
      dropAreaRef.current.removeEventListener("dragover", handleDragOver);
    };
    // eslint-disable-next-line
  }, []);

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
    // className="w-full bg-[#F2F7FA] outline-1 outline-[#5DADEC] outline-dashed  rounded-[8px]"
    >
      {selectedFile ? (
        <div className="flex items-center justify-between p-4 md:p-6   w-full bg-[#E3EFDC]  rounded-[8px]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-0 w-12 h-12 rounded-full bg-[#73B051] center">
              <FileImage weight="fill" className="text-[#F1F7EE] text-2xl" />
            </div>
            <div>
              <p className="font-semibold leading-tight text-[#71879C]">
                {nameFormat(selectedFile.name, 15)}
              </p>
              <div className="h-1"></div>
              <div className="flex items-center gap-1">
                <Paperclip className="text-lg text-[#71879C]" />

                <p className="text-[15px] text-[#71879C]">
                  ({sizeFormat(selectedFile.size)})
                </p>
              </div>
            </div>
          </div>

          <button
            className="p-2 bg-gray-0 w-12 h-12 rounded-full bg-white center"
            onClick={() => {
              setSelectedFile(null);
              setDragOver(false);
            }}
          >
            <Trash className="text-2xl text-red500" />
          </button>
        </div>
      ) : (
        <label
          ref={dropAreaRef}
          onDragEnter={() => {
            setDragOver(true);
          }}
          onDragLeave={() => {
            setDragOver(false);
          }}
          onDrop={handleDrop}
          htmlFor={id}
          className={`flex items-center justify-center p-4 md:p-6   w-full ${
            dragOver ? "" : "bg-[#F2F7FA]"
          } min-h-[105px] outline-1 outline-[#5DADEC] outline-dashed  rounded-[8px]`}
        >
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            id={id}
            onChange={handleFileInputChange}
            hidden
          />
          {dragOver ? (
            <p className="font-semibold leading-tight text-[#71879C] text-center w-full text-sm">
              Drop content here
            </p>
          ) : (
            <div className=" center gap-3 bg-[#F2F7FA]">
              <div className="w-14 h-14 rounded-full bg-white center">
                <UploadSimple
                  weight="fill"
                  className="text-3xl text-[#71879C]"
                />
              </div>

              <div className="">
                <p className="font-medium leading-tight text-sm text-[#71879C]">
                  Click or drag to upload file
                </p>
                <div className="h-1"></div>
                <p className="text-[#71879C] text-xs">
                  PDF, JPG or PNG, 3MB max
                </p>
              </div>
            </div>
          )}
        </label>
      )}
    </div>
  );
};

export default FileUploader;

import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../Inputs/PrimaryButton";
import SecondaryButton from "../Inputs/SecondaryButton";
import { uploadSelfie } from "./KycApi";
import { Spinner } from "../Spinner";

const SelfieCapture = ({ imageDataUrl, setImageDataUrl, setStep }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [stream, setStream] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStream(stream); // Store the stream object in state
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  };

  const stopCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop(); // Stop each track in the stream
      });
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setImageDataUrl(imageData);
  };

  useEffect(() => {
    startCamera();
    // Cleanup when the component unmounts
    return () => {
      stopCamera();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {imageDataUrl && (
        <div className="w-full rounded-2xl h-[285px] overflow-hidden border">
          <img src={imageDataUrl} alt="Selfie" className="h-full " />
        </div>
      )}
      {!imageDataUrl && (
        <div className="w-full rounded-2xl h-[285px] overflow-hidden ">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="border"
            style={{ height: 285, transform: "scale(1.2)" }}
          />
          <canvas
            ref={canvasRef}
            width="353"
            height="285"
            style={{ display: "none", aspectRatio: "square" }}
          />
        </div>
      )}

      <div className="h-[26px]"></div>
<div className="flex justify-end">

      {!imageDataUrl && (
        <PrimaryButton label={"Take selfie"} onClick={captureImage} />
      )}
</div>
      {imageDataUrl && (
        <div className="flex gap-4">
          <PrimaryButton
          width="flex-1"
            label={loading ? <Spinner /> : "Upload"}
            onClick={() => {
              uploadSelfie(imageDataUrl, setStep, setLoading);
            }}
          />
          <SecondaryButton
          width="flex-1"
            label={"Retake"}
            onClick={() => {
              startCamera();
              setImageDataUrl(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SelfieCapture;

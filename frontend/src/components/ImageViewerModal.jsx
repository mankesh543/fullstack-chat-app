import {useImageViewer} from "../contexts/useImageViewerContext"

const ImageViewerModal = () => {
  const { imageSrc, closeImageViewer } = useImageViewer();

  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black/25 bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeImageViewer}
    >
      <img
        src={imageSrc}
        alt="Preview"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
      />
    </div>
  );
};

export default ImageViewerModal;

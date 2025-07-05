import { createContext, useContext, useState } from "react";
import ImageViewerModal from "../components/ImageViewerModal";
const ImageViewerContext = createContext();

export const useImageViewer = () => useContext(ImageViewerContext);

export const ImageViewerProvider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const openImageViewer = (src) => {
    setImageSrc(src);
  };

  const closeImageViewer = () => {
    setImageSrc(null);
  };

  return (
    <ImageViewerContext.Provider value={{ imageSrc, openImageViewer, closeImageViewer }}>
      {children}
      <ImageViewerModal />
    </ImageViewerContext.Provider>
  );
};

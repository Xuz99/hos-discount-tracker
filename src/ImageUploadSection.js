import ImageLoader from "./scripts/imageLoader/imageLoader.js";

function ImageUploadSection() {
  return (
    <div className="center">
      <h1 className="title">React OCR Application</h1>
      <div>
        <ImageLoader />
      </div>
    </div>
  );
}

export default ImageUploadSection;

// React Tesseract OCR Tutorial
// https://javascript.plainenglish.io/react-tesseract-ocr-tutorial-d72bb04b5094
//https://github.com/eren23/react-tesseract-ocr-starter/blob/main/src/scripts/imageLoader/imageLoader.js
// Shrinks a picked photo (max 900px) and returns it as a JPEG data URL, for pictures added to a Just Talk Board.
export function readPhoto(file, cb) {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    const k = Math.min(1, 900 / Math.max(img.width, img.height));
    const cv = document.createElement("canvas");
    cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
    cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
    URL.revokeObjectURL(url);
    cb(cv.toDataURL("image/jpeg", 0.8));
  };
  img.src = url;
}

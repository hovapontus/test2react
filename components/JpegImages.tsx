export default function JpegImages() {
  const imageUrls = Array.from({ length: 17 }, (_, i) =>
    `/images/jpeg/image${i + 1}.jpeg`
  );

  return (
    <div>
      {imageUrls.map((src, idx) => (
        <img key={idx} src={src} alt={`jpeg-${idx}`} />
      ))}
    </div>
  );
}

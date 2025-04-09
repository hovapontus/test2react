export default function PngImages() {
  const imageUrls = Array.from({ length: 10 }, (_, i) =>
    `/images/png/image${i + 1}.png`
  );

  return (
    <div>
      {imageUrls.map((src, idx) => (
        <img key={idx} src={src} alt={`png-${idx}`} />
      ))}
    </div>
  );
}

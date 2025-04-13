export default function WebpImages() {
  const imageUrls = Array.from({ length: 17 }, (_, i) =>
    `/images/webp/image${i + 1}.webp`
  );

  return (
    <div>
      {imageUrls.map((src, idx) => (
        <img key={idx} src={src} alt={`webp-${idx}`} />
      ))}
    </div>
  );
}

import Marquee from 'react-fast-marquee';

export const TrustBar = ({ images }: { images: string[] }) => {
  return (
    <Marquee>
      {images.map((image, index) => (
        <img width={100} key={`image-${index}`} src={image} className="mx-10" />
      ))}
    </Marquee>
  );
};

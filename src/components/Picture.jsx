import Image from 'next/image';

const Picture = ({ width, alt, src }) => {
  return (
    <div className={`relative flex`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        className="relative z-10 rounded-lg opacity-100"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        className="absolute -bottom-[3%] left-[2%] z-0 rounded-lg grayscale opacity-30"
      />
    </div>
  );
};

export default Picture;

interface ImageProps {
    path: string; // Path to the image
    alt?: string; // Alt text for the image (optional)
    className?: string; // Class name for the image (optional)
}

function Image({ path, alt, className }: ImageProps) {
  return (
    <div>
      <img
        src={path}
        alt={alt}
        className={className}
      />
    </div>
  );
}

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;

import { useState, useEffect } from 'react';
import ModuleLoader from '../loading-spinner/loadingSpinner.tsx';

interface IframeLoaderProps {
    src: string;
    title: string;
    className?: string;
}

function IframeLoader({ src, title, className }: IframeLoaderProps) {
  const MAX_TIMEOUT = 5000;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, MAX_TIMEOUT);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <ModuleLoader />}
      <iframe
        className={className}
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
IframeLoader.defaultProps = {
  className: '',
};

export default IframeLoader;

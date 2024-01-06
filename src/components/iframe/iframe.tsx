import { useState, useEffect } from 'react';
import ModuleLoader from '../loader/loader.tsx';

interface IframeLoaderProps {
    src: string;
    title: string;
}

function IframeLoader({ src, title }: IframeLoaderProps) {
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
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}

export default IframeLoader;

import {
  useState, useEffect, startTransition,
} from 'react';
import ModuleLoader from '../loader/loader.tsx';

function AboutPage() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, []);

  return (
    !loading
      ? (
        <div>
          <h2>About</h2>
        </div>
      )
      : <ModuleLoader />);
}

export default AboutPage;

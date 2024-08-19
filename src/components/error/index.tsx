import { Link } from 'react-router-dom';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

function Error() {
  const appConfig = useConfig(useAppName());
  const { appPath } = appConfig;

  return (
    <div>
      <h2>Error during loading the page!</h2>
      <p>
        <Link to={appPath}>Go to the home page of the app</Link>
      </p>
    </div>
  );
}
export default Error;

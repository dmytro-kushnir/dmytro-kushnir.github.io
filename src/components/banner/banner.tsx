import { useLocation } from 'react-router-dom';
import cssClasses from './banner.module.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

function Banner() {
  const location = useLocation();
  const config = useConfig(useAppName());

  const { header: { banner: { defaultPageConfig, pageConfigs, url } } } = config;

  const banner = pageConfigs
    .find(({ name }) => location.pathname.includes(name)) || defaultPageConfig;

  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className={`${cssClasses.banner} ${cssClasses['bg-img']} ${cssClasses['dark-overlay']}`} style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb-4">{banner.title}</h2>
            <h5 className="mb-4">{banner.subtitle ? banner.subtitle : ''}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

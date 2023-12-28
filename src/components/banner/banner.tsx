import cssClasses from './banner.module.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

interface Props {
  title: string;
  subtitle?: string;
}

const defaultProps: Partial<Props> = {
  subtitle: '',
};

function Banner({ title, subtitle }: Props) {
  const config = useConfig(useAppName());
  const { header: { banner } } = config;

  const backgroundStyle = {
    backgroundImage: `url(${banner.url})`,
  };

  return (
    <div className={`${cssClasses.banner} ${cssClasses['bg-img']} ${cssClasses['dark-overlay']}`} style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb-4">{title}</h2>
            <h5 className="mb-4">{subtitle}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.defaultProps = defaultProps;

export default Banner;

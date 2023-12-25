import cssClasses from './banner.module.scss';

interface Props {
  title: string;
  subtitle?: string;
}

const defaultProps: Partial<Props> = {
  subtitle: '',
};

function Banner({ title, subtitle }: Props) {
  return (
    <div className={`${cssClasses.banner} ${cssClasses['bg-img']} ${cssClasses['dark-overlay']}`}>
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

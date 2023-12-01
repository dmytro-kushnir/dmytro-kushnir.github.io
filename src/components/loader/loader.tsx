import cssClasses from './loader.module.scss';

const moduleLoader = () => (
  <div className={cssClasses.loading}>
    <div className={cssClasses.loader}> </div>
  </div>
);

export default moduleLoader;

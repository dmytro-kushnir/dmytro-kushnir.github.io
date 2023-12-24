import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import cssClasses from './footer.module.scss';

function Footer() {
  const config = useConfig(useAppName());
  const { links } = config;

  return (
    <footer className="footer">
      <ul className={cssClasses['footer-list']}>
        <li><a href={links.eom} target="_blank" rel="noreferrer">Кафедра ЕОМ</a></li>
        <li><a href="https://lpnu.ua/ikta" target="_blank" rel="noreferrer">ІКТА</a></li>
        <li><a href="https://lpnu.ua/" target="_blank" rel="noreferrer">НУ Львівська політехніка</a></li>
        {/*  sidebar info here ? */}
        {/* email */}
        {/* telegram */}
      </ul>
    </footer>
  );
}

export default Footer;

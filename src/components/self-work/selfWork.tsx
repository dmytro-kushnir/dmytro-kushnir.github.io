import {
  Container, Card, ListGroup, Accordion, Row, Col,
} from 'react-bootstrap';

import cssClasses from './selfWork.module.scss';

import IframeLoader from '../iframe/iframe.tsx';

interface CourseOptionLink {
  url: string;
  imageUrl: string;
  altText: string;
  text: string;
  type?: 'poster' | 'logo';
}

interface SubTopic {
  items: string[];
  title: string;
}

interface CourseOption {
  title: string;
  description: string;
  subTopics?: SubTopic[];
  links?: CourseOptionLink[];
  iframeSrc?: string;
}

interface SelfWorkConfig {
  assessment: string;
  instruction: string;
  objective: string;
  options: CourseOption[];
  reportContents: string[];
  title: string;
  workOrder: string[];
}

const icon = (name: string): string => `/images/apps/wp/icon/${name}`;

const selfWorkConfig: SelfWorkConfig = {
  assessment: `Максимальна оцінка самостійної роботи – 20 балів: рівень «Достатній» – 12–14 балів (модуль працює з вашим застосунком,
  продемонстрований на захисті, є розділ «Самостійна робота» в app/README.md і звіт), «Добрий» – 15–17 балів (автоматизована перевірка модуля
  проходить у CI, опрацьовано помилки й граничні випадки), «Високий» – 18–20 балів (у звіті є вимірювання або порівняння й обґрунтування
  вибору технологій, модуль доступний за публічним посиланням). Модуль не може повторювати роботу, уже зараховану на рівні «Високий»
  практичного завдання (наприклад, сервер на Python у ПЗ 4 чи хмарне розгортання в ПЗ 6).`,
  instruction: `Самостійна робота – це модуль-розширення того самого застосунку, який ви розробляєте в практичних завданнях: окремий проєкт
  починати не потрібно. Оберіть один модуль зі списку нижче (або запропонуйте власний за погодженням з викладачем) до захисту ПЗ 4 і повідомте
  викладачу. Модуль виконують у тому самому репозиторії, наприклад у каталозі app/server-py чи app/client-vue. Тут можна працювати з
  будь-якою мовою чи фреймворком. У проєктному треку самостійну роботу зараховують тим самим проєктом, якщо всі практичні завдання виконано
  щонайменше на рівні «Добрий» (Додаток А.2 посібника).`,
  objective: 'застосувати знання курсу для розширення власного вебзастосунку новою технологією, мовою чи фреймворком і перевірити результат автоматизованими засобами.',
  options: [
    {
      description: 'Реалізуйте API практичних завдань № 4–5 (каталог, перевірка даних, автентифікація й ролі) іншою мовою або на іншому фреймворку з власною базою даних. Клієнт ПЗ 3 і ПЗ 6 має працювати з новим сервером без змін.',
      links: [
        {
          altText: 'Python', imageUrl: icon('python.png'), text: 'Python', url: 'https://www.python.org/',
        },
        {
          altText: 'FastAPI', imageUrl: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png', text: 'FastAPI', url: 'https://fastapi.tiangolo.com/',
        },
        {
          altText: 'Django', imageUrl: icon('django.png'), text: 'Django', url: 'https://www.djangoproject.com/',
        },
        {
          altText: 'PHP', imageUrl: icon('php.png'), text: 'PHP', url: 'https://www.php.net/',
        },
        {
          altText: 'Laravel', imageUrl: icon('laravel.png'), text: 'Laravel', url: 'https://laravel.com/',
        },
        {
          altText: 'Java', imageUrl: icon('java.png'), text: 'Java', url: 'https://dev.java/',
        },
        {
          altText: 'Spring', imageUrl: icon('spring.png'), text: 'Spring Boot', url: 'https://spring.io/projects/spring-boot',
        },
        {
          altText: 'C#', imageUrl: icon('c.png'), text: 'C#', url: 'https://learn.microsoft.com/dotnet/csharp/',
        },
        {
          altText: 'ASP.NET', imageUrl: icon('asp-net.png'), text: 'ASP.NET Core', url: 'https://dotnet.microsoft.com/apps/aspnet',
        },
        {
          altText: 'Ruby on Rails', imageUrl: icon('ruby-on-rails.png'), text: 'Ruby on Rails', url: 'https://rubyonrails.org/',
        },
      ],
      subTopics: [
        {
          items: [
            'Ті самі маршрути, коди стану й формат помилок, що й у контракті contract/openapi.yaml.',
            'Власна база даних з міграціями (SQLite, PostgreSQL або інша) і параметризованими запитами.',
            'Перевірка даних з відповіддю 400 і деталями по полях, зокрема ваше індивідуальне правило.',
            'Реєстрація, вхід, ролі й перевірка прав засобами обраного фреймворку.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'npm run contract -- --auth --command "команда запуску вашого сервера з {port}" – контрактні тести курсу проходять.',
            'Наприклад: --command "python -m uvicorn main:app --app-dir app/server-py --port {port}" (підрозділ 4.8 посібника).',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '1. Сервер іншою мовою або фреймворком',
    },
    {
      description: 'Перепишіть клієнт ПЗ 6 на іншому компонентному фреймворку або з рендерингом на сервері та порівняйте з версією на React.',
      links: [
        {
          altText: 'Vue', imageUrl: icon('vue.png'), text: 'Vue', url: 'https://vuejs.org/',
        },
        {
          altText: 'Svelte', imageUrl: icon('svelte.png'), text: 'Svelte', url: 'https://svelte.dev/',
        },
        {
          altText: 'Angular', imageUrl: icon('angular.png'), text: 'Angular', url: 'https://angular.dev/',
        },
        {
          altText: 'Next.js', imageUrl: icon('nextjs.png'), text: 'Next.js', url: 'https://nextjs.org/',
        },
        {
          altText: 'Vite', imageUrl: icon('vite.svg'), text: 'Vite', url: 'https://vite.dev/',
        },
      ],
      subTopics: [
        {
          items: [
            'Ті самі сторінки й маршрути, спільний стан автентифікації та обмін з вашим сервером ПЗ 4–5.',
            'Стани завантаження й помилки, захищені маршрути, вихід із системи.',
            'Для Next.js чи Nuxt – рендеринг сторінки каталогу на сервері; поясніть, коли це доцільно.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'Збирання командою build і компонентні (Vitest) або наскрізні (Playwright) тести в CI.',
            'Для рівня «Високий» – порівняння з клієнтом на React: обсяг коду, розмір збірки, час першого відображення.',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '2. Клієнт на іншому фреймворку',
    },
    {
      description: 'Додайте оновлення в реальному часі: створення, зміна й видалення записів одразу з’являються в усіх відкритих вкладках без перезавантаження сторінки.',
      subTopics: [
        {
          items: [
            'Канал подій засобами WebSocket або Server-Sent Events.',
            'Відновлення з’єднання після обриву й повторне завантаження пропущених змін.',
            'Події отримують лише користувачі з правом читання; відправник не дублює власну зміну.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'Інтеграційний тест сервера: клієнт підписується, виконує POST і отримує подію.',
            'Демонстрація у двох вікнах браузера; вкладка Network (WS або EventStream) у звіті.',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '3. Оновлення в реальному часі',
    },
    {
      description: 'Зробіть застосунок прогресивним (PWA) або напишіть мобільний клієнт до того самого API.',
      links: [
        {
          altText: 'React Native', imageUrl: icon('react-native.png'), text: 'React Native', url: 'https://reactnative.dev/',
        },
        {
          altText: 'Flutter', imageUrl: icon('flutter.png'), text: 'Flutter', url: 'https://flutter.dev/',
        },
      ],
      subTopics: [
        {
          items: [
            'PWA: маніфест і service worker, встановлення застосунку, перегляд каталогу без мережі.',
            'Черга змін, зроблених без мережі, з надсиланням після відновлення з’єднання.',
            'Або мобільний клієнт (React Native, Flutter, Capacitor) з входом і списком каталогу.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'Аудит Lighthouse (PWA) або тести мобільного клієнта.',
            'Демонстрація роботи в режимі «Офлайн» інструментів розробника.',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '4. PWA або мобільний клієнт',
    },
    {
      description: 'Додайте до каталогу функцію на основі мовної моделі: семантичний пошук, рекомендації, генерацію описів або класифікацію записів.',
      links: [
        {
          altText: 'Ollama', imageUrl: 'https://ollama.com/public/ollama.png', text: 'Ollama (локальні моделі)', url: 'https://ollama.com/',
        },
        {
          altText: 'Python', imageUrl: icon('python.png'), text: 'Python', url: 'https://www.python.org/',
        },
      ],
      subTopics: [
        {
          items: [
            'Звернення до API мовної моделі або до локальної моделі (Ollama) лише із сервера; ключ доступу – у змінних середовища, не в клієнті.',
            'Обмеження частоти запитів і зрозуміле повідомлення, якщо модель недоступна: каталог працює й без неї.',
            'У запитах до моделі немає персональних даних користувачів.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'Тести з підміною моделі (mock): сервер правильно опрацьовує відповідь і помилку.',
            'Оцінка якості на наборі щонайменше з 10 прикладів у звіті (що модель зробила правильно, а що – ні).',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '5. Функція зі штучним інтелектом',
    },
    {
      description: 'Підготуйте застосунок до навантаження та експлуатації: кілька екземплярів сервера, кешування, журнали й метрики.',
      links: [
        {
          altText: 'Docker', imageUrl: icon('docker.png'), text: 'Docker Compose', url: 'https://docs.docker.com/compose/',
        },
        {
          altText: 'Google Cloud', imageUrl: icon('google-cloud.png'), text: 'Google Cloud', url: 'https://cloud.google.com/',
        },
        {
          altText: 'AWS', imageUrl: icon('aws.png'), text: 'AWS', url: 'https://aws.amazon.com/',
        },
      ],
      subTopics: [
        {
          items: [
            'Перехід з SQLite на PostgreSQL і кілька екземплярів сервера за балансувальником Nginx (docker compose).',
            'Кешування (Redis) або черга фонових завдань.',
            'Структуровані журнали, метрики (Prometheus, Grafana), перевірка стану й резервне копіювання бази даних.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'Навантажувальне тестування (k6, autocannon) до і після змін; порівняння показників у звіті.',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '6. Масштабування та експлуатація',
    },
    {
      description: 'Під’єднайте до застосунку пристрій IoT. Модуль можна поєднати з курсовим проєктом з дисципліни «Мікропроцесорні системи».',
      subTopics: [
        {
          items: [
            'Сутність «Вимірювання» (пристрій, величина, значення, час) у вашому застосунку.',
            'Показники надсилає плата ESP32, симулятор Wokwi (приклад – каталог wokwi/iot-node репозиторію курсу) або імітатор пристрою з ключем пристрою.',
            'Панель моніторингу: список пристроїв, останні показники, межі норми.',
          ],
          title: 'Що зробити',
        },
        {
          items: [
            'node tools/device.mjs --simulate 5 --key wp_… – показники надходять, без ключа запит відхиляється.',
            'Контрактні перевірки ключів пристроїв (npm run contract -- --auth).',
          ],
          title: 'Як перевіряється',
        },
      ],
      title: '7. IoT-модуль',
    },
  ],
  reportContents: [
    'Титульний аркуш: прізвище, група, трек, номер варіанту й назва обраного модуля.',
    'Мета й обраний стек з коротким обґрунтуванням.',
    'Посилання на репозиторій (і на розгорнутий застосунок, якщо є) та знімок успішної перевірки CI.',
    'Хід виконання: команди, результати перевірок, знімки екрана.',
    'Для рівня «Високий» – вимірювання або порівняння та висновки з них.',
    'Журнал використання інструментів штучного інтелекту (що згенеровано, що змінено, як перевірено).',
    'Висновки.',
  ],
  title: 'Виконання самостійної роботи',
  workOrder: [
    'До захисту ПЗ 4 обрати модуль (або погодити власний) і повідомити викладачу.',
    'Виконати модуль у тому самому репозиторії, не змінюючи каталогів tools/, contract/ і demo/.',
    'Додати в app/README.md розділ «Самостійна робота»: команди запуску й перевірки модуля.',
    'Налаштувати автоматизовану перевірку модуля в CI.',
    'Сформувати звіт за вимогами Додатка А.5 посібника й захистити роботу до останньої контрольної дати семестру.',
  ],
};

function SelfWorkContent() {
  return (
    <Container className="container-narrow my-4">
      <h1>{selfWorkConfig.title}</h1>
      <p>
        <strong>Мета роботи:</strong>
        {' '}
        {selfWorkConfig.objective}
      </p>
      <p>{selfWorkConfig.instruction}</p>

      <Accordion id="accordionMain" className="mb-4">
        {selfWorkConfig.options.map((option, index) => (
          <Accordion.Item eventKey={String(index)} key={option.title}>
            <Accordion.Header>{option.title}</Accordion.Header>
            <Accordion.Body>
              {option.description.split('\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {option.subTopics && option.subTopics.map((subTopic) => (
                <Card className="mb-3" key={subTopic.title}>
                  <Card.Header>
                    <h6 className="lead">{subTopic.title}</h6>
                  </Card.Header>
                  <ListGroup variant="flush">
                    {subTopic.items.map((item) => (
                      <ListGroup.Item key={item}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              ))}
              <Row>
                {option.links && option.links.map((link) => (
                  <Col xs={12} sm={6} md={6} lg={4} key={link.url}>
                    <Card className="mb-2 text-center">
                      <Card.Body>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={link.imageUrl}
                            alt={link.altText}
                            className={`
                              ${cssClasses['img-fluid']}
                              ${cssClasses['img-fluid-tablet']}
                              ${cssClasses['img-fluid-mobile']}
                              ${link.type === 'poster' ? cssClasses['img-poster'] : ''}
                            `}
                          />
                          <Card.Title>{link.text}</Card.Title>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              {option.iframeSrc && (
              <IframeLoader className={cssClasses['example-iframe']} src={option.iframeSrc} title={`Embedded Content - ${option.title}`} />
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <h2>Оцінювання роботи</h2>
      <p>{selfWorkConfig.assessment}</p>

      <h2>Порядок роботи</h2>
      <ol>
        {selfWorkConfig.workOrder.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>Зміст звіту</h2>
      <ol className="mb-4">
        {selfWorkConfig.reportContents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ol>
    </Container>
  );
}

export default SelfWorkContent;

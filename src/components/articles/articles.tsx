import {
  Col, Container, Row,
} from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import ModuleLoader from '../loading-spinner/loadingSpinner.tsx';
import styles from './articles.module.scss';

interface Post {
  guid: string;
  title: string;
  link: string;
  description: string;
}

function Articles() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isFetching = useRef(false);

  const { appPath, articles = [] } = useConfig(useAppName());

  useEffect(() => {
    (async () => {
      try {
        if (isFetching.current) return;
        isFetching.current = true;
        let fetchedPosts: Post[] = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const article of articles) {
          if (article.type === 'medium' && article.username) {
            // eslint-disable-next-line no-await-in-loop
            const response = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${article.username}`,
            );
            // eslint-disable-next-line no-await-in-loop
            const feed = await response.json();
            fetchedPosts = [...fetchedPosts, ...feed.items];
          } else if (article.type === 'link' && article.link) {
            fetchedPosts.push({
              description: `<img src="${article.thumbnail || ''}" alt="${article.description}" />`,
              guid: article.link,
              link: article.link,
              title: article.description,
            });
          }
        }

        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        navigate(`${appPath}/error`);
      } finally {
        isFetching.current = false;
      }
    })();
  }, [appPath, navigate, articles]);

  return (
    <>
      {loading && <ModuleLoader />}
      <Container fluid="md" className="my-4">
        <Row>
          <Col className="mb-5">
            {posts && posts.length > 0 && posts.map((post) => (
              <div key={post.guid} className={styles.articleCard}>
                <a href={post.link} target="_blank" className={styles.articleLink} rel="noopener noreferrer">
                  <h2>{post.title}</h2>
                  <img
                    src={post.description.match(/<img[^>]+src="([^">]+)"/)?.[1]}
                    alt={post.title}
                    className={styles.articleImage}
                  />
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Articles;

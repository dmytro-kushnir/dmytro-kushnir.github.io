import {
  Col, Container, Row,
} from 'react-bootstrap';

import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import styles from './articles.module.scss';

function Articles() {
  const { articles = [] } = useConfig(useAppName());
  const posts = articles.filter((article) => article.type === 'link' && article.link);

  return (
    <Container fluid="md" className={`my-4 ${styles.articlesPage}`}>
      <Row className="mb-4">
        {posts.map((post) => (
          <Col xs={12} sm={6} lg={4} className="mb-4 d-flex" key={post.link}>
            <div className={styles.articleCard}>
              <a href={post.link} target="_blank" className={styles.articleLink} rel="noopener noreferrer">
                <h2>{post.description}</h2>
                <img
                  src={post.thumbnail}
                  alt={post.description}
                  className={styles.articleImage}
                />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Articles;

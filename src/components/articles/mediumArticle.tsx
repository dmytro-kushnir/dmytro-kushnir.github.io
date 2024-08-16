import {
  Col, Container, Row,
} from 'react-bootstrap';
import { useEffect, useState } from 'react';

import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import ModuleLoader from '../loading-spinner/loadingSpinner.tsx';

interface Post {
  guid: string;
  title: string;
  link: string;
  description: string;
}

function MediumArticle() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const { articles = [] } = useConfig(useAppName());
  const { description = '', username } = articles[0];

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
        );
        const feed = await response.json();
        setPosts(feed.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [username]);

  return (
    <>
      {loading && <ModuleLoader />}
      <Container fluid="md" className="my-4">
        <Row>
          <Col>
            {posts.map((post) => (
              <div key={post.guid}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <h2>{post.title}</h2>
                  {/* get the first image from the post content, since
                thumbnail data usually is empty */}
                  <img src={post.description.match(/<img[^>]+src="([^">]+)"/)?.[1]} alt={post.title} />
                </a>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              {!loading && description}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MediumArticle;

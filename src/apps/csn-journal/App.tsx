import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import DataTable from './DataTable.tsx';
import { jsonToXml } from './jsonToXml.ts';

interface Article {
    id: string;
    title: string;
    authors: string;
    abstract: string;
    publicationDate: string;
    firstPage: string;
    lastPage: string;
    doi: string;
    resourceUrl: string;
    status: string;
}

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async function fetchArticles() {
      try {
        const response = await fetch('http://localhost:5001/dmytro-kushnir-apps/us-central1/getArticles');
        const articlesData = await response.json();
        setArticles(articlesData);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      }
    }());
  }, []);

  const handleAddArticle = async (article: Article) => {
    try {
      const response = await fetch('http://localhost:5001/dmytro-kushnir-apps/us-central1/addArticle', {
        body: JSON.stringify(article),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const newArticle = await response.json();
      setArticles([...articles, newArticle]);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const handleUpdateStatus = (id: string, status: string) => {
    if (articles?.length) {
      setArticles(
        articles.map((article) => (article.id === id ? { ...article, status } : article)),
      );
    }
  };

  const exportToXML = () => {
    const jsonData = { articles };
    const xml = jsonToXml(jsonData);
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'crossref_data.xml';
    link.click();
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>CrossRef Data Manager</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            articles={articles}
            onAddArticle={handleAddArticle}
            onUpdateStatus={handleUpdateStatus}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Button onClick={exportToXML} variant="primary">
            Export to XML
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

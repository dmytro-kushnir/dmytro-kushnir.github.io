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
  fileURL: string;
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

  const fileToBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
    reader.onerror = (error) => reject(error);
  });

  const handleAddArticle = async (article: Article, file: File | null) => {
    if (!file) {
      console.error('File is required for uploading an article.');
      return;
    }

    const fileContent = await fileToBase64(file);

    try {
      const response = await fetch('http://localhost:5001/dmytro-kushnir-apps/us-central1/addArticle', {
        body: JSON.stringify({
          ...article,
          fileContent,
          fileName: file.name,
        }),
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

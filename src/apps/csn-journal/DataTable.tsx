import React, { useState } from 'react';
import {
  Table, Button, Modal, Form,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import StatusBadge from './StatusBadge.tsx';

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

interface DataTableProps {
    articles: Article[];
    onAddArticle: (article: Article) => void;
    onUpdateStatus: (id: string, status: string) => void;
}

// eslint-disable-next-line react/function-component-definition
const DataTable: React.FC<DataTableProps> = ({
  articles,
  onAddArticle,
  onUpdateStatus,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [newArticle, setNewArticle] = useState<Omit<Article, 'id' | 'status'>>({
    abstract: '',
    authors: '',
    doi: '',
    firstPage: '',
    lastPage: '',
    publicationDate: '',
    resourceUrl: '',
    title: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const article: Article = {
      id: uuidv4(),
      ...newArticle,
      status: 'In Review',
    };
    onAddArticle(article);
    setShowModal(false);
    setNewArticle({
      abstract: '',
      authors: '',
      doi: '',
      firstPage: '',
      lastPage: '',
      publicationDate: '',
      resourceUrl: '',
      title: '',
    });
  };

  return (
    <>
      <Button variant="success" onClick={() => setShowModal(true)}>
        Add New Article
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Abstract</th>
            <th>Publication Date</th>
            <th>Pages</th>
            <th>DOI</th>
            <th>Resource URL</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.authors}</td>
              <td>{article.abstract}</td>
              <td>{article.publicationDate}</td>
              <td>{`${article.firstPage}-${article.lastPage}`}</td>
              <td>{article.doi}</td>
              <td>
                <a href={article.resourceUrl} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <td>
                <StatusBadge status={article.status} />
              </td>
              <td>
                <Form.Select
                  value={article.status}
                  onChange={(e) => onUpdateStatus(article.id, e.target.value)}
                >
                  <option>In Review</option>
                  <option>Requires Update</option>
                  <option>Approved</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding New Article */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter article title"
                name="title"
                value={newArticle.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAuthors" className="mb-3">
              <Form.Label>Authors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter authors"
                name="authors"
                value={newArticle.authors}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAbstract" className="mb-3">
              <Form.Label>Abstract</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter abstract"
                name="abstract"
                value={newArticle.abstract}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPublicationDate" className="mb-3">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="month"
                name="publicationDate"
                value={newArticle.publicationDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPages" className="mb-3">
              <Form.Label>First Page</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first page number"
                name="firstPage"
                value={newArticle.firstPage}
                onChange={handleChange}
              />
              <Form.Label className="mt-2">Last Page</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last page number"
                name="lastPage"
                value={newArticle.lastPage}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDOI" className="mb-3">
              <Form.Label>DOI</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter DOI"
                name="doi"
                value={newArticle.doi}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formResourceUrl" className="mb-3">
              <Form.Label>Resource URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter resource URL"
                name="resourceUrl"
                value={newArticle.resourceUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Article
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DataTable;

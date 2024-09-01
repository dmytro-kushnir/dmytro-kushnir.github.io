import { js2xml } from 'xml-js';

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

interface JSONData {
    articles: Article[];
}

// eslint-disable-next-line import/prefer-default-export
export const jsonToXml = (data: JSONData): string => {
  const xmlOptions = { compact: true, ignoreComment: true, spaces: 4 };

  const xmlObj = {
    crossref: {
      _attributes: {
        xmlns: 'http://www.crossref.org/schema/4.4.2',
      },
      journal: {
        articles: data.articles.map((article) => ({
          article: {
            abstract: { _text: article.abstract },
            authors: { _text: article.authors },
            doi: { _text: article.doi },
            pages: {
              firstPage: { _text: article.firstPage },
              lastPage: { _text: article.lastPage },
            },
            publicationDate: { _text: article.publicationDate },
            resourceUrl: { _text: article.resourceUrl },
            status: { _text: article.status },
            title: { _text: article.title },
          },
        })),
      },
    },
  };

  const xml = js2xml(xmlObj, xmlOptions);
  return xml;
};

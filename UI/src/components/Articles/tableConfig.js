/* @flow strict */
import * as React from 'react';

import { routes } from '../../routes';
import { Article } from '../../contracts';
import { Icon, Link, Button } from '../../controls';

export const tableConfig = {
  columns: [
    {
      key: 'title',
      name: 'Title',
      render: (article: Article.Type) => (
        <Link to={routes.article.read.path(article.id)}>{article.title}</Link>
      ),
    },
    {
      key: 'description',
      name: 'Description',
      render: (article: Article.Type) => article.description,
    },
    {
      key: 'createdBy',
      name: 'Created by',
      render: (article: Article.Type) => article.createdBy.username,
    },
    {
      key: 'updatedBy',
      name: 'Updated by',
      render: (article: Article.Type) => article.updatedBy.username,
    },
    {
      key: 'actions',
      name: null,
      width: 130,
      render: (article: Article.Type) => (
        <Link to={routes.article.update.path(article.id)}>
          <Button
            theme={Button.themes.PRIMARY}
            leftIcon={<Icon.icons.Edit width={16} />}
          >
            Update
          </Button>
        </Link>
      ),
    },
  ],
};

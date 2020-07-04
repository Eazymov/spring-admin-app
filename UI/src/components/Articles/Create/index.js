/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { ArticleForm } from '../Form';
import { routes } from '../../../routes';
import { Card } from '../../../controls';
import { Article } from '../../../contracts';
import { useSubmit, useArticle } from '../../../lib/hooks';

type Props = {||};

function getBackRoute(article) {
  return routes.article.read.path(article.id);
}

export function ArticleCreate(props: Props) {
  const { createArticle, isCreating, creatingError } = useArticle();
  const initialForm = React.useMemo(() => Article.getDefault(), []);
  const handleSubmit = useSubmit(createArticle, getBackRoute);

  return (
    <Card className={styles.ArticleCreate}>
      <Card.Header title="Create Article" />
      <ArticleForm
        error={creatingError}
        isLoading={isCreating}
        onSubmit={handleSubmit}
        initialForm={initialForm}
      />
    </Card>
  );
}

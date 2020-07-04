/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { ArticleForm } from '../Form';
import { Card, Error } from '../../../controls';
import { isNull, isNotNull } from '../../../lib/is';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { useSubmit, useArticle, useRouteParam } from '../../../lib/hooks';

type Props = {||};

function getBackRoute(article) {
  return routes.article.read.path(article.id);
}

export function ArticleUpdate(props: Props) {
  const {
    article,
    isCreating,
    loadArticle,
    loadingError,
    creatingError,
    updateArticle,
  } = useArticle();
  const handleSubmit = useSubmit(updateArticle, getBackRoute);
  const id = useRouteParam(ROUTE_PARAMS.USER_ID.name, enforceString);

  React.useEffect(() => {
    loadArticle(id);
  }, [id, loadArticle]);

  if (isNotNull(loadingError)) {
    return <Error error={loadingError} />;
  }

  if (isNull(article)) {
    return null;
  }

  return (
    <Card className={styles.ArticleUpdate}>
      <Card.Header title="Update Article" />
      <ArticleForm
        initialForm={article}
        error={creatingError}
        isLoading={isCreating}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}

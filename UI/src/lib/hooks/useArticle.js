/* @flow strict */
import * as React from 'react';

import { API } from '../../API';
import { useState } from './useState';
import { useError } from './useError';
import { usePending } from './usePending';
import { Article } from '../../contracts/Article';

export function useArticle() {
  const [article, setArticle] = useState(null);
  const [loadingError, onLoadingError] = useError();
  const [updatingError, onUpdatingError] = useError();
  const [creatingError, onCreatingError] = useError();
  const [load, isLoading] = usePending(API.article.getById);
  const [update, isUpdating] = usePending(API.article.update);
  const [createClient, isCreating] = usePending(API.article.create);

  const loadArticle = React.useCallback(
    (id: string) => load(id).then(setArticle).catch(onLoadingError),
    [load, onLoadingError],
  );

  const createArticle = React.useCallback(
    (newArticle: Article.Default) =>
      createClient(newArticle).then(setArticle).catch(onCreatingError),
    [createClient, onCreatingError],
  );

  const updateArticle = React.useCallback(
    (nextArticle: Article.Type) =>
      update(nextArticle).then(setArticle).catch(onUpdatingError),
    [update, onUpdatingError],
  );

  return {
    article,

    isLoading,
    loadArticle,
    loadingError,

    isUpdating,
    updateArticle,
    updatingError,

    isCreating,
    createArticle,
    creatingError,
  };
}

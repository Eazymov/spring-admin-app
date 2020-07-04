/* @flow strict */
import * as React from 'react';

import { API } from '../../API';
import { useState } from './useState';
import { useError } from './useError';
import { usePending } from './usePending';
import { Article } from '../../contracts/Article';

export function useArticle() {
  const [article, setArticle] = useState<null | Article.Type>(null);
  const [loadingError, onLoadingError] = useError();
  const [updatingError, onUpdatingError] = useError();
  const [creatingError, onCreatingError] = useError();
  const [get, isLoading] = usePending(API.article.getById);
  const [update, isUpdating] = usePending(API.article.update);
  const [create, isCreating] = usePending(API.article.create);

  const loadArticle = React.useCallback(
    (id: string) => get(id).then(setArticle, onLoadingError),
    [get, onLoadingError],
  );

  const createArticle = React.useCallback(
    (newArticle: Article.Default) =>
      create(newArticle).then(setArticle, onCreatingError),
    [create, onCreatingError],
  );

  const updateArticle = React.useCallback(
    (nextArticle: Article.Type) =>
      update(nextArticle).then(setArticle, onUpdatingError),
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

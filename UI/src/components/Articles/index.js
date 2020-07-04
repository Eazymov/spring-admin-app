/* @flow strict */
import * as React from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../API';
import { routes } from '../../routes';
import { tableConfig } from './tableConfig';
import { usePending } from '../../lib/hooks';
import { Icon, Card, Table, Button } from '../../controls';

type Props = {||};

export function Articles(props: Props) {
  const [articles, setArticles] = React.useState([]);
  const [loadArticles, isLoading] = usePending(API.article.getArticles);

  React.useEffect(() => {
    loadArticles().then(setArticles);
  }, [loadArticles]);

  return (
    <>
      <Link to={routes.article.create.path}>
        <Button
          theme={Button.themes.PRIMARY}
          leftIcon={<Icon.icons.Add width={14} />}
        >
          Add
        </Button>
      </Link>
      <br />
      <Card>
        <Card.Header title={`Articles (${articles.length})`} />
        <Card.Body>
          <Table
            records={articles}
            config={tableConfig}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </>
  );
}

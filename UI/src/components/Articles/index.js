/* @flow strict */
import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import { tableConfig } from './tableConfig';
import { Icon, Card, Table, Button } from '../../controls';

type Props = {||};

export function Articles(props: Props) {
  const articles = [];
  const isLoading = false;
  const totalCount = articles.length;

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
        <Card.Header title={`Articles (${totalCount})`} />
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

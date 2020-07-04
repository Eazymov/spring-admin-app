/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { isNull } from '../../../lib/is';
import { format } from '../../../lib/date';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { useArticle, useRouteParam } from '../../../lib/hooks';
import { Form, Icon, Card, Error, Input, Button } from '../../../controls';

type Props = {||};

const { Field } = Form;

export function ArticleRead(props: Props) {
  const id = useRouteParam(ROUTE_PARAMS.ARTICLE_ID.name, enforceString);
  const { article, loadArticle, loadingError } = useArticle();

  React.useEffect(() => {
    loadArticle(id);
  }, [id, loadArticle]);

  if (isNull(article)) {
    return null;
  }

  return (
    <Card className={styles.ArticleRead}>
      <Card.Header title="Article">
        <Link to={routes.article.update.path(article.id)}>
          <Button
            theme={Button.themes.PRIMARY}
            leftIcon={<Icon.icons.Edit width={16} />}
          >
            Update
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <Form.Container>
          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Title</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={article.title} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>
                Description
              </Field.Label>
              <Field.Control>
                <Input.Password readOnly value={article.description} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Content</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={article.content} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Updated by</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={article.updatedBy.username} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Updated on</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={format(article.updatedOn)} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Created by</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={article.createdBy.username} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Created on</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={format(article.createdOn)} />
              </Field.Control>
            </Field>
          </Form.Col>

          {loadingError && (
            <Form.Col>
              <Error error={loadingError} />
            </Form.Col>
          )}
        </Form.Container>
      </Card.Body>
    </Card>
  );
}

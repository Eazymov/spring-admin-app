/* @flow strict */
import invariant from 'invariant';

import { isDef } from './is';
import { getKeys } from './object';

type BaseConfig = $ReadOnly<{
  // flowlint-next-line unclear-type:off
  [key: string]: any,
  ...
}>;

type $ExtractValue = <Record>(Record) => $ElementType<Record, 'value'>;

type Methods<Value, Config> = {|
  has(value: mixed): boolean,
  toArray(): $Values<Config>[],
  values(): $ReadOnlyArray<Value>,
  validate(value: mixed): null | Value,
  getByValue(value: Value): $Values<Config>,
  map<R>(handler: (record: $Values<Config>) => R): $ReadOnlyArray<R>,
|};

export type $Value<Config: BaseConfig> = $Values<
  $ObjMap<Config, $ExtractValue>,
>;

export type Enum<Config> = $ReadOnly<{|
  ...$Exact<Config>,
  ...$Exact<Methods<$Value<Config>, Config>>,
  config: Config,
|}>;

export function createEnum<Config: BaseConfig>(
  config: $Exact<Config>,
): Enum<Config> {
  type Value = $Value<Config>;
  type Record = {
    value: Value,
    ...
  };

  const keys = getKeys(config);
  const values: Value[] = [];
  const records: Record[] = [];
  const valuesMap: Map<Value, Record> = new Map();

  keys.forEach(key => {
    const record: Record = config[key];
    const { value } = record;

    values.push(value);
    records.push(record);
    valuesMap.set(value, record);
  });

  const methods: Methods<Value, Config> = {
    values() {
      return values;
    },
    getByValue(value) {
      const record = valuesMap.get(value);

      invariant(isDef(record), 'Unexpected undefined record');

      return record;
    },
    validate(value) {
      return values.find(item => item === value) ?? null;
    },
    map<R>(handler: (record: $Values<Config>) => R): $ReadOnlyArray<R> {
      return records.map(handler);
    },
    toArray() {
      return records.slice();
    },
    has(value) {
      return valuesMap.has(value);
    },
  };

  return {
    ...config,
    ...methods,
    config,
  };
}

/* @flow strict */
import type { Config } from './types';
import { TRIGGERS } from '../constants';
import type { Trigger } from '../types';
import { useClickTrigger } from './useClickTrigger';
import { useHoverTrigger } from './useHoverTrigger';

export function useTrigger(trigger: Trigger, config: Config) {
  const hoverHandlers = useHoverTrigger(config);
  const clickHandlers = useClickTrigger(config);

  return trigger === TRIGGERS.HOVER ? hoverHandlers : clickHandlers;
}

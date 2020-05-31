/* @flow strict */
import { SIZES } from '../../../constants';

export const BALL_SIZES = {
  SMALL: SIZES.SMALL,
  MEDIUM: SIZES.MEDIUM,
};

export type BallSize = $Values<typeof BALL_SIZES>;

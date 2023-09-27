export const APP_RETRY_KEY = 'y';
export const APP_EXIT_KEY = 'n';

export const LOTTO_BALLS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45
];

export const MAX_PURCHASE_COUNT = 20;
export const MIN_PURCHASE_COUNT = 1;

export const LOTTO_BONUS_NUMBER_LENGTH = 1;
export const LOTTO_NUMBER_LENGTH = 6;
export const LOTTO_PRICE = 1000;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBER_SEPARATOR = ',';

export const LOTTO_MODE = Object.freeze({
  AUTO: 'auto',
  MANUAL: 'manual'
});

export const LOTTO_PRIZE = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
  OTHERS: 0
});

export const LOTTO_MATCH_COUNT = Object.freeze({
  FIRST: { BASE_NUMBER: LOTTO_NUMBER_LENGTH, BONUS_NUMBER: 0, RANK: 1 },
  SECOND: { BASE_NUMBER: LOTTO_NUMBER_LENGTH - 1, BONUS_NUMBER: LOTTO_BONUS_NUMBER_LENGTH, RANK: 2 },
  THIRD: { BASE_NUMBER: LOTTO_NUMBER_LENGTH - 1, BONUS_NUMBER: 0, RANK: 3 },
  FOURTH: { BASE_NUMBER: LOTTO_NUMBER_LENGTH - 2, BONUS_NUMBER: 0, RANK: 4 },
  FIFTH: { BASE_NUMBER: LOTTO_NUMBER_LENGTH - 3, BONUS_NUMBER: 0, RANK: 5 }
});

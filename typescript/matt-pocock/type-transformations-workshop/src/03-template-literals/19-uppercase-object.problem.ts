import { Equal, Expect } from '../helpers/type-utils';

type Event = `log_in` | 'log_out' | 'sign_up';

type ObjectOfKeys = { [Key in Uppercase<Event>]: string };

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >
];

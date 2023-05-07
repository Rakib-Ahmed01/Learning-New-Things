import { Equal, Expect } from '../helpers/type-utils';

export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: 'click' }>;
type FocusEvent = Extract<Event, { type: 'focus' }>;

type tests = [Expect<Equal<FocusEvent, { type: 'focus'; event: FocusEvent }>>];

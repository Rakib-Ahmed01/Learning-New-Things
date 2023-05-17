import { Equal, Expect } from '../helpers/type-utils';

type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`;

type ObjectOfKeys = unknown;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: () => void;
        userName: () => void;
        postId: () => void;
        postName: () => void;
        commentId: () => void;
        commentName: () => void;
      }
    >
  >
];

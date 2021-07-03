import {
  data,
  read,
  write,
  setLoopOf,
  isDirty,
  createRenderer,
  createRenderFn,
  runForEach
} from "../../../../src/dom/index";
import { open, close, next, over, get, skip } from "../../utils/walks";

export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  },
  {
    children: []
  },
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  }
];

type Input = typeof inputs[number];

const enum Index {
  COMMENT = 0,
  LOOP = 0,
  INPUT_CHILDREN = 4
}

type scope = {
  [Index.COMMENT]: Comment;
  [Index.LOOP]: Comment;
  [Index.INPUT_CHILDREN]: Input["children"];
};

// <for|child| of=input.children by(c) { return c.id }>
//   ${child.text}
// </for>

export const template = `<!>`;
export const walks = open(5) + get + over(1) + close;

export const execInputChildren = () => {
  setLoopOf(
    Index.LOOP,
    read<scope, Index.INPUT_CHILDREN>(Index.INPUT_CHILDREN),
    iter0,
    i => "" + (i as Input["children"][number]).id
  );
  runForEach(Index.LOOP, iter0_execItem);
};

export const execDynamicInput = (input: Input) => {
  write(Index.INPUT_CHILDREN, input.children);
  execInputChildren();
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Iter0Index {
  ITEM = 0,
  INDEX = 1,
  ALL = 2,
  TEXT = 3,
  ITEM_TEXT = 4
}

type iterScope = [
  Input["children"][number],
  number,
  Input["children"],
  Text,
  string
];

const iter0 = createRenderer(
  " ",
  open(5) + skip(3) + get + next(1) + close,
  undefined,
  0
);

const iter0_execItem = () => {
  if (isDirty(Iter0Index.ITEM)) {
    write(
      Iter0Index.ITEM_TEXT,
      read<iterScope, Iter0Index.ITEM>(Iter0Index.ITEM).text
    );
    if (isDirty(Iter0Index.ITEM_TEXT)) {
      data(Iter0Index.TEXT, read(Iter0Index.ITEM_TEXT));
    }
  }
};

import {
  data,
  setConditionalRenderer,
  read,
  write,
  createRenderer,
  createRenderFn,
  readInOwner,
  runInBranch
} from "../../../../src/dom/index";
import { next, over, get, open, close } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello"
  },
  {
    value: false
  },
  {
    value: "World"
  },
  {
    value: "!"
  }
];

const enum Index {
  COMMENT = 0,
  CONDITIONAL = 0,
  INPUT_VALUE = 4
}

type scope = {
  [Index.COMMENT]: Comment;
  [Index.CONDITIONAL]: Comment;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
};

// <div>
//   <span/>
//   <if=input.value>
//     <span>${input.value}</span>
//   </if>
//   <span/>
// </div>

export const template = `<div><span></span><!><span></span></div>`;
export const walks = open(5) + next(2) + get + over(2) + close;

export const execInputValue = () => {
  setConditionalRenderer(
    Index.CONDITIONAL,
    read(Index.INPUT_VALUE) ? branch0 : undefined
  );
  runInBranch(Index.CONDITIONAL, branch0, execInputBranch0);
};

function execInputBranch0() {
  data(
    Branch0Index.TEXT,
    readInOwner<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE)
  );
}

export const execDynamicInput = (input: typeof inputs[number]) => {
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Branch0Index {
  TEXT = 0
}

type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  open(1) + next(1) + get + next(1) + close,
  undefined,
  0
);

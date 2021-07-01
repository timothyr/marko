import {
  on,
  walk,
  conditional,
  Conditional,
  register,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  queue,
  ensureDelegated,
  staticNodeMethods,
  write,
  read,
  bind,
  isDirty
} from "../../../../src/dom/index";

import { get, next, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum Index {
  BUTTON = 0,
  COMMENT = 1,
  SHOW = 2,
  MESSAGE = 3,
  CONDITIONAL = 4
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.COMMENT]: Comment;
  [Index.SHOW]: boolean;
  [Index.MESSAGE]: string;
  [Index.CONDITIONAL]: Conditional;
};

// <let/show = true/>
// <let/message = "hi"/>
// <button onclick() { message = "bye"; show = !show; }/>
// <if=show><span>${message}</span></if>

export const template = `<button></button><!>`;
export const walks = get + over(1) + get + over(1);
export const hydrate = register("", () => {
  write(Index.SHOW, true);
  write(Index.MESSAGE, "hi");
  ``;
  on(
    walk() as HTMLButtonElement,
    "click",
    bind(() => {
      write(Index.MESSAGE, "bye");
      write(Index.SHOW, !read(Index.SHOW));
      queue(execShowMessage);
    })
  );
  write(Index.CONDITIONAL, conditional(walk() as Comment));

  execShowMessage();
});

const execShowMessage = () => {
  const cond0 = read<scope, Index.CONDITIONAL>(Index.CONDITIONAL);
  if (isDirty(Index.SHOW)) {
    setConditionalRenderer(cond0, read(Index.SHOW) ? branch0 : undefined);
  }
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    if (isDirty(Index.MESSAGE)) {
      data(
        read<Branch0Scope, Branch0Index.TEXT>(
          Branch0Index.TEXT,
          cond0_scope,
          0
        ),
        read(Index.MESSAGE)
      );
    }
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");

const enum Branch0Index {
  TEXT = 0
}

type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    write(Branch0Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);

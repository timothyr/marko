import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write(`<button class=inc>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _return = x;
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/components/counter.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "/": _tagVar,
    "@": _$.register(function (_new_x) {
      x = _new_x;
    }, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/components/counter.marko_0/valueChange", _scope0_id)
  });
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/components/counter.marko", _renderer);
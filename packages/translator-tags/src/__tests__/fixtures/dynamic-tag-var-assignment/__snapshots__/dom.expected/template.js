export const _template_ = "<!><!><button class=reset>reset</button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
_$.register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0/getCounter", getCounter);
import Counter from "./components/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const _getCounter_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => {
  _$.setTagVar(_scope, "#text/0!", _count);
  _getCounter_input(_scope, () => ({}));
}, () => _getCounter_input);
const _count = _$.registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0_count", (_scope, count) => {});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko_0", _scope => _$.on(_scope["#button/1"], "click", function () {
  _$.tagVarSignalChange(_scope["#text/0!"], 0);
}));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _dynamicTagName(_scope, getCounter());
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-var-assignment/template.marko", _template_, _walks_, _setup_);
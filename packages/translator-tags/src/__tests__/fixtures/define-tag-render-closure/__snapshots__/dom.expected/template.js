export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x$defineBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_x/subscriber", /* @__PURE__ */_$.dynamicClosure("x", (_scope, x) => _$.data(_scope["#text/0"], x)));
const _defineBody = _$.register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div> </div>", /* next(1), get */"D ", void 0, () => [_x$defineBody]));
const _MyTag_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _MyTag_input(_scope, () => ({})), () => _MyTag_input);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko_0_x", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _x_effect(_scope);
}, () => _$.dynamicSubscribers("x"));
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    renderBody: _defineBody(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/define-tag-render-closure/template.marko", _template_, _walks_, _setup_);
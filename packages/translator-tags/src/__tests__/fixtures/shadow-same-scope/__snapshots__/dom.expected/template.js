export const _template_ = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _count3
  } = _scope;
  return function () {
    _count4(_scope, _count3 + 1);
  };
};
const _count4_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count3", _scope => _$.on(_scope["#button/6"], "click", _onClick(_scope)));
const _count4 = /* @__PURE__ */_$.state("_count3", (_scope, _count3) => {
  _$.data(_scope["#text/7"], _count3);
  _count4_effect(_scope);
});
const _onClick2 = _scope => {
  const {
    _count2
  } = _scope;
  return function () {
    _count3(_scope, _count2 + 1);
  };
};
const _count3_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count2", _scope => _$.on(_scope["#button/4"], "click", _onClick2(_scope)));
const _count3 = /* @__PURE__ */_$.state("_count2", (_scope, _count2) => {
  _$.data(_scope["#text/5"], _count2);
  _count3_effect(_scope);
});
const _onClick3 = _scope => {
  const {
    _count
  } = _scope;
  return function () {
    _count2(_scope, _count + 1);
  };
};
const _count2_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0__count", _scope => _$.on(_scope["#button/2"], "click", _onClick3(_scope)));
const _count2 = /* @__PURE__ */_$.state("_count", (_scope, _count) => {
  _$.data(_scope["#text/3"], _count);
  _count2_effect(_scope);
});
const _onClick4 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick4(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
  _count2(_scope, 0);
  _count3(_scope, 0);
  _count4(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko", _template_, _walks_, _setup_);
export const _template_ = `${_comments_template}`;
export const _walks_ = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
import { _setup_ as _comments, _input_ as _comments_input, _template_ as _comments_template, _walks_ as _comments_walks } from "./components/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _comments_input(_scope["#childScope/0"], input), () => _$.inChild("#childScope/0", _comments_input));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _comments(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);
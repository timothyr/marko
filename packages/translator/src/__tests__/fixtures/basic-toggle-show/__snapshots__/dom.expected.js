import { queue as _queue, setConditionalRenderer as _setConditionalRenderer, write as _write, read as _read, on as _on, bind as _bind, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_show(show = _read(5)) {
  _on(4, "click", _read(6));
}

const _onclick = function () {
  const show = _read(5);

  _queue(_apply_show, 0, !show);
};

function _apply_show(show) {
  if (_write(5, show)) {
    _setConditionalRenderer(0, show ? _if : null);

    _write(6, _bind(_onclick));

    _hydrate_show();
  }
}

function _apply() {
  _apply_show(true);
}

const _if = _createRenderer("Hello!", "", null);

export const template = "<div><!><button>Toggle</button></div>";
export const walks = "D%+b l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);
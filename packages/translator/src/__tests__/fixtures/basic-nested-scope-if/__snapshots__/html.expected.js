import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const clickCount = 0;

  _write(`<div>${_markHydrateNode(_scope, 0)}`);

  if (clickCount < 3) {
    const _scope = _nextScopeId();

    _write(`${_markHydrateNode(_scope, 0)}<button>${_markHydrateNode(_scope, 1)}${_escapeXML(clickCount)}</button>`);

    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_0");

    _writeHydrateScope(_scope, [,,,, clickCount]);
  }

  _write("</div>");
};

export default _renderer;
export const render = _createRenderer(_renderer);
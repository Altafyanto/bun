import {
__HMRClient as Bun
} from "http://localhost:3000/bun:wrap";
Bun.activate(true);
import {
__FastRefreshModule as FastHMR
} from "http://localhost:3000/bun:wrap";
import {
__FastRefreshRuntime as FastRefresh
} from "http://localhost:3000/bun:wrap";
var hmr = new FastHMR(713665787, "global-is-remapped-to-globalThis.js", FastRefresh), exports = hmr.exports;
(hmr._load = function() {
  function test() {
    console.assert(globalThis === globalThis);
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    test: () => test
  });
})();
var $$hmr_test = hmr.exports.test;
hmr._update = function(exports) {
  $$hmr_test = exports.test;
};

export {
  $$hmr_test as test
};

//# sourceMappingURL=http://localhost:3000/global-is-remapped-to-globalThis.js.map

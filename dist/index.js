var Gs = Object.create;
var Be = Object.defineProperty,
  Es = Object.defineProperties,
  Ms = Object.getOwnPropertyDescriptor,
  Is = Object.getOwnPropertyDescriptors,
  Cs = Object.getOwnPropertyNames,
  ot = Object.getOwnPropertySymbols,
  vs = Object.getPrototypeOf,
  qt = Object.prototype.hasOwnProperty,
  on = Object.prototype.propertyIsEnumerable;
var nn = (e, t, r) =>
    t in e
      ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  O = (e, t) => {
    for (var r in t || (t = {})) qt.call(t, r) && nn(e, r, t[r]);
    if (ot) for (var r of ot(t)) on.call(t, r) && nn(e, r, t[r]);
    return e;
  },
  w = (e, t) => Es(e, Is(t));
var Pe = (e, t) => {
  var r = {};
  for (var n in e) qt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ot)
    for (var n of ot(e)) t.indexOf(n) < 0 && on.call(e, n) && (r[n] = e[n]);
  return r;
};
var As = (e, t) => {
    for (var r in t) Be(e, r, { get: t[r], enumerable: !0 });
  },
  sn = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of Cs(t))
        !qt.call(e, o) &&
          o !== r &&
          Be(e, o, {
            get: () => t[o],
            enumerable: !(n = Ms(t, o)) || n.enumerable,
          });
    return e;
  };
var T = (e, t, r) => (
    (r = e != null ? Gs(vs(e)) : {}),
    sn(
      t || !e || !e.__esModule
        ? Be(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  Ds = (e) => sn(Be({}, '__esModule', { value: !0 }), e);
var aa = {};
As(aa, {
  URL_REGEX: () => Ls,
  VERBS_WITH_BODY: () => re,
  addDependency: () => zn,
  camel: () => j,
  default: () => ia,
  defineConfig: () => lo,
  escape: () => Ke,
  generalJSTypes: () => Vn,
  generalJSTypesWithArray: () => Ge,
  generate: () => js,
  generateAxiosOptions: () => _n,
  generateBodyMutatorConfig: () => Ln,
  generateBodyOptions: () => Kn,
  generateDependencyImports: () => Le,
  generateFormDataAndUrlEncodedFunction: () => fe,
  generateImports: () => Xt,
  generateMutatorConfig: () => le,
  generateMutatorImports: () => V,
  generateMutatorRequestOptions: () => ue,
  generateOptions: () => ce,
  generateQueryParamsAxiosConfig: () => Hn,
  generateVerbImports: () => me,
  getNumberWord: () => ze,
  isSyntheticDefaultImportsAllow: () => z,
  kebab: () => he,
  loadTsconfig: () => er,
  pascal: () => $,
  sanitize: () => F,
  snake: () => Ws,
  stringify: () => L,
  toObjectString: () => W,
  upper: () => Bs,
});
module.exports = Ds(aa);
var xr = T(require('chalk'));
var $r = T(require('chalk')),
  Ts = require('upath');
var fr = T(require('@apidevtools/swagger-parser')),
  is = T(require('chalk')),
  as = require('console'),
  ps = require('upath');
var an = require('upath');
var U = {
    ANGULAR: 'angular',
    AXIOS: 'axios',
    AXIOS_FUNCTIONS: 'axios-functions',
    REACT_QUERY: 'react-query',
    SVELTE_QUERY: 'svelte-query',
    VUE_QUERY: 'vue-query',
  },
  ae = {
    SINGLE: 'single',
    SPLIT: 'split',
    TAGS: 'tags',
    TAGS_SPLIT: 'tags-split',
  },
  Z = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    PATCH: 'patch',
    DELETE: 'delete',
    HEAD: 'head',
  };
var C = (e) => Boolean(e.$ref),
  pn = (e) => !(0, an.extname)(e);
function A(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function v(e) {
  return typeof e == 'string';
}
function mn(e) {
  return typeof e == 'number';
}
function K(e) {
  return typeof e == 'boolean';
}
function Q(e) {
  return typeof e == 'function';
}
function st(e) {
  return typeof e > 'u';
}
function cn(e) {
  return typeof e === null;
}
var ln = (e) => Object.values(Z).includes(e);
var un = T(require('validator/lib/isURL')),
  ks = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  ge = (e) => (0, un.default)(e) || ks.test(e);
var ss = T(require('lodash.omit'));
var E = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
var bn = T(require('chalk')),
  $n = T(require('swagger2openapi'));
var te = T(require('chalk')),
  Ut = T(require('readline')),
  D = console.log;
var gn = (e) => D(te.default.red(e));
var yn = (e) =>
    D(
      `\u{1F389} ${
        e ? `${te.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  hn = (e) => {
    D(te.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        D(
          te.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  On = (e) => {
    D(te.default.red('(!) Errors')),
      e.forEach((t) =>
        D(
          te.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Nt = { silent: 0, error: 1, warn: 2, info: 3 },
  fn,
  dn,
  Vt = 0;
function Fs() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    Ut.default.cursorTo(process.stdout, 0, 0),
    Ut.default.clearScreenDown(process.stdout);
}
function _(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Nt[e],
    s = n && process.stdout.isTTY && !process.env.CI ? Fs : () => {};
  function a(c, m, l = {}) {
    if (o >= Nt[c]) {
      let f = c === 'info' ? 'log' : c,
        d = () => {
          if (l.timestamp) {
            let u =
              c === 'info'
                ? te.default.cyan.bold(r)
                : c === 'warn'
                ? te.default.yellow.bold(r)
                : te.default.red.bold(r);
            return `${te.default.dim(
              new Date().toLocaleTimeString(),
            )} ${u} ${m}`;
          } else return m;
        };
      c === fn && m === dn
        ? (Vt++, s(), console[f](d(), te.default.yellow(`(x${Vt + 1})`)))
        : ((Vt = 0), (dn = m), (fn = c), l.clear && s(), console[f](d()));
    }
  }
  let i = new Set(),
    p = {
      hasWarned: !1,
      info(c, m) {
        a('info', c, m);
      },
      warn(c, m) {
        (p.hasWarned = !0), a('warn', c, m);
      },
      warnOnce(c, m) {
        i.has(c) || ((p.hasWarned = !0), a('warn', c, m), i.add(c));
      },
      error(c, m) {
        (p.hasWarned = !0), a('error', c, m);
      },
      clearScreen(c) {
        o >= Nt[c] && s();
      },
    };
  return p;
}
var xn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? $n.default.convertObj(e, t, (o, s) => {
            o
              ? (D(
                  bn.default.yellow(`${r}
=> ${o}`),
                ),
                n(e))
              : n(s.openapi);
          })
        : n(e);
    });
  } catch (n) {
    throw `Oups... \u{1F37B}.
Path: ${r}
Parsing Error: ${n}`;
  }
};
var Sn = require('upath');
var it = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (v(e)) {
      let n = (0, Sn.resolve)(t, e),
        o = await Promise.resolve().then(() => T(require(n)));
      return r && A(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
var Wt = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  at = Wt('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  pt = 'a-z' + Wt('DF-F6,F8-FF', '00'),
  Qe = 'A-Z' + Wt('C0-D6,D8-DE', '00'),
  qs = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  ye = {
    capitalize: new RegExp('(^|[' + at + '])([' + pt + '])', 'g'),
    pascal: new RegExp('(^|[' + at + '])+([' + pt + Qe + '])', 'g'),
    fill: new RegExp('[' + at + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + pt + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + qs + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + Qe + '])([' + Qe + ']*)([' + Qe + '])(?=[^' + Qe + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + pt + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + at + ']'),
  },
  Ns = (e) => e.replace(ye.apostrophe, ''),
  wn = String.prototype.toUpperCase,
  Bt = String.prototype.toLowerCase,
  mt = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(ye.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = Ns(e)),
    e
  ),
  Vs = (e) => Bt.call(e.charAt(0)) + e.slice(1),
  Us = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  Qt = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && ye.upper.test(e) && (e = Bt.call(e)),
      !t && !ye.hole.test(e))
    ) {
      var o = mt(e, ' ');
      ye.hole.test(o) && (e = o);
    }
    return !r && !ye.room.test(e) && (e = e.replace(ye.relax, Us)), e;
  },
  Rn = (e, t, r) => mt(Bt.call(Qt(e, !!t)), t, r),
  $ = (e) =>
    mt(
      Qt(e, !1, !0).replace(ye.pascal, (t, r, n) => wn.call(n)),
      '',
      !0,
    ),
  j = (e) => Vs($(e)),
  Ws = (e) => Rn(e, '_', !0),
  he = (e) => Rn(e, '-', !0),
  Bs = (e, t, r) => mt(wn.call(Qt(e, !!t, !1, !0)), t, r);
var Tn = require('esutils'),
  Pn = T(require('lodash.get'));
var L = (e) => {
    if (!(st(e) || cn(e)))
      return v(e)
        ? `'${e}'`
        : mn(e) || K(e) || Q(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(L).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let a = L(n);
            return s.length === 1
              ? `{ ${r}: ${a}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${a}, }`
                : t + `${r}: ${a}, `
              : `{ ${r}: ${a}, `;
          }, '');
  },
  F = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: a = !1,
      } = t != null ? t : {},
      i = e.replace(/[^\w\s.-]/g, '');
    return (
      r !== !0 && (i = i.replace(/[\s]/g, r)),
      n !== !0 && (i = i.replace(/['_']/g, n)),
      o !== !0 && (i = i.replace(/[.]/g, o)),
      s !== !0 && (i = i.replace(/[-]/g, s)),
      a && (i = Tn.keyword.isKeywordES5(i, !0) ? `_${i}` : i),
      i
    );
  },
  W = (e, t) =>
    e.length
      ? (t ? e.map((n) => (0, Pn.default)(n, t)) : e).join(`,
    `) + ','
      : '',
  Qs = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  ze = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + Qs[n], ''),
  Ke = (e, t = "'") => e.replace(t, `\\${t}`);
var jn = (e) => /[^{]*{[\w_-]*}.*/.test(e),
  Gn = (e) => {
    let t = e.match(/([^{]*){?([\w_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = F(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = jn(t[3]) ? Gn(t[3]) : t[3];
    return jn(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  En = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${Gn(n)}` : `${r}/${n}`,
        '',
      );
var Nn = T(require('lodash.get'));
var kn = T(require('lodash.get')),
  Fn = require('upath'),
  qn = T(require('url'));
var ct = T(require('chalk')),
  An = require('esbuild'),
  be = T(require('fs')),
  Dn = T(require('globby')),
  je = T(require('micromatch')),
  Oe = T(require('path')),
  q = require('upath');
var In = T(require('debug')),
  Mn = process.env.ORVAL_DEBUG_FILTER,
  zt = process.env.DEBUG;
function Cn(e, t = {}) {
  let r = (0, In.default)(e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...a) => {
    (Mn && !s.includes(Mn)) ||
      (n && !(zt != null && zt.includes(o))) ||
      r(s, ...a);
  };
}
var I = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = pn(e),
      o = n ? (0, q.join)(e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      a = (0, q.dirname)(o),
      i = (0, q.basename)(o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: a,
      filename: i,
    };
  },
  vn = Cn('orval:file-load'),
  Kt = new Map();
async function lt(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: a,
      tsconfig: i,
      load: p = !0,
    } = t != null ? t : {},
    c = Date.now(),
    m,
    l = !1,
    f = !1;
  if (e) (m = Oe.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let y = Oe.default.resolve(r, `${o}.js`);
    if ((be.default.existsSync(y) && (m = y), !m)) {
      let g = Oe.default.resolve(r, `${o}.mjs`);
      be.default.existsSync(g) && ((m = g), (f = !0));
    }
    if (!m) {
      let g = Oe.default.resolve(r, `${o}.ts`);
      be.default.existsSync(g) && ((m = g), (l = !0));
    }
  }
  m ||
    (e
      ? _(s).error(ct.default.red(`File not found => ${e}`))
      : o
      ? _(s).error(ct.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : _(s).error(ct.default.red('File not found')),
    process.exit(1));
  let d = (0, q.normalizeSafe)(m),
    u = Kt.get(m);
  if (u) return w(O({ path: d }, u), { cached: !0 });
  try {
    let y;
    if (!y && !l && !f)
      try {
        delete require.cache[require.resolve(m)],
          (y = require(m)),
          vn(`cjs loaded in ${Date.now() - c}ms`);
      } catch (g) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(g.message)
        )
          throw g;
      }
    if (!y) {
      let { code: g } = await zs(
        m,
        f,
        r || (0, q.dirname)(d),
        a,
        i == null ? void 0 : i.compilerOptions,
      );
      p ? (y = await Ks(m, g, n)) : (y = g),
        vn(`bundled file loaded in ${Date.now() - c}ms`);
    }
    return Kt.set(m, { file: y }), { path: d, file: y };
  } catch (y) {
    return Kt.set(m, { error: y }), { path: d, error: y };
  }
}
async function zs(e, t = !1, r, n, o) {
  let s = await (0, An.build)({
      absWorkingDir: process.cwd(),
      entryPoints: [e],
      outfile: 'out.js',
      write: !1,
      platform: 'node',
      bundle: !0,
      format: t ? 'esm' : 'cjs',
      sourcemap: 'inline',
      metafile: !0,
      target: 'es6',
      minifyWhitespace: !0,
      plugins: [
        ...(n || (o == null ? void 0 : o.paths)
          ? [
              {
                name: 'aliasing',
                setup(i) {
                  i.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let c = Object.keys(n),
                        m = c.find(
                          (l) => p.startsWith(l) || je.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = je.default.scan(m),
                          f = je.default.scan(n[m]),
                          d = (0, q.resolve)(r, f.base),
                          u = l.base
                            ? p.replace(l.base, d)
                            : (0, q.joinSafe)(d, p),
                          g = (0, q.extname)(u) ? u : `${u}.ts`;
                        return be.default.existsSync(g) ? { path: g } : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let c = Object.keys(o == null ? void 0 : o.paths),
                        m = c.find(
                          (l) => p.startsWith(l) || je.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = je.default.scan(m),
                          f = je.default.scan(
                            o == null ? void 0 : o.paths[m][0],
                          ),
                          d = (0, q.resolve)(r, f.base),
                          u = l.base
                            ? p.replace(l.base, d)
                            : (0, q.joinSafe)(d, p),
                          g = (0, q.extname)(u) ? u : `${u}.ts`;
                        return be.default.existsSync(g) ? { path: g } : void 0;
                      }
                    }
                  });
                },
              },
            ]
          : []),
        {
          name: 'externalize-deps',
          setup(i) {
            i.onResolve({ filter: /.*/ }, (p) => {
              let c = p.path;
              if (c[0] !== '.' && !Oe.default.isAbsolute(c))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(i) {
            i.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let c = await be.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: c
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(Oe.default.dirname(p.path)),
                  )
                  .replace(/\b__filename\b/g, JSON.stringify(p.path)),
              };
            });
          },
        },
      ],
    }),
    { text: a } = s.outputFiles[0];
  return {
    code: a,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function Ks(e, t, r) {
  let n = Oe.default.extname(e),
    o = require.extensions[n];
  (require.extensions[n] = (i, p) => {
    p === e ? i._compile(t, p) : o(i, p);
  }),
    delete require.cache[require.resolve(e)];
  let s = require(e),
    a = r && s.__esModule ? s.default : s;
  return (require.extensions[n] = o), a;
}
async function _t(e, t) {
  let r = await (0, Dn.default)(e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => be.default.promises.unlink(n)));
}
var _e = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  _s = new RegExp('~1', 'g'),
  Ce = async (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(_s, '/')),
      s = (0, kn.default)(t.override, [...o.slice(0, 2), 'suffix'], ''),
      a = o[o.length - 1];
    if (!r) return { name: $(a) + s, originalName: a, refPaths: o };
    let i = ge(t.specKey)
      ? qn.default.resolve(t.specKey, r)
      : (0, Fn.resolve)(I(t.specKey).dirname, r);
    return { name: $(a) + s, originalName: a, specKey: i, refPaths: o };
  };
var N = async (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let c = await N(e == null ? void 0 : e.schema, t, r);
    return { schema: w(O({}, e), { schema: c.schema }), imports: r };
  }
  if (!C(e)) return { schema: e, imports: r };
  let {
      name: n,
      originalName: o,
      specKey: s,
      refPaths: a,
    } = await Ce(e.$ref, t),
    i = (0, Nn.default)(t.specs[s || t.specKey], a);
  if (!i) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return N(i, w(O({}, t), { specKey: s || t.specKey }), [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
var Vn = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  Ge = Vn.reduce((e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e), []),
  re = [Z.POST, Z.PUT, Z.PATCH, Z.DELETE],
  Ls =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
var Qn = T(require('lodash.uniq')),
  Jt = T(require('lodash.uniqwith')),
  Yt = require('upath');
var Wn = require('acorn'),
  Ht = T(require('chalk')),
  Bn = require('fs-extra');
var pe = require('upath');
var Lt = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
var ee = (e, t) => {
    let r = (0, pe.relative)(e, t);
    return (0, pe.normalizeSafe)(`.${pe.sep}${r}`);
  },
  ut = (e, t) => {
    if (ge(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(I(r.pathname).dirname, '')
        .replace(`.${Lt(e)}`, '');
    }
    return (
      '/' +
      (0, pe.normalize)((0, pe.relative)(I(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${Lt(e)}`, '')
    );
  };
var ve = 'BodyType',
  Un = (e, t) => {
    let r = I(e),
      n = I(t.path),
      { pathWithoutExtension: o } = I(ee(r.dirname, n.path));
    return o;
  },
  dt = async ({
    output: e,
    mutator: t,
    name: r,
    workspace: n,
    tsconfig: o,
  }) => {
    var y;
    if (!t || !e) return;
    let s = t.default,
      a = t.name ? t.name : `${r}Mutator`,
      i = t.path,
      p = await (0, Bn.readFile)(i, 'utf8'),
      c =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      m =
        p.includes(`export type ${ve}`) || p.includes(`export interface ${ve}`),
      l = t.default ? `${$(r)}ErrorType` : 'ErrorType',
      f = t.default ? `${$(r)}${ve}` : ve,
      { file: d, cached: u } = await lt(i, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (d) {
      let g = s ? 'default' : t.name,
        h = Hs(d, g);
      h ||
        (_().error(
          Ht.default.red(
            `Your mutator file doesn't have the ${g} exported function`,
          ),
        ),
        process.exit(1));
      let x = Un(e, t);
      return O(
        {
          name: a,
          path: x,
          default: s,
          hasErrorType: c,
          errorTypeName: l,
          hasSecondArg: h.numberOfParams > 1,
          hasThirdArg: h.numberOfParams > 2,
          isHook:
            !!(
              (y = t == null ? void 0 : t.name) != null && y.startsWith('use')
            ) && !h.numberOfParams,
        },
        m ? { bodyTypeName: f } : {},
      );
    } else {
      let g = Un(e, t);
      return (
        u ||
          _().warn(
            Ht.default.yellow('Failed to parse provided mutator function'),
          ),
        O(
          {
            name: a,
            path: g,
            default: s,
            hasSecondArg: !1,
            hasThirdArg: !1,
            isHook: !1,
            hasErrorType: c,
            errorTypeName: l,
          },
          m ? { bodyTypeName: f } : {},
        )
      );
    }
  },
  Hs = (e, t) => {
    var r, n;
    try {
      let o = Wn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((i) => {
                var p, c, m, l, f, d, u;
                if (i.type === 'ExpressionStatement')
                  return ((m =
                    (c =
                      (p = i.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : c.properties) != null &&
                    m.some((y) => {
                      var g;
                      return ((g = y.key) == null ? void 0 : g.name) === t;
                    })) ||
                    ((f =
                      (l = i.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : f.name) === t
                    ? !0
                    : (u =
                        (d = i.expression.right) == null
                          ? void 0
                          : d.properties) == null
                    ? void 0
                    : u.some((y) => y.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return ft(o, s.expression.right.name);
        let i =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return i.value.name
          ? ft(o, i.value.name)
          : i.value.type === 'FunctionExpression' ||
            i.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: i.value.params.length }
          : void 0;
      }
      let a = s.expression.arguments[1].properties.find((i) => {
        var p;
        return ((p = i.key) == null ? void 0 : p.name) === t;
      });
      return ft(o, a.value.body.name);
    } catch {
      return;
    }
  },
  ft = (e, t) => {
    var o;
    let r =
      (o = e == null ? void 0 : e.body) == null
        ? void 0
        : o.find((s) => {
            if (s.type === 'VariableDeclaration')
              return s.declarations.find((a) => a.id.name === t);
            if (s.type === 'FunctionDeclaration' && s.id.name === t) return s;
          });
    if (!r) return;
    if (r.type === 'FunctionDeclaration')
      return { numberOfParams: r.params.length };
    let n = r.declarations.find((s) => s.id.name === t);
    return n.init.name
      ? ft(e, n.init.name)
      : { numberOfParams: n.init.params.length };
  };
var Xt = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? (0, Jt.default)(
          e,
          (o, s) =>
            o.name === s.name &&
            o.default === s.default &&
            o.specKey === s.specKey,
        )
          .sort()
          .map(({ specKey: o, name: s, values: a, alias: i }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from '../${(0, Yt.join)(p, j(s))}';`
                : `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from './${(0, Yt.join)(p, j(s))}';`;
            }
            return `import ${a ? '' : 'type '}{ ${s}${
              i ? ` as ${i}` : ''
            } } from './${j(s)}';`;
          }).join(`
`)
      : '',
  V = (e, t) => {
    let r = (0, Jt.default)(
      e,
      (n, o) => n.name === o.name && n.default === o.default,
    ).map(
      (n) =>
        `import ${
          n.default
            ? `${n.name}${
                n.hasErrorType || n.bodyTypeName
                  ? `, { ${
                      n.hasErrorType ? `ErrorType as ${n.errorTypeName}` : ''
                    }${n.hasErrorType && n.bodyTypeName ? ',' : ''} ${
                      n.bodyTypeName ? `${ve} as ${n.bodyTypeName}` : ''
                    } }`
                  : ''
              }`
            : `{ ${n.name}${n.hasErrorType ? `, ${n.errorTypeName}` : ''}${
                n.bodyTypeName ? `, ${n.bodyTypeName}` : ''
              } }`
        } from '${t ? '../' : ''}${n.path}'`,
    ).join(`
`);
    return r
      ? r +
          `
`
      : '';
  },
  zn = ({
    implementation: e,
    exports: t,
    dependency: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
  }) => {
    let a = t.filter((p) => e.includes(p.alias || p.name));
    if (!a.length) return;
    let i = a.reduce((p, c) => {
      var l, f, d;
      let m = o && c.specKey ? c.specKey : 'default';
      return (
        (p[m] = {
          values:
            ((l = p[m]) == null ? void 0 : l.values) ||
            (c.values && (s || !c.syntheticDefaultImport)) ||
            !1,
          deps: [
            ...((d = (f = p[m]) == null ? void 0 : f.deps) != null ? d : []),
            c,
          ],
        }),
        p
      );
    }, {});
    return Object.entries(i).map(([p, { values: c, deps: m }]) => {
      let l = m.find((g) => g.default && (s || !g.syntheticDefaultImport)),
        f = s ? void 0 : m.find((g) => g.syntheticDefaultImport),
        d = (0, Qn.default)(
          m
            .filter((g) => !g.default && !g.syntheticDefaultImport)
            .map(({ name: g, alias: h }) => (h ? `${g} as ${h}` : g)),
        ).join(`,
  `),
        u = '',
        y = f ? `import * as ${f.name} from '${r}';` : '';
      if (y) {
        if (m.length === 1) return y;
        u += `${y}
`;
      }
      return (
        (u += `import ${c ? '' : 'type '}${
          l ? `${l.name}${d ? ',' : ''}` : ''
        }${
          d
            ? `{
  ${d}
}`
            : ''
        } from '${r}${p !== 'default' && n[p] ? `/${n[p]}` : ''}'`),
        u
      );
    }).join(`
`);
  },
  Le = (e, t, r, n, o) => {
    let s = t
      .map((a) =>
        zn(
          w(O({}, a), {
            implementation: e,
            specsName: r,
            hasSchemaDir: n,
            isAllowSyntheticDefaultImports: o,
          }),
        ),
      )
      .filter(Boolean).join(`
`);
    return s
      ? s +
          `
`
      : '';
  },
  me = ({ response: e, body: t, queryParams: r, params: n }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...n.flatMap(({ imports: o }) => o),
  ];
var Kn = (e, t, r) =>
    t && e.formData
      ? `
      formData,`
      : r && e.formUrlEncoded
      ? `
      formUrlEncoded,`
      : e.implementation
      ? `
      ${e.implementation},`
      : '',
  _n = (e, t, r) => {
    var s;
    let n = r !== !1;
    if (!t && !e.isBlob) return n ? 'options' : '';
    let o = '';
    return (
      t &&
        (o += `
        params,`),
      e.isBlob &&
        (!A(r) || !r.hasOwnProperty('responseType')) &&
        (o += `
        responseType: 'blob',`),
      A(r) &&
        (o += `
 ${(s = L(r)) == null ? void 0 : s.slice(1, -1)}`),
      n &&
        (o += `
    ...options`),
      o
    );
  },
  ce = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    requestOptions: s,
    isFormData: a,
    isFormUrlEncoded: i,
    isAngular: p,
  }) => {
    let c = re.includes(o),
      m = c ? Kn(t, a, i) : '',
      l = _n(n, r == null ? void 0 : r.schema, s);
    return o === Z.DELETE
      ? m
        ? `
      \`${e}\`,{${p ? 'body' : 'data'}:${m} ${l === 'options' ? `...${l}` : l}}
    `
        : `
      \`${e}\`,${l === 'options' ? l : `{${l}}`}
    `
      : `
      \`${e}\`,${c ? m || 'undefined,' : ''}${l === 'options' ? l : `{${l}}`}
    `;
  },
  Ln = (e, t, r) =>
    t && e.formData
      ? `,
       data: formData`
      : r && e.formUrlEncoded
      ? `,
       data: formUrlEncoded`
      : e.implementation
      ? `,
      data: ${e.implementation}`
      : '',
  Hn = (e, t) => {
    if (!t && !e.isBlob) return '';
    let r = ',';
    return (
      t &&
        (r += `
        params,`),
      e.isBlob &&
        (r += `
        responseType: 'blob',`),
      r
    );
  },
  le = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    isFormData: s,
    isFormUrlEncoded: a,
    isBodyVerb: i,
    hasSignal: p,
  }) => {
    let c = i ? Ln(t, s, a) : '',
      m = Hn(n, r == null ? void 0 : r.schema),
      l = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}'}`
        : '';
    return `{url: \`${e}\`, method: '${o}'${
      !i && p ? ', signal' : ''
    }${l}${c}${m}
    }`;
  },
  ue = (e, t) => {
    var r, n;
    return t
      ? A(e)
        ? `{${(n = L(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : A(e)
      ? (r = L(e)) == null
        ? void 0
        : r.slice(1, -1)
      : '';
  },
  fe = ({
    body: e,
    formData: t,
    formUrlEncoded: r,
    isFormData: n,
    isFormUrlEncoded: o,
  }) =>
    n && e.formData
      ? t
        ? `const formData = ${t.name}(${e.implementation})`
        : e.formData
      : o && e.formUrlEncoded
      ? r
        ? `const formUrlEncoded = ${r.name}(${e.implementation})`
        : e.formUrlEncoded
      : '';
var Ys = [
    {
      exports: [
        { name: 'HttpClient', values: !0 },
        { name: 'HttpHeaders' },
        { name: 'HttpParams' },
        { name: 'HttpContext' },
      ],
      dependency: '@angular/common/http',
    },
    {
      exports: [{ name: 'Injectable', values: !0 }],
      dependency: '@angular/core',
    },
    { exports: [{ name: 'Observable', values: !0 }], dependency: 'rxjs' },
  ],
  Yn = [],
  Jn = () => Ys,
  Xn = (e) => {
    let t = F(e);
    return `${$(t)}Service`;
  },
  Zn = ({
    title: e,
    isRequestOptions: t,
    isMutator: r,
    isGlobalMutator: n,
    provideInRoot: o,
    provideIn: s,
  }) => `
${
  t && !n
    ? `type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};`
    : ''
}

${
  t && r
    ? `// eslint-disable-next-line
    type ThirdParameter<T extends (...args: any) => any> = T extends (
  config: any,
  httpClient: any,
  args: infer P,
) => any
  ? P
  : never;`
    : ''
}

@Injectable(${s ? `{ providedIn: '${K(s) ? 'root' : s}' }` : ''})
export class ${e} {
  constructor(
    private http: HttpClient,
  ) {}`,
  eo = () => `};

${Yn.join(`
`)}`,
  Js = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: c,
    },
    { route: m },
  ) => {
    let l = (i == null ? void 0 : i.requestOptions) !== !1,
      f = (i == null ? void 0 : i.formData) !== !1,
      d = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      u = re.includes(a),
      y = fe({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: f,
        isFormUrlEncoded: d,
      }),
      g = r.definition.success || 'unknown';
    if ((Yn.push(`export type ${$(t)}ClientResult = NonNullable<${g}>`), n)) {
      let x = le({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: d,
          hasSignal: !1,
          isBodyVerb: u,
        }),
        S = l ? ue(i == null ? void 0 : i.requestOptions, n.hasThirdArg) : '';
      return ` ${t}<TData = ${g}>(
    ${W(s, 'implementation')}
 ${
   l && n.hasThirdArg ? `options?: ThirdParameter<typeof ${n.name}>` : ''
 }) {${y}
      return ${n.name}<TData>(
      ${x},
      this.http,
      ${S});
    }
  `;
    }
    let h = ce({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: f,
      isFormUrlEncoded: d,
      isAngular: !0,
    });
    return ` ${t}<TData = ${g}>(
    ${W(s, 'implementation')} ${
      l
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${y}
    return this.http.${a}<TData>(${h});
  }
`;
  },
  to = (e, t) => {
    let r = me(e);
    return { implementation: Js(e, t), imports: r };
  };
var uo = T(require('find-up')),
  fo = require('fs-extra'),
  tr = require('tsconfck');
var Me = T(require('chalk')),
  ht = require('upath');
var de = require('fs-extra'),
  gt = T(require('inquirer')),
  oo = require('upath');
var ro = T(require('https')),
  no = (e, t) =>
    new Promise((r, n) => {
      let o = ro.default.request(e, (s) => {
        let a = '';
        s.on('data', (i) => (a += i.toString())),
          s.on('error', n),
          s.on('end', () => {
            let i = {
              status: s.statusCode,
              headers: s.headers,
              body: JSON.parse(a),
            };
            s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
              ? r(i)
              : n(i);
          });
      });
      o.on('error', n), t && o.write(t, 'binary'), o.end();
    });
var Xs = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
    let s = JSON.stringify({
      query: `query {
      repository(name: "${t}", owner: "${r}") {
        object(expression: "${n}:${o}") {
          ... on Blob {
            text
          }
        }
      }
    }`,
    });
    return [
      {
        method: 'POST',
        hostname: 'api.github.com',
        path: '/graphql',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'orval-importer',
          authorization: `bearer ${e}`,
          'Content-Length': s.length,
        },
      },
      s,
    ];
  },
  Zs = async (e) => {
    if (await (0, de.pathExists)(e)) return (0, de.readFile)(e, 'utf-8');
    {
      let t = await gt.default.prompt([
        {
          type: 'input',
          name: 'githubToken',
          message:
            'Please provide a GitHub token with `repo` rules checked (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)',
        },
        {
          type: 'confirm',
          name: 'saveToken',
          message:
            'Would you like to store your token for the next time? (stored in your node_modules)',
        },
      ]);
      return (
        t.saveToken && (await (0, de.outputFile)(e, t.githubToken)),
        t.githubToken
      );
    }
  },
  ei = async (e) => {
    var c, m, l, f;
    let t = (0, oo.join)(__dirname, '.githubToken'),
      r = await Zs(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , a, ...i] = n.split('/'),
      p = i.join('/');
    try {
      let { body: d } = await no(
        ...Xs({ accessToken: r, repo: s, owner: o, branch: a, path: p }),
      );
      return (
        (c = d.errors) != null &&
          c.length &&
          ((m = d.errors) == null
            ? void 0
            : m.some((y) => (y == null ? void 0 : y.type) === 'NOT_FOUND')) &&
          (
            await gt.default.prompt([
              {
                type: 'confirm',
                name: 'removeToken',
                message:
                  "Your token doesn't have the correct permissions, should we remove it?",
              },
            ])
          ).removeToken &&
          (await (0, de.unlink)(t)),
        (f = (l = d.data) == null ? void 0 : l.repository) == null
          ? void 0
          : f.object.text
      );
    } catch (d) {
      throw d.body
        ? (d.body.message === 'Bad credentials' &&
            (
              await gt.default.prompt([
                {
                  type: 'confirm',
                  name: 'removeToken',
                  message:
                    "Your token doesn't have the correct permissions, should we remove it?",
                },
              ])
            ).removeToken &&
            (await (0, de.unlink)(t)),
          d.body.message || `Oups... \u{1F37B}. ${d}`)
        : `Oups... \u{1F37B}. ${d}`;
    }
  },
  so = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return ei(e.url);
    },
  };
var yt = (e) => e && typeof e == 'object';
function Ee(e, t) {
  return !yt(t) || !yt(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : yt(s) && yt(o)
            ? (r[n] = Ee(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
var ti = 'orval',
  ri = 'A swagger client generator for typescript',
  ni = '6.8.1',
  oi = 'MIT',
  si = ['dist'],
  ii = { orval: 'dist/bin/orval.js' },
  ai = 'dist/index.js',
  pi = [
    'rest',
    'client',
    'swagger',
    'open-api',
    'fetch',
    'data fetching',
    'code-generation',
    'angular',
    'react',
    'react-query',
    'svelte',
    'svelte-query',
    'vue',
    'vue-query',
    'msw',
    'mock',
    'axios',
    'vue-query',
    'vue',
    'swr',
  ],
  mi = { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  ci = { type: 'git', url: 'https://github.com/anymaniax/orval' },
  li = {
    prebuild: 'rimraf dist',
    build: 'tsup ./src/bin/orval.ts ./src/index.ts --minify --clean --dts',
    dev: "tsup ./src/bin/orval.ts ./src/index.ts --clean --watch src --onSuccess 'pnpm generate-api'",
    lint: 'eslint src/**/*.ts',
    test: 'vitest --global test.ts',
    format: 'prettier --write .',
    'format:staged': 'pretty-quick --staged',
    prerelease: 'yarn build && cd ./tests && yarn generate && yarn build',
    release: 'dotenv release-it',
    postrelease: 'yarn build && yarn update-samples',
    'generate-api':
      'node ./dist/bin/orval.js --config ./samples/react-query/basic/orval.config.ts --watch',
    prepare: 'husky install',
    commitlint: 'commitlint',
    'update-samples': 'zx ./scripts/update-samples.mjs',
  },
  ui = {
    '@commitlint/cli': '^16.2.1',
    '@commitlint/config-conventional': '^16.2.1',
    '@faker-js/faker': '^6.1.1',
    '@release-it/conventional-changelog': '^4.2.0',
    '@types/chalk': '^2.2.0',
    '@types/commander': '^2.12.2',
    '@types/fs-extra': '^9.0.12',
    '@types/inquirer': '^8.2.0',
    '@types/lodash.get': '^4.4.6',
    '@types/lodash.isempty': '^4.4.7',
    '@types/lodash.omit': '^4.5.6',
    '@types/lodash.omitby': '^4.6.6',
    '@types/lodash.uniq': '^4.5.6',
    '@types/lodash.uniqby': '^4.7.6',
    '@types/lodash.uniqwith': '^4.5.6',
    '@types/micromatch': '^4.0.2',
    '@types/node': '^17.0.21',
    '@types/prettier': '^2.4.4',
    '@types/request': '^2.48.8',
    '@types/validator': '^13.7.1',
    '@typescript-eslint/eslint-plugin': '^5.14.0',
    '@typescript-eslint/parser': '^5.14.0',
    'dotenv-cli': '^4.0.0',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.5.0',
    'eslint-plugin-prettier': '^4.0.0',
    husky: '^7.0.2',
    'lint-staged': '^12.3.5',
    'npm-run-all': '^4.1.5',
    prettier: '2.6.2',
    'pretty-quick': '^3.1.3',
    'release-it': '^14.12.5',
    rimraf: '^3.0.2',
    tsup: '^5.12.0',
    typescript: '^4.6.2',
    vitest: '^0.6.0',
    zx: '^5.2.0',
  },
  fi = {
    '@apidevtools/swagger-parser': '^10.0.3',
    acorn: '^8.7.0',
    cac: '^6.7.12',
    chalk: '^4.1.2',
    chokidar: '^3.5.3',
    'compare-versions': '^4.1.3',
    cuid: '^2.1.8',
    debug: '^4.3.3',
    esbuild: '^0.14.25',
    esutils: '2.0.3',
    execa: '^5.1.1',
    'find-up': '5.0.0',
    'fs-extra': '^10.0.1',
    globby: '11.0.4',
    'ibm-openapi-validator': '^0.57.4',
    inquirer: '^8.2.0',
    'lodash.get': '^4.4.2',
    'lodash.isempty': '^4.4.0',
    'lodash.omit': '^4.5.0',
    'lodash.omitby': '^4.6.0',
    'lodash.uniq': '^4.5.0',
    'lodash.uniqby': '^4.7.0',
    'lodash.uniqwith': '^4.5.0',
    micromatch: '^4.0.4',
    'openapi3-ts': '^2.0.2',
    swagger2openapi: '^7.0.8',
    tsconfck: '^1.2.0',
    upath: '^2.0.1',
    url: '^0.11.0',
    validator: '^13.7.0',
  },
  Zt = {
    name: ti,
    description: ri,
    version: ni,
    license: oi,
    files: si,
    bin: ii,
    main: ai,
    keywords: pi,
    author: mi,
    repository: ci,
    scripts: li,
    devDependencies: ui,
    dependencies: fi,
  };
var io = ({ title: e, description: t, version: r }) => [
  `Generated by ${Zt.name} v${Zt.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
var ao = T(require('find-up')),
  po = require('fs-extra');
var mo = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await (0, ao.default)(['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => T(require(n))) : void 0;
  }
  let r = oe(e, t);
  if ((0, po.existsSync)(r))
    return await Promise.resolve().then(() => T(require(r)));
};
function lo(e) {
  return e;
}
var Ot = async (e, t = process.cwd(), r = {}) => {
    var g,
      h,
      x,
      S,
      R,
      P,
      M,
      G,
      k,
      Y,
      J,
      X,
      Ie,
      tt,
      Ne,
      Ve,
      Ue,
      We,
      rt,
      nt,
      Sr,
      wr,
      Rr,
      Tr,
      Pr,
      jr,
      Gr,
      Er,
      Mr,
      Ir,
      Cr,
      vr,
      Ar,
      Dr,
      kr,
      Fr,
      qr,
      Nr,
      Vr,
      Ur,
      Wr,
      Br,
      Qr,
      zr,
      Kr,
      _r,
      Lr,
      Hr,
      Yr,
      Jr,
      Xr,
      Zr,
      en,
      tn,
      rn;
    let n = await (Q(e) ? e() : e);
    n.input ||
      (_().error(Me.default.red('Config require an input')), process.exit(1)),
      n.output ||
        (_().error(Me.default.red('Config require an output')),
        process.exit(1));
    let o = v(n.input) ? { target: n.input } : n.input,
      s = v(n.output) ? { target: n.output } : n.output;
    typeof ((h = (g = s.override) == null ? void 0 : g.angular) == null
      ? void 0
      : h.provideInRoot) < 'u' &&
      console.warn('provideInRoot is deprecated, use provideIn instead');
    let a = oe(s.workspace || '', t),
      { clean: i, prettier: p, client: c, mode: m, mock: l, tslint: f } = r,
      d = await er(s.tsconfig || r.tsconfig, t),
      u = await mo(s.packageJson || r.packageJson, t),
      y = {
        input: {
          target: gi(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: oe(
              (x = o.override) == null ? void 0 : x.transformer,
              t,
            ),
          },
          converterOptions: (S = o.converterOptions) != null ? S : {},
          parserOptions: Ee(di, (R = o.parserOptions) != null ? R : {}),
        },
        output: {
          target: oe(s.target, a),
          schemas: oe(s.schemas, a),
          workspace: s.workspace ? a : void 0,
          client:
            (M = (P = s.client) != null ? P : c) != null
              ? M
              : U.AXIOS_FUNCTIONS,
          mode: yi((G = s.mode) != null ? G : m),
          mock: (Y = (k = s.mock) != null ? k : l) != null ? Y : !1,
          clean: (X = (J = s.clean) != null ? J : i) != null ? X : !1,
          prettier: (tt = (Ie = s.prettier) != null ? Ie : p) != null ? tt : !1,
          tslint: (Ve = (Ne = s.tslint) != null ? Ne : f) != null ? Ve : !1,
          tsconfig: d,
          packageJson: u,
          override: w(O({}, s.override), {
            operations: co(
              (We = (Ue = s.override) == null ? void 0 : Ue.operations) != null
                ? We
                : {},
              a,
            ),
            tags: co(
              (nt = (rt = s.override) == null ? void 0 : rt.tags) != null
                ? nt
                : {},
              a,
            ),
            mutator: Ae(a, (Sr = s.override) == null ? void 0 : Sr.mutator),
            formData:
              (Pr = K((wr = s.override) == null ? void 0 : wr.formData)
                ? (Tr = s.override) == null
                  ? void 0
                  : Tr.formData
                : Ae(a, (Rr = s.override) == null ? void 0 : Rr.formData)) !=
              null
                ? Pr
                : !0,
            formUrlEncoded:
              (Mr = K((jr = s.override) == null ? void 0 : jr.formUrlEncoded)
                ? (Er = s.override) == null
                  ? void 0
                  : Er.formUrlEncoded
                : Ae(
                    a,
                    (Gr = s.override) == null ? void 0 : Gr.formUrlEncoded,
                  )) != null
                ? Mr
                : !0,
            header:
              ((Ir = s.override) == null ? void 0 : Ir.header) === !1
                ? !1
                : Q((Cr = s.override) == null ? void 0 : Cr.header)
                ? (vr = s.override) == null
                  ? void 0
                  : vr.header
                : io,
            requestOptions:
              (Dr = (Ar = s.override) == null ? void 0 : Ar.requestOptions) !=
              null
                ? Dr
                : !0,
            components: {
              schemas: O(
                { suffix: _e.schemas },
                (qr =
                  (Fr = (kr = s.override) == null ? void 0 : kr.components) ==
                  null
                    ? void 0
                    : Fr.schemas) != null
                  ? qr
                  : {},
              ),
              responses: O(
                { suffix: _e.responses },
                (Ur =
                  (Vr = (Nr = s.override) == null ? void 0 : Nr.components) ==
                  null
                    ? void 0
                    : Vr.responses) != null
                  ? Ur
                  : {},
              ),
              parameters: O(
                { suffix: _e.parameters },
                (Qr =
                  (Br = (Wr = s.override) == null ? void 0 : Wr.components) ==
                  null
                    ? void 0
                    : Br.parameters) != null
                  ? Qr
                  : {},
              ),
              requestBodies: O(
                { suffix: _e.requestBodies },
                (_r =
                  (Kr = (zr = s.override) == null ? void 0 : zr.components) ==
                  null
                    ? void 0
                    : Kr.requestBodies) != null
                  ? _r
                  : {},
              ),
            },
            query: O(
              { useQuery: !0 },
              (Hr = (Lr = s.override) == null ? void 0 : Lr.query) != null
                ? Hr
                : {},
            ),
            angular: {
              provideIn:
                (tn =
                  (en =
                    (Jr = (Yr = s.override) == null ? void 0 : Yr.angular) ==
                    null
                      ? void 0
                      : Jr.provideIn) != null
                    ? en
                    : (Zr = (Xr = s.override) == null ? void 0 : Xr.angular) ==
                      null
                    ? void 0
                    : Zr.provideInRoot) != null
                  ? tn
                  : 'root',
            },
            useDates: ((rn = s.override) == null ? void 0 : rn.useDates) || !1,
          }),
        },
      };
    return (
      y.input.target ||
        (_().error(Me.default.red('Config require an input target')),
        process.exit(1)),
      !y.output.target &&
        !y.output.schemas &&
        (_().error(
          Me.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      y
    );
  },
  di = { validate: !0, resolve: { github: so } },
  Ae = (e, t) => {
    var r;
    return A(t)
      ? (t.path ||
          (_().error(Me.default.red('Mutator need a path')), process.exit(1)),
        w(O({}, t), {
          path: (0, ht.resolve)(e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        }))
      : v(t)
      ? { path: (0, ht.resolve)(e, t), default: !0 }
      : t;
  },
  gi = (e, t) => (v(e) && !ge(e) ? oe(e, t) : e),
  oe = (e, t) => (v(e) ? (0, ht.resolve)(t, e) : e),
  co = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map((c) => {
        var [r, m] = c,
          l = m,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: a,
            requestOptions: i,
          } = l,
          p = Pe(l, [
            'transformer',
            'mutator',
            'formData',
            'formUrlEncoded',
            'requestOptions',
          ]);
        var f, d;
        return [
          r,
          w(
            O(
              O(O({}, p), n ? { transformer: oe(n, t) } : {}),
              o ? { mutator: Ae(t, o) } : {},
            ),
            {
              formData: (f = K(s) ? s : Ae(t, s)) != null ? f : !0,
              formUrlEncoded: (d = K(a) ? a : Ae(t, a)) != null ? d : !0,
              requestOptions: i != null ? i : !0,
            },
          ),
        ];
      }),
    ),
  yi = (e) =>
    e
      ? Object.values(ae).includes(e)
        ? e
        : (_().warn(Me.default.yellow(`Unknown the provided mode => ${e}`)),
          ae.SINGLE)
      : ae.SINGLE;
var er = async (e, t = process.cwd()) => {
    var r, n;
    if (st(e)) {
      let o = await (0, uo.default)(['tsconfig.json', 'jsconfig.json'], {
        cwd: t,
      });
      return o ? (await (0, tr.parse)(o)).tsconfig : void 0;
    }
    if (v(e)) {
      let o = oe(e, t);
      if ((0, fo.existsSync)(o)) {
        let s = await (0, tr.parse)(o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: i }) => i === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (A(e)) return e;
  },
  z = (e) => {
    var t, r, n;
    return e
      ? !!((n =
          (t = e == null ? void 0 : e.compilerOptions) == null
            ? void 0
            : t.allowSyntheticDefaultImports) != null
          ? n
          : (r = e == null ? void 0 : e.compilerOptions) == null
          ? void 0
          : r.esModuleInterop)
      : !0;
  };
var hi = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  bt = new Map(),
  rr = (e) => [...(e ? [] : hi)],
  Oi = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: c,
    },
    { route: m, context: l },
  ) => {
    let f = (i == null ? void 0 : i.requestOptions) !== !1,
      d = (i == null ? void 0 : i.formData) !== !1,
      u = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      y = z(l.tsconfig),
      g = fe({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: d,
        isFormUrlEncoded: u,
      }),
      h = re.includes(a);
    if (n) {
      let S = le({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: u,
          isBodyVerb: h,
          hasSignal: !0,
        }),
        R = f ? ue(i == null ? void 0 : i.requestOptions, n.hasSecondArg) : '';
      return (
        bt.set(
          t,
          (P) =>
            `export type ${$(t)}Result = NonNullable<Awaited<ReturnType<${
              P ? `ReturnType<typeof ${P}>['${t}']` : `typeof ${t}`
            }>>>`,
        ),
        `const ${t} = (
    ${W(s, 'implementation')}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
          h
            ? `
`
            : `signal?: AbortSignal
`
        }) => {${g}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${S},
      ${R});
    }
  `
      );
    }
    let x = ce({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: d,
      isFormUrlEncoded: u,
    });
    return (
      bt.set(
        t,
        () =>
          `export type ${$(t)}Result = AxiosResponse<${
            r.definition.success || 'unknown'
          }>`,
      ),
      `const ${t} = <TData = AxiosResponse<${
        r.definition.success || 'unknown'
      }>>(
    ${W(s, 'implementation')} ${
        f
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${g}
    return axios${y ? '' : '.default'}.${a}(${x});
  }
`
    );
  },
  nr = (e) => {
    let t = F(e);
    return `get${$(t)}`;
  },
  or = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
${
  t && r
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}
  ${
    n
      ? ''
      : `export const ${e} = () => {
`
  }`,
  sr = ({
    operationNames: e,
    title: t,
    noFunction: r,
    hasMutator: n,
    hasAwaitedType: o,
  }) => {
    let s = `return {${e.join(',')}}};
`,
      a = e
        .map((p) => {
          var c;
          return bt.has(p)
            ? (c = bt.get(p)) == null
              ? void 0
              : c(r || !t ? void 0 : t)
            : '';
        })
        .filter(Boolean),
      i =
        n && !o
          ? `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
          : '';
    return (
      a.length &&
        (i += a.join(`
`)),
      r ? i : s + i
    );
  },
  ir = (e, t) => {
    let r = me(e);
    return { implementation: Oi(e, t), imports: r };
  };
var go = {
  email: 'faker.internet.email()',
  zipCode: 'faker.address.zipCode()',
  city: 'faker.address.city()',
  streetName: 'faker.address.streetName()',
  country: 'faker.address.country()',
  date: 'faker.date.recent()',
  iban: 'faker.finance.iban()',
  userName: 'faker.internet.userName()',
  firstName: 'faker.name.firstName()',
  lastName: 'faker.name.lastName()',
  jobTitle: 'faker.name.jobTitle()',
  gender: 'faker.name.gender()',
  phoneNumber: 'faker.phone.phoneNumber()',
  url: 'faker.internet.url()',
};
var yo = (e, t, r) => {
  var a, i, p, c;
  let n = Object.entries(
      (i = (a = t.specs[r].components) == null ? void 0 : a.schemas) != null
        ? i
        : [],
    ).reduce((m, [l, f]) => ((m[l] = f), m), {}),
    o = Object.entries(
      (c = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? c
        : [],
    ).reduce((m, [l, f]) => {
      var d, u;
      return (
        (m[l] = C(f)
          ? f
          : (u = (d = f.content) == null ? void 0 : d['application/json']) ==
            null
          ? void 0
          : u.schema),
        m
      );
    }, {}),
    s = O(O({}, n), o);
  return w(O({}, s[e]), { specKey: r });
};
var bi = (e) => e[0] === '/' && e[e.length - 1] === '/',
  $t = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (bi(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: Ye(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  Ye = (e, t) => (t ? `faker.random.arrayElement([${e}, null])` : e),
  $e = async ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: a,
  }) => {
    if (C(e)) {
      let { name: p, specKey: c } = await Ce(
          e.$ref,
          w(O({}, s), { specKey: e.specKey || s.specKey }),
        ),
        m = w(O({}, yo(p, s, c || e.specKey || s.specKey)), {
          name: p,
          path: e.path,
          isRef: !0,
          specKey: c || e.specKey,
        }),
        l = await He({
          item: m,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: a,
        });
      return w(O({}, l), { type: m.type });
    }
    let i = await He({
      item: e,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
    return w(O({}, i), { type: e.type });
  };
var $o = T(require('cuid'));
var ho = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
var Oo = async ({
  item: e,
  items: t,
  isOneOf: r,
  mockOptions: n,
  operationId: o,
  tags: s,
  combine: a,
  context: i,
  imports: p,
}) => {
  var f;
  let c = [],
    m = [...((f = a == null ? void 0 : a.properties) != null ? f : [])];
  return {
    value: await E(
      t,
      async (d, u, y, g) => {
        var x;
        let h = await $e({
          schema: w(O({}, u), {
            name: e.name,
            path: e.path ? e.path : '#',
            specKey: e.specKey,
          }),
          combine: r ? void 0 : { properties: m },
          mockOptions: n,
          operationId: o,
          tags: s,
          context: i,
          imports: p,
        });
        return (
          (c = [...c, ...h.imports]),
          (m = [...m, ...((x = h.properties) != null ? x : [])]),
          !y && !a
            ? h.enums || r
              ? g.length === 1
                ? `faker.random.arrayElement([${h.value}])`
                : `faker.random.arrayElement([${h.value},`
              : g.length === 1
              ? h.type !== 'object'
                ? `${h.value}`
                : `{${h.value}}`
              : `{${h.value},`
            : g.length - 1 === y
            ? h.enums || r
              ? d + h.value + (a ? '' : '])')
              : d + h.value + (a ? '' : '}')
            : h.value
            ? d + h.value + ','
            : d
        );
      },
      '',
    ),
    imports: c,
    name: e.name,
    properties: m,
  };
};
var bo = require('esutils'),
  De = (e) => (bo.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var xo = async ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: a,
}) => {
  if (C(e))
    return $e({
      schema: w(O({}, e), {
        name: e.name,
        path: e.path ? `${e.path}.${e.name}` : e.name,
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
  if (e.allOf || e.oneOf || e.anyOf)
    return Oo({
      item: e,
      items: e.allOf || e.oneOf || e.anyOf,
      isOneOf: !!(e.oneOf || e.anyOf),
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
  if (e.properties) {
    let i = o ? '' : '{',
      p = [],
      c = [];
    return (
      (i += (
        await Promise.all(
          Object.entries(e.properties).map(async ([m, l]) => {
            if (o != null && o.properties.includes(m)) return;
            let f =
              (t == null ? void 0 : t.required) ||
              (Array.isArray(e.required) ? e.required : []).includes(m);
            if (ho(e.path, `\\.${m}\\.`) >= 1) return;
            let d = await $e({
              schema: w(O({}, l), {
                name: m,
                path: e.path ? `${e.path}.${m}` : `#.${m}`,
                specKey: e.specKey,
              }),
              mockOptions: t,
              operationId: r,
              tags: n,
              context: s,
              imports: p,
            });
            (p = [...p, ...d.imports]), (c = [...c, m]);
            let u = De(m);
            return !f && !d.overrided
              ? `${u}: faker.random.arrayElement([${d.value}, undefined])`
              : `${u}: ${d.value}`;
          }),
        )
      )
        .filter(Boolean)
        .join(', ')),
      (i += o ? '' : '}'),
      { value: i, imports: p, name: e.name, properties: c }
    );
  }
  if (e.additionalProperties) {
    if (K(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let i = await $e({
      schema: w(O({}, e.additionalProperties), {
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
    return w(O({}, i), {
      value: `{
        '${(0, $o.default)()}': ${i.value}
      }`,
    });
  }
  return { value: '{}', imports: [], name: e.name };
};
var He = async ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: a,
}) => {
  var f, d, u, y;
  let i = $t(
    (d = (f = r == null ? void 0 : r.operations) == null ? void 0 : f[n]) ==
      null
      ? void 0
      : d.properties,
    e,
  );
  if (i) return i;
  let p = Object.entries(
      (u = r == null ? void 0 : r.tags) != null ? u : {},
    ).reduce((g, [h, x]) => (o.includes(h) ? Ee(g, x) : g), {}),
    c = $t(p == null ? void 0 : p.properties, e);
  if (c) return c;
  let m = $t(r == null ? void 0 : r.properties, e);
  if (m) return m;
  let l = O(O({}, go), (y = r == null ? void 0 : r.format) != null ? y : {});
  if (e.format && l[e.format])
    return {
      value: Ye(l[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: Ye('faker.datatype.number()', e.nullable),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: [], imports: [], name: e.name };
      let {
        value: g,
        enums: h,
        imports: x,
        name: S,
      } = await $e({
        schema: w(O({}, e.items), {
          name: e.name,
          path: e.path ? `${e.path}.[]` : '#.[]',
          specKey: e.specKey,
        }),
        combine: s,
        mockOptions: r,
        operationId: n,
        tags: o,
        context: a,
        imports: t,
      });
      if (h) {
        if (!C(e.items)) return { value: g, imports: x, name: e.name };
        let R = t.find((M) => S.replace('[]', '') === M.name);
        return {
          value: `faker.random.arrayElements(Object.values(${
            (R == null ? void 0 : R.name) || S
          }))`,
          imports: R ? [...x, w(O({}, R), { values: !0 })] : x,
          name: e.name,
        };
      }
      return {
        value: `[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (${g}))`,
        imports: x,
        name: e.name,
      };
    }
    case 'string': {
      let g = 'faker.random.word()',
        h = [];
      if (e.enum) {
        let x = "['" + e.enum.map((S) => Ke(S)).join("','") + "']";
        e.isRef &&
          ((x = `Object.values(${e.name})`),
          (h = [{ name: e.name, values: !0 }])),
          (g = `faker.random.arrayElement(${x})`);
      }
      return {
        value: Ye(g, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: h,
      };
    }
    case 'object':
    default:
      return xo({
        item: e,
        mockOptions: r,
        operationId: n,
        tags: o,
        combine: s,
        context: a,
        imports: t,
      });
  }
};
var xt = (e, t) =>
    Object.entries(Q(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = Q(o) ? `(${o})()` : L(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  $i = (e, t) => {
    var r, n, o;
    return O(
      O(
        O(
          O(
            {
              required:
                (r = t == null ? void 0 : t.mock) == null ? void 0 : r.required,
            },
            (n = t == null ? void 0 : t.mock) != null && n.properties
              ? { properties: xt(t.mock.properties, e) }
              : {},
          ),
          (o = t == null ? void 0 : t.mock) != null && o.format
            ? { format: xt(t.mock.format, e) }
            : {},
        ),
        t != null && t.operations
          ? {
              operations: Object.entries(t.operations).reduce((s, [a, i]) => {
                var p;
                return (
                  (p = i.mock) != null &&
                    p.properties &&
                    (s[a] = { properties: xt(i.mock.properties, e) }),
                  s
                );
              }, {}),
            }
          : {},
      ),
      t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [a, i]) => {
              var p;
              return (
                (p = i.mock) != null &&
                  p.properties &&
                  (s[a] = { properties: xt(i.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {},
    );
  },
  xi = (e) => {
    let t = e.endsWith('[]');
    switch (t ? e.slice(0, -2) : e) {
      case 'number':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.datatype.number())'
          : 'faker.datatype.number().toString()';
      case 'string':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.random.word())'
          : 'faker.random.word()';
      default:
        return 'undefined';
    }
  },
  Si = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    E(
      r.types.success,
      async (a, { value: i, originalSchema: p, imports: c }) => {
        if (!i || Ge.includes(i)) {
          let f = xi(i);
          return a.definitions.push(o ? o(f, r.definition.success) : f), a;
        }
        if (!p) return a;
        let m = await N(p, s),
          l = await He({
            item: O(
              O({ name: i }, m.schema),
              r.imports.length ? { specKey: r.imports[0].specKey } : {},
            ),
            imports: c,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: s,
          });
        return (
          a.imports.push(...l.imports),
          a.definitions.push(
            o ? o(l.value, r.definition.success) : l.value.toString(),
          ),
          a
        );
      },
      { definitions: [], imports: [] },
    ),
  So = async ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let a = $i(s.specs[s.specKey], n),
      { definitions: i, imports: p } = await Si({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: a,
        transformer: o,
        context: s,
      });
    return { definition: '[' + i.join(', ') + ']', definitions: i, imports: p };
  },
  wo = (e, t) => {
    var o, s, a;
    let r =
        (a =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : a.data,
      n = Q(r) ? `(${r})()` : L(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var wi = (e) =>
    e
      .split('')
      .reduce(
        (t, r) => (r === '{' ? t + ':' : r === '}' ? t + '' : t + F(r)),
        '',
      ),
  Ri = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o) => (o ? (o.includes('{') ? `${n}/${wi(o)}` : `${n}/${o}`) : n),
        t,
      ),
  Ti = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  xe = (e, t, r, n, o) => Le(e, [...Ti, ...t], r, n, o),
  Ro = async (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: a },
  ) => {
    var u;
    let {
        definitions: i,
        definition: p,
        imports: c,
      } = await So({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: a,
      }),
      m = Ri(o, (u = s == null ? void 0 : s.mock) == null ? void 0 : u.baseUrl),
      l = wo(e, s),
      f = '';
    l
      ? (f = l)
      : i.length > 1
      ? (f = `faker.random.arrayElement(${p})`)
      : i[0] && (f = i[0]);
    let d = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          f && f !== 'undefined'
            ? `export const get${$(e)}Mock = () => (${f})

`
            : '',
        handler: `rest.${r}('${m}', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),${
            f && f !== 'undefined'
              ? `
ctx.${d}(get${$(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: c,
    };
  };
var To = T(require('lodash.omitby'));
var se = { PARAM: 'param', BODY: 'body', QUERY_PARAM: 'queryParam' };
var pr = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  Pi = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryStoreResult' },
        { name: 'UseInfiniteQueryStoreResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@sveltestack/svelte-query',
    },
  ],
  Po = (e) => [...(e ? [] : pr), ...Pi],
  ji = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'react-query',
    },
  ],
  jo = (e) => [...(e ? [] : pr), ...ji],
  Gi = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
      ],
      dependency: 'vue-query',
    },
    {
      exports: [
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'vue-query/types',
    },
    {
      exports: [{ name: 'UseQueryReturnType' }],
      dependency: 'vue-query/lib/vue/useBaseQuery',
    },
  ],
  Go = (e) => [...(e ? [] : pr), ...Gi],
  Ei = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: c,
    },
    { route: m, context: l },
  ) => {
    let f = (c == null ? void 0 : c.requestOptions) !== !1,
      d = (c == null ? void 0 : c.formData) !== !1,
      u = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      y = z(l.tsconfig),
      g = re.includes(a),
      h = fe({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: u,
      });
    if (n) {
      let S = le({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: u,
          isBodyVerb: g,
          hasSignal: !0,
        }),
        R =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? W(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : W(s, 'implementation'),
        P = f ? ue(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return n.isHook
        ? `export const use${$(t)}Hook = () => {
        const ${t} = ${n.name}<${r.definition.success || 'unknown'}>();

        return (
    ${R}
${
  g
    ? ''
    : `signal?: AbortSignal,
`
} ${
            f && n.hasSecondArg
              ? `options?: SecondParameter<typeof ${n.name}>`
              : ''
          }) => {${h}
        return ${t}(
          ${S},
          ${P});
        }
      }
    `
        : `export const ${t} = (
    ${R}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
            g
              ? `
`
              : `signal?: AbortSignal
`
          }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${S},
      ${P});
    }
  `;
    }
    let x = ce({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: d,
      isFormUrlEncoded: u,
    });
    return `export const ${t} = (
    ${W(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${y ? '' : '.default'}.${a}(${x});
  }
`;
  },
  ar = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  Mi = ['getNextPageParam', 'getPreviousPageParam'],
  Ii = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = A(t)
      ? ` ${
          (o = L(
            (0, To.default)(
              t,
              (s, a) => !!(r !== ar.INFINITE && Mi.includes(a)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !A(t) || !t.hasOwnProperty('enabled')
            ? `enabled: !!(${e.map(({ name: s }) => s).join(' && ')}),`
            : ''
        }${n} ...queryOptions}`
      : t
      ? `{${n} ...queryOptions}`
      : 'queryOptions';
  },
  Eo = ({
    operationName: e,
    definitions: t,
    mutator: r,
    isRequestOptions: n,
    type: o,
  }) => {
    let s = `${$(e)}QueryResult`,
      a = `${$(e)}QueryError`,
      i = r == null ? void 0 : r.isHook,
      p = o
        ? `Use${$(o)}Options<${s}, ${a}, ${s}>`
        : `UseMutationOptions<Awaited<ReturnType<${
            i ? `ReturnType<typeof use${$(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    return n
      ? `options?: { ${o ? 'query' : 'mutation'}?:${p}, ${
          r
            ? r != null && r.hasSecondArg
              ? `request?: SecondParameter<typeof ${r.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        }}
`
      : `${o ? 'queryOptions' : 'mutationOptions'}?: ${p}`;
  },
  Ci = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case U.SVELTE_QUERY:
        return `Use${$(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${$(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case U.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${$(
          t,
        )}Result<TData, TError>>`;
      case U.REACT_QUERY:
      default:
        return ` Use${$(t)}Result<TData, TError>`;
    }
  },
  vi = ({
    queryOption: { name: e, queryParam: t, options: r, type: n },
    operationName: o,
    queryProps: s,
    queryKeyFnName: a,
    properties: i,
    params: p,
    props: c,
    mutator: m,
    isRequestOptions: l,
    response: f,
    outputClient: d,
  }) => {
    let u = t
        ? c
            .map(({ name: R }) =>
              R === 'params' ? `{ ${t}: pageParam, ...params }` : R,
            )
            .join(',')
        : i,
      y = Ci({
        outputClient: d,
        type: n,
        isMutatorHook: m == null ? void 0 : m.isHook,
        operationName: o,
      }),
      g = `AxiosError<${f.definition.errors || 'unknown'}>`;
    m &&
      (g = m.hasErrorType
        ? `${m.default ? $(o) : ''}ErrorType<${
            f.definition.errors || 'unknown'
          }>`
        : f.definition.errors || 'unknown');
    let h =
        m != null && m.isHook
          ? `ReturnType<typeof use${$(o)}Hook>`
          : `typeof ${o}`,
      x = `${$(e)}QueryResult`,
      S = `${$(e)}QueryError`;
    return `
export type ${x} = Awaited<ReturnType<${h}>>
export type ${S} = ${g}

export const ${j(`use-${e}`)} = (
    ${s} 
    ${Eo({
      operationName: o,
      definitions: '',
      mutator: m,
      isRequestOptions: l,
      type: n,
    })}): UseQueryResult<${x}, ${S}> & { queryKey: QueryKey } => {

  ${
    l
      ? `const {query: queryOptions${
          m
            ? m.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  const queryKey = queryOptions?.queryKey ?? ${a}(${i});

  ${m != null && m.isHook ? `const ${o} =  use${$(o)}Hook()` : ''}

  const queryFn: QueryFunction<${x}> = (${
      t && c.some(({ type: R }) => R === 'queryParam')
        ? '{ signal, pageParam }'
        : '{ signal }'
    }) => ${o}(${u}${u ? ', ' : ''}${
      l
        ? m
          ? m.hasSecondArg
            ? 'requestOptions, signal'
            : 'signal'
          : '{ signal, ...axiosOptions }'
        : ''
    });

  const query = ${j(`use-${n}`)}<${x}, ${S}, ${x}>(queryKey, queryFn, ${Ii({
      params: p,
      options: r,
      type: n,
    })})

  return {
    queryKey,
    ...query
  }
}
`;
  },
  Ai = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
      operationId: c,
    },
    { route: m, override: { operations: l = {} }, context: f },
    d,
  ) => {
    var P;
    let u = a == null ? void 0 : a.query,
      y = (a == null ? void 0 : a.requestOptions) !== !1,
      g = (P = l[c]) == null ? void 0 : P.query;
    if (
      o === Z.GET ||
      (g == null ? void 0 : g.useInfinite) ||
      (g == null ? void 0 : g.useQuery)
    ) {
      let M = n
          .map(({ name: J, type: X }) => (X === se.BODY ? r.implementation : J))
          .join(','),
        G = [
          ...(u != null && u.useInfinite
            ? [
                {
                  name: j(`${t}-infinite`),
                  options: u == null ? void 0 : u.options,
                  type: ar.INFINITE,
                  queryParam: u == null ? void 0 : u.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(u != null && u.useQuery) && !(u != null && u.useInfinite)) ||
          (u == null ? void 0 : u.useQuery)
            ? [
                {
                  name: t,
                  options: u == null ? void 0 : u.options,
                  type: ar.QUERY,
                },
              ]
            : []),
        ],
        k = j(`get-${t}-queryKey`),
        Y = W(n, 'implementation');
      return `export const ${k} = (${Y}) => [\`${m}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${G.reduce(
      (J, X) =>
        J +
        vi({
          queryOption: X,
          operationName: t,
          queryProps: Y,
          queryKeyFnName: k,
          properties: M,
          params: s,
          props: n,
          mutator: i,
          isRequestOptions: y,
          response: p,
          outputClient: d,
        }),
      '',
    )}
`;
    }
    let h = n
        .map(({ definition: M, type: G }) =>
          G === se.BODY
            ? i != null && i.bodyTypeName
              ? `data: ${i.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : M,
        )
        .join(';'),
      x = n
        .map(({ name: M, type: G }) => (G === se.BODY ? 'data' : M))
        .join(','),
      S = `AxiosError<${p.definition.errors || 'unknown'}>`;
    i &&
      (S = i.hasErrorType
        ? `${i.default ? $(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let R =
      i != null && i.isHook
        ? `ReturnType<typeof use${$(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${$(t)}MutationResult = NonNullable<Awaited<ReturnType<${R}>>>
    ${
      r.definition
        ? `export type ${$(t)}MutationBody = ${
            i != null && i.bodyTypeName
              ? `${i.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${$(t)}MutationError = ${S}

    export const ${j(`use-${t}`)} = <TError = ${S},
    ${h ? '' : 'TVariables = void,'}
    TContext = unknown>(${Eo({
      operationName: t,
      definitions: h,
      mutator: i,
      isRequestOptions: y,
    })}) => {
      ${
        y
          ? `const {mutation: mutationOptions${
              i
                ? i != null && i.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {}`
          : ''
      }

      ${i != null && i.isHook ? `const ${t} =  use${$(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${R}>>, ${
      h ? `{${h}}` : 'TVariables'
    }> = (${x ? 'props' : ''}) => {
          ${x ? `const {${x}} = props ?? {}` : ''};

          return  ${t}(${x}${x ? ',' : ''}${
      y
        ? i
          ? i != null && i.hasSecondArg
            ? 'requestOptions'
            : ''
          : 'axiosOptions'
        : ''
    })
        }

      return useMutation<Awaited<ReturnType<typeof ${t}>>, TError, ${
      h ? `{${h}}` : 'TVariables'
    }, TContext>(mutationFn, mutationOptions)
    }
    `;
  },
  St = () => '',
  wt = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
${
  e && t
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}`,
  Rt = () => '',
  Tt = (e, t, r) => {
    let n = me(e),
      o = Ei(e, t),
      s = Ai(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
var Di = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  ki = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  Mo = (e) => [...(e ? [] : Di), ...ki],
  Fi = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: c,
    },
    { route: m, context: l },
  ) => {
    let f = (c == null ? void 0 : c.requestOptions) !== !1,
      d = (c == null ? void 0 : c.formData) !== !1,
      u = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      y = re.includes(a),
      g = z(l.tsconfig),
      h = fe({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: u,
      });
    if (n) {
      let S = le({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: u,
          hasSignal: !1,
          isBodyVerb: y,
        }),
        R = f ? ue(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${W(s, 'implementation')}
 ${
   f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>` : ''
 }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${S},
      ${R});
    }
  `;
    }
    let x = ce({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: d,
      isFormUrlEncoded: u,
    });
    return `export const ${t} = (
    ${W(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${g ? '' : '.default'}.${a}(${x});
  }
`;
  },
  qi = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
    let n = `SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & {swrKey: Key}`;
    return r
      ? `options?: { swr?:${n}, ${
          t
            ? t != null && t.hasSecondArg
              ? `request?: SecondParameter<typeof ${t.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        } }
`
      : `swrOptions?: ${n}`;
  },
  Ni = ({
    operationName: e,
    swrProps: t,
    swrKeyFnName: r,
    properties: n,
    params: o,
    mutator: s,
    isRequestOptions: a,
    response: i,
  }) => {
    let p = n,
      c = o.length
        ? `const isEnable = !!(${o.map(({ name: l }) => l).join(' && ')})
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? ${r}(${n}) : null);`
        : `const swrKey = swrOptions?.swrKey ?? (() => ${r}(${n}))`,
      m = `AxiosError<${i.definition.errors || 'unknown'}>`;
    return (
      s &&
        (m = s.hasErrorType
          ? `ErrorType<${i.definition.errors || 'unknown'}>`
          : i.definition.errors || 'unknown'),
      `
export type ${$(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${$(e)}QueryError = ${m}

export const ${j(`use-${e}`)} = <TError = ${m}>(
 ${t} ${qi({ operationName: e, mutator: s, isRequestOptions: a })}
  ) => {

  ${
    a
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${c}
  const swrFn = () => ${e}(${p}${p ? ', ' : ''}${
        a
          ? s
            ? s != null && s.hasSecondArg
              ? 'requestOptions'
              : ''
            : 'axiosOptions'
          : ''
      });

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
`
    );
  },
  Vi = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
    },
    { route: c },
  ) => {
    let m = (a == null ? void 0 : a.requestOptions) !== !1;
    if (o !== Z.GET) return '';
    let l = n
        .map(({ name: u, type: y }) => (y === se.BODY ? r.implementation : u))
        .join(','),
      f = j(`get-${t}-key`),
      d = W(n, 'implementation');
    return `export const ${f} = (${d}) => [\`${c}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${Ni({
      operationName: t,
      swrProps: d,
      swrKeyFnName: f,
      properties: l,
      params: s,
      props: n,
      mutator: i,
      isRequestOptions: m,
      response: p,
    })}
`;
  },
  Io = () => '',
  Co = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
  ${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
  ${
    e && t
      ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
      : ''
  }`,
  vo = () => '',
  Ao = (e, t) => {
    let r = me(e),
      n = Fi(e, t),
      o = Vi(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
var Je = U.AXIOS,
  Do = {
    axios: { client: ir, header: or, dependencies: rr, footer: sr, title: nr },
    'axios-functions': {
      client: (e, t) => {
        let { implementation: r, imports: n } = ir(e, t);
        return { implementation: 'export ' + r, imports: n };
      },
      header: (e) => or(w(O({}, e), { noFunction: !0 })),
      dependencies: rr,
      footer: (e) => sr(w(O({}, e), { noFunction: !0 })),
      title: nr,
    },
    angular: {
      client: to,
      header: Zn,
      dependencies: Jn,
      footer: eo,
      title: Xn,
    },
    'react-query': {
      client: Tt,
      header: wt,
      dependencies: jo,
      footer: Rt,
      title: St,
    },
    'svelte-query': {
      client: Tt,
      header: wt,
      dependencies: Po,
      footer: Rt,
      title: St,
    },
    'vue-query': {
      client: Tt,
      header: wt,
      dependencies: Go,
      footer: Rt,
      title: St,
    },
    swr: { client: Ao, header: Co, dependencies: Mo, footer: vo, title: Io },
  },
  Xe = (e) => {
    let t = Q(e) ? e(Do) : Do[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  Se = (e = Je, t, r, n, o, s, a) => {
    let { dependencies: i } = Xe(e);
    return Le(t, [...i(a), ...r], n, o, s);
  },
  Pt = ({
    outputClient: e = Je,
    isRequestOptions: t,
    title: r,
    customTitleFunc: n,
    isGlobalMutator: o,
    isMutator: s,
    provideInRoot: a,
    provideIn: i,
    hasAwaitedType: p,
  }) => {
    let c = ko(e, r, n),
      { header: m } = Xe(e);
    return {
      implementation: m({
        title: c.implementation,
        isRequestOptions: t,
        isGlobalMutator: o,
        isMutator: s,
        provideInRoot: a,
        provideIn: i,
        hasAwaitedType: p,
      }),
      implementationMSW: `export const ${c.implementationMSW} = () => [
`,
    };
  },
  jt = ({
    outputClient: e = Je,
    operationNames: t,
    title: r,
    customTitleFunc: n,
    hasMutator: o,
    hasAwaitedType: s,
  }) => {
    let a = ko(e, r, n),
      { footer: i } = Xe(e),
      p;
    try {
      Q(e)
        ? ((p = i(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (p = i({
            operationNames: t,
            title: a.implementation,
            hasMutator: o,
            hasAwaitedType: s,
          }));
    } catch {
      p = i({
        operationNames: t,
        title: a.implementation,
        hasMutator: o,
        hasAwaitedType: s,
      });
    }
    return {
      implementation: p,
      implementationMSW: `]
`,
    };
  },
  ko = (e = Je, t, r) => {
    let { title: n } = Xe(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${$(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${$(t)}MSW` };
  },
  Ui = async (e, t) =>
    t.mock
      ? Q(t.mock)
        ? t.mock(e, t)
        : Ro(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  Fo = (e = Je, t, r) =>
    E(
      t,
      async (n, o) => {
        let { client: s } = Xe(e),
          a = s(o, r, e),
          i = await Ui(o, r);
        return (
          (n[o.operationId] = {
            implementation: o.doc + a.implementation,
            imports: a.imports,
            implementationMSW: i.implementation,
            importsMSW: i.imports,
            tags: o.tags,
            mutator: o.mutator,
            formData: o.formData,
            formUrlEncoded: o.formUrlEncoded,
            operationName: o.operationName,
          }),
          n
        );
      },
      {},
    );
var Wi = '\\*/',
  mr = '*\\/',
  cr = new RegExp(Wi, 'g');
function B({ description: e, deprecated: t, summary: r }, n = !1) {
  var c;
  let o = (
      Array.isArray(e)
        ? e.filter((m) => !m.includes('eslint-disable'))
        : [e || '']
    ).map((m) => m.replace(cr, mr)),
    s = [e, t, r].reduce((m, l) => (l ? m + 1 : m), 0);
  if (!s) return '';
  let a = s === 1 && n,
    i = Array.isArray(e)
      ? (c = e.find((m) => m.includes('eslint-disable'))) == null
        ? void 0
        : c.replace(cr, mr)
      : void 0,
    p = `${
      i
        ? `/* ${i} */
`
        : ''
    }/**`;
  return (
    e &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(cr, mr)}`)),
    (p += a
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
var Bo = T(require('lodash.uniqby'));
var Ze = async (e, t, r, n) => {
  let { schema: o, imports: s } = await N(t, r),
    a = C(t) ? s[0].name : e,
    i = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${i} = new URLSearchParams();
`
      : `const ${i} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let c = await E(
      Object.entries(o.properties),
      async (m, [l, f]) => {
        var y;
        let { schema: d } = await N(f, r),
          u = '';
        return (
          d.type === 'object' || d.type === 'array'
            ? (u = `${i}.append('${l}', JSON.stringify(${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }))
`)
            : d.type === 'number' ||
              d.type === 'integer' ||
              d.type === 'boolean'
            ? (u = `${i}.append('${l}', ${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.toString())
`)
            : (u = `${i}.append('${l}', ${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              })
`),
          (y = o.required) != null && y.includes(l)
            ? m + u
            : m +
              `if(${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              } !== undefined) {
 ${u} }
`
        );
      },
      '',
    );
    return `${p}${c}`;
  }
  return o.type === 'array'
    ? `${p}${i}.append('data', JSON.stringify(${j(a)}))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${i}.append('data', ${j(a)}.toString())
`
    : `${p}${i}.append('data', ${j(a)})
`;
};
var qo = require('esutils');
var ke = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = Gt(e, t);
    return (
      (n += `

`),
      (n += `// eslint-disable-next-line @typescript-eslint/no-redeclare
`),
      (n += `export const ${r} = {
${o}} as const;
`),
      n
    );
  },
  Gt = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = t === 'number',
        a =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Bi(o ? n.toString() : n.slice(1, -1))
            : F(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${qo.keyword.isIdentifierNameES5(a) ? a : `'${a}'`}: ${n},
`
      );
    }, ''),
  Bi = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
var No = async ({ schema: e, name: t, context: r }) => {
  if (e.items) {
    let n = await ie({ schema: e.items, propName: t + 'Item', context: r });
    return {
      value: `${n.value}[]`,
      imports: n.imports,
      schemas: n.schemas,
      isEnum: !1,
      type: 'array',
      isRef: !1,
    };
  } else throw new Error('All arrays must have an `items` key define');
};
var Mt = T(require('lodash.omit'));
var Qi = { allOf: '&', oneOf: '|', anyOf: '|' },
  Et = async ({ name: e, items: t, separator: r, context: n, nullable: o }) => {
    let s = await E(
        t,
        async (p, c) => {
          let m = e ? e + $(r) : void 0;
          m && p.schemas.length && (m = m + $(ze(p.schemas.length + 1)));
          let l = await ie({
            schema: c,
            propName: m,
            combined: !0,
            context: n,
          });
          return (
            p.values.push(l.value),
            p.imports.push(...l.imports),
            p.schemas.push(...l.schemas),
            p.isEnum.push(l.isEnum),
            p.types.push(l.type),
            p.isRef.push(l.isRef),
            p
          );
        },
        {
          values: [],
          imports: [],
          schemas: [],
          isEnum: [],
          isRef: [],
          types: [],
        },
      ),
      a = s.isEnum.every((p) => p),
      i = s.values.join(` ${a ? '|' : Qi[r]} `);
    if (a && e && t.length > 1) {
      let p = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${$(e)} = ${zi(s, e)}`;
      return {
        value: `typeof ${$(e)}[keyof typeof ${$(e)}] ${o};` + p,
        imports: s.imports.map((c) => w(O({}, c), { values: !0 })),
        schemas: s.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: i + o,
      imports: s.imports,
      schemas: s.schemas,
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  },
  zi = ({ values: e, isRef: t, types: r }, n) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${Gt(e[0], r[0])}} as const`
      : `{${e
          .map((s, a) => (t[a] ? `...${s},` : Gt(s, r[a])))
          .join('')}} as const`;
var Vo = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (C(e)) {
    let { name: a, specKey: i } = await Ce(e.$ref, r);
    return {
      value: a + n,
      imports: [{ name: a, specKey: i }],
      schemas: [],
      isEnum: !1,
      type: 'object',
      isRef: !0,
    };
  }
  if (e.allOf)
    return Et({
      items: e.properties ? [...e.allOf, (0, Mt.default)(e, 'allOf')] : e.allOf,
      name: t,
      separator: 'allOf',
      context: r,
      nullable: n,
    });
  if (e.oneOf)
    return Et({
      items: e.properties ? [...e.oneOf, (0, Mt.default)(e, 'oneOf')] : e.oneOf,
      name: t,
      separator: 'oneOf',
      context: r,
      nullable: n,
    });
  if (e.anyOf)
    return Et({
      items: e.properties ? [...e.anyOf, (0, Mt.default)(e, 'anyOf')] : e.anyOf,
      name: t,
      separator: 'anyOf',
      context: r,
      nullable: n,
    });
  if (e.properties && Object.entries(e.properties).length > 0)
    return E(
      Object.entries(e.properties),
      async (a, [i, p], c, m) => {
        var h, x, S;
        let l = (Array.isArray(e.required) ? e.required : []).includes(i),
          f = t ? $(t) + $(i) : void 0;
        !!(
          (S =
            (x = (h = r.specs[r.target]) == null ? void 0 : h.components) ==
            null
              ? void 0
              : x.schemas) != null && S[f || '']
        ) && (f = f + 'Property');
        let u = await ie({ schema: p, propName: f, context: r }),
          y = e.readOnly || p.readOnly;
        c || (a.value += '{');
        let g = B(p, !0);
        if (
          (a.imports.push(...u.imports),
          (a.value += `
  ${g ? `${g}  ` : ''}${y ? 'readonly ' : ''}${De(i)}${l ? '' : '?'}: ${
            u.value
          };`),
          a.schemas.push(...u.schemas),
          m.length - 1 === c)
        ) {
          if (e.additionalProperties)
            if (K(e.additionalProperties))
              a.value += `
  [key: string]: any;
 }`;
            else {
              let R = await ne({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              a.value += `
  [key: string]: ${R.value};
}`;
            }
          else
            a.value += `
}`;
          a.value += n;
        }
        return a;
      },
      {
        imports: [],
        schemas: [],
        value: '',
        isEnum: !1,
        type: 'object',
        isRef: !1,
        schema: {},
      },
    );
  if (e.additionalProperties) {
    if (K(e.additionalProperties))
      return {
        value: '{ [key: string]: any }' + n,
        imports: [],
        schemas: [],
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    let a = await ne({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${a.value}}` + n,
      imports: (o = a.imports) != null ? o : [],
      schemas: (s = a.schemas) != null ? s : [],
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  }
  return {
    value: e.type === 'object' ? '{ [key: string]: any }' : 'unknown' + n,
    imports: [],
    schemas: [],
    isEnum: !1,
    type: 'object',
    isRef: !1,
  };
};
var It = async ({ item: e, name: t, context: r }) => {
  let n = e.nullable ? ' | null' : '';
  switch ((!e.type && e.items && (e.type = 'array'), e.type)) {
    case 'number':
    case 'integer': {
      let a = 'number',
        i = !1;
      return (
        e.enum && ((a = e.enum.join(' | ')), (i = !0)),
        {
          value: a + n,
          isEnum: i,
          type: 'number',
          schemas: [],
          imports: [],
          isRef: !1,
        }
      );
    }
    case 'boolean':
      return {
        value: 'boolean' + n,
        type: 'boolean',
        isEnum: !1,
        schemas: [],
        imports: [],
        isRef: !1,
      };
    case 'array': {
      let o = await No({ schema: e, name: t, context: r }),
        { value: a } = o,
        i = Pe(o, ['value']);
      return O({ value: a + n }, i);
    }
    case 'string': {
      let a = 'string',
        i = !1;
      return (
        e.enum &&
          ((a = `'${e.enum
            .map((p) => (v(p) ? Ke(p) : p))
            .filter(Boolean)
            .join("' | '")}'`),
          (i = !0)),
        e.format === 'binary' && (a = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (a = 'Date'),
        {
          value: a + n,
          isEnum: i,
          type: 'string',
          imports: [],
          schemas: [],
          isRef: !1,
        }
      );
    }
    case 'object':
    default: {
      let s = await Vo({ item: e, name: t, context: r, nullable: n }),
        { value: a } = s,
        i = Pe(s, ['value']);
      return O({ value: a }, i);
    }
  }
};
var ne = async ({ schema: e, name: t, context: r }) => {
  if (C(e)) {
    let { schema: o, imports: s } = await N(e, r),
      { name: a, specKey: i, schemaName: p } = s[0],
      c = i || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: a,
      imports: [{ name: a, specKey: c, schemaName: p }],
      type: (o == null ? void 0 : o.type) || 'object',
      schemas: [],
      isEnum: !!(o != null && o.enum),
      originalSchema: o,
      isRef: !0,
    };
  }
  let n = await It({ item: e, name: t, context: r });
  return w(O({}, n), { originalSchema: e, isRef: !1 });
};
var ie = async ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var a;
  let o = await ne({ schema: e, name: t, context: n }),
    s = B((a = o.originalSchema) != null ? a : {});
  if (
    t &&
    !o.isEnum &&
    (o == null ? void 0 : o.type) === 'object' &&
    new RegExp(/{|&|\|/).test(o.value)
  )
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [
        ...o.schemas,
        {
          name: t,
          model: `${s}export type ${t} = ${o.value};
`,
          imports: o.imports,
        },
      ],
      isEnum: !1,
      type: 'object',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  if (t && o.isEnum && !r && !o.isRef) {
    let i = ke(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + i, imports: o.imports }],
      isEnum: !1,
      type: 'enum',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  }
  return o;
};
var Uo = ['multipart/form-data'],
  Wo = ['application/x-www-form-urlencoded'],
  Ki = async ({ mediaType: e, propName: t, context: r }) =>
    e.schema ? await ie({ schema: e.schema, propName: t, context: r }) : void 0,
  Fe = async (e, t, r, n = 'unknown') => {
    let o = await Promise.all(
      e
        .filter(([s, a]) => Boolean(a))
        .map(async ([s, a]) => {
          var i, p;
          if (C(a)) {
            let {
                schema: c,
                imports: [{ name: m, specKey: l, schemaName: f }],
              } = await N(a, r),
              [d, u] =
                (p = Object.entries((i = c.content) != null ? i : {})[0]) !=
                null
                  ? p
                  : [],
              y = Uo.includes(d),
              g = Wo.includes(d);
            if ((!y && !g) || !(u != null && u.schema))
              return [
                {
                  value: m,
                  imports: [{ name: m, specKey: l, schemaName: f }],
                  schemas: [],
                  type: 'unknown',
                  isEnum: !1,
                  isRef: !0,
                  originalSchema: u == null ? void 0 : u.schema,
                  key: s,
                  contentType: d,
                },
              ];
            let h = y
                ? await Ze(
                    m,
                    u == null ? void 0 : u.schema,
                    w(O({}, r), { specKey: l || r.specKey }),
                  )
                : void 0,
              x = g
                ? await Ze(
                    m,
                    u == null ? void 0 : u.schema,
                    w(O({}, r), { specKey: l || r.specKey }),
                    !0,
                  )
                : void 0;
            return [
              {
                value: m,
                imports: [{ name: m, specKey: l, schemaName: f }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                formData: h,
                formUrlEncoded: x,
                isRef: !0,
                originalSchema: u == null ? void 0 : u.schema,
                key: s,
                contentType: d,
              },
            ];
          }
          return a.content
            ? (
                await Promise.all(
                  Object.entries(a.content).map(async ([m, l], f, d) => {
                    let u = s ? $(t) + $(s) : void 0;
                    u && d.length > 1 && (u = u + $(ze(f + 1)));
                    let y = await Ki({ mediaType: l, propName: u, context: r });
                    if (!y) return;
                    let g = Uo.includes(m),
                      h = Wo.includes(m);
                    if ((!g && !h) || !u)
                      return w(O({}, y), { contentType: m });
                    let x = g ? await Ze(u, l.schema, r) : void 0,
                      S = h ? await Ze(u, l.schema, r, !0) : void 0;
                    return w(O({}, y), {
                      formData: x,
                      formUrlEncoded: S,
                      contentType: m,
                    });
                  }),
                )
              )
                .filter((m) => m)
                .map((m) => w(O({}, m), { key: s }))
            : [
                {
                  value: n,
                  imports: [],
                  schemas: [],
                  type: n,
                  isEnum: !1,
                  key: s,
                  isRef: !1,
                  contentType: 'application/json',
                },
              ];
        }),
    );
    return (0, Bo.default)(
      o.flatMap((s) => s),
      'value',
    );
  };
var Qo = async (e, t, r) => {
  let n = await Fe([[r.override.components.requestBodies.suffix, e]], t, r),
    o = n.flatMap(({ imports: l }) => l),
    s = n.flatMap(({ schemas: l }) => l),
    a = n.map(({ value: l }) => l).join(' | '),
    i =
      Ge.includes(a.toLowerCase()) || n.length > 1
        ? j(t) + r.override.components.requestBodies.suffix
        : j(a),
    p = n.length === 1 ? n[0].formData : void 0,
    c = n.length === 1 ? n[0].formUrlEncoded : void 0,
    m = n.length === 1 ? n[0].contentType : void 0;
  return {
    definition: a,
    implementation: i,
    imports: o,
    schemas: s,
    formData: p || '',
    formUrlEncoded: c || '',
    contentType: m || '',
  };
};
var zo = (e, t, r) =>
  e.operationId
    ? e.operationId
    : $(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              F(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
var Ko = async ({ parameters: e = [], context: t }) =>
  E(
    e,
    async (r, n) => {
      if (C(n)) {
        let { schema: o, imports: s } = await N(n, t);
        (o.in === 'path' || o.in === 'query') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [] },
  );
var _i = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  _o = ({ route: e, pathParams: t = [], operationId: r, context: n }) => {
    let o = _i(e);
    return Promise.all(
      o.map(async (s) => {
        let a = t.find(
          ({ parameter: u }) =>
            F(j(u.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!a)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: i, required: p = !1, schema: c } = a.parameter,
          m = F(j(i), { es5keyword: !0 });
        if (!c)
          return {
            name: m,
            definition: `${m}${p ? '' : '?'}: unknown`,
            implementation: `${m}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let l = await ne({
            schema: c,
            context: O(
              O({}, n),
              a.imports.length ? { specKey: a.imports[0].specKey } : {},
            ),
          }),
          f = `${m}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
          d = `${m}${!p && !l.originalSchema.default ? '?' : ''}${
            l.originalSchema.default
              ? `= ${L(l.originalSchema.default)}`
              : `: ${l.value}`
          }`;
        return {
          name: m,
          definition: f,
          implementation: d,
          default: l.originalSchema.default,
          required: p,
          imports: l.imports,
        };
      }),
    );
  };
var Lo = (e) =>
  e.sort((t, r) =>
    t.default
      ? 1
      : r.default
      ? -1
      : t.required && r.required
      ? 0
      : t.required
      ? -1
      : r.required
      ? 1
      : 0,
  );
var Ho = ({ body: e, queryParams: t, params: r }) => {
  let n = {
      name: e.implementation,
      definition: `${e.implementation}: ${e.definition}`,
      implementation: `${e.implementation}: ${e.definition}`,
      default: !1,
      required: !0,
      type: se.BODY,
    },
    o = {
      name: 'params',
      definition: `params?: ${t == null ? void 0 : t.name}`,
      implementation: `params?: ${t == null ? void 0 : t.name}`,
      default: !1,
      required: !1,
      type: se.QUERY_PARAM,
    },
    s = [
      ...r.map((i) => w(O({}, i), { type: se.PARAM })),
      ...(e.definition ? [n] : []),
      ...(t ? [o] : []),
    ];
  return Lo(s);
};
var Li = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: a, schema: i, content: p } = n,
          {
            value: c,
            imports: m,
            isEnum: l,
            type: f,
            schemas: d,
            isRef: u,
          } = await ne({
            schema: i || p['application/json'].schema,
            context: r,
            name: $(t) + $(s),
          }),
          y = De(s);
        if (o.length)
          return {
            definition: `${y}${!a || i.default ? '?' : ''}: ${o[0].name}`,
            imports: o,
            schemas: [],
          };
        if (l && !u) {
          let h = $(t) + $(s),
            x = ke(c, f, h);
          return {
            definition: `${y}${!a || i.default ? '?' : ''}: ${h}`,
            imports: [{ name: h }],
            schemas: [...d, { name: h, model: x, imports: m }],
          };
        }
        return {
          definition: `${y}${!a || i.default ? '?' : ''}: ${c}`,
          imports: m,
          schemas: d,
        };
      }),
    ),
  Yo = async ({ queryParams: e = [], operationName: t, context: r }) => {
    if (!e.length) return;
    let n = await Li(e, t, r),
      o = n.flatMap(({ imports: c }) => c),
      s = n.flatMap(({ schemas: c }) => c),
      a = `${$(t)}Params`,
      i = n.map(({ definition: c }) => c).join('; ');
    return {
      schema: {
        name: a,
        model: `export type ${a} = { ${i} };
`,
        imports: o,
      },
      deps: s,
    };
  };
var Jo = async (e, t, r) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let n = await Fe(Object.entries(e), t, r, 'void'),
    o = n.reduce(
      (m, l) => (
        l.key.startsWith('2') ? m.success.push(l) : m.errors.push(l), m
      ),
      { success: [], errors: [] },
    ),
    s = n.flatMap(({ imports: m }) => m),
    a = n.flatMap(({ schemas: m }) => m),
    i = [...new Set(n.map(({ contentType: m }) => m))],
    p = o.success
      .map(({ value: m, formData: l }) => (l ? 'Blob' : m))
      .join(' | '),
    c = o.errors.map(({ value: m }) => m).join(' | ');
  return {
    imports: s,
    definition: { success: p || 'unknown', errors: c || 'unknown' },
    isBlob: p === 'Blob',
    types: o,
    contentTypes: i,
    schemas: a,
  };
};
var Hi = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var Ue;
    let {
        responses: a,
        requestBody: i,
        parameters: p,
        tags: c = [],
        deprecated: m,
        description: l,
        summary: f,
      } = r,
      d = zo(r, n, e),
      u = t.override.operations[r.operationId],
      y = Object.entries(t.override.tags).reduce(
        (We, [rt, nt]) => (c.includes(rt) ? Ee(We, nt) : We),
        {},
      ),
      g = O(O(O({}, t.override), y), u),
      h =
        (u == null ? void 0 : u.operationName) ||
        ((Ue = t.override) == null ? void 0 : Ue.operationName),
      x = h ? h(r, n, e) : j(d),
      S = F(x, { es5keyword: !0 }),
      R = await Jo(a, S, s),
      P = await Qo(i, S, s),
      M = await Ko({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      G = await Yo({ queryParams: M.query, operationName: S, context: s }),
      k = await _o({
        route: n,
        pathParams: M.path,
        operationId: d,
        context: s,
      }),
      Y = Ho({
        body: P,
        queryParams: G == null ? void 0 : G.schema,
        params: k,
      }),
      J = await dt({
        output: t.target,
        name: S,
        mutator: g == null ? void 0 : g.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      X =
        v(g == null ? void 0 : g.formData) || A(g == null ? void 0 : g.formData)
          ? await dt({
              output: t.target,
              name: S,
              mutator: g.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ie =
        v(g == null ? void 0 : g.formUrlEncoded) ||
        A(g == null ? void 0 : g.formUrlEncoded)
          ? await dt({
              output: t.target,
              name: S,
              mutator: g.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      tt = B({ description: l, deprecated: m, summary: f }),
      Ne = {
        verb: e,
        tags: c,
        summary: r.summary,
        operationId: d,
        operationName: S,
        response: R,
        body: P,
        queryParams: G,
        params: k,
        props: Y,
        mutator: J,
        formData: X,
        formUrlEncoded: Ie,
        override: g,
        doc: tt,
      },
      Ve = await it(g == null ? void 0 : g.transformer, s.workspace);
    return Ve ? Ve(Ne) : Ne;
  },
  Xo = ({ verbs: e, output: t, route: r, context: n }) =>
    E(
      Object.entries(e),
      async (o, [s, a]) => {
        if (ln(s)) {
          let i = await Hi({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: a,
            context: n,
          });
          o.push(i);
        }
        return o;
      },
      [],
    );
var Zo = async ({ output: e, context: t }) =>
  E(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = En(n),
        a = o,
        i = t;
      if (C(o)) {
        let { schema: l, imports: f } = await N(o, t);
        (a = l), (i = O(O({}, t), f.length ? { specKey: f[0].specKey } : {}));
      }
      let p = await Xo({ verbs: a, output: e, route: s, context: i }),
        c = p.reduce(
          (l, { queryParams: f, body: d, response: u }) => (
            f && l.push(f.schema, ...f.deps),
            l.push(...d.schemas),
            l.push(...u.schemas),
            l
          ),
          [],
        ),
        m = await Fo(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: i,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...c), (r.operations = O(O({}, r.operations), m)), r
      );
    },
    { operations: {}, schemas: [] },
  );
var Yi = require('lodash.isempty'),
  lr = (e = {}, t, r) =>
    Yi(e)
      ? Promise.resolve([])
      : E(
          Object.entries(e),
          async (n, [o, s]) => {
            let a = await Fe([[r, s]], o, t, 'void'),
              i = a.flatMap(({ imports: d }) => d),
              p = a.flatMap(({ schemas: d }) => d),
              c = a.map(({ value: d }) => d).join(' | '),
              m = `${$(o)}${r}`,
              f = `${B(s)}export type ${m} = ${c || 'unknown'};
`;
            return (
              n.push(...p),
              m !== c && n.push({ name: m, model: f, imports: i }),
              n
            );
          },
          [],
        );
var es = (e = {}, t, r) =>
  E(
    Object.entries(e),
    async (n, [o, s]) => {
      let a = `${$(o)}${r}`,
        { schema: i, imports: p } = await N(s, t);
      if (i.in !== 'query') return n;
      if (!i.schema || p.length)
        return (
          n.push({
            name: a,
            imports: p.length
              ? [
                  {
                    name: p[0].name,
                    specKey: p[0].specKey,
                    schemaName: p[0].schemaName,
                  },
                ]
              : [],
            model: `export type ${a} = ${p.length ? p[0].name : 'unknown'};
`,
          }),
          n
        );
      let c = await ie({ schema: i.schema, propName: a, context: t }),
        l = `${B(s)}export type ${a} = ${c.value || 'unknown'};
`;
      return (
        n.push(...c.schemas),
        a !== c.value && n.push({ name: a, model: l, imports: c.imports }),
        n
      );
    },
    [],
  );
var ts = async ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = await It({ item: t, name: e, context: r }),
    s = o.value === '{}',
    a = '';
  (a += B(t)),
    s &&
      (r.tslint
        ? (a += `// tslint:disable-next-line:no-empty-interface
`)
        : (a += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !Ge.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (a += `export interface ${e} ${o.value}
`)
      : (a += `export type ${e} = ${o.value};
`);
  let i = o.imports.filter((c) => c.name !== e);
  return [...o.schemas, { name: e, model: a, imports: i }];
};
var Ji = require('lodash.isempty'),
  rs = async (e = {}, t, r) =>
    Ji(e)
      ? []
      : E(
          Object.entries(e),
          async (o, [s, a]) => {
            let i = $(s) + r;
            if (
              (!a.type || a.type === 'object') &&
              !a.allOf &&
              !a.oneOf &&
              !a.anyOf &&
              !C(a) &&
              !a.nullable
            )
              return (
                o.push(
                  ...(await ts({ name: i, schema: a, context: t, suffix: r })),
                ),
                o
              );
            {
              let p = await ne({ schema: a, name: i, context: t }),
                c = '',
                m = p.imports;
              if (((c += B(a)), p.isEnum && !p.isRef))
                c += ke(p.value, p.type, i);
              else if (i === p.value && p.isRef) {
                let l = p.imports.find((f) => f.name === i);
                if (!l)
                  c += `export type ${i} = ${p.value};
`;
                else {
                  let f =
                    l != null && l.specKey
                      ? `${$(ut(l.specKey, t.specKey))}${p.value}`
                      : `${p.value}Bis`;
                  (c += `export type ${i} = ${f};
`),
                    (m = m.map((d) =>
                      d.name === i ? w(O({}, d), { alias: f }) : d,
                    ));
                }
              } else
                c += `export type ${i} = ${p.value};
`;
              return o.push(...p.schemas, { name: i, model: c, imports: m }), o;
            }
          },
          [],
        );
var ns = T(require('ibm-openapi-validator'));
var os = async (e) => {
  let { errors: t, warnings: r } = await (0, ns.default)(e);
  r.length && hn(r), t.length && On(t);
};
var Xi = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await it(t.override.transformer, r)
        : void 0;
    return E(
      Object.entries(e),
      async (s, [a, i]) => {
        let p = await xn(i, t.converterOptions, a),
          c = n ? n(p) : p;
        return t.validation && (await os(c)), (s[a] = c), s;
      },
      {},
    );
  },
  ur = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Xi({ specs: e, input: t, workspace: o }),
      a = await E(
        Object.entries(s),
        async (c, [m, l]) => {
          var x, S, R, P, M, G;
          let f = {
              specKey: m,
              target: n,
              workspace: o,
              specs: s,
              override: r.override,
              tslint: r.tslint,
              tsconfig: r.tsconfig,
              packageJson: r.packageJson,
            },
            d = await rs(
              l.openapi
                ? (R = l.components) == null
                  ? void 0
                  : R.schemas
                : O(
                    O(
                      {},
                      (0, ss.default)(l, [
                        'openapi',
                        'info',
                        'servers',
                        'paths',
                        'components',
                        'security',
                        'tags',
                        'externalDocs',
                      ]),
                    ),
                    (S = (x = l.components) == null ? void 0 : x.schemas) !=
                      null
                      ? S
                      : {},
                  ),
              f,
              r.override.components.schemas.suffix,
            ),
            u = await lr(
              (P = l.components) == null ? void 0 : P.responses,
              f,
              r.override.components.responses.suffix,
            ),
            y = await lr(
              (M = l.components) == null ? void 0 : M.requestBodies,
              f,
              r.override.components.requestBodies.suffix,
            ),
            g = await es(
              (G = l.components) == null ? void 0 : G.parameters,
              f,
              r.override.components.parameters.suffix,
            ),
            h = [...d, ...u, ...y, ...g];
          return h.length && (c[m] = h), c;
        },
        {},
      ),
      i = await Zo({
        output: r,
        context: {
          specKey: n,
          target: n,
          workspace: o,
          specs: s,
          override: r.override,
          tslint: r.tslint,
          tsconfig: r.tsconfig,
          packageJson: r.packageJson,
        },
      });
    return w(O({}, i), {
      schemas: w(O({}, a), {
        [n]: [...((p = a[n]) != null ? p : []), ...i.schemas],
      }),
      target: n,
      info: s[n].info,
    });
  };
var Zi = async (e, o, n) => {
    var s = o,
      { validate: t } = s,
      r = Pe(s, ['validate']);
    if (t)
      try {
        await fr.default.validate(e);
      } catch (i) {
        if ((i == null ? void 0 : i.name) === 'ParserError') throw i;
        (0, as.log)(`\u26A0\uFE0F  ${is.default.yellow(i)}`);
      }
    let a = (await fr.default.resolve(e, r)).values();
    return n
      ? a
      : Object.fromEntries(
          Object.entries(a).map(([i, p]) => [(0, ps.resolve)(i), p]),
        );
  },
  ms = async (e, t) => {
    let { input: r, output: n } = t;
    if (A(r.target))
      return ur({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = ge(r.target),
      s = await Zi(r.target, r.parserOptions, o);
    return ur({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
var Os = T(require('chalk')),
  bs = require('console'),
  $s = T(require('execa')),
  Te = require('fs-extra'),
  Or = T(require('lodash.uniq')),
  br = require('upath');
var we = require('fs-extra'),
  gr = require('upath');
var ea = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = s;
    return (
      (a += Xt({ imports: e, target: r, isRootKey: n, specsName: o })),
      (a += e.length
        ? `

`
        : `
`),
      (a += t),
      a
    );
  },
  dr = (e, t) => (0, gr.join)(e, `/${t}.ts`);
var ta = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = j(t.name);
    try {
      await (0, we.outputFile)(
        dr(e, a),
        ea({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let i = dr(e, 'index'),
        c = (await (0, we.readFile)(i)).toString();
      !c.includes(`export * from './${a}'`) &&
        !c.includes(`export * from "./${a}"`) &&
        (await (0, we.appendFile)(
          dr(e, 'index'),
          `export * from './${a}';
`,
        ));
    } catch (i) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${a} => ${i}`;
    }
  },
  cs = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await (0, we.ensureFile)((0, gr.join)(e, '/index.ts')),
    Promise.all(
      t.map((a) =>
        ta({
          path: e,
          schema: a,
          target: r,
          isRootKey: n,
          specsName: o,
          header: s,
        }),
      ),
    )
  );
var us = require('fs-extra');
var ra = (e, t) =>
    e +
    `${t}
`,
  Re = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => ra(r, n), '');
var ls = require('compare-versions');
var Ct = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: a }) => a),
    o = (r == null ? void 0 : r.client) === U.ANGULAR,
    s = Object.values(e).reduce(
      (a, i, p, c) => {
        var m, l, f;
        if (
          (a.imports.push(...i.imports),
          a.importsMSW.push(...i.importsMSW),
          (a.implementation +=
            i.implementation +
            `
`),
          (a.implementationMSW.function += i.implementationMSW.function),
          (a.implementationMSW.handler += i.implementationMSW.handler),
          i.mutator && a.mutators.push(i.mutator),
          i.formData && a.formData.push(i.formData),
          i.formUrlEncoded && a.formUrlEncoded.push(i.formUrlEncoded),
          p === c.length - 1)
        ) {
          let d = a.mutators.some((x) => (o ? x.hasThirdArg : x.hasSecondArg)),
            u =
              (f =
                (l = (m = r.packageJson) == null ? void 0 : m.dependencies) ==
                null
                  ? void 0
                  : l.typescript) != null
                ? f
                : '4.4.0',
            y = (0, ls.compare)(u, '4.5.0', '>='),
            g = Pt({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: d,
              isGlobalMutator: !!r.override.mutator,
              title: $(t.title),
              customTitleFunc: r.override.title,
              provideInRoot: !!r.override.angular.provideIn,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: y,
            });
          (a.implementation = g.implementation + a.implementation),
            (a.implementationMSW.handler =
              g.implementationMSW + a.implementationMSW.handler);
          let h = jt({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            title: $(t.title),
            customTitleFunc: r.override.title,
            hasMutator: !!a.mutators.length,
            hasAwaitedType: y,
          });
          (a.implementation += h.implementation),
            (a.implementationMSW.handler += h.implementationMSW);
        }
        return a;
      },
      {
        imports: [],
        implementation: '',
        implementationMSW: { function: '', handler: '' },
        importsMSW: [],
        mutators: [],
        formData: [],
        formUrlEncoded: [],
      },
    );
  return w(O({}, s), {
    implementationMSW:
      s.implementationMSW.function + s.implementationMSW.handler,
  });
};
var fs = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: a, dirname: i } = I(n.target, { backupFilename: j(r.title) }),
      {
        imports: p,
        importsMSW: c,
        implementation: m,
        implementationMSW: l,
        mutators: f,
        formData: d,
        formUrlEncoded: u,
      } = Ct(e, r, n),
      y = s,
      g = n.schemas ? ee(i, I(n.schemas).dirname) : void 0,
      h = z(n.tsconfig);
    return (
      (y += Se(
        n.client,
        m,
        g
          ? [
              {
                exports: p.filter((x) => !c.some((S) => x.name === S.name)),
                dependency: g,
              },
            ]
          : [],
        o,
        !!n.schemas,
        h,
        !!n.override.mutator,
      )),
      n.mock &&
        (y += xe(
          l,
          g ? [{ exports: c, dependency: g }] : [],
          o,
          !!n.schemas,
          h,
        )),
      f && (y += V(f)),
      d && (y += V(d)),
      u && (y += V(u)),
      n.schemas || (y += Re(t)),
      (y += `

${m}`),
      n.mock &&
        ((y += `

`),
        (y += l)),
      await (0, us.outputFile)(a, y),
      [a]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${a}`;
  }
};
var vt = require('fs-extra'),
  qe = require('upath');
var ds = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: a,
        dirname: i,
        extension: p,
      } = I(n.target, { backupFilename: j(r.title) }),
      {
        imports: c,
        implementation: m,
        implementationMSW: l,
        importsMSW: f,
        mutators: d,
        formData: u,
        formUrlEncoded: y,
      } = Ct(e, r, n),
      g = s,
      h = s,
      x = n.schemas ? ee(i, I(n.schemas).dirname) : './' + a + '.schemas',
      S = z(n.tsconfig);
    (g += Se(
      n.client,
      m,
      [{ exports: c, dependency: x }],
      o,
      !!n.schemas,
      S,
      !!n.override.mutator,
    )),
      (h += xe(l, [{ exports: f, dependency: x }], o, !!n.schemas, S));
    let R = n.schemas ? void 0 : (0, qe.join)(i, a + '.schemas' + p);
    if (R) {
      let k = s + Re(t);
      await (0, vt.outputFile)((0, qe.join)(i, a + '.schemas' + p), k);
    }
    d && (g += V(d)),
      u && (g += V(u)),
      y && (g += V(y)),
      (g += `
${m}`),
      (h += `
${l}`);
    let P = a + (U.ANGULAR === n.client ? '.service' : '') + p,
      M = (0, qe.join)(i, P);
    await (0, vt.outputFile)((0, qe.join)(i, P), g);
    let G = n.mock ? (0, qe.join)(i, a + '.msw' + p) : void 0;
    return (
      G && (await (0, vt.outputFile)(G, h)),
      [M, ...(R ? [R] : []), ...(G ? [G] : [])]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${a}`;
  }
};
var Dt = require('fs-extra'),
  kt = require('upath');
var gs = require('compare-versions');
var na = (e) => w(O({}, e), { tags: e.tags.length ? e.tags : ['default'] }),
  oa = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, a, i;
      let o = r[n];
      return (
        (r[n] = o
          ? {
              implementation: o.implementation + t.implementation,
              imports: [...o.imports, ...t.imports],
              importsMSW: [...o.importsMSW, ...t.importsMSW],
              implementationMSW: {
                function:
                  o.implementationMSW.function + t.implementationMSW.function,
                handler:
                  o.implementationMSW.handler + t.implementationMSW.handler,
              },
              mutators: t.mutator
                ? [...((s = o.mutators) != null ? s : []), t.mutator]
                : o.mutators,
              formData: t.formData
                ? [...((a = o.formData) != null ? a : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((i = o.formUrlEncoded) != null ? i : []),
                    t.formUrlEncoded,
                  ]
                : o.formUrlEncoded,
            }
          : {
              imports: t.imports,
              importsMSW: t.importsMSW,
              mutators: t.mutator ? [t.mutator] : [],
              formData: t.formData ? [t.formData] : [],
              formUrlEncoded: t.formUrlEncoded ? [t.formUrlEncoded] : [],
              implementation: t.implementation,
              implementationMSW: {
                function: t.implementationMSW.function,
                handler: t.implementationMSW.handler,
              },
            }),
        r
      );
    }, e),
  At = (e, t) => {
    let r = t.client === U.ANGULAR,
      n = Object.values(e)
        .map(na)
        .reduce((o, s, a, i) => {
          let p = oa(o, s);
          return a === i.length - 1
            ? Object.entries(p).reduce((c, [m, l]) => {
                var x, S, R, P, M;
                let f = !!(
                    (x = l.mutators) != null &&
                    x.some((G) => (r ? G.hasThirdArg : G.hasSecondArg))
                  ),
                  d = Object.values(e)
                    .filter(({ tags: G }) => G.includes(m))
                    .map(({ operationName: G }) => G),
                  u =
                    (P =
                      (R =
                        (S = t.packageJson) == null
                          ? void 0
                          : S.dependencies) == null
                        ? void 0
                        : R.typescript) != null
                      ? P
                      : '4.4.0',
                  y = (0, gs.compare)(u, '4.5.0', '>='),
                  g = jt({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: d,
                    title: $(m),
                    customTitleFunc: t.override.title,
                    hasMutator: !!((M = l.mutators) != null && M.length),
                    hasAwaitedType: y,
                  }),
                  h = Pt({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: f,
                    isGlobalMutator: !!t.override.mutator,
                    title: $(m),
                    customTitleFunc: t.override.title,
                    provideInRoot: !!t.override.angular.provideIn,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: y,
                  });
                return (
                  (c[m] = {
                    implementation:
                      h.implementation + l.implementation + g.implementation,
                    implementationMSW: {
                      function: l.implementationMSW.function,
                      handler:
                        h.implementationMSW +
                        l.implementationMSW.handler +
                        g.implementationMSW,
                    },
                    imports: l.imports,
                    importsMSW: l.importsMSW,
                    mutators: l.mutators,
                    formData: l.formData,
                    formUrlEncoded: l.formUrlEncoded,
                  }),
                  c
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, a]) => (
        (o[s] = w(O({}, a), {
          implementationMSW:
            a.implementationMSW.function + a.implementationMSW.handler,
        })),
        o
      ),
      {},
    );
  };
var ys = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = I(n.target, { backupFilename: j(r.title) }),
    c = At(e, n),
    m = z(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, d]) => {
        try {
          let {
              imports: u,
              implementation: y,
              implementationMSW: g,
              importsMSW: h,
              mutators: x,
              formData: S,
              formUrlEncoded: R,
            } = d,
            P = s,
            M = s,
            G = n.schemas
              ? '../' + ee(i, I(n.schemas).dirname)
              : '../' + a + '.schemas';
          (P += Se(
            n.client,
            y,
            [{ exports: u, dependency: G }],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            (M += xe(g, [{ exports: h, dependency: G }], o, !!n.schemas, m));
          let k = n.schemas ? void 0 : (0, kt.join)(i, a + '.schemas' + p);
          if (k) {
            let Ie = s + Re(t);
            await (0, Dt.outputFile)(k, Ie);
          }
          x && (P += V(x, !0)),
            S && (P += V(S, !0)),
            R && (P += V(R)),
            (P += `
${y}`),
            (M += `
${g}`);
          let Y = he(f) + (U.ANGULAR === n.client ? '.service' : '') + p,
            J = (0, kt.join)(i, he(f), Y);
          await (0, Dt.outputFile)(J, P);
          let X = n.mock ? (0, kt.join)(i, he(f), he(f) + '.msw' + p) : void 0;
          return (
            X && (await (0, Dt.outputFile)(X, M)),
            [J, ...(k ? [k] : []), ...(X ? [X] : [])]
          );
        } catch (u) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${f} => ${u}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
var yr = require('fs-extra'),
  hr = require('upath');
var hs = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = I(n.target, { backupFilename: j(r.title) }),
    c = At(e, n),
    m = z(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, d]) => {
        try {
          let {
              imports: u,
              implementation: y,
              implementationMSW: g,
              importsMSW: h,
              mutators: x,
              formData: S,
              formUrlEncoded: R,
            } = d,
            P = s,
            M = n.schemas ? ee(i, I(n.schemas).dirname) : './' + a + '.schemas';
          (P += Se(
            n.client,
            y,
            [
              {
                exports: u.filter((Y) => !h.some((J) => Y.name === J.name)),
                dependency: M,
              },
            ],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            n.mock &&
              (P += xe(g, [{ exports: h, dependency: M }], o, !!n.schemas, m));
          let G = n.schemas ? void 0 : (0, hr.join)(i, a + '.schemas' + p);
          if (G) {
            let Y = s + Re(t);
            await (0, yr.outputFile)(G, Y);
          }
          x && (P += V(x)),
            S && (P += V(S)),
            R && (P += V(R)),
            (P += `

`),
            (P += y),
            n.mock &&
              ((P += `

`),
              (P += g));
          let k = (0, hr.join)(i, `${he(f)}${p}`);
          return await (0, yr.outputFile)(k, P), [k, ...(G ? [G] : [])];
        } catch (u) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${f} => ${u}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
var sa = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? B({ description: r }) : r;
  },
  xs = async ({ operations: e, schemas: t, target: r, info: n }, o, s, a) => {
    let { output: i } = s,
      p = a || n.title,
      c = Object.keys(t).reduce((f, d) => {
        let y = ut(d, r).slice(1).split('/').join('-');
        return (f[d] = y), f;
      }, {}),
      m = sa(i.override.header, n);
    if (i.schemas) {
      let f = i.schemas;
      await Promise.all(
        Object.entries(t).map(([d, u]) => {
          let y = r === d,
            g = y ? f : (0, br.join)(f, c[d]);
          return cs({
            schemaPath: g,
            schemas: u,
            target: r,
            specsName: c,
            isRootKey: y,
            header: m,
          });
        }),
      );
    }
    let l = [];
    if (i.target)
      switch (i.mode) {
        case ae.SPLIT:
          l = await ds({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ae.TAGS:
          l = await hs({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ae.TAGS_SPLIT:
          l = await ys({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
        case ae.SINGLE:
        default:
          l = await fs({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: c,
            header: m,
          });
          break;
      }
    if (i.workspace) {
      let f = i.workspace,
        d = l
          .filter((y) => !y.endsWith('.msw.ts'))
          .map((y) => ee(f, I(y).pathWithoutExtension));
      i.schemas && d.push(ee(f, I(i.schemas).dirname));
      let u = (0, br.join)(f, '/index.ts');
      if (await (0, Te.pathExists)(u)) {
        let y = await (0, Te.readFile)(u, 'utf8'),
          g = d.filter((h) => !y.includes(h));
        await (0, Te.appendFile)(
          u,
          (0, Or.default)(g).map((h) => `export * from '${h}';`).join(`
`) +
            `
`,
        );
      } else
        await (0, Te.outputFile)(
          u,
          (0, Or.default)(d).map((y) => `export * from '${y}';`).join(`
`) +
            `
`,
        );
      l = [u, ...l];
    }
    if (i.prettier)
      try {
        await (0, $s.default)('prettier', [
          '--write',
          ...(i.schemas ? [I(i.schemas).dirname] : []),
          ...l,
        ]);
      } catch {
        (0, bs.log)(
          Os.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    yn(p);
  };
var Ss = (e) => {
  gn(e), process.exit(1);
};
var ws = T(require('chalk'));
var Ft = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => T(require('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((i) => typeof i == 'string')
        : e;
  D(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((i) => '"' + i + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (i, p) => {
      D(`Change detected: ${i} ${p}`);
      try {
        await t();
      } catch (c) {
        D(ws.default.red(c));
      }
    });
};
var et = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await _t(['**/*', '!**/*.d.ts', ...o], I(t.output.target).dirname)),
        t.output.schemas &&
          (await _t(['**/*', '!**/*.d.ts', ...o], I(t.output.schemas).dirname)),
        D(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await ms(e, t);
    await xs(n, e, t, r);
  },
  Rs = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await et(t, n, r);
        } catch (o) {
          D($r.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else Ss('Project not found');
      return;
    }
    return E(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await et(t, s, o));
        } catch (a) {
          D($r.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${a}`));
        }
        return n;
      },
      [],
    );
  },
  Ps = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await lt(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = (0, Ts.dirname)(r),
      a = await (Q(n) ? n() : n),
      i = await E(
        Object.entries(a),
        async (c, [m, l]) => ((c[m] = await Ot(l, s, t)), c),
        {},
      ),
      p = Object.entries(i)
        .filter(
          ([c]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            c === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: c }]) => c.target)
        .filter((c) => v(c));
    (t == null ? void 0 : t.watch) && p.length
      ? Ft(
          t == null ? void 0 : t.watch,
          () => Rs(i, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await Rs(i, s, t == null ? void 0 : t.projectName);
  };
var js = async (e, t = process.cwd(), r) => {
  if (!e || v(e)) return Ps(e, r);
  let n = await Ot(e, t, r);
  if (r != null && r.watch)
    Ft(
      r == null ? void 0 : r.watch,
      async () => {
        try {
          await et(t, n);
        } catch (o) {
          D(
            xr.default.red(
              `\u{1F6D1}  ${
                r != null && r.projectName
                  ? `${r == null ? void 0 : r.projectName} - `
                  : ''
              }${o}`,
            ),
          );
        }
      },
      n.input.target,
    );
  else
    try {
      return await et(t, n);
    } catch (o) {
      D(
        xr.default.red(
          `\u{1F6D1}  ${
            r != null && r.projectName
              ? `${r == null ? void 0 : r.projectName} - `
              : ''
          }${o}`,
        ),
      );
    }
};
var ia = js;
0 &&
  (module.exports = {
    URL_REGEX,
    VERBS_WITH_BODY,
    addDependency,
    camel,
    defineConfig,
    escape,
    generalJSTypes,
    generalJSTypesWithArray,
    generate,
    generateAxiosOptions,
    generateBodyMutatorConfig,
    generateBodyOptions,
    generateDependencyImports,
    generateFormDataAndUrlEncodedFunction,
    generateImports,
    generateMutatorConfig,
    generateMutatorImports,
    generateMutatorRequestOptions,
    generateOptions,
    generateQueryParamsAxiosConfig,
    generateVerbImports,
    getNumberWord,
    isSyntheticDefaultImportsAllow,
    kebab,
    loadTsconfig,
    pascal,
    sanitize,
    snake,
    stringify,
    toObjectString,
    upper,
  });

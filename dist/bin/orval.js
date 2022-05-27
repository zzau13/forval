#!/usr/bin/env node
var $s = Object.create;
var qt = Object.defineProperty,
  xs = Object.defineProperties,
  ws = Object.getOwnPropertyDescriptor,
  Ss = Object.getOwnPropertyDescriptors,
  Rs = Object.getOwnPropertyNames,
  tt = Object.getOwnPropertySymbols,
  Ts = Object.getPrototypeOf,
  Vt = Object.prototype.hasOwnProperty,
  rn = Object.prototype.propertyIsEnumerable;
var tn = (e, t, r) =>
    t in e
      ? qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  O = (e, t) => {
    for (var r in t || (t = {})) Vt.call(t, r) && tn(e, r, t[r]);
    if (tt) for (var r of tt(t)) rn.call(t, r) && tn(e, r, t[r]);
    return e;
  },
  S = (e, t) => xs(e, Ss(t));
var je = (e, t) => {
  var r = {};
  for (var n in e) Vt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && tt)
    for (var n of tt(e)) t.indexOf(n) < 0 && rn.call(e, n) && (r[n] = e[n]);
  return r;
};
var js = (e, t, r, n) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Rs(t))
      !Vt.call(e, o) &&
        o !== r &&
        qt(e, o, {
          get: () => t[o],
          enumerable: !(n = ws(t, o)) || n.enumerable,
        });
  return e;
};
var T = (e, t, r) => (
  (r = e != null ? $s(Ts(e)) : {}),
  js(
    t || !e || !e.__esModule
      ? qt(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var bs = require('cac'),
  br = T(require('chalk'));
var Ps = 'orval',
  Es = 'A swagger client generator for typescript',
  Ms = '6.8.1',
  Is = 'MIT',
  Gs = ['dist'],
  vs = { orval: 'dist/bin/orval.js' },
  ks = 'dist/index.js',
  Cs = [
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
  As = { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  Ds = { type: 'git', url: 'https://github.com/anymaniax/orval' },
  Fs = {
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
  qs = {
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
  Vs = {
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
  ce = {
    name: Ps,
    description: Es,
    version: Ms,
    license: Is,
    files: Gs,
    bin: vs,
    main: ks,
    keywords: Cs,
    author: As,
    repository: Ds,
    scripts: Fs,
    devDependencies: qs,
    dependencies: Vs,
  };
var Or = T(require('chalk')),
  hs = require('upath');
var lr = T(require('@apidevtools/swagger-parser')),
  Xo = T(require('chalk')),
  Zo = require('console'),
  es = require('upath');
var nn = require('upath');
var N = {
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
var v = (e) => Boolean(e.$ref),
  on = (e) => !(0, nn.extname)(e);
function A(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function k(e) {
  return typeof e == 'string';
}
function sn(e) {
  return typeof e == 'number';
}
function K(e) {
  return typeof e == 'boolean';
}
function B(e) {
  return typeof e == 'function';
}
function rt(e) {
  return typeof e > 'u';
}
function an(e) {
  return typeof e === null;
}
var pn = (e) => Object.values(Z).includes(e);
var mn = T(require('validator/lib/isURL')),
  Ns = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  le = (e) => (0, mn.default)(e) || Ns.test(e);
var Jo = T(require('lodash.omit'));
var M = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
var hn = T(require('chalk')),
  On = T(require('swagger2openapi'));
var _ = T(require('chalk')),
  Wt = T(require('readline')),
  C = console.log,
  un = ({ name: e, version: t, description: r }) =>
    C(
      `\u{1F37B} Start ${_.default.cyan.bold(e)} ${_.default.green(`v${t}`)}${
        r ? ` - ${r}` : ''
      }`,
    ),
  fn = (e) => C(_.default.red(e));
var gn = (e) =>
    C(
      `\u{1F389} ${
        e ? `${_.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  dn = (e) => {
    C(_.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        C(
          _.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  yn = (e) => {
    C(_.default.red('(!) Errors')),
      e.forEach((t) =>
        C(
          _.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Nt = { silent: 0, error: 1, warn: 2, info: 3 },
  cn,
  ln,
  Ut = 0;
function Us() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    Wt.default.cursorTo(process.stdout, 0, 0),
    Wt.default.clearScreenDown(process.stdout);
}
function L(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Nt[e],
    s = n && process.stdout.isTTY && !process.env.CI ? Us : () => {};
  function a(c, m, l = {}) {
    if (o >= Nt[c]) {
      let f = c === 'info' ? 'log' : c,
        g = () => {
          if (l.timestamp) {
            let u =
              c === 'info'
                ? _.default.cyan.bold(r)
                : c === 'warn'
                ? _.default.yellow.bold(r)
                : _.default.red.bold(r);
            return `${_.default.dim(
              new Date().toLocaleTimeString(),
            )} ${u} ${m}`;
          } else return m;
        };
      c === cn && m === ln
        ? (Ut++, s(), console[f](g(), _.default.yellow(`(x${Ut + 1})`)))
        : ((Ut = 0), (ln = m), (cn = c), l.clear && s(), console[f](g()));
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
var bn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? On.default.convertObj(e, t, (o, s) => {
            o
              ? (C(
                  hn.default.yellow(`${r}
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
var $n = require('upath');
var nt = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (k(e)) {
      let n = (0, $n.resolve)(t, e),
        o = await Promise.resolve().then(() => T(require(n)));
      return r && A(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
var Bt = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  ot = Bt('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  st = 'a-z' + Bt('DF-F6,F8-FF', '00'),
  Qe = 'A-Z' + Bt('C0-D6,D8-DE', '00'),
  Ws = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  ue = {
    capitalize: new RegExp('(^|[' + ot + '])([' + st + '])', 'g'),
    pascal: new RegExp('(^|[' + ot + '])+([' + st + Qe + '])', 'g'),
    fill: new RegExp('[' + ot + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + st + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + Ws + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + Qe + '])([' + Qe + ']*)([' + Qe + '])(?=[^' + Qe + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + st + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + ot + ']'),
  },
  Bs = (e) => e.replace(ue.apostrophe, ''),
  Qs = String.prototype.toUpperCase,
  Qt = String.prototype.toLowerCase,
  zt = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(ue.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = Bs(e)),
    e
  ),
  zs = (e) => Qt.call(e.charAt(0)) + e.slice(1),
  Ks = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  xn = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && ue.upper.test(e) && (e = Qt.call(e)),
      !t && !ue.hole.test(e))
    ) {
      var o = zt(e, ' ');
      ue.hole.test(o) && (e = o);
    }
    return !r && !ue.room.test(e) && (e = e.replace(ue.relax, Ks)), e;
  },
  _s = (e, t, r) => zt(Qt.call(xn(e, !!t)), t, r),
  $ = (e) =>
    zt(
      xn(e, !1, !0).replace(ue.pascal, (t, r, n) => Qs.call(n)),
      '',
      !0,
    ),
  P = (e) => zs($(e));
var Pe = (e) => _s(e, '-', !0);
var wn = require('esutils'),
  Sn = T(require('lodash.get'));
var ee = (e) => {
    if (!(rt(e) || an(e)))
      return k(e)
        ? `'${e}'`
        : sn(e) || K(e) || B(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(ee).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let a = ee(n);
            return s.length === 1
              ? `{ ${r}: ${a}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${a}, }`
                : t + `${r}: ${a}, `
              : `{ ${r}: ${a}, `;
          }, '');
  },
  q = (e, t) => {
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
      a && (i = wn.keyword.isKeywordES5(i, !0) ? `_${i}` : i),
      i
    );
  },
  Q = (e, t) =>
    e.length
      ? (t ? e.map((n) => (0, Sn.default)(n, t)) : e).join(`,
    `) + ','
      : '',
  Ls = {
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
  it = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + Ls[n], ''),
  at = (e, t = "'") => e.replace(t, `\\${t}`);
var Rn = (e) => /[^{]*{[\w_-]*}.*/.test(e),
  Tn = (e) => {
    let t = e.match(/([^{]*){?([\w_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = q(P(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Rn(t[3]) ? Tn(t[3]) : t[3];
    return Rn(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  jn = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${Tn(n)}` : `${r}/${n}`,
        '',
      );
var Dn = T(require('lodash.get'));
var kn = T(require('lodash.get')),
  Cn = require('upath'),
  An = T(require('url'));
var pt = T(require('chalk')),
  Gn = require('esbuild'),
  ge = T(require('fs')),
  vn = T(require('globby')),
  Ee = T(require('micromatch')),
  fe = T(require('path')),
  F = require('upath');
var En = T(require('debug')),
  Pn = process.env.ORVAL_DEBUG_FILTER,
  Kt = process.env.DEBUG;
function Mn(e, t = {}) {
  let r = (0, En.default)(e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...a) => {
    (Pn && !s.includes(Pn)) ||
      (n && !(Kt != null && Kt.includes(o))) ||
      r(s, ...a);
  };
}
var G = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = on(e),
      o = n ? (0, F.join)(e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      a = (0, F.dirname)(o),
      i = (0, F.basename)(o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: a,
      filename: i,
    };
  },
  In = Mn('orval:file-load'),
  _t = new Map();
async function mt(e, t) {
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
  if (e) (m = fe.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let y = fe.default.resolve(r, `${o}.js`);
    if ((ge.default.existsSync(y) && (m = y), !m)) {
      let d = fe.default.resolve(r, `${o}.mjs`);
      ge.default.existsSync(d) && ((m = d), (f = !0));
    }
    if (!m) {
      let d = fe.default.resolve(r, `${o}.ts`);
      ge.default.existsSync(d) && ((m = d), (l = !0));
    }
  }
  m ||
    (e
      ? L(s).error(pt.default.red(`File not found => ${e}`))
      : o
      ? L(s).error(pt.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : L(s).error(pt.default.red('File not found')),
    process.exit(1));
  let g = (0, F.normalizeSafe)(m),
    u = _t.get(m);
  if (u) return S(O({ path: g }, u), { cached: !0 });
  try {
    let y;
    if (!y && !l && !f)
      try {
        delete require.cache[require.resolve(m)],
          (y = require(m)),
          In(`cjs loaded in ${Date.now() - c}ms`);
      } catch (d) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(d.message)
        )
          throw d;
      }
    if (!y) {
      let { code: d } = await Hs(
        m,
        f,
        r || (0, F.dirname)(g),
        a,
        i == null ? void 0 : i.compilerOptions,
      );
      p ? (y = await Ys(m, d, n)) : (y = d),
        In(`bundled file loaded in ${Date.now() - c}ms`);
    }
    return _t.set(m, { file: y }), { path: g, file: y };
  } catch (y) {
    return _t.set(m, { error: y }), { path: g, error: y };
  }
}
async function Hs(e, t = !1, r, n, o) {
  let s = await (0, Gn.build)({
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
                          (l) => p.startsWith(l) || Ee.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = Ee.default.scan(m),
                          f = Ee.default.scan(n[m]),
                          g = (0, F.resolve)(r, f.base),
                          u = l.base
                            ? p.replace(l.base, g)
                            : (0, F.joinSafe)(g, p),
                          d = (0, F.extname)(u) ? u : `${u}.ts`;
                        return ge.default.existsSync(d) ? { path: d } : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let c = Object.keys(o == null ? void 0 : o.paths),
                        m = c.find(
                          (l) => p.startsWith(l) || Ee.default.isMatch(p, c),
                        );
                      if (m) {
                        let l = Ee.default.scan(m),
                          f = Ee.default.scan(
                            o == null ? void 0 : o.paths[m][0],
                          ),
                          g = (0, F.resolve)(r, f.base),
                          u = l.base
                            ? p.replace(l.base, g)
                            : (0, F.joinSafe)(g, p),
                          d = (0, F.extname)(u) ? u : `${u}.ts`;
                        return ge.default.existsSync(d) ? { path: d } : void 0;
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
              if (c[0] !== '.' && !fe.default.isAbsolute(c))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(i) {
            i.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let c = await ge.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: c
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(fe.default.dirname(p.path)),
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
async function Ys(e, t, r) {
  let n = fe.default.extname(e),
    o = require.extensions[n];
  (require.extensions[n] = (i, p) => {
    p === e ? i._compile(t, p) : o(i, p);
  }),
    delete require.cache[require.resolve(e)];
  let s = require(e),
    a = r && s.__esModule ? s.default : s;
  return (require.extensions[n] = o), a;
}
async function Lt(e, t) {
  let r = await (0, vn.default)(e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => ge.default.promises.unlink(n)));
}
var ze = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  Js = new RegExp('~1', 'g'),
  ve = async (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(Js, '/')),
      s = (0, kn.default)(t.override, [...o.slice(0, 2), 'suffix'], ''),
      a = o[o.length - 1];
    if (!r) return { name: $(a) + s, originalName: a, refPaths: o };
    let i = le(t.specKey)
      ? An.default.resolve(t.specKey, r)
      : (0, Cn.resolve)(G(t.specKey).dirname, r);
    return { name: $(a) + s, originalName: a, specKey: i, refPaths: o };
  };
var V = async (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let c = await V(e == null ? void 0 : e.schema, t, r);
    return { schema: S(O({}, e), { schema: c.schema }), imports: r };
  }
  if (!v(e)) return { schema: e, imports: r };
  let {
      name: n,
      originalName: o,
      specKey: s,
      refPaths: a,
    } = await ve(e.$ref, t),
    i = (0, Dn.default)(t.specs[s || t.specKey], a);
  if (!i) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return V(i, S(O({}, t), { specKey: s || t.specKey }), [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
var Xs = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  ke = Xs.reduce((e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e), []),
  ne = [Z.POST, Z.PUT, Z.PATCH, Z.DELETE];
var Nn = T(require('lodash.uniq')),
  Xt = T(require('lodash.uniqwith')),
  Jt = require('upath');
var qn = require('acorn'),
  Yt = T(require('chalk')),
  Vn = require('fs-extra');
var pe = require('upath');
var Ht = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
var te = (e, t) => {
    let r = (0, pe.relative)(e, t);
    return (0, pe.normalizeSafe)(`.${pe.sep}${r}`);
  },
  ct = (e, t) => {
    if (le(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(G(r.pathname).dirname, '')
        .replace(`.${Ht(e)}`, '');
    }
    return (
      '/' +
      (0, pe.normalize)((0, pe.relative)(G(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${Ht(e)}`, '')
    );
  };
var Ce = 'BodyType',
  Fn = (e, t) => {
    let r = G(e),
      n = G(t.path),
      { pathWithoutExtension: o } = G(te(r.dirname, n.path));
    return o;
  },
  ut = async ({
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
      p = await (0, Vn.readFile)(i, 'utf8'),
      c =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      m =
        p.includes(`export type ${Ce}`) || p.includes(`export interface ${Ce}`),
      l = t.default ? `${$(r)}ErrorType` : 'ErrorType',
      f = t.default ? `${$(r)}${Ce}` : Ce,
      { file: g, cached: u } = await mt(i, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (g) {
      let d = s ? 'default' : t.name,
        h = Zs(g, d);
      h ||
        (L().error(
          Yt.default.red(
            `Your mutator file doesn't have the ${d} exported function`,
          ),
        ),
        process.exit(1));
      let x = Fn(e, t);
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
      let d = Fn(e, t);
      return (
        u ||
          L().warn(
            Yt.default.yellow('Failed to parse provided mutator function'),
          ),
        O(
          {
            name: a,
            path: d,
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
  Zs = (e, t) => {
    var r, n;
    try {
      let o = qn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((i) => {
                var p, c, m, l, f, g, u;
                if (i.type === 'ExpressionStatement')
                  return ((m =
                    (c =
                      (p = i.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : c.properties) != null &&
                    m.some((y) => {
                      var d;
                      return ((d = y.key) == null ? void 0 : d.name) === t;
                    })) ||
                    ((f =
                      (l = i.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : f.name) === t
                    ? !0
                    : (u =
                        (g = i.expression.right) == null
                          ? void 0
                          : g.properties) == null
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
        if (s.expression.right.name) return lt(o, s.expression.right.name);
        let i =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return i.value.name
          ? lt(o, i.value.name)
          : i.value.type === 'FunctionExpression' ||
            i.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: i.value.params.length }
          : void 0;
      }
      let a = s.expression.arguments[1].properties.find((i) => {
        var p;
        return ((p = i.key) == null ? void 0 : p.name) === t;
      });
      return lt(o, a.value.body.name);
    } catch {
      return;
    }
  },
  lt = (e, t) => {
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
      ? lt(e, n.init.name)
      : { numberOfParams: n.init.params.length };
  };
var Un = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? (0, Xt.default)(
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
                  } } from '../${(0, Jt.join)(p, P(s))}';`
                : `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from './${(0, Jt.join)(p, P(s))}';`;
            }
            return `import ${a ? '' : 'type '}{ ${s}${
              i ? ` as ${i}` : ''
            } } from './${P(s)}';`;
          }).join(`
`)
      : '',
  U = (e, t) => {
    let r = (0, Xt.default)(
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
                      n.bodyTypeName ? `${Ce} as ${n.bodyTypeName}` : ''
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
  ei = ({
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
      var l, f, g;
      let m = o && c.specKey ? c.specKey : 'default';
      return (
        (p[m] = {
          values:
            ((l = p[m]) == null ? void 0 : l.values) ||
            (c.values && (s || !c.syntheticDefaultImport)) ||
            !1,
          deps: [
            ...((g = (f = p[m]) == null ? void 0 : f.deps) != null ? g : []),
            c,
          ],
        }),
        p
      );
    }, {});
    return Object.entries(i).map(([p, { values: c, deps: m }]) => {
      let l = m.find((d) => d.default && (s || !d.syntheticDefaultImport)),
        f = s ? void 0 : m.find((d) => d.syntheticDefaultImport),
        g = (0, Nn.default)(
          m
            .filter((d) => !d.default && !d.syntheticDefaultImport)
            .map(({ name: d, alias: h }) => (h ? `${d} as ${h}` : d)),
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
          l ? `${l.name}${g ? ',' : ''}` : ''
        }${
          g
            ? `{
  ${g}
}`
            : ''
        } from '${r}${p !== 'default' && n[p] ? `/${n[p]}` : ''}'`),
        u
      );
    }).join(`
`);
  },
  ft = (e, t, r, n, o) => {
    let s = t
      .map((a) =>
        ei(
          S(O({}, a), {
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
  de = ({ response: e, body: t, queryParams: r, params: n }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...n.flatMap(({ imports: o }) => o),
  ];
var ti = (e, t, r) =>
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
  ri = (e, t, r) => {
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
 ${(s = ee(r)) == null ? void 0 : s.slice(1, -1)}`),
      n &&
        (o += `
    ...options`),
      o
    );
  },
  ye = ({
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
    let c = ne.includes(o),
      m = c ? ti(t, a, i) : '',
      l = ri(n, r == null ? void 0 : r.schema, s);
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
  ni = (e, t, r) =>
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
  oi = (e, t) => {
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
  he = ({
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
    let c = i ? ni(t, s, a) : '',
      m = oi(n, r == null ? void 0 : r.schema),
      l = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}'}`
        : '';
    return `{url: \`${e}\`, method: '${o}'${
      !i && p ? ', signal' : ''
    }${l}${c}${m}
    }`;
  },
  Oe = (e, t) => {
    var r, n;
    return t
      ? A(e)
        ? `{${(n = ee(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : A(e)
      ? (r = ee(e)) == null
        ? void 0
        : r.slice(1, -1)
      : '';
  },
  be = ({
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
var si = [
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
  Wn = [],
  Bn = () => si,
  Qn = (e) => {
    let t = q(e);
    return `${$(t)}Service`;
  },
  zn = ({
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
  Kn = () => `};

${Wn.join(`
`)}`,
  ii = (
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
      g = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      u = ne.includes(a),
      y = be({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: f,
        isFormUrlEncoded: g,
      }),
      d = r.definition.success || 'unknown';
    if ((Wn.push(`export type ${$(t)}ClientResult = NonNullable<${d}>`), n)) {
      let x = he({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: f,
          isFormUrlEncoded: g,
          hasSignal: !1,
          isBodyVerb: u,
        }),
        w = l ? Oe(i == null ? void 0 : i.requestOptions, n.hasThirdArg) : '';
      return ` ${t}<TData = ${d}>(
    ${Q(s, 'implementation')}
 ${
   l && n.hasThirdArg ? `options?: ThirdParameter<typeof ${n.name}>` : ''
 }) {${y}
      return ${n.name}<TData>(
      ${x},
      this.http,
      ${w});
    }
  `;
    }
    let h = ye({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: f,
      isFormUrlEncoded: g,
      isAngular: !0,
    });
    return ` ${t}<TData = ${d}>(
    ${Q(s, 'implementation')} ${
      l
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${y}
    return this.http.${a}<TData>(${h});
  }
`;
  },
  _n = (e, t) => {
    let r = de(e);
    return { implementation: ii(e, t), imports: r };
  };
var oo = T(require('find-up')),
  so = require('fs-extra'),
  Zt = require('tsconfck');
var Ie = T(require('chalk')),
  yt = require('upath');
var me = require('fs-extra'),
  gt = T(require('inquirer')),
  Yn = require('upath');
var Ln = T(require('https')),
  Hn = (e, t) =>
    new Promise((r, n) => {
      let o = Ln.default.request(e, (s) => {
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
var ai = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
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
  pi = async (e) => {
    if (await (0, me.pathExists)(e)) return (0, me.readFile)(e, 'utf-8');
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
        t.saveToken && (await (0, me.outputFile)(e, t.githubToken)),
        t.githubToken
      );
    }
  },
  mi = async (e) => {
    var c, m, l, f;
    let t = (0, Yn.join)(__dirname, '.githubToken'),
      r = await pi(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , a, ...i] = n.split('/'),
      p = i.join('/');
    try {
      let { body: g } = await Hn(
        ...ai({ accessToken: r, repo: s, owner: o, branch: a, path: p }),
      );
      return (
        (c = g.errors) != null &&
          c.length &&
          ((m = g.errors) == null
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
          (await (0, me.unlink)(t)),
        (f = (l = g.data) == null ? void 0 : l.repository) == null
          ? void 0
          : f.object.text
      );
    } catch (g) {
      throw g.body
        ? (g.body.message === 'Bad credentials' &&
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
            (await (0, me.unlink)(t)),
          g.body.message || `Oups... \u{1F37B}. ${g}`)
        : `Oups... \u{1F37B}. ${g}`;
    }
  },
  Jn = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return mi(e.url);
    },
  };
var dt = (e) => e && typeof e == 'object';
function Me(e, t) {
  return !dt(t) || !dt(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : dt(s) && dt(o)
            ? (r[n] = Me(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
var Xn = ({ title: e, description: t, version: r }) => [
  `Generated by ${ce.name} v${ce.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
var Zn = T(require('find-up')),
  eo = require('fs-extra');
var to = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await (0, Zn.default)(['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => T(require(n))) : void 0;
  }
  let r = oe(e, t);
  if ((0, eo.existsSync)(r))
    return await Promise.resolve().then(() => T(require(r)));
};
var ht = async (e, t = process.cwd(), r = {}) => {
    var d,
      h,
      x,
      w,
      R,
      j,
      I,
      E,
      D,
      Y,
      J,
      X,
      Ge,
      Xe,
      Ne,
      Ue,
      We,
      Be,
      Ze,
      et,
      $r,
      xr,
      wr,
      Sr,
      Rr,
      Tr,
      jr,
      Pr,
      Er,
      Mr,
      Ir,
      Gr,
      vr,
      kr,
      Cr,
      Ar,
      Dr,
      Fr,
      qr,
      Vr,
      Nr,
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
      en;
    let n = await (B(e) ? e() : e);
    n.input ||
      (L().error(Ie.default.red('Config require an input')), process.exit(1)),
      n.output ||
        (L().error(Ie.default.red('Config require an output')),
        process.exit(1));
    let o = k(n.input) ? { target: n.input } : n.input,
      s = k(n.output) ? { target: n.output } : n.output;
    typeof ((h = (d = s.override) == null ? void 0 : d.angular) == null
      ? void 0
      : h.provideInRoot) < 'u' &&
      console.warn('provideInRoot is deprecated, use provideIn instead');
    let a = oe(s.workspace || '', t),
      { clean: i, prettier: p, client: c, mode: m, mock: l, tslint: f } = r,
      g = await no(s.tsconfig || r.tsconfig, t),
      u = await to(s.packageJson || r.packageJson, t),
      y = {
        input: {
          target: li(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: oe(
              (x = o.override) == null ? void 0 : x.transformer,
              t,
            ),
          },
          converterOptions: (w = o.converterOptions) != null ? w : {},
          parserOptions: Me(ci, (R = o.parserOptions) != null ? R : {}),
        },
        output: {
          target: oe(s.target, a),
          schemas: oe(s.schemas, a),
          workspace: s.workspace ? a : void 0,
          client:
            (I = (j = s.client) != null ? j : c) != null
              ? I
              : N.AXIOS_FUNCTIONS,
          mode: ui((E = s.mode) != null ? E : m),
          mock: (Y = (D = s.mock) != null ? D : l) != null ? Y : !1,
          clean: (X = (J = s.clean) != null ? J : i) != null ? X : !1,
          prettier: (Xe = (Ge = s.prettier) != null ? Ge : p) != null ? Xe : !1,
          tslint: (Ue = (Ne = s.tslint) != null ? Ne : f) != null ? Ue : !1,
          tsconfig: g,
          packageJson: u,
          override: S(O({}, s.override), {
            operations: ro(
              (Be = (We = s.override) == null ? void 0 : We.operations) != null
                ? Be
                : {},
              a,
            ),
            tags: ro(
              (et = (Ze = s.override) == null ? void 0 : Ze.tags) != null
                ? et
                : {},
              a,
            ),
            mutator: Ae(a, ($r = s.override) == null ? void 0 : $r.mutator),
            formData:
              (Rr = K((xr = s.override) == null ? void 0 : xr.formData)
                ? (Sr = s.override) == null
                  ? void 0
                  : Sr.formData
                : Ae(a, (wr = s.override) == null ? void 0 : wr.formData)) !=
              null
                ? Rr
                : !0,
            formUrlEncoded:
              (Er = K((Tr = s.override) == null ? void 0 : Tr.formUrlEncoded)
                ? (Pr = s.override) == null
                  ? void 0
                  : Pr.formUrlEncoded
                : Ae(
                    a,
                    (jr = s.override) == null ? void 0 : jr.formUrlEncoded,
                  )) != null
                ? Er
                : !0,
            header:
              ((Mr = s.override) == null ? void 0 : Mr.header) === !1
                ? !1
                : B((Ir = s.override) == null ? void 0 : Ir.header)
                ? (Gr = s.override) == null
                  ? void 0
                  : Gr.header
                : Xn,
            requestOptions:
              (kr = (vr = s.override) == null ? void 0 : vr.requestOptions) !=
              null
                ? kr
                : !0,
            components: {
              schemas: O(
                { suffix: ze.schemas },
                (Dr =
                  (Ar = (Cr = s.override) == null ? void 0 : Cr.components) ==
                  null
                    ? void 0
                    : Ar.schemas) != null
                  ? Dr
                  : {},
              ),
              responses: O(
                { suffix: ze.responses },
                (Vr =
                  (qr = (Fr = s.override) == null ? void 0 : Fr.components) ==
                  null
                    ? void 0
                    : qr.responses) != null
                  ? Vr
                  : {},
              ),
              parameters: O(
                { suffix: ze.parameters },
                (Wr =
                  (Ur = (Nr = s.override) == null ? void 0 : Nr.components) ==
                  null
                    ? void 0
                    : Ur.parameters) != null
                  ? Wr
                  : {},
              ),
              requestBodies: O(
                { suffix: ze.requestBodies },
                (zr =
                  (Qr = (Br = s.override) == null ? void 0 : Br.components) ==
                  null
                    ? void 0
                    : Qr.requestBodies) != null
                  ? zr
                  : {},
              ),
            },
            query: O(
              { useQuery: !0 },
              (_r = (Kr = s.override) == null ? void 0 : Kr.query) != null
                ? _r
                : {},
            ),
            angular: {
              provideIn:
                (Zr =
                  (Xr =
                    (Hr = (Lr = s.override) == null ? void 0 : Lr.angular) ==
                    null
                      ? void 0
                      : Hr.provideIn) != null
                    ? Xr
                    : (Jr = (Yr = s.override) == null ? void 0 : Yr.angular) ==
                      null
                    ? void 0
                    : Jr.provideInRoot) != null
                  ? Zr
                  : 'root',
            },
            useDates: ((en = s.override) == null ? void 0 : en.useDates) || !1,
          }),
        },
      };
    return (
      y.input.target ||
        (L().error(Ie.default.red('Config require an input target')),
        process.exit(1)),
      !y.output.target &&
        !y.output.schemas &&
        (L().error(
          Ie.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      y
    );
  },
  ci = { validate: !0, resolve: { github: Jn } },
  Ae = (e, t) => {
    var r;
    return A(t)
      ? (t.path ||
          (L().error(Ie.default.red('Mutator need a path')), process.exit(1)),
        S(O({}, t), {
          path: (0, yt.resolve)(e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        }))
      : k(t)
      ? { path: (0, yt.resolve)(e, t), default: !0 }
      : t;
  },
  li = (e, t) => (k(e) && !le(e) ? oe(e, t) : e),
  oe = (e, t) => (k(e) ? (0, yt.resolve)(t, e) : e),
  ro = (e, t) =>
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
          p = je(l, [
            'transformer',
            'mutator',
            'formData',
            'formUrlEncoded',
            'requestOptions',
          ]);
        var f, g;
        return [
          r,
          S(
            O(
              O(O({}, p), n ? { transformer: oe(n, t) } : {}),
              o ? { mutator: Ae(t, o) } : {},
            ),
            {
              formData: (f = K(s) ? s : Ae(t, s)) != null ? f : !0,
              formUrlEncoded: (g = K(a) ? a : Ae(t, a)) != null ? g : !0,
              requestOptions: i != null ? i : !0,
            },
          ),
        ];
      }),
    ),
  ui = (e) =>
    e
      ? Object.values(ae).includes(e)
        ? e
        : (L().warn(Ie.default.yellow(`Unknown the provided mode => ${e}`)),
          ae.SINGLE)
      : ae.SINGLE;
var no = async (e, t = process.cwd()) => {
    var r, n;
    if (rt(e)) {
      let o = await (0, oo.default)(['tsconfig.json', 'jsconfig.json'], {
        cwd: t,
      });
      return o ? (await (0, Zt.parse)(o)).tsconfig : void 0;
    }
    if (k(e)) {
      let o = oe(e, t);
      if ((0, so.existsSync)(o)) {
        let s = await (0, Zt.parse)(o);
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
  H = (e) => {
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
var fi = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  Ot = new Map(),
  er = (e) => [...(e ? [] : fi)],
  gi = (
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
      g = (i == null ? void 0 : i.formData) !== !1,
      u = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      y = H(l.tsconfig),
      d = be({
        formData: p,
        formUrlEncoded: c,
        body: o,
        isFormData: g,
        isFormUrlEncoded: u,
      }),
      h = ne.includes(a);
    if (n) {
      let w = he({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: g,
          isFormUrlEncoded: u,
          isBodyVerb: h,
          hasSignal: !0,
        }),
        R = f ? Oe(i == null ? void 0 : i.requestOptions, n.hasSecondArg) : '';
      return (
        Ot.set(
          t,
          (j) =>
            `export type ${$(t)}Result = NonNullable<Awaited<ReturnType<${
              j ? `ReturnType<typeof ${j}>['${t}']` : `typeof ${t}`
            }>>>`,
        ),
        `const ${t} = (
    ${Q(s, 'implementation')}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
          h
            ? `
`
            : `signal?: AbortSignal
`
        }) => {${d}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${R});
    }
  `
      );
    }
    let x = ye({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: g,
      isFormUrlEncoded: u,
    });
    return (
      Ot.set(
        t,
        () =>
          `export type ${$(t)}Result = AxiosResponse<${
            r.definition.success || 'unknown'
          }>`,
      ),
      `const ${t} = <TData = AxiosResponse<${
        r.definition.success || 'unknown'
      }>>(
    ${Q(s, 'implementation')} ${
        f
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${d}
    return axios${y ? '' : '.default'}.${a}(${x});
  }
`
    );
  },
  tr = (e) => {
    let t = q(e);
    return `get${$(t)}`;
  },
  rr = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
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
  nr = ({
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
          return Ot.has(p)
            ? (c = Ot.get(p)) == null
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
  or = (e, t) => {
    let r = de(e);
    return { implementation: gi(e, t), imports: r };
  };
var io = {
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
var ao = (e, t, r) => {
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
      var g, u;
      return (
        (m[l] = v(f)
          ? f
          : (u = (g = f.content) == null ? void 0 : g['application/json']) ==
            null
          ? void 0
          : u.schema),
        m
      );
    }, {}),
    s = O(O({}, n), o);
  return S(O({}, s[e]), { specKey: r });
};
var di = (e) => e[0] === '/' && e[e.length - 1] === '/',
  bt = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (di(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: _e(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  _e = (e, t) => (t ? `faker.random.arrayElement([${e}, null])` : e),
  $e = async ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: a,
  }) => {
    if (v(e)) {
      let { name: p, specKey: c } = await ve(
          e.$ref,
          S(O({}, s), { specKey: e.specKey || s.specKey }),
        ),
        m = S(O({}, ao(p, s, c || e.specKey || s.specKey)), {
          name: p,
          path: e.path,
          isRef: !0,
          specKey: c || e.specKey,
        }),
        l = await Ke({
          item: m,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: a,
        });
      return S(O({}, l), { type: m.type });
    }
    let i = await Ke({
      item: e,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
    return S(O({}, i), { type: e.type });
  };
var lo = T(require('cuid'));
var po = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
var mo = async ({
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
    value: await M(
      t,
      async (g, u, y, d) => {
        var x;
        let h = await $e({
          schema: S(O({}, u), {
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
              ? d.length === 1
                ? `faker.random.arrayElement([${h.value}])`
                : `faker.random.arrayElement([${h.value},`
              : d.length === 1
              ? h.type !== 'object'
                ? `${h.value}`
                : `{${h.value}}`
              : `{${h.value},`
            : d.length - 1 === y
            ? h.enums || r
              ? g + h.value + (a ? '' : '])')
              : g + h.value + (a ? '' : '}')
            : h.value
            ? g + h.value + ','
            : g
        );
      },
      '',
    ),
    imports: c,
    name: e.name,
    properties: m,
  };
};
var co = require('esutils'),
  De = (e) => (co.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var uo = async ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: a,
}) => {
  if (v(e))
    return $e({
      schema: S(O({}, e), {
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
    return mo({
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
            if (po(e.path, `\\.${m}\\.`) >= 1) return;
            let g = await $e({
              schema: S(O({}, l), {
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
            (p = [...p, ...g.imports]), (c = [...c, m]);
            let u = De(m);
            return !f && !g.overrided
              ? `${u}: faker.random.arrayElement([${g.value}, undefined])`
              : `${u}: ${g.value}`;
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
      schema: S(O({}, e.additionalProperties), {
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
    return S(O({}, i), {
      value: `{
        '${(0, lo.default)()}': ${i.value}
      }`,
    });
  }
  return { value: '{}', imports: [], name: e.name };
};
var Ke = async ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: a,
}) => {
  var f, g, u, y;
  let i = bt(
    (g = (f = r == null ? void 0 : r.operations) == null ? void 0 : f[n]) ==
      null
      ? void 0
      : g.properties,
    e,
  );
  if (i) return i;
  let p = Object.entries(
      (u = r == null ? void 0 : r.tags) != null ? u : {},
    ).reduce((d, [h, x]) => (o.includes(h) ? Me(d, x) : d), {}),
    c = bt(p == null ? void 0 : p.properties, e);
  if (c) return c;
  let m = bt(r == null ? void 0 : r.properties, e);
  if (m) return m;
  let l = O(O({}, io), (y = r == null ? void 0 : r.format) != null ? y : {});
  if (e.format && l[e.format])
    return {
      value: _e(l[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: _e('faker.datatype.number()', e.nullable),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: [], imports: [], name: e.name };
      let {
        value: d,
        enums: h,
        imports: x,
        name: w,
      } = await $e({
        schema: S(O({}, e.items), {
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
        if (!v(e.items)) return { value: d, imports: x, name: e.name };
        let R = t.find((I) => w.replace('[]', '') === I.name);
        return {
          value: `faker.random.arrayElements(Object.values(${
            (R == null ? void 0 : R.name) || w
          }))`,
          imports: R ? [...x, S(O({}, R), { values: !0 })] : x,
          name: e.name,
        };
      }
      return {
        value: `[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (${d}))`,
        imports: x,
        name: e.name,
      };
    }
    case 'string': {
      let d = 'faker.random.word()',
        h = [];
      if (e.enum) {
        let x = "['" + e.enum.map((w) => at(w)).join("','") + "']";
        e.isRef &&
          ((x = `Object.values(${e.name})`),
          (h = [{ name: e.name, values: !0 }])),
          (d = `faker.random.arrayElement(${x})`);
      }
      return {
        value: _e(d, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: h,
      };
    }
    case 'object':
    default:
      return uo({
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
var $t = (e, t) =>
    Object.entries(B(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = B(o) ? `(${o})()` : ee(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  yi = (e, t) => {
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
              ? { properties: $t(t.mock.properties, e) }
              : {},
          ),
          (o = t == null ? void 0 : t.mock) != null && o.format
            ? { format: $t(t.mock.format, e) }
            : {},
        ),
        t != null && t.operations
          ? {
              operations: Object.entries(t.operations).reduce((s, [a, i]) => {
                var p;
                return (
                  (p = i.mock) != null &&
                    p.properties &&
                    (s[a] = { properties: $t(i.mock.properties, e) }),
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
                  (s[a] = { properties: $t(i.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {},
    );
  },
  hi = (e) => {
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
  Oi = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    M(
      r.types.success,
      async (a, { value: i, originalSchema: p, imports: c }) => {
        if (!i || ke.includes(i)) {
          let f = hi(i);
          return a.definitions.push(o ? o(f, r.definition.success) : f), a;
        }
        if (!p) return a;
        let m = await V(p, s),
          l = await Ke({
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
  fo = async ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let a = yi(s.specs[s.specKey], n),
      { definitions: i, imports: p } = await Oi({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: a,
        transformer: o,
        context: s,
      });
    return { definition: '[' + i.join(', ') + ']', definitions: i, imports: p };
  },
  go = (e, t) => {
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
      n = B(r) ? `(${r})()` : ee(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var bi = (e) =>
    e
      .split('')
      .reduce(
        (t, r) => (r === '{' ? t + ':' : r === '}' ? t + '' : t + q(r)),
        '',
      ),
  $i = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o) => (o ? (o.includes('{') ? `${n}/${bi(o)}` : `${n}/${o}`) : n),
        t,
      ),
  xi = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  xe = (e, t, r, n, o) => ft(e, [...xi, ...t], r, n, o),
  yo = async (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: a },
  ) => {
    var u;
    let {
        definitions: i,
        definition: p,
        imports: c,
      } = await fo({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: a,
      }),
      m = $i(o, (u = s == null ? void 0 : s.mock) == null ? void 0 : u.baseUrl),
      l = go(e, s),
      f = '';
    l
      ? (f = l)
      : i.length > 1
      ? (f = `faker.random.arrayElement(${p})`)
      : i[0] && (f = i[0]);
    let g = t.contentTypes.includes('text/plain') ? 'text' : 'json';
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
ctx.${g}(get${$(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: c,
    };
  };
var ho = T(require('lodash.omitby'));
var se = { PARAM: 'param', BODY: 'body', QUERY_PARAM: 'queryParam' };
var ir = [
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
  wi = [
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
  Oo = (e) => [...(e ? [] : ir), ...wi],
  Si = [
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
  bo = (e) => [...(e ? [] : ir), ...Si],
  Ri = [
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
  $o = (e) => [...(e ? [] : ir), ...Ri],
  Ti = (
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
      g = (c == null ? void 0 : c.formData) !== !1,
      u = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      y = H(l.tsconfig),
      d = ne.includes(a),
      h = be({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: g,
        isFormUrlEncoded: u,
      });
    if (n) {
      let w = he({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: g,
          isFormUrlEncoded: u,
          isBodyVerb: d,
          hasSignal: !0,
        }),
        R =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? Q(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : Q(s, 'implementation'),
        j = f ? Oe(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return n.isHook
        ? `export const use${$(t)}Hook = () => {
        const ${t} = ${n.name}<${r.definition.success || 'unknown'}>();

        return (
    ${R}
${
  d
    ? ''
    : `signal?: AbortSignal,
`
} ${
            f && n.hasSecondArg
              ? `options?: SecondParameter<typeof ${n.name}>`
              : ''
          }) => {${h}
        return ${t}(
          ${w},
          ${j});
        }
      }
    `
        : `export const ${t} = (
    ${R}
 ${f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
            d
              ? `
`
              : `signal?: AbortSignal
`
          }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${j});
    }
  `;
    }
    let x = ye({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: g,
      isFormUrlEncoded: u,
    });
    return `export const ${t} = (
    ${Q(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${y ? '' : '.default'}.${a}(${x});
  }
`;
  },
  sr = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  ji = ['getNextPageParam', 'getPreviousPageParam'],
  Pi = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = A(t)
      ? ` ${
          (o = ee(
            (0, ho.default)(
              t,
              (s, a) => !!(r !== sr.INFINITE && ji.includes(a)),
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
  xo = ({
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
  Ei = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case N.SVELTE_QUERY:
        return `Use${$(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${$(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case N.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${$(
          t,
        )}Result<TData, TError>>`;
      case N.REACT_QUERY:
      default:
        return ` Use${$(t)}Result<TData, TError>`;
    }
  },
  Mi = ({
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
    outputClient: g,
  }) => {
    let u = t
        ? c
            .map(({ name: R }) =>
              R === 'params' ? `{ ${t}: pageParam, ...params }` : R,
            )
            .join(',')
        : i,
      y = Ei({
        outputClient: g,
        type: n,
        isMutatorHook: m == null ? void 0 : m.isHook,
        operationName: o,
      }),
      d = `AxiosError<${f.definition.errors || 'unknown'}>`;
    m &&
      (d = m.hasErrorType
        ? `${m.default ? $(o) : ''}ErrorType<${
            f.definition.errors || 'unknown'
          }>`
        : f.definition.errors || 'unknown');
    let h =
        m != null && m.isHook
          ? `ReturnType<typeof use${$(o)}Hook>`
          : `typeof ${o}`,
      x = `${$(e)}QueryResult`,
      w = `${$(e)}QueryError`;
    return `
export type ${x} = Awaited<ReturnType<${h}>>
export type ${w} = ${d}

export const ${P(`use-${e}`)} = (
    ${s} 
    ${xo({
      operationName: o,
      definitions: '',
      mutator: m,
      isRequestOptions: l,
      type: n,
    })}): UseQueryResult<${x}, ${w}> & { queryKey: QueryKey } => {

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

  const query = ${P(`use-${n}`)}<${x}, ${w}, ${x}>(queryKey, queryFn, ${Pi({
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
  Ii = (
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
    g,
  ) => {
    var j;
    let u = a == null ? void 0 : a.query,
      y = (a == null ? void 0 : a.requestOptions) !== !1,
      d = (j = l[c]) == null ? void 0 : j.query;
    if (
      o === Z.GET ||
      (d == null ? void 0 : d.useInfinite) ||
      (d == null ? void 0 : d.useQuery)
    ) {
      let I = n
          .map(({ name: J, type: X }) => (X === se.BODY ? r.implementation : J))
          .join(','),
        E = [
          ...(u != null && u.useInfinite
            ? [
                {
                  name: P(`${t}-infinite`),
                  options: u == null ? void 0 : u.options,
                  type: sr.INFINITE,
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
                  type: sr.QUERY,
                },
              ]
            : []),
        ],
        D = P(`get-${t}-queryKey`),
        Y = Q(n, 'implementation');
      return `export const ${D} = (${Y}) => [\`${m}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${E.reduce(
      (J, X) =>
        J +
        Mi({
          queryOption: X,
          operationName: t,
          queryProps: Y,
          queryKeyFnName: D,
          properties: I,
          params: s,
          props: n,
          mutator: i,
          isRequestOptions: y,
          response: p,
          outputClient: g,
        }),
      '',
    )}
`;
    }
    let h = n
        .map(({ definition: I, type: E }) =>
          E === se.BODY
            ? i != null && i.bodyTypeName
              ? `data: ${i.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : I,
        )
        .join(';'),
      x = n
        .map(({ name: I, type: E }) => (E === se.BODY ? 'data' : I))
        .join(','),
      w = `AxiosError<${p.definition.errors || 'unknown'}>`;
    i &&
      (w = i.hasErrorType
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
    export type ${$(t)}MutationError = ${w}

    export const ${P(`use-${t}`)} = <TError = ${w},
    ${h ? '' : 'TVariables = void,'}
    TContext = unknown>(${xo({
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
  xt = () => '',
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
  St = () => '',
  Rt = (e, t, r) => {
    let n = de(e),
      o = Ti(e, t),
      s = Ii(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
var Gi = [
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
  vi = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  wo = (e) => [...(e ? [] : Gi), ...vi],
  ki = (
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
      g = (c == null ? void 0 : c.formData) !== !1,
      u = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      y = ne.includes(a),
      d = H(l.tsconfig),
      h = be({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: g,
        isFormUrlEncoded: u,
      });
    if (n) {
      let w = he({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: g,
          isFormUrlEncoded: u,
          hasSignal: !1,
          isBodyVerb: y,
        }),
        R = f ? Oe(c == null ? void 0 : c.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${Q(s, 'implementation')}
 ${
   f && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>` : ''
 }) => {${h}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${w},
      ${R});
    }
  `;
    }
    let x = ye({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: g,
      isFormUrlEncoded: u,
    });
    return `export const ${t} = (
    ${Q(s, 'implementation')} ${
      f
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${h}
    return axios${d ? '' : '.default'}.${a}(${x});
  }
`;
  },
  Ci = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
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
  Ai = ({
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

export const ${P(`use-${e}`)} = <TError = ${m}>(
 ${t} ${Ci({ operationName: e, mutator: s, isRequestOptions: a })}
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
  Di = (
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
      f = P(`get-${t}-key`),
      g = Q(n, 'implementation');
    return `export const ${f} = (${g}) => [\`${c}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${Ai({
      operationName: t,
      swrProps: g,
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
  So = () => '',
  Ro = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
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
  To = () => '',
  jo = (e, t) => {
    let r = de(e),
      n = ki(e, t),
      o = Di(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
var Le = N.AXIOS,
  Po = {
    axios: { client: or, header: rr, dependencies: er, footer: nr, title: tr },
    'axios-functions': {
      client: (e, t) => {
        let { implementation: r, imports: n } = or(e, t);
        return { implementation: 'export ' + r, imports: n };
      },
      header: (e) => rr(S(O({}, e), { noFunction: !0 })),
      dependencies: er,
      footer: (e) => nr(S(O({}, e), { noFunction: !0 })),
      title: tr,
    },
    angular: {
      client: _n,
      header: zn,
      dependencies: Bn,
      footer: Kn,
      title: Qn,
    },
    'react-query': {
      client: Rt,
      header: wt,
      dependencies: bo,
      footer: St,
      title: xt,
    },
    'svelte-query': {
      client: Rt,
      header: wt,
      dependencies: Oo,
      footer: St,
      title: xt,
    },
    'vue-query': {
      client: Rt,
      header: wt,
      dependencies: $o,
      footer: St,
      title: xt,
    },
    swr: { client: jo, header: Ro, dependencies: wo, footer: To, title: So },
  },
  He = (e) => {
    let t = B(e) ? e(Po) : Po[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  we = (e = Le, t, r, n, o, s, a) => {
    let { dependencies: i } = He(e);
    return ft(t, [...i(a), ...r], n, o, s);
  },
  Tt = ({
    outputClient: e = Le,
    isRequestOptions: t,
    title: r,
    customTitleFunc: n,
    isGlobalMutator: o,
    isMutator: s,
    provideInRoot: a,
    provideIn: i,
    hasAwaitedType: p,
  }) => {
    let c = Eo(e, r, n),
      { header: m } = He(e);
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
    outputClient: e = Le,
    operationNames: t,
    title: r,
    customTitleFunc: n,
    hasMutator: o,
    hasAwaitedType: s,
  }) => {
    let a = Eo(e, r, n),
      { footer: i } = He(e),
      p;
    try {
      B(e)
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
  Eo = (e = Le, t, r) => {
    let { title: n } = He(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${$(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${$(t)}MSW` };
  },
  Fi = async (e, t) =>
    t.mock
      ? B(t.mock)
        ? t.mock(e, t)
        : yo(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  Mo = (e = Le, t, r) =>
    M(
      t,
      async (n, o) => {
        let { client: s } = He(e),
          a = s(o, r, e),
          i = await Fi(o, r);
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
var qi = '\\*/',
  ar = '*\\/',
  pr = new RegExp(qi, 'g');
function W({ description: e, deprecated: t, summary: r }, n = !1) {
  var c;
  let o = (
      Array.isArray(e)
        ? e.filter((m) => !m.includes('eslint-disable'))
        : [e || '']
    ).map((m) => m.replace(pr, ar)),
    s = [e, t, r].reduce((m, l) => (l ? m + 1 : m), 0);
  if (!s) return '';
  let a = s === 1 && n,
    i = Array.isArray(e)
      ? (c = e.find((m) => m.includes('eslint-disable'))) == null
        ? void 0
        : c.replace(pr, ar)
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
      (p += ` @summary ${r.replace(pr, ar)}`)),
    (p += a
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
var Ao = T(require('lodash.uniqby'));
var Ye = async (e, t, r, n) => {
  let { schema: o, imports: s } = await V(t, r),
    a = v(t) ? s[0].name : e,
    i = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${i} = new URLSearchParams();
`
      : `const ${i} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let c = await M(
      Object.entries(o.properties),
      async (m, [l, f]) => {
        var y;
        let { schema: g } = await V(f, r),
          u = '';
        return (
          g.type === 'object' || g.type === 'array'
            ? (u = `${i}.append('${l}', JSON.stringify(${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }))
`)
            : g.type === 'number' ||
              g.type === 'integer' ||
              g.type === 'boolean'
            ? (u = `${i}.append('${l}', ${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.toString())
`)
            : (u = `${i}.append('${l}', ${P(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              })
`),
          (y = o.required) != null && y.includes(l)
            ? m + u
            : m +
              `if(${P(a)}${
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
    ? `${p}${i}.append('data', JSON.stringify(${P(a)}))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${i}.append('data', ${P(a)}.toString())
`
    : `${p}${i}.append('data', ${P(a)})
`;
};
var Io = require('esutils');
var Fe = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = Pt(e, t);
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
  Pt = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = t === 'number',
        a =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Vi(o ? n.toString() : n.slice(1, -1))
            : q(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${Io.keyword.isIdentifierNameES5(a) ? a : `'${a}'`}: ${n},
`
      );
    }, ''),
  Vi = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
var Go = async ({ schema: e, name: t, context: r }) => {
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
var Ni = { allOf: '&', oneOf: '|', anyOf: '|' },
  Et = async ({ name: e, items: t, separator: r, context: n, nullable: o }) => {
    let s = await M(
        t,
        async (p, c) => {
          let m = e ? e + $(r) : void 0;
          m && p.schemas.length && (m = m + $(it(p.schemas.length + 1)));
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
      i = s.values.join(` ${a ? '|' : Ni[r]} `);
    if (a && e && t.length > 1) {
      let p = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${$(e)} = ${Ui(s, e)}`;
      return {
        value: `typeof ${$(e)}[keyof typeof ${$(e)}] ${o};` + p,
        imports: s.imports.map((c) => S(O({}, c), { values: !0 })),
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
  Ui = ({ values: e, isRef: t, types: r }, n) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${Pt(e[0], r[0])}} as const`
      : `{${e
          .map((s, a) => (t[a] ? `...${s},` : Pt(s, r[a])))
          .join('')}} as const`;
var vo = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (v(e)) {
    let { name: a, specKey: i } = await ve(e.$ref, r);
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
    return M(
      Object.entries(e.properties),
      async (a, [i, p], c, m) => {
        var h, x, w;
        let l = (Array.isArray(e.required) ? e.required : []).includes(i),
          f = t ? $(t) + $(i) : void 0;
        !!(
          (w =
            (x = (h = r.specs[r.target]) == null ? void 0 : h.components) ==
            null
              ? void 0
              : x.schemas) != null && w[f || '']
        ) && (f = f + 'Property');
        let u = await ie({ schema: p, propName: f, context: r }),
          y = e.readOnly || p.readOnly;
        c || (a.value += '{');
        let d = W(p, !0);
        if (
          (a.imports.push(...u.imports),
          (a.value += `
  ${d ? `${d}  ` : ''}${y ? 'readonly ' : ''}${De(i)}${l ? '' : '?'}: ${
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
              let R = await re({
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
    let a = await re({ schema: e.additionalProperties, name: t, context: r });
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
      let o = await Go({ schema: e, name: t, context: r }),
        { value: a } = o,
        i = je(o, ['value']);
      return O({ value: a + n }, i);
    }
    case 'string': {
      let a = 'string',
        i = !1;
      return (
        e.enum &&
          ((a = `'${e.enum
            .map((p) => (k(p) ? at(p) : p))
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
      let s = await vo({ item: e, name: t, context: r, nullable: n }),
        { value: a } = s,
        i = je(s, ['value']);
      return O({ value: a }, i);
    }
  }
};
var re = async ({ schema: e, name: t, context: r }) => {
  if (v(e)) {
    let { schema: o, imports: s } = await V(e, r),
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
  return S(O({}, n), { originalSchema: e, isRef: !1 });
};
var ie = async ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var a;
  let o = await re({ schema: e, name: t, context: n }),
    s = W((a = o.originalSchema) != null ? a : {});
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
    let i = Fe(o.value, o.type, t);
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
var ko = ['multipart/form-data'],
  Co = ['application/x-www-form-urlencoded'],
  Wi = async ({ mediaType: e, propName: t, context: r }) =>
    e.schema ? await ie({ schema: e.schema, propName: t, context: r }) : void 0,
  qe = async (e, t, r, n = 'unknown') => {
    let o = await Promise.all(
      e
        .filter(([s, a]) => Boolean(a))
        .map(async ([s, a]) => {
          var i, p;
          if (v(a)) {
            let {
                schema: c,
                imports: [{ name: m, specKey: l, schemaName: f }],
              } = await V(a, r),
              [g, u] =
                (p = Object.entries((i = c.content) != null ? i : {})[0]) !=
                null
                  ? p
                  : [],
              y = ko.includes(g),
              d = Co.includes(g);
            if ((!y && !d) || !(u != null && u.schema))
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
                  contentType: g,
                },
              ];
            let h = y
                ? await Ye(
                    m,
                    u == null ? void 0 : u.schema,
                    S(O({}, r), { specKey: l || r.specKey }),
                  )
                : void 0,
              x = d
                ? await Ye(
                    m,
                    u == null ? void 0 : u.schema,
                    S(O({}, r), { specKey: l || r.specKey }),
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
                contentType: g,
              },
            ];
          }
          return a.content
            ? (
                await Promise.all(
                  Object.entries(a.content).map(async ([m, l], f, g) => {
                    let u = s ? $(t) + $(s) : void 0;
                    u && g.length > 1 && (u = u + $(it(f + 1)));
                    let y = await Wi({ mediaType: l, propName: u, context: r });
                    if (!y) return;
                    let d = ko.includes(m),
                      h = Co.includes(m);
                    if ((!d && !h) || !u)
                      return S(O({}, y), { contentType: m });
                    let x = d ? await Ye(u, l.schema, r) : void 0,
                      w = h ? await Ye(u, l.schema, r, !0) : void 0;
                    return S(O({}, y), {
                      formData: x,
                      formUrlEncoded: w,
                      contentType: m,
                    });
                  }),
                )
              )
                .filter((m) => m)
                .map((m) => S(O({}, m), { key: s }))
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
    return (0, Ao.default)(
      o.flatMap((s) => s),
      'value',
    );
  };
var Do = async (e, t, r) => {
  let n = await qe([[r.override.components.requestBodies.suffix, e]], t, r),
    o = n.flatMap(({ imports: l }) => l),
    s = n.flatMap(({ schemas: l }) => l),
    a = n.map(({ value: l }) => l).join(' | '),
    i =
      ke.includes(a.toLowerCase()) || n.length > 1
        ? P(t) + r.override.components.requestBodies.suffix
        : P(a),
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
var Fo = (e, t, r) =>
  e.operationId
    ? e.operationId
    : $(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              q(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
var qo = async ({ parameters: e = [], context: t }) =>
  M(
    e,
    async (r, n) => {
      if (v(n)) {
        let { schema: o, imports: s } = await V(n, t);
        (o.in === 'path' || o.in === 'query') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [] },
  );
var Bi = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  Vo = ({ route: e, pathParams: t = [], operationId: r, context: n }) => {
    let o = Bi(e);
    return Promise.all(
      o.map(async (s) => {
        let a = t.find(
          ({ parameter: u }) =>
            q(P(u.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!a)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: i, required: p = !1, schema: c } = a.parameter,
          m = q(P(i), { es5keyword: !0 });
        if (!c)
          return {
            name: m,
            definition: `${m}${p ? '' : '?'}: unknown`,
            implementation: `${m}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let l = await re({
            schema: c,
            context: O(
              O({}, n),
              a.imports.length ? { specKey: a.imports[0].specKey } : {},
            ),
          }),
          f = `${m}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
          g = `${m}${!p && !l.originalSchema.default ? '?' : ''}${
            l.originalSchema.default
              ? `= ${ee(l.originalSchema.default)}`
              : `: ${l.value}`
          }`;
        return {
          name: m,
          definition: f,
          implementation: g,
          default: l.originalSchema.default,
          required: p,
          imports: l.imports,
        };
      }),
    );
  };
var No = (e) =>
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
var Uo = ({ body: e, queryParams: t, params: r }) => {
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
      ...r.map((i) => S(O({}, i), { type: se.PARAM })),
      ...(e.definition ? [n] : []),
      ...(t ? [o] : []),
    ];
  return No(s);
};
var Qi = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: a, schema: i, content: p } = n,
          {
            value: c,
            imports: m,
            isEnum: l,
            type: f,
            schemas: g,
            isRef: u,
          } = await re({
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
            x = Fe(c, f, h);
          return {
            definition: `${y}${!a || i.default ? '?' : ''}: ${h}`,
            imports: [{ name: h }],
            schemas: [...g, { name: h, model: x, imports: m }],
          };
        }
        return {
          definition: `${y}${!a || i.default ? '?' : ''}: ${c}`,
          imports: m,
          schemas: g,
        };
      }),
    ),
  Wo = async ({ queryParams: e = [], operationName: t, context: r }) => {
    if (!e.length) return;
    let n = await Qi(e, t, r),
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
var Bo = async (e, t, r) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let n = await qe(Object.entries(e), t, r, 'void'),
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
var zi = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var We;
    let {
        responses: a,
        requestBody: i,
        parameters: p,
        tags: c = [],
        deprecated: m,
        description: l,
        summary: f,
      } = r,
      g = Fo(r, n, e),
      u = t.override.operations[r.operationId],
      y = Object.entries(t.override.tags).reduce(
        (Be, [Ze, et]) => (c.includes(Ze) ? Me(Be, et) : Be),
        {},
      ),
      d = O(O(O({}, t.override), y), u),
      h =
        (u == null ? void 0 : u.operationName) ||
        ((We = t.override) == null ? void 0 : We.operationName),
      x = h ? h(r, n, e) : P(g),
      w = q(x, { es5keyword: !0 }),
      R = await Bo(a, w, s),
      j = await Do(i, w, s),
      I = await qo({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      E = await Wo({ queryParams: I.query, operationName: w, context: s }),
      D = await Vo({
        route: n,
        pathParams: I.path,
        operationId: g,
        context: s,
      }),
      Y = Uo({
        body: j,
        queryParams: E == null ? void 0 : E.schema,
        params: D,
      }),
      J = await ut({
        output: t.target,
        name: w,
        mutator: d == null ? void 0 : d.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      X =
        k(d == null ? void 0 : d.formData) || A(d == null ? void 0 : d.formData)
          ? await ut({
              output: t.target,
              name: w,
              mutator: d.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ge =
        k(d == null ? void 0 : d.formUrlEncoded) ||
        A(d == null ? void 0 : d.formUrlEncoded)
          ? await ut({
              output: t.target,
              name: w,
              mutator: d.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Xe = W({ description: l, deprecated: m, summary: f }),
      Ne = {
        verb: e,
        tags: c,
        summary: r.summary,
        operationId: g,
        operationName: w,
        response: R,
        body: j,
        queryParams: E,
        params: D,
        props: Y,
        mutator: J,
        formData: X,
        formUrlEncoded: Ge,
        override: d,
        doc: Xe,
      },
      Ue = await nt(d == null ? void 0 : d.transformer, s.workspace);
    return Ue ? Ue(Ne) : Ne;
  },
  Qo = ({ verbs: e, output: t, route: r, context: n }) =>
    M(
      Object.entries(e),
      async (o, [s, a]) => {
        if (pn(s)) {
          let i = await zi({
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
var zo = async ({ output: e, context: t }) =>
  M(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = jn(n),
        a = o,
        i = t;
      if (v(o)) {
        let { schema: l, imports: f } = await V(o, t);
        (a = l), (i = O(O({}, t), f.length ? { specKey: f[0].specKey } : {}));
      }
      let p = await Qo({ verbs: a, output: e, route: s, context: i }),
        c = p.reduce(
          (l, { queryParams: f, body: g, response: u }) => (
            f && l.push(f.schema, ...f.deps),
            l.push(...g.schemas),
            l.push(...u.schemas),
            l
          ),
          [],
        ),
        m = await Mo(e.client, p, {
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
var Ki = require('lodash.isempty'),
  mr = (e = {}, t, r) =>
    Ki(e)
      ? Promise.resolve([])
      : M(
          Object.entries(e),
          async (n, [o, s]) => {
            let a = await qe([[r, s]], o, t, 'void'),
              i = a.flatMap(({ imports: g }) => g),
              p = a.flatMap(({ schemas: g }) => g),
              c = a.map(({ value: g }) => g).join(' | '),
              m = `${$(o)}${r}`,
              f = `${W(s)}export type ${m} = ${c || 'unknown'};
`;
            return (
              n.push(...p),
              m !== c && n.push({ name: m, model: f, imports: i }),
              n
            );
          },
          [],
        );
var Ko = (e = {}, t, r) =>
  M(
    Object.entries(e),
    async (n, [o, s]) => {
      let a = `${$(o)}${r}`,
        { schema: i, imports: p } = await V(s, t);
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
        l = `${W(s)}export type ${a} = ${c.value || 'unknown'};
`;
      return (
        n.push(...c.schemas),
        a !== c.value && n.push({ name: a, model: l, imports: c.imports }),
        n
      );
    },
    [],
  );
var _o = async ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = await It({ item: t, name: e, context: r }),
    s = o.value === '{}',
    a = '';
  (a += W(t)),
    s &&
      (r.tslint
        ? (a += `// tslint:disable-next-line:no-empty-interface
`)
        : (a += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !ke.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (a += `export interface ${e} ${o.value}
`)
      : (a += `export type ${e} = ${o.value};
`);
  let i = o.imports.filter((c) => c.name !== e);
  return [...o.schemas, { name: e, model: a, imports: i }];
};
var _i = require('lodash.isempty'),
  Lo = async (e = {}, t, r) =>
    _i(e)
      ? []
      : M(
          Object.entries(e),
          async (o, [s, a]) => {
            let i = $(s) + r;
            if (
              (!a.type || a.type === 'object') &&
              !a.allOf &&
              !a.oneOf &&
              !a.anyOf &&
              !v(a) &&
              !a.nullable
            )
              return (
                o.push(
                  ...(await _o({ name: i, schema: a, context: t, suffix: r })),
                ),
                o
              );
            {
              let p = await re({ schema: a, name: i, context: t }),
                c = '',
                m = p.imports;
              if (((c += W(a)), p.isEnum && !p.isRef))
                c += Fe(p.value, p.type, i);
              else if (i === p.value && p.isRef) {
                let l = p.imports.find((f) => f.name === i);
                if (!l)
                  c += `export type ${i} = ${p.value};
`;
                else {
                  let f =
                    l != null && l.specKey
                      ? `${$(ct(l.specKey, t.specKey))}${p.value}`
                      : `${p.value}Bis`;
                  (c += `export type ${i} = ${f};
`),
                    (m = m.map((g) =>
                      g.name === i ? S(O({}, g), { alias: f }) : g,
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
var Ho = T(require('ibm-openapi-validator'));
var Yo = async (e) => {
  let { errors: t, warnings: r } = await (0, Ho.default)(e);
  r.length && dn(r), t.length && yn(t);
};
var Li = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await nt(t.override.transformer, r)
        : void 0;
    return M(
      Object.entries(e),
      async (s, [a, i]) => {
        let p = await bn(i, t.converterOptions, a),
          c = n ? n(p) : p;
        return t.validation && (await Yo(c)), (s[a] = c), s;
      },
      {},
    );
  },
  cr = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Li({ specs: e, input: t, workspace: o }),
      a = await M(
        Object.entries(s),
        async (c, [m, l]) => {
          var x, w, R, j, I, E;
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
            g = await Lo(
              l.openapi
                ? (R = l.components) == null
                  ? void 0
                  : R.schemas
                : O(
                    O(
                      {},
                      (0, Jo.default)(l, [
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
                    (w = (x = l.components) == null ? void 0 : x.schemas) !=
                      null
                      ? w
                      : {},
                  ),
              f,
              r.override.components.schemas.suffix,
            ),
            u = await mr(
              (j = l.components) == null ? void 0 : j.responses,
              f,
              r.override.components.responses.suffix,
            ),
            y = await mr(
              (I = l.components) == null ? void 0 : I.requestBodies,
              f,
              r.override.components.requestBodies.suffix,
            ),
            d = await Ko(
              (E = l.components) == null ? void 0 : E.parameters,
              f,
              r.override.components.parameters.suffix,
            ),
            h = [...g, ...u, ...y, ...d];
          return h.length && (c[m] = h), c;
        },
        {},
      ),
      i = await zo({
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
    return S(O({}, i), {
      schemas: S(O({}, a), {
        [n]: [...((p = a[n]) != null ? p : []), ...i.schemas],
      }),
      target: n,
      info: s[n].info,
    });
  };
var Hi = async (e, o, n) => {
    var s = o,
      { validate: t } = s,
      r = je(s, ['validate']);
    if (t)
      try {
        await lr.default.validate(e);
      } catch (i) {
        if ((i == null ? void 0 : i.name) === 'ParserError') throw i;
        (0, Zo.log)(`\u26A0\uFE0F  ${Xo.default.yellow(i)}`);
      }
    let a = (await lr.default.resolve(e, r)).values();
    return n
      ? a
      : Object.fromEntries(
          Object.entries(a).map(([i, p]) => [(0, es.resolve)(i), p]),
        );
  },
  ts = async (e, t) => {
    let { input: r, output: n } = t;
    if (A(r.target))
      return cr({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = le(r.target),
      s = await Hi(r.target, r.parserOptions, o);
    return cr({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
var cs = T(require('chalk')),
  ls = require('console'),
  us = T(require('execa')),
  Te = require('fs-extra'),
  yr = T(require('lodash.uniq')),
  hr = require('upath');
var Se = require('fs-extra'),
  fr = require('upath');
var Yi = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = s;
    return (
      (a += Un({ imports: e, target: r, isRootKey: n, specsName: o })),
      (a += e.length
        ? `

`
        : `
`),
      (a += t),
      a
    );
  },
  ur = (e, t) => (0, fr.join)(e, `/${t}.ts`);
var Ji = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = P(t.name);
    try {
      await (0, Se.outputFile)(
        ur(e, a),
        Yi({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let i = ur(e, 'index'),
        c = (await (0, Se.readFile)(i)).toString();
      !c.includes(`export * from './${a}'`) &&
        !c.includes(`export * from "./${a}"`) &&
        (await (0, Se.appendFile)(
          ur(e, 'index'),
          `export * from './${a}';
`,
        ));
    } catch (i) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${a} => ${i}`;
    }
  },
  rs = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await (0, Se.ensureFile)((0, fr.join)(e, '/index.ts')),
    Promise.all(
      t.map((a) =>
        Ji({
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
var os = require('fs-extra');
var Xi = (e, t) =>
    e +
    `${t}
`,
  Re = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => Xi(r, n), '');
var ns = require('compare-versions');
var Gt = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: a }) => a),
    o = (r == null ? void 0 : r.client) === N.ANGULAR,
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
          let g = a.mutators.some((x) => (o ? x.hasThirdArg : x.hasSecondArg)),
            u =
              (f =
                (l = (m = r.packageJson) == null ? void 0 : m.dependencies) ==
                null
                  ? void 0
                  : l.typescript) != null
                ? f
                : '4.4.0',
            y = (0, ns.compare)(u, '4.5.0', '>='),
            d = Tt({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: g,
              isGlobalMutator: !!r.override.mutator,
              title: $(t.title),
              customTitleFunc: r.override.title,
              provideInRoot: !!r.override.angular.provideIn,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: y,
            });
          (a.implementation = d.implementation + a.implementation),
            (a.implementationMSW.handler =
              d.implementationMSW + a.implementationMSW.handler);
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
  return S(O({}, s), {
    implementationMSW:
      s.implementationMSW.function + s.implementationMSW.handler,
  });
};
var ss = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: a, dirname: i } = G(n.target, { backupFilename: P(r.title) }),
      {
        imports: p,
        importsMSW: c,
        implementation: m,
        implementationMSW: l,
        mutators: f,
        formData: g,
        formUrlEncoded: u,
      } = Gt(e, r, n),
      y = s,
      d = n.schemas ? te(i, G(n.schemas).dirname) : void 0,
      h = H(n.tsconfig);
    return (
      (y += we(
        n.client,
        m,
        d
          ? [
              {
                exports: p.filter((x) => !c.some((w) => x.name === w.name)),
                dependency: d,
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
          d ? [{ exports: c, dependency: d }] : [],
          o,
          !!n.schemas,
          h,
        )),
      f && (y += U(f)),
      g && (y += U(g)),
      u && (y += U(u)),
      n.schemas || (y += Re(t)),
      (y += `

${m}`),
      n.mock &&
        ((y += `

`),
        (y += l)),
      await (0, os.outputFile)(a, y),
      [a]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${a}`;
  }
};
var vt = require('fs-extra'),
  Ve = require('upath');
var is = async ({
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
      } = G(n.target, { backupFilename: P(r.title) }),
      {
        imports: c,
        implementation: m,
        implementationMSW: l,
        importsMSW: f,
        mutators: g,
        formData: u,
        formUrlEncoded: y,
      } = Gt(e, r, n),
      d = s,
      h = s,
      x = n.schemas ? te(i, G(n.schemas).dirname) : './' + a + '.schemas',
      w = H(n.tsconfig);
    (d += we(
      n.client,
      m,
      [{ exports: c, dependency: x }],
      o,
      !!n.schemas,
      w,
      !!n.override.mutator,
    )),
      (h += xe(l, [{ exports: f, dependency: x }], o, !!n.schemas, w));
    let R = n.schemas ? void 0 : (0, Ve.join)(i, a + '.schemas' + p);
    if (R) {
      let D = s + Re(t);
      await (0, vt.outputFile)((0, Ve.join)(i, a + '.schemas' + p), D);
    }
    g && (d += U(g)),
      u && (d += U(u)),
      y && (d += U(y)),
      (d += `
${m}`),
      (h += `
${l}`);
    let j = a + (N.ANGULAR === n.client ? '.service' : '') + p,
      I = (0, Ve.join)(i, j);
    await (0, vt.outputFile)((0, Ve.join)(i, j), d);
    let E = n.mock ? (0, Ve.join)(i, a + '.msw' + p) : void 0;
    return (
      E && (await (0, vt.outputFile)(E, h)),
      [I, ...(R ? [R] : []), ...(E ? [E] : [])]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${a}`;
  }
};
var Ct = require('fs-extra'),
  At = require('upath');
var as = require('compare-versions');
var Zi = (e) => S(O({}, e), { tags: e.tags.length ? e.tags : ['default'] }),
  ea = (e, t) =>
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
  kt = (e, t) => {
    let r = t.client === N.ANGULAR,
      n = Object.values(e)
        .map(Zi)
        .reduce((o, s, a, i) => {
          let p = ea(o, s);
          return a === i.length - 1
            ? Object.entries(p).reduce((c, [m, l]) => {
                var x, w, R, j, I;
                let f = !!(
                    (x = l.mutators) != null &&
                    x.some((E) => (r ? E.hasThirdArg : E.hasSecondArg))
                  ),
                  g = Object.values(e)
                    .filter(({ tags: E }) => E.includes(m))
                    .map(({ operationName: E }) => E),
                  u =
                    (j =
                      (R =
                        (w = t.packageJson) == null
                          ? void 0
                          : w.dependencies) == null
                        ? void 0
                        : R.typescript) != null
                      ? j
                      : '4.4.0',
                  y = (0, as.compare)(u, '4.5.0', '>='),
                  d = jt({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: g,
                    title: $(m),
                    customTitleFunc: t.override.title,
                    hasMutator: !!((I = l.mutators) != null && I.length),
                    hasAwaitedType: y,
                  }),
                  h = Tt({
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
                      h.implementation + l.implementation + d.implementation,
                    implementationMSW: {
                      function: l.implementationMSW.function,
                      handler:
                        h.implementationMSW +
                        l.implementationMSW.handler +
                        d.implementationMSW,
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
        (o[s] = S(O({}, a), {
          implementationMSW:
            a.implementationMSW.function + a.implementationMSW.handler,
        })),
        o
      ),
      {},
    );
  };
var ps = async ({
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
    } = G(n.target, { backupFilename: P(r.title) }),
    c = kt(e, n),
    m = H(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, g]) => {
        try {
          let {
              imports: u,
              implementation: y,
              implementationMSW: d,
              importsMSW: h,
              mutators: x,
              formData: w,
              formUrlEncoded: R,
            } = g,
            j = s,
            I = s,
            E = n.schemas
              ? '../' + te(i, G(n.schemas).dirname)
              : '../' + a + '.schemas';
          (j += we(
            n.client,
            y,
            [{ exports: u, dependency: E }],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            (I += xe(d, [{ exports: h, dependency: E }], o, !!n.schemas, m));
          let D = n.schemas ? void 0 : (0, At.join)(i, a + '.schemas' + p);
          if (D) {
            let Ge = s + Re(t);
            await (0, Ct.outputFile)(D, Ge);
          }
          x && (j += U(x, !0)),
            w && (j += U(w, !0)),
            R && (j += U(R)),
            (j += `
${y}`),
            (I += `
${d}`);
          let Y = Pe(f) + (N.ANGULAR === n.client ? '.service' : '') + p,
            J = (0, At.join)(i, Pe(f), Y);
          await (0, Ct.outputFile)(J, j);
          let X = n.mock ? (0, At.join)(i, Pe(f), Pe(f) + '.msw' + p) : void 0;
          return (
            X && (await (0, Ct.outputFile)(X, I)),
            [J, ...(D ? [D] : []), ...(X ? [X] : [])]
          );
        } catch (u) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${f} => ${u}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
var gr = require('fs-extra'),
  dr = require('upath');
var ms = async ({
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
    } = G(n.target, { backupFilename: P(r.title) }),
    c = kt(e, n),
    m = H(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(c).map(async ([f, g]) => {
        try {
          let {
              imports: u,
              implementation: y,
              implementationMSW: d,
              importsMSW: h,
              mutators: x,
              formData: w,
              formUrlEncoded: R,
            } = g,
            j = s,
            I = n.schemas ? te(i, G(n.schemas).dirname) : './' + a + '.schemas';
          (j += we(
            n.client,
            y,
            [
              {
                exports: u.filter((Y) => !h.some((J) => Y.name === J.name)),
                dependency: I,
              },
            ],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            n.mock &&
              (j += xe(d, [{ exports: h, dependency: I }], o, !!n.schemas, m));
          let E = n.schemas ? void 0 : (0, dr.join)(i, a + '.schemas' + p);
          if (E) {
            let Y = s + Re(t);
            await (0, gr.outputFile)(E, Y);
          }
          x && (j += U(x)),
            w && (j += U(w)),
            R && (j += U(R)),
            (j += `

`),
            (j += y),
            n.mock &&
              ((j += `

`),
              (j += d));
          let D = (0, dr.join)(i, `${Pe(f)}${p}`);
          return await (0, gr.outputFile)(D, j), [D, ...(E ? [E] : [])];
        } catch (u) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${f} => ${u}`;
        }
      }),
    )
  ).flatMap((f) => f);
};
var ta = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? W({ description: r }) : r;
  },
  fs = async ({ operations: e, schemas: t, target: r, info: n }, o, s, a) => {
    let { output: i } = s,
      p = a || n.title,
      c = Object.keys(t).reduce((f, g) => {
        let y = ct(g, r).slice(1).split('/').join('-');
        return (f[g] = y), f;
      }, {}),
      m = ta(i.override.header, n);
    if (i.schemas) {
      let f = i.schemas;
      await Promise.all(
        Object.entries(t).map(([g, u]) => {
          let y = r === g,
            d = y ? f : (0, hr.join)(f, c[g]);
          return rs({
            schemaPath: d,
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
          l = await is({
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
          l = await ms({
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
          l = await ps({
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
          l = await ss({
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
        g = l
          .filter((y) => !y.endsWith('.msw.ts'))
          .map((y) => te(f, G(y).pathWithoutExtension));
      i.schemas && g.push(te(f, G(i.schemas).dirname));
      let u = (0, hr.join)(f, '/index.ts');
      if (await (0, Te.pathExists)(u)) {
        let y = await (0, Te.readFile)(u, 'utf8'),
          d = g.filter((h) => !y.includes(h));
        await (0, Te.appendFile)(
          u,
          (0, yr.default)(d).map((h) => `export * from '${h}';`).join(`
`) +
            `
`,
        );
      } else
        await (0, Te.outputFile)(
          u,
          (0, yr.default)(g).map((y) => `export * from '${y}';`).join(`
`) +
            `
`,
        );
      l = [u, ...l];
    }
    if (i.prettier)
      try {
        await (0, us.default)('prettier', [
          '--write',
          ...(i.schemas ? [G(i.schemas).dirname] : []),
          ...l,
        ]);
      } catch {
        (0, ls.log)(
          cs.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    gn(p);
  };
var gs = (e) => {
  fn(e), process.exit(1);
};
var ds = T(require('chalk'));
var Dt = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => T(require('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((i) => typeof i == 'string')
        : e;
  C(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((i) => '"' + i + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (i, p) => {
      C(`Change detected: ${i} ${p}`);
      try {
        await t();
      } catch (c) {
        C(ds.default.red(c));
      }
    });
};
var Je = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await Lt(['**/*', '!**/*.d.ts', ...o], G(t.output.target).dirname)),
        t.output.schemas &&
          (await Lt(['**/*', '!**/*.d.ts', ...o], G(t.output.schemas).dirname)),
        C(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await ts(e, t);
    await fs(n, e, t, r);
  },
  ys = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await Je(t, n, r);
        } catch (o) {
          C(Or.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else gs('Project not found');
      return;
    }
    return M(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Je(t, s, o));
        } catch (a) {
          C(Or.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${a}`));
        }
        return n;
      },
      [],
    );
  },
  Os = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await mt(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = (0, hs.dirname)(r),
      a = await (B(n) ? n() : n),
      i = await M(
        Object.entries(a),
        async (c, [m, l]) => ((c[m] = await ht(l, s, t)), c),
        {},
      ),
      p = Object.entries(i)
        .filter(
          ([c]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            c === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: c }]) => c.target)
        .filter((c) => k(c));
    (t == null ? void 0 : t.watch) && p.length
      ? Dt(
          t == null ? void 0 : t.watch,
          () => ys(i, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await ys(i, s, t == null ? void 0 : t.projectName);
  };
var Ft = (0, bs.cac)('orval');
un({ name: ce.name, version: ce.version, description: ce.description });
Ft.version(ce.version);
Ft.command(
  '[config]',
  'generate client with appropriate type-signatures from OpenAPI specs',
  { ignoreOptionDefaultValue: !0 },
)
  .option('-o, --output <path>', 'output file destination')
  .option('-i, --input <path>', 'input file (yaml or json openapi specs)')
  .option('-c, --config <path>', 'override flags by a config file')
  .option('-p, --project <name>', 'focus a project of the config')
  .option('-m, --mode <name>', 'default mode that will be used')
  .option('-c, --client <name>', 'default client that will be used')
  .option('--mock', 'activate the mock')
  .option(
    '-w, --watch [path]',
    'Watch mode, if path is not specified, it watches the input target',
  )
  .option('--clean [path]', 'Clean output directory')
  .option('--prettier [path]', 'Prettier generated files')
  .option('--tslint [path]', 'tslint generated files')
  .option('--tsconfig [path]', 'path to your tsconfig file')
  .action(async (e, t) => {
    if (k(t.input) && k(t.output)) {
      let r = await ht({
        input: t.input,
        output: {
          target: t.output,
          clean: t.clean,
          prettier: t.prettier,
          tslint: t.tslint,
          mock: t.mock,
          client: t.client,
          mode: t.mode,
          tsconfig: t.tsconfig,
        },
      });
      if (t.watch)
        Dt(
          t.watch,
          async () => {
            try {
              await Je(process.cwd(), r);
            } catch (n) {
              C(br.default.red(`\u{1F6D1}  ${n}`));
            }
          },
          r.input.target,
        );
      else
        try {
          await Je(process.cwd(), r);
        } catch (n) {
          C(br.default.red(`\u{1F6D1}  ${n}`));
        }
    } else
      await Os(t.config, {
        projectName: t.project,
        watch: t.watch,
        clean: t.clean,
        prettier: t.prettier,
        tslint: t.tslint,
        mock: t.mock,
        client: t.client,
        mode: t.mode,
        tsconfig: t.tsconfig,
      });
  });
Ft.help();
Ft.parse(process.argv);

# npm-prune

> 减少 `node_modules` 文件夹体积大小，优化本地和容器环境的存储空间，支持 monorepo

# 安装

```bash
npm i -g npm-prune
```

# 使用

## 终端

默认情况下，只会删除 `LICENSE`、`md` 和一些无关项目运行的文件：

```bash
npm-prune
```

如果希望部署到云服务等环境，可以使用 `--production` 选项，它会将 `node_modules` 中的 `.map`、`.ts`、所有 eslint 配置和 `.d.ts` 等文件删除：

```bash
npm-prune --production
```

## `script` 脚本

在 `package.json` 配置 `script` 字段：

```json
"script": {
  "prune": "npm-prune"
}
```

之后便可以通过 `npm` 等包管理工具运行：

```bash
npm run prune
```

# 效果

以 `vitest` 仓库为例

**原始大小：**

![原始大小](https://plumbiu.github.io/blogImg/image-20240106151554239.png)

**npm-prune：**

![npm-prune](https://plumbiu.github.io/blogImg/image-20240106151755806.png)

**npm-prune --production：**

![npm-prune --production](https://plumbiu.github.io/blogImg/image-20240106151920450.png)

# 详细配置

## 非 production 选项

**文件：**

```js
;[
  // LICENSE & markdown
  'LICENSE*',
  'license*',
  '*.md',
  '*.markdown',
  '*.mdx',
  '*.tgz',
  'changelog*',
  // testing
  '*.test.*',
  '*.spec.*',
  '*.bench.*',
  // code style
  '*tslint',
  '.eslintrc',
  '.eslintrc.js',
  '.eslintrc.yml',
  '.prettier*',
  '.*ignore',
  '.editorconfig',
  // lock file
  '.yarn-integrity',
  '.yarn-metadata.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'package-lock.json',
  // typescript
  'ThirdPartyNoticeText.txt',
  '*.tsbuildinfo',
  'tsconfig.json',
  'tsconfig.node.json',
  // env
  '.env*',
  // esm and commonjs
  '.travis.yml',
  // debug
  '*.log',
  // git
  '.gitkeep',
  // misc
  '*.pem',
  // other
  '*.suo',
  '*.ntvs*',
  '*.njsproj',
  '*.sln',
  '*.sw?',
  '.nyc*',
]
```

**目录：**

```js
;[
  // testing
  'test*',
  '__test__',
  '__tests__',
  'coverage*',
  // example
  'example*',
  // config
  '.vscode',
  '.github',
  '.idea',
  // benchmark
  'bench*',
  // debug
  'logs',
  // git
  '.git',
  // docs
  'docs',
  'doc',
  'changelog',
]
```

## production 选项

包含非 production 选项的配置

**文件：**

```js
;['*eslint*', '*.map', '*.ts', '*.cts', '*.mts', '*.d.ts', '*.d.mts', '*.d.cts']
```

**目录：**

```js
;['typescript', '*eslint*', '@types']
```

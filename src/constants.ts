export const safeRmFiles = [
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

export const safeRmDirs = [
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

export const proRmFiles = [
  '*eslint*',
  '*.map',
  '*.ts',
  '*.cts',
  '*.mts',
  '*.d.ts',
  '*.d.mts',
  '*.d.cts',
]

export const proRmDirs = ['typescript', '*eslint*', '@types']

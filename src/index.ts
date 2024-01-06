import { cac } from 'cac'
import { safeRmFiles, safeRmDirs, proRmFiles, proRmDirs } from './constants'
import { findNodeModules, rmGlob } from './utils'

const cli = cac('npm-prune')

cli
  .command('[path]')
  .option('--production', 'remove .map, *.ts file', {
    default: false,
  })
  .action(async (_, { production }) => {
    if (production) {
      safeRmFiles.push(...proRmFiles)
      safeRmDirs.push(...proRmDirs)
    }
    const modules = await findNodeModules()
    for (const module of modules) {
      await rmGlob(module)
    }
  })

cli.help()
cli.parse()

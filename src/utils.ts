import fs from 'node:fs/promises'
import { safeRmDirs, safeRmFiles } from './constants'
import micromatch from 'micromatch'
import path from 'node:path'

export async function findNodeModules(p: string = './') {
  const modules: string[] = []
  const dirs = await fs.readdir(p, { withFileTypes: true })
  for (const dir of dirs) {
    const newPath = path.join(p, dir.name)
    if (dir.isDirectory()) {
      if (dir.name === 'node_modules') {
        modules.push(newPath)
      } else {
        modules.push(...(await findNodeModules(newPath)))
      }
    }
  }
  return modules
}

export async function rmGlob(p: string) {
  await fs.chmod(p, '0777')
  const dirs = await fs.readdir(p, { withFileTypes: true })
  if (dirs.length === 0) {
    await fs.rmdir(p)
  } else {
    await Promise.all(
      dirs.map(async (item) => {
        const newPath = path.join(p, item.name)
        if (item.isDirectory()) {
          if (micromatch.isMatch(item.name.toLocaleLowerCase(), safeRmDirs)) {
            await fs.rm(newPath, { recursive: true, force: true })
          } else {
            await rmGlob(newPath)
          }
        } else {
          if (
            micromatch.isMatch(item.name.toLocaleLowerCase(), safeRmFiles)
          ) {
            await fs.rm(newPath)
          }
        }
      }),
    )
  }
}

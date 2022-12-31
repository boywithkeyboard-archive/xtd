import slash from 'https://esm.sh/slash@5.0.0'
import { ensureDir } from 'https://deno.land/std@v0.170.0/fs/mod.ts'
import { files } from './files.ts'

export const copyDir = async (from: string, to: string) => {
  for await (const file of files(from)) {
    if (file.includes('.git'))
      continue

    const filePath = file.replace(from, to)
    , dirPathArray = slash(file.replace(from, to)).split('/')

    dirPathArray.pop()

    const dirPath = dirPathArray.join('/')

    await ensureDir(dirPath)

    await Deno.copyFile(file, filePath)
  }
}

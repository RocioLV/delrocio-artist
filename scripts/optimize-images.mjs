
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const inputDir = 'src/assets'
const outputDir = 'src/assets/optimized'

await mkdir(outputDir, { recursive: true })

const files = await readdir(inputDir)

for (const file of files) {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) continue

  const source = path.join(inputDir, file)
  const name = path.parse(file).name
  const destination = path.join(
    outputDir,
    `${name}.webp`
  )

  await sharp(source)
    .rotate()
    .resize({
      width: 1800,
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 5,
    })
    .toFile(destination)

  console.log(`Optimizada: ${file}`)
}

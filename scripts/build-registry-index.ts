import { readFile, writeFile } from "node:fs/promises"

type RegistryFile = {
  path: string
  type: string
}

type RegistryItem = {
  name: string
  type: string
  files: ReadonlyArray<RegistryFile>
}

/**
 * registry.json から ui.shadcn.com 互換の /r/index.json（コンテンツ抜きの一覧）を生成する
 */
export async function buildRegistryIndex(): Promise<null | Error> {
  const registryText = await readFile("registry.json", "utf-8")

  const registry: unknown = JSON.parse(registryText)

  if (typeof registry !== "object" || registry === null || !("items" in registry)) {
    return new Error("registry.json に items がない")
  }

  const items = (registry as { items: ReadonlyArray<RegistryItem> }).items

  const indexEntries = items.map((item) => ({
    name: item.name,
    type: item.type,
    files: item.files.map((file) => ({ path: file.path, type: file.type })),
  }))

  await writeFile("public/r/index.json", `${JSON.stringify(indexEntries, null, 2)}\n`)

  return null
}

const buildResult = await buildRegistryIndex()

if (buildResult instanceof Error) {
  console.error(buildResult.message)
  process.exit(1)
}

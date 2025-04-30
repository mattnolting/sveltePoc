import { watch } from 'fs'
import { load } from 'js-yaml'

export const startFigmaSync = async (config) => {
  const watchMode = process.argv.includes('--with-figma')
  if (!watchMode) return

  // Implementation here
}
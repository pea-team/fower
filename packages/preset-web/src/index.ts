import { Preset } from '@styli/types'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWeb: Preset = {
  unit: 'px',
  prefix: '',
  important: false,
  theme,
  plugins,
}

export default presetWeb

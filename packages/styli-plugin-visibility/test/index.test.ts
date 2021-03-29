import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-visibility', () => {
  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('visibility')).toEqual(true)
  })

  describe('onAtomStyleCreate', () => {
    // <View boxSizing="border-box"></View>
    it('visibility', () => {
      const atom = {
        propKey: 'visibility',
        propValue: 'hidden',
        style: {},
      } as Atom

      const newAtom = {
        propKey: 'visibility',
        propValue: 'hidden',
        style: { visibility: 'hidden' },
      }
      expect(onAtomStyleCreate!(atom, parser)).toMatchObject(newAtom)
    })
  })
})

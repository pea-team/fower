import { styli } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-text-transform', () => {
  styli.configure({ unit: 'px' })

  const { isMatch, onAtomStyleCreate } = plugin()
  const parser = {} as any
  it('isMatch', () => {
    expect(isMatch!('normalcase')).toEqual(true)
    expect(isMatch!('lowercase')).toEqual(true)
  })

  it('onAtomStyleCreate', () => {
    const atom1 = new Atom({
      propKey: 'normalcase',
      propValue: true,
      key: 'normalcase',
      style: {},
    })

    const newAtom1 = new Atom({
      propKey: 'normalcase',
      key: 'normalcase',
      propValue: true,
      style: { textTransform: 'none' },
    })

    expect(onAtomStyleCreate!(atom1, parser)).toMatchObject(newAtom1)

    const atom2 = new Atom({
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      style: {},
    })
    const newAtom2 = new Atom({
      key: 'lowercase',
      propKey: 'lowercase',
      propValue: true,
      style: { textTransform: 'lowercase' },
    })
    expect(onAtomStyleCreate!(atom2, parser)).toMatchObject(newAtom2)
  })
})

// import {capitalize, randFromArray} from '~/helpers/utils'
// import nouns from '~/data/nouns.yaml'
// import adjectives from '~/data/adjectives.yaml'
// const generateTheme = () => capitalize(`${randFromArray(nouns)} ${randFromArray(adjectives)}`)

import {
  generate,
  determinant,
  noun,
  adjective,
  adverb,
  oneOf,
  word,
  comma
} from '@autheur/generator'
import { capitalize, randFromArray } from '~/helpers/utils'
import themes from '~/data/themes.yaml'

const getExistingTheme = () => randFromArray(themes)

const people = [
  'maman',
  'papa',
  'tonton',
  'tata',
  'grand père',
  'grand mêre',
  "l'inconnu"
]

function getRandomTheme() {
  return capitalize(
    generate(
      randFromArray([
        [determinant(), noun()],
        [determinant(), adjective(), noun()],
        [adjective(), noun()],
        [determinant(), adjective(), noun(), adverb(), adjective()],
        [adjective(), noun(), adverb(), adjective()],
        [determinant(), noun(), adverb(), adjective()],
        [noun(), adverb(), adjective()],
        [
          determinant({ types: ['defined'] }),
          noun(),
          oneOf(people.map(s => `de ${s}`))
        ],
        [adjective(), word('et'), adjective()],
        [adverb(), adjective()],
        [adjective(), comma(), adjective(), word('et'), adjective()],
        [
          determinant({ types: ['defined', 'demonstrative', 'possessive'] }),
          noun({ isPlural: false }),
          word('est'),
          adjective()
        ],
        [
          determinant({ types: ['defined', 'demonstrative', 'possessive'] }),
          noun({ isPlural: false }),
          word('est'),
          adverb(),
          adjective()
        ],
        [
          determinant({ types: ['defined', 'demonstrative', 'possessive'] }),
          noun({ isPlural: true }),
          word('sont'),
          adjective()
        ],
        [
          determinant({ types: ['defined', 'demonstrative', 'possessive'] }),
          noun({ isPlural: true }),
          word('sont'),
          adverb(),
          adjective()
        ]
      ])
    )
  )
}

function generateTheme(): string {
  return randFromArray([getExistingTheme, getRandomTheme])() as string
}

export { generateTheme }

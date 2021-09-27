// import {capitalize, randFromArray} from '~/helpers/utils'
// import nouns from '~/data/nouns.yaml'
// import adjectives from '~/data/adjectives.yaml'
// const generateTheme = () => capitalize(`${randFromArray(nouns)} ${randFromArray(adjectives)}`)

import {randFromArray} from '~/helpers/utils'
import themes from '~/data/themes.yaml'

const generateTheme = () => randFromArray(themes)

export {
  generateTheme
}

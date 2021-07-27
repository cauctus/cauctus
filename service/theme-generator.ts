import {capitalize, randFromArray} from '~/helpers/utils'

import nouns from '~/data/nouns.yaml'
import adjectives from '~/data/adjectives.yaml'

const generateTheme = () => capitalize(`${randFromArray(nouns)} ${randFromArray(adjectives)}`)

export {
  generateTheme
}

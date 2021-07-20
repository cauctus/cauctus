import {nouns, adjectives} from '~/data/dictionary'
import {capitalize, randFromArray} from '~/helpers/utils'

const generateTheme = () => capitalize(`${randFromArray(nouns)} ${randFromArray(adjectives)}`)

export {
  generateTheme
}

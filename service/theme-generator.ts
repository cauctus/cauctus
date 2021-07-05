import {nouns, adjectives} from '~/data/dictionary'

const randFromArray = <T extends unknown>(array: T[]): T => array[Math.floor(Math.random() * array.length)]
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const generateTheme = () => capitalize(`${randFromArray(nouns)} ${randFromArray(adjectives)}`)

export {
  generateTheme
}

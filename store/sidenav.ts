export const state = () => ({
  open: false
})

export const mutations = {
  toggle(state: {open: boolean}) {
    state.open = !state.open
  },
  open(state: {open: boolean}) {
    state.open = true
  },
  close(state: {open: boolean}) {
    state.open = false
  },
  set(state: {open: boolean}, value:boolean) {
    state.open = value
  }
}

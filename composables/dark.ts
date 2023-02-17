import { Dark } from 'quasar'

export const useDark = () => {
  return {
    set: (status: boolean) => Dark.set(status),
    toggle: () => Dark.toggle(),
  }
}

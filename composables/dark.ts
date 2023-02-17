import { Dark } from 'quasar'

export const useDark = () => {
  const isActive = useState('isActive', () => Dark.isActive ?? true)

  return {
    set: (status: boolean) => {
      isActive.value = status
      Dark.set(isActive.value)
    },
    toggle: () => {
      Dark.toggle()
      isActive.value = Dark.isActive
    },
    isActive,
  }
}

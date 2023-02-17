import { Dark } from 'quasar'

export const useDark = () => {
  const isActive = useState('isActive', () => false)

  function set(value: boolean) {
    Dark.set(value)
    isActive.value = value
  }

  function toggle(): void {
    Dark.toggle()
    isActive.value = Dark.isActive
  }

  function load(): Promise<void> {
    return new Promise((resolve) => {
      const cookie: string = localStorage.getItem('isDark') ?? 'true'

      console.log(`[Dark Mode]: ${isActive.value}`)
      Dark.set(cookie === 'true')

      watch(isActive, (newValue: boolean) => {
        localStorage.setItem('isDark', newValue.toString())
      })
      resolve()
    })
  }

  return {
    set,
    isActive,
    load,
    toggle,
  }
}

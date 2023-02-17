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

  const cookie: string = localStorage.getItem('isDark') ?? 'true'
  isActive.value = cookie === 'true'
  Dark.set(isActive.value)

  watch(isActive, (newValue: boolean) => {
    console.log(`[Dark Mode]: ${newValue}`)
    localStorage.setItem('isDark', newValue.toString())
  })

  return {
    set,
    isActive,
    toggle,
  }
}

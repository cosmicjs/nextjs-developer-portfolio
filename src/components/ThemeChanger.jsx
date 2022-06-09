import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = ({ styles }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      title={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={styles}
    >
      {resolvedTheme === 'dark' ? (
        <span className="block w-4 h-4 bg-white rounded-full group-hover:-translate-y-1 transition-transform" />
      ) : (
        <span className="block w-4 h-4 bg-black rounded-full group-hover:-translate-y-1 transition-transform" />
      )}
    </button>
  )
}

export default ThemeChanger

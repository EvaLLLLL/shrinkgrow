import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <ShrinkButton />
    </div>
  )
}

const MIN = 100,
  MAX = 300,
  STEP = 50,
  TIME = 500

const ShrinkButton: React.FC = () => {
  const [status, setStatus] = React.useState<'shrink' | 'grow'>('shrink')
  const [n, setN] = React.useState(MIN)

  const timerRef = React.useRef<NodeJS.Timer | undefined>()

  const shrinkOrGrow = () => {
    timerRef.current = setInterval(() => {
      setN(n => (status === 'shrink' ? n + STEP : n - STEP))
      setStatus(status === 'shrink' ? 'grow' : 'shrink')
    }, TIME)
  }

  React.useEffect(() => {
    if (n >= MAX || n <= MIN) {
      clearInterval(timerRef.current)
    }
  }, [n])

  return (
    <button onClick={shrinkOrGrow} style={{ width: n, height: n }}>
      shrinkOrGrow
    </button>
  )
}

export default App

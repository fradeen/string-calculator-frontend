import { useCallback, useState } from 'react'
import './App.css'
import sum from './utils/stringCalculator'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | undefined>(undefined)
  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (inputValue) {
        //console.log(inputValue)
        setResult(sum(inputValue))
      }
    } catch (error) {
      setError(error?.toString())
    }
  }, [inputValue])

  return (
    <main id='main' style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1>String Calculator</h1>
      <div style={{ textAlign: 'left' }}>
        {result && <span style={{ color: 'green' }}><b id='result'>Result: </b>{result}</span>}
        {error && <span style={{ color: 'red' }}><b id='error'>Error: </b>{error}</span>}
      </div>
      <form onSubmit={onSubmit} id='string_calculator_form' role='form'>
        <label htmlFor='userInput'>Enter String</label>
        <input type="text"
          id='userInput'
          name='input'
          value={inputValue}
          onFocusCapture={() => {
            setResult(null)
            setError(undefined)
          }}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type='submit'>calculate</button>
      </form>
    </main>
  )
}

export default App

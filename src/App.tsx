import './App.css'

function App() {

  return (
    <main id='main'>
      <h1>String Calculator</h1>
      <form id='string_calculator_form' role='form'>
        <label htmlFor='userInput'>Enter String</label>
        <input type="text" id='userInput' name='input' />
        <button type='submit'>calculate</button>
      </form>
    </main>
  )
}

export default App

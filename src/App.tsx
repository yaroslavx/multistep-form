import { useState } from 'react'
import { AccountForm } from './components/AccountForm'
import { AddressForm } from './components/AddressForm'
import { UserForm } from './components/UserForm'
import { useMultistepForm } from './hooks/useMultistepForm'

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />])
  return (
    <div style={{
      position: 'relative',
      background: 'white',
      border: '1px solid black',
      padding: "2rem",
      margin: '1rem',
      borderRadius: '.5rem',
      fontFamily: 'Arial'
    }}>
      <form>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='button' onClick={next}>{isLastStep ? 'Finish' : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App

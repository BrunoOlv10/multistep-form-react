import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import { useForm } from './hooks/UseForm'

import './App.css'

function App() {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]

  const {currentStep, currentComponent, changeStep} = useForm(formComponents)

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
        <div className="form-container">
          <p>etapas</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

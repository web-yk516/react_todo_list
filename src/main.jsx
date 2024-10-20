import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './components/pages/Todo.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)

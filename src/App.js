import { useRef, useState, useEffect, useMemo } from 'react'
import './App.css';

import Test from './Test/test'

function App() {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [show, setShow] = useState(false)
  const ref = useRef()

  /*
  MONTADO
  ACTUALIZADO
  DESMONTADO
  */

  useEffect(() => {
    console.log('COMPONENTE MONTADO')
  }, [])

  useEffect(() => {
    console.log('COMPONENTE ACTUALIZADO')
  }, [text])

  // useEffect(() => {
  //   console.log('COMPONENTE DESMOTADO')
  // }, [])

  const jsx = () => {
    // console.log('retornando jsx')
  }

  const color = useMemo(() => {
    return (Math.random() * 10000000000).toString().split('.')[1]
  }, [text2])

  const renderJsx = useMemo(() => jsx(), [text])

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleOnChange2 = (e) => {
    setText2(e.target.value)
  }

  // console.log('color', `#${color}`)
  return (
    <div style={{ paddingLeft: '100px' }}>
      <input type="text" value={text} onChange={handleOnChange} ref={ref} id="text" />
      <input type="text" value={text2} onChange={handleOnChange2} ref={ref} id="text" />
      <button
        style={{ background: `#${color}` }}
        id="btn"
        onClick={() => {
          ref.current.focus()
          setShow(prevState => !prevState)
          }
        }
      >
        Focus
      </button>
      <br />
      {show && <Test />}
      PROBANDO HOOKS
      {renderJsx}
    </div>
  );
}

export default App;

import { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    return () => {
      console.log('COMPONENTE DESMOTANDO')
    }
  })

  return (
    <div>
      COMPONENTE TEST| |||||
    </div> 
  )
}

export default Test

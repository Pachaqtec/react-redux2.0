import { useState }  from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../layout/layout'
import Input from '../../components/Input'

import { updateNickname } from '../../actions/nickname'

const Home = () => {
  const dispatch = useDispatch()
  const [nick, setNick] = useState('')

  const handleOnChange = ({ target }) => {
    setNick(target.value)
    dispatch(updateNickname(target.value))
  }

  return (
    <Layout>
      <div>
        Home
        <Input
          value={nick}
          onChange={handleOnChange}
        />
      </div>
    </Layout>
  )
}

export default Home

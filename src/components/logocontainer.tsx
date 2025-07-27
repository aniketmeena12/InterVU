import { Link } from 'react-router-dom'

const LogoContainer = () => {
  return (
    <Link to={"/"}>
        <img src="assets\svg\logo1.svg" alt=""  className='w-10 h-10 object-contain'/>
    </Link>
  )
}

export default LogoContainer

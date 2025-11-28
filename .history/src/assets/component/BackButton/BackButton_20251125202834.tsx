import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 interface BackBtnProps{
To:string
 }
const BackButton = ({To} :BackBtnProps) => {
  return (
     <Link to={To}>
      <Image src="/public/image/sahm.svg"alt="back to"className="border border-1 border-black rounded-circle p-3 "/>
    </Link>
  )
}

export default BackButton

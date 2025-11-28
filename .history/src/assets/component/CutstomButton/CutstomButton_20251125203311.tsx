import { Button } from "react-bootstrap"
import type { BtnCustomProps } from "../../interfaces/Type"
import './CutstomButton.css'

const CutstomButton = ({ name , classExtra, onClick, ...props }:BtnCustomProps) => {
  return (
   <Button className={`btn-custom border border-0 rounded-1 text-white fw-medium lh-1 ls-normal bg-orange ${classExtra}`}
        onClick={onClick}
        {...props}
      >
        {name}
      </Button>
  )
}

export default CutstomButton

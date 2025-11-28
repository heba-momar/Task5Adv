import type { ItemForm } from "../../interfaces/interfaces"
import BackButton from "../BackButton/BackButton"
import './FormItem.css'
const FormItem = ({TittelForm}:ItemForm) => {
  return (
    <div className=" formWrapper container-lg ">
      <BackButton To="/dashbord/Items"/>
      <h2 className="formTitle fw-semibold fs-60"> {TittelForm}</h2>
    </div>
  )
}

export default FormItem

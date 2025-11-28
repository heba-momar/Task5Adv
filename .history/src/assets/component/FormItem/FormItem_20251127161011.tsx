import { Form } from "react-bootstrap"
import type { ItemForm } from "../../interfaces/interfaces"
import BackButton from "../BackButton/BackButton"
import './FormItem.css'
const FormItem = ({TittelForm}:ItemForm) => {
  return (
    <div className=" formWrapper container-lg ">
      <BackButton To="/dashbord/Items"/>
      <h2 className="formTitle fw-semibold fs-60"> {TittelForm}</h2>
      <Form>
        <div className="d-flex gap-5 align-items-start flex-wrap flex-lg-nowrap">
            <div className="d-flex flex-column formFields flex-fill">

            </div>

        </div>
      </Form>
    </div>
  )
}

export default FormItem

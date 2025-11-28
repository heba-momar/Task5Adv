import React from 'react'
import type { ModalProps } from '../../interfaces/Type'
import { Modal } from 'react-bootstrap'
import CutstomButton from '../CutstomButton/CutstomButton'

const ModalCustom = ({show,onHide,body,onSubmit,submitText = 'Submit', cancelText = 'Cancel'}:ModalProps) => {
  return (
    <Modal show={show} onHide={onHide} className=''
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer className='d-flex justify-content-around border border-0 flex-md-row flex-column'>
        {onSubmit && (
          <CutstomButton name={submitText} classExtra="modal-custom-btn p-3 fs-2"  type="button"  onClick={onSubmit}/>
        )}
        <CutstomButton name={cancelText} classExtra="modal-custom-btn p-3 fs-2"  type="button"  onClick={onHide}/>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCustom

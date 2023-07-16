import PropTypes from 'prop-types';
import { useContext } from 'react';
import { apiContext } from '../context/apiContext';

const Modal = ({children}) => {

    const { closeButtonRef } = useContext(apiContext)

  return (
    <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeButtonRef}></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
    children: PropTypes.node.isRequired,
}
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDish } from '../../../redux/features/menuSlice'
import './DeleteModal.css'

const DeleteModal = ({ toggler, dishId }) => {

    const dispatch = useDispatch()

    const delDish = () => {
        dispatch(deleteDish(dishId))
        toggler(null)
    }

    return (
        <div id="id01" className="modal">
            <span onClick={toggler} className="close" title="Close Modal">&times;</span>
            <div className="modal-content">
                <div className="container pull-up">
                    <h4 className="text-start p-2 pb-0 modal-header">DELETE</h4>
                    <hr className='my-1' />
                    <div className="modal-body">
                        <h3>Are you sure?</h3>
                        <p>You can't undo this action</p>
                    </div>
                    <hr />
                    <div className="modal-footer">
                        <button className="cancel-btn me-3" onClick={toggler}>CANCEL</button>
                        <button className="delete-btn w-25" onClick={delDish}>
                            DELETE
                        </button>
                    </div>
                </div>
                {/* <div className="modal">
                    <div className="modal-dialog modal-dialog-centered">
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default DeleteModal
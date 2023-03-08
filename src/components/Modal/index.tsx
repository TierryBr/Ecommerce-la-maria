import React, { useContext } from 'react';
import { deleteItem } from '@/store/Actions';
import { DataContext } from '@/store/GlobalState';

const Modal = () => {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;

  const handleSubmit = () => {
    dispatch(deleteItem(modal.data, modal.id, 'ADD_CART'));
    dispatch({ type: 'ADD_MODAL', payload: {} });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {modal.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Deseja remover este item ?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn_modal"
              data-bs-dismiss="modal"
              style={{ backgroundColor: 'gray' }}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn_modal"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { Component } from 'react';

import { closeModal } from '../../actions';

import store from '../../store';
import './modal.css';

export default class Modal extends Component {
    renderIngsLines() {
        return this.props.modalData.ingsLines.map((line, key) => {
            return (
                <div key={key} className="modal__line">
                    {line}
                </div>
            )
        })
    }

    render() {

        const { modalWrapperClassList } = this.props;
        const { image, label, ingsLines, calories } = this.props.modalData;
 
        let modalClassList = "modal position-fixed";

        if(modalWrapperClassList === 'modal-wrapper modal-wrapper_active position-absolute') {
            modalClassList = "modal modal_active position-absolute";
        }
 
        return (
            <div className={modalWrapperClassList}>
                <div onClick={()=>{
                    store.dispatch(closeModal());
                }} className="modal-closer position-absolute">
                    ×
                </div>
                <div className={modalClassList}>
                    <h2 className="modal__title">{label}</h2>
                    <div className="modal__img-wrapper">
                        <img className="modal__img" src={image} alt={label}/>
                    </div>
                    <h3 className="modal__lines-title">Ingredients:</h3>
                    <p className="modal__lines">
                        { this.renderIngsLines() }
                    </p>
                </div>
            </div>
        )
    }
}
import React, { useState, useRef } from 'react';
import style from './Popup.module.css';

const Popup = ({ setIsPopup, addNewPerson }) => {
    const overlay = useRef();
    const name = useRef();
    const profession = useRef();
    const age = useRef();
    
    const closePopup = (e) => {
        const target = e.target;
        if (target === overlay.current) {
            setIsPopup(false);
        }
    }

    const addPerson = e => {
        e.preventDefault();
        if (name.current.value && profession.current.value && age.current.value) {
            const date = new Date();
            addNewPerson({
                name: name.current.value,
                profession: profession.current.value,
                age: age.current.value,
                id: date.getTime()
            })

        setIsPopup(false);
        } 
        
    }



    return (
        <div ref={overlay} onClick={closePopup} className={style.overlay}>
            <button onClick={() => { setIsPopup(false) }} className={style.close}></button>

            <div className={style.popup}>
                <form onSubmit={addPerson} className={style.form}>
                    <input ref={name} className={style.input} type="text" placeholder="Имя сотрудника" />
                    <input ref={profession} className={style.input} type="text" placeholder="Профессия" />
                    <input ref={age} className={style.input} type="text" placeholder="Возраст" />
                    <button className={style.add}>Добавить</button>
                </form>
            </div>
        </div>
    )
}

export default Popup;
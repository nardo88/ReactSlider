import React, { useContext, useState, } from 'react';
import { LocalContext } from '../App'
import style from './List.module.css';
import ListItem from './ListItem/ListItem'

export const List = () => {

    const {localState, setLocalState} = useContext(LocalContext);

    const [transform, setTransform] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)

    
 
    
    const moveRight = () => {
        if (transform > (-sliderWidth * (localState.length - 2)) ){
            setTransform(transform - sliderWidth)
        }
    }

    const moveLeft = () => {
        if (transform < 0){
            setTransform(transform + sliderWidth)
        } 

    }

    const getWidth = value => {
        setSliderWidth(value);
    }

    const getKey = id => {
        setLocalState(localState.filter(item => item.id !== id));
    }
    


    return (
        <div className={style.wrapper}>
            <ul style={{transform: `translateX(${transform}px)`}}  className={style.list}>
                {localState.map(item => <ListItem key={item.id} id={item.id} name={item.name} age={item.age} profession={item.profession} getWidth={getWidth} getKey={getKey}  />)}
            </ul>
           { transform < 0 && <button onClick={moveLeft} className={style.prev}></button>}
           { transform > (-sliderWidth * (localState.length - 2)) && <button onClick={moveRight} className={style.next}></button> }
        </div>
    )
}

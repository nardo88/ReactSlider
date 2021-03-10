import React, {useEffect} from 'react';
import style from './ListItem.module.css';

const ListItem = ({name, profession, age, getWidth, id, getKey}) => {

    const slide = React.useRef();

    useEffect(() => {
        if (slide.current){
            getWidth(slide.current.offsetWidth);
        }
    })
    

   
    return(
        <li ref={slide} className={style.item}>
            <h3 className={style.name}>{name}</h3>
            <div className={style.profession}>{profession}</div>
            <div className={style.age}>{age}</div>
            <button onClick={() => {getKey(id)}} className={style.delete}></button>
        </li>
    )
}


export default ListItem;
import React, {ChangeEvent, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

type FullInputPropsType = {
    addMessageFunction: (title:string)=>void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler =(event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = ()=> {
        props.addMessageFunction(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
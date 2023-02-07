import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList ,UpdateList } from '../store/list/listSlice';
import { useState } from 'react';


const ListItem = ({id, content}) => {
    const dispatch = useDispatch();
    const [inputValue,setInputValue] =  useState('');

    const onDelete = (e)=>{
        e.preventDefault();
        dispatch(deleteList(id));
    }

    const onUpdate = (e)=>{
        e.preventDefault();
        if(inputValue){
             dispatch(UpdateList({id,content:inputValue}));
             setInputValue('');
        }else{
            alert('값이 없습니다.');
        }
    }
    
    return (
        <div>
            
            <h2>{id}:{content}</h2>
            <input
             type="text"
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)}
            />

            <button type='button' onClick={onDelete}>삭제</button>
            <button type='button' onClick={onUpdate}>수정</button>

        </div>
    );
};

export default ListItem;
import React from 'react';

const ListItem = ({id, content}) => {
    return (
        <div>
            <h2>{id}:{content}</h2>
            <input
             type="text"
             value=""
            />

            <button type='button'>삭제</button>
            <button type='button'>수정</button>

        </div>
    );
};

export default ListItem;
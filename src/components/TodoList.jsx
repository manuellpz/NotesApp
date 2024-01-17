import React from 'react';

const TodoList = ({notes, removeItem}) => {
   return ( 
      <>
         <div className='list_container'>
            {
               notes.map(el => {
                  return (
                     <div>
                        <p>{el.note}</p>
                        <button onClick={() => removeItem(el.id)}>X</button>
                     </div>
                  )
               })
            }
         </div>
      </>
    );
}
 
export default TodoList;
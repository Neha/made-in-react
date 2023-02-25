import React from 'react';

const ArticleDisplay = ( data ) => {
    const createList = (data) => {
      let itemsList = data.data;
       return Object.entries(itemsList).map(([key, value]) => (
            <li key={key}>
              {key} : {value}
            </li>
          
          ))
    }

    const getItemsTotal = (data) => {
      let itemsList = data.data;
      const val = Object.values(itemsList);
      return val.reduce((acc, currentValue) => {
        return acc + Number(currentValue) ;
      },0)
   }

    return(
        <>
            <ul>{createList(data)}</ul>
            <div>{getItemsTotal(data)}</div>
        </>
    )
}

export default ArticleDisplay;

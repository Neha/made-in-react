import React from 'react';

type articleDisplayProps = {
  data: object,
  children?: JSX.Element|JSX.Element[];
}

const ArticleDisplay = ( { data } : articleDisplayProps ) => {
    const createList = (data) => {
      let itemsList = data;
       return Object.entries(itemsList).map(([key, value]) => (
            <li key={key}>
              {key} : {value}
            </li>
          ))
    }

    const getItemsTotal = (data) => {
      const val = Object.values(data);
      return val.reduce((acc: number, currentValue) => {
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

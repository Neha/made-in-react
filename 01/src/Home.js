import React, { useState, useRef } from 'react';
import Label from './Label.tsx';
import Button from './Button.tsx';
import Input from './Input.tsx';
import ArticleDisplay from './ArticleDisplay';

const Home = () => {
    const [ article, setArticle ] = useState({});
    const articleNameRef = useRef();
    const articlePriceRef = useRef();

    const submitHandler =(e) =>{
        e.preventDefault();
        let articleName =  articleNameRef.current.value;
        let articlePrice = articlePriceRef.current.value;
        setArticle({...article, [articleName]: articlePrice});
    }
    return(
        <>
            <h1>Add items</h1>
            <Label forhtml="item" label="article" />
            <Input type="text" name="item" placeholder="Enter your articles" ref={articleNameRef} />

            <Label label="price" />
            <Input type="text" name="price" placeholder="Enter price" ref={articlePriceRef} />

            <Button buttonLabel="Enter" clickHandler={submitHandler}/>
            {Object.keys(article).length > 0 && <ArticleDisplay data={article}/> }
        </>
    )
}
export default Home;

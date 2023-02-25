import React, { useState, useRef } from 'react';
import Label from './Label.tsx';
import Button from './Button.tsx';
import Input from './Input.tsx';
import ArticleDisplay from './ArticleDisplay.tsx';

type articleProps = {
    item: string,
    price: number
}

const Home = () => {
    const [ article, setArticle ] = useState<articleProps | {}>({});
    const articleNameRef = useRef<HTMLInputElement | any >();
    const articlePriceRef = useRef<HTMLInputElement | any>();

    const submitHandler =(e) =>{
        e.preventDefault();
        let articleName =  articleNameRef.current.value ;
        let articlePrice = articlePriceRef.current.value;
        setArticle({...article, [articleName]: articlePrice});
    }
    return(
        <>
            <h1>Add items</h1>
            <Label forhtml="item" label="article" />
            <Input 
               type="text" 
               label="Enter your articles"
               name="item" 
               placeholder="Enter your articles" 
               ref={articleNameRef} />

            <Label label="price" forhtml="price"/>
            <Input 
                type="text" 
                name="price" 
                label="Enter your articles"
                placeholder="Enter price" 
                ref={articlePriceRef} />

            <Button 
                buttonLabel="Enter" 
                clickHandler={submitHandler}/>
            {Object.keys(article).length > 0 && <ArticleDisplay data={article}/> }
        </>
    )
}
export default Home;

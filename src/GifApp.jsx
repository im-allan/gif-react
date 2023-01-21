import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Piece']);
    const onAddCategory = ( newCategory ) => {
        if (categories.map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategories([ newCategory , ...categories])
    }   



    return (
    <>
    <h1>Gif App</h1>
    <AddCategory 
        onNewCategory= { onAddCategory }
     />
        { categories.map( category =>(<GifGrid key={ category } category={ category } />))}
    </>
    )
}

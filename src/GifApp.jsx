import { useState } from "react";
import { AddCategory, GifGrid, AnimatedBackground } from "./components";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = ( newCategory ) => {
        if (categories.map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategories([ newCategory , ...categories])
    }   



    return (
    <>
    <h1>Gif App</h1>
    <p className="info">Con esta aplicación puedes encontrar todos los Gif que deseas!</p>
    <AnimatedBackground/>
    <AddCategory onNewCategory= { onAddCategory }/>
    { categories.map( category =>(<GifGrid key={ category } category={ category } />))}
    </>
    )
}

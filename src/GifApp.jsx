import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return; 

        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [...cat, 'Valorant'] ); - otra opción 
    };

    //console.log (categories);

    return (

        <>
            <h1>GifApp</h1>
           
            <AddCategory  
            onNewCategory = { onAddCategory }
            />
            
            { 
            categories.map(( category )=> ( 
            <GifGrid 
            key={ category } 
            category = { category }/>
            ))
            }

        </>

    )
};
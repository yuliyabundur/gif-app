import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


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

            {/*titulo*/}
            <h1>GifApp</h1>

            {/*Input*/}
            <AddCategory 
            // setCategories = { setCategories } 
            onNewCategory = { onAddCategory }
            />

            {/*Listado de Gif*/}
            
            <ol>
                { 
                categories.map( category => {
                    return <li key={ category }> { category } </li>
                })
                }
                
            </ol>
                {/*Gif item*/}
        </>

    )
};
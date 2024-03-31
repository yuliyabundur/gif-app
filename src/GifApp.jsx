import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        // setCategories( cat => [...cat, 'Valorant'] ); - otra opción 
        //console.log('Valorant');
    };

    //console.log (categories);

    return (

        <>

            {/*titulo*/}
            <h1>GifApp</h1>

            {/*Input*/}
            <AddCategory/>

            {/*Listado de Gif*/}
            <button onClick={ onAddCategory }>Agregar</button>
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
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../styles/App.css";
import { useState } from 'react';

export const App = () => {

    const [drink, setDrink] = useState([]);


    const FetchDrinks = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .then((response) => response.json())
            .then((json) => {setDrink(json)});
            console.log(drink)

    };





    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'alcoholic', headerName: 'Alcoholic', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'ingredientes', headerName: 'Ingredientes', width: 90 },
    ];

    const rows = drink.drinks.value.map((trago)=>{
        rowsMap=[];
        rowsMap.push({name:trago.strDrink, alcoholic:trago.strAlcoholic, category: trago.strCategory, ingredientes: 23});
        return rowsMap;
    })

    return (
        <div className='divDataGrid'>
            <FetchDrinks />
            <DataGrid rows={rows} columns={columns} pageSize={5} className='DataGrid'/>
            
        </div>

        
    )
}
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/App.css";
import { useState, useEffect } from "react";

export const App = () => {
  const [drink, setDrink] = useState([]);

  const fetchDrinks = async() => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      const data = await response.json()
      setDrink(data);
      console.log(drink);
      

    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    fetchDrinks();
  }, [])

  useEffect(() => {
    const rows = drink.drinks.map((trago) => {
      rowsMap = [];
      rowsMap.push({
        name: trago.strDrink.value,
        alcoholic: trago.strAlcoholic.value,
        category: trago.strCategory.value,
        ingredientes: 23,
      });
      console.log(rowsMap)
      return rowsMap;
    });
  
  }, [drink]);

  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "alcoholic", headerName: "Alcoholic", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "ingredientes", headerName: "Ingredientes", width: 90 },
  ];

  // const rows = drink.drinks.value.map((trago) => {
  //   rowsMap = [];
  //   rowsMap.push({
  //     name: trago.strDrink.value,
  //     alcoholic: trago.strAlcoholic.value,
  //     category: trago.strCategory.value,
  //     ingredientes: 23,
  //   });
  //   return rowsMap;
  // });

  return (
    <div className="divDataGrid">
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        className="DataGrid"
      /> */}
      <h1>hola</h1>

      {/* <ul>
        {drink[0].map(trago => <li key={trago.id}>{trago.strDrink}</li> )}
      </ul> */}
    </div>
  );
};

import React from "react";

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        const lsItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;
    
        if(!lsItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue) );
        }else{
          parsedItem = JSON.parse(lsItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };
// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: 'Crear los temas del taller de FP', completed: false},
//   {text: 'Lavar los platos', completed: true},
//   {text: 'Escribir el reto final de Pyweekend', completed: true},
//   {text: 'Terminar el curso de React', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

import React from "react";

function useLocalStorage(itemName, initialValue){

    const lsItem = localStorage.getItem(itemName);
    let parsedItem = initialValue;
    if(!lsItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue) );
    }else{
      parsedItem = JSON.parse(lsItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem];
}

export { useLocalStorage };
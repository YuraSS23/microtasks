import React, {useState} from 'react';
import {Button} from "./components/Button";

type FilterType = 'all' | "ruble" | "dollar"

function App() {
    const CurrencyArray= [
        {currency: "dollar", amount: 50, number: "fdghdh1312mjm4235"},
        {currency: "ruble", amount: 150, number: "fdghdh13124sdasa235"},
        {currency: "ruble", amount: 300, number: "fdghdh1312fds4235"},
        {currency: "dollar", amount: 350, number: "fdghdh131242sdf35"},
        {currency: "dollar", amount: 250, number: "fdghdh131gddfg235"},
        {currency: "ruble", amount: 60, number: "fdghdh13124llfsa235"},
        {currency: "dollar", amount: 90, number: "fdghdh1312cxbx4235"}
    ]

    const [filter, setFilter]=useState<FilterType>("all");

    let filteredArray = CurrencyArray;

    if (filter==="dollar") {
        filteredArray = CurrencyArray.filter((el)=> el.currency==="dollar")
    }
    if (filter==="ruble") {
        filteredArray = CurrencyArray.filter((el)=> el.currency==="ruble")
    }

    const ButtonHandler = (currentFilter: FilterType) => {
        setFilter(currentFilter);
    }
  return (
    <div className="App">
        <ul>
            {filteredArray.map((el, index)=>{
                return (
                    <li key={index}>
                        <span>{el.currency} </span>
                        <span>{el.amount} </span>
                        <span>{el.number} </span>
                    </li>
                )
            })}
        </ul>
      <Button name={"all"} callback={()=>ButtonHandler("all")} />
      <Button name={"dollars"} callback={()=>ButtonHandler("dollar")} />
      <Button name={"rubles"} callback={()=>ButtonHandler("ruble")} />
    </div>
  );
}

export default App;

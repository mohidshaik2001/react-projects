

import { use, useEffect,useState } from "react";


function useCurrencyInfo(currency){

const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-a
pi@latest/v1/currencies/${currency}.json`
        const [data,setData] = useState({})
        useEffect(() => {
          fetch(url)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))   
        
                   }
        , [currency])


        return data
        





}

export default useCurrencyInfo;
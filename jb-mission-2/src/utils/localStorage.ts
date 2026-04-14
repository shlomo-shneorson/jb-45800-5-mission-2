

import type Weather from "../models/weather";

export function saveToLocalStorage(data:Weather){
    const dataList = getData() || []
    const newDataList = [data,...dataList]
    localStorage.setItem('history',JSON.stringify(newDataList))
    
}

export function getData(){
    const data = localStorage.getItem('history')
    if(!data)return []
    return JSON.parse(data)
}
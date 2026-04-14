export default interface Weather{
       
    humidity:string        
    feelslike_c:string  
    searchData:string     
    location: { name: string ,country:string};
    current: {
wind_kph: string    
    temp_c: number;
    humidity: number;
    condition: { text: string; icon: string };
    
};

}
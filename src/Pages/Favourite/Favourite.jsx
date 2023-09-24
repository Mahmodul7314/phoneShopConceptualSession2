/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PhoneCardt from "../Phone/PhoneCardt";
import FavouriteCard from "./FavouriteCard";


const Favourite = () => {
    const [favourites, setFavourites] =useState([])
    
    const [noFound, setNoFound] = useState(false)
     const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState()

    useEffect(()=>{
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'))
        if(favouriteItems){
            setFavourites(favouriteItems);

            const total = favouriteItems.reduce((preValue,currentItem)=>preValue + currentItem.price,0)
        console.log(total)
        setTotalPrice(total)
        
        
        
        
        
        }
        else{
          
            setNoFound('no data found');
        }
        

    },[])
    console.log(favourites);
    const handleRemove =()=>{
        localStorage.clear()
        setFavourites([])
        setNoFound('No data found');
    }

    return (
        <div>
            <div>{totalPrice}</div>
           {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div> 
            
           {favourites.length> 0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">Delete all favourite</button>}
           
            <div className="grid grid-cols-2 gap-5"> 
                {
                isShow? favourites.map(phone=><FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
                : favourites.slice(0,3).map(phone=><FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
            }
            </div>
            {favourites.length >2 && <button onClick={()=>setIsShow(!isShow)}  className="px-5 bg-green-200 block mx-auto">{isShow?"See less": "See more"}</button>}
            </div>}
      
        </div>
    );
};

export default Favourite;
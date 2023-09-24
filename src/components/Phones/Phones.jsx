import { Card } from "@material-tailwind/react";
import PhoneCard from "./PhoneCard";


const Phones = ({phones}) => {
  
    return (
        <div className="py-10">
            <h2 className="text-center text-4xl">All Categories Phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                  phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard> )  
                }
            </div>
        </div>
    );
};

export default Phones;
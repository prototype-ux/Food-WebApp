import { CDN_URL } from "../utils/constants";
const RestrauntCard=(props)=>{
    const {resData}=props;
    //console.log(resData);
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData.info;
     return(
             <div data-testid="resCard" className='res-card m-4 p-4 w-[35vw] md:w-[225px] bg-gray-100 rounded-lg h-[250px] md:h-[350px] hover:bg-gray-200 hover:scale-110 transition duration-500'>

                     <img className="res-icon h-[75px] md:h-[150px] w-[100%] rounded-lg"alt="Restraunt logo" src={CDN_URL+cloudinaryImageId}/>
                     <h4 className='font-bold py-[12px] text-lg' id="res-name">{name}</h4>
                     <h5 className="truncate">{cuisines.join(", ")}</h5>
                     <h5>{costForTwo}</h5>
                     <h5>{avgRating} ⭐</h5>
             </div>


             
     );
}

export const RestrauntCardFast=(RestrauntCard)=>{
        return (
                (props)=>{
                        return( <div>
                        <label className="absolute bg-black text-white m-2 p-0 rounded-lg">Fast Delivery</label>
                        <RestrauntCard {...props}/>
                        </div>)}
                

)
}
export default RestrauntCard;
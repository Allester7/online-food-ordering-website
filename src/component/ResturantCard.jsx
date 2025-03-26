import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) =>{
    const{cloudinaryImageId,name, avgRating, sla, cuisines, costForTwo} = props.resData;
    return(
        <div className="bg-[#fdfbd4] rounded-lg shadow-lg p-4 transition transform hover:scale-95 duration-300 flex flex-col justify-between h-full min-h-[350px] w-3/12">
            <div className=" px-2 pt-2">
                <img src={CDN_URL+cloudinaryImageId} alt="food" className="w-full h-40 object-cover rounded-t-lg"/>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h5 className="font-bold">{name}</h5>
                <div className="flex gap-2">
                    <span>⭐{avgRating}</span>
                    <span className="font-bold">{sla.slaString}</span>
                </div>
                <span className="text-base">{cuisines.join(", ")}</span>
                <span>{costForTwo}</span>
            </div>
        </div>
    )
}
export default ResturantCard;
import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const ResturantList = () => {
const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
    useEffect(() => {    
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfResturants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
    };
    const handleSubmit = () => {
        const filteredValue = listOfResturants.filter(item => {
            if(item.info.name.toLower().includes(search.toLower())){
                return item;
            }     
        });
        setFilteredList(filteredValue);
    }
  return (
    <div className="px-4 bg-gradient-to-r from-[#e7dfb8] to-[#e8e1c4] min-h-screen">
      <div className="flex justify-center items-center">
      <div className="flex items-center space-x-2">
        <input type="text" value={search} className="bg-blue-50 decoration-0 p-2 m-5 rounded-2xl" onChange={(e) => setSearch(e.target.value)}/>
        <button className="h-10 cursor-pointer bg-cyan-200 w-20 rounded-2xl" onClick={handleSubmit}>Search</button>
        </div>
      </div>
      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      <div className="flex flex-wrap max-w-[100%] items-center justify-center gap-4 h-3/12">
      {filteredList.length === 0 ? (
            <Shimmer />
          ):
          (
            filteredList.map((restaurant) => (
                <ResturantCard key={restaurant.info.id} resData={restaurant.info} />
            ))
          )}
      </div>
      </div>
  );
};
export default ResturantList;

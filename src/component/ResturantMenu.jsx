import MenuList from "./MenuList";
const RestaurantMenu = ({ props, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  console.log(props.itemCards)
  return (
      <div className=" w-9/12 mx-auto my-4 bg-gray-50 shadow-xl rounded-lg p-4">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="text-xl font-semibold">
            {props.title} ( {props.itemCards.length} )
          </span>
          {showItems ?<span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <MenuList items={props.itemCards} />}
      </div>
  );
};
export default RestaurantMenu;

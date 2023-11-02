
import MenuItem from "./MenuItem";

const MenuItemCategory = (props) => {
  
  const item = props.data;
  const { displayItems, setSelectedIndex, restaurantInfo } = props;

  const handleClick = () => {
    setSelectedIndex();
  };

  return (
    <div
      className="p-2 w-1/2 border-b-2 border-gray-100"
      key={item.card.card.title}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-mono font-semibold text-lg">
          {item.card.card.title} ({item.card.card.itemCards.length})
        </span>
        {displayItems ? <UpArrow /> : <DownArrow />}
      </div>
      {item.card.card.itemCards.map((item) => {
        return (
          displayItems && (
            <MenuItem key={item.card.info.id} item={item.card.info} restaurantInfo={restaurantInfo}/>
          )
        );
      })}
    </div>
  );
};

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const UpArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MenuItemCategory;

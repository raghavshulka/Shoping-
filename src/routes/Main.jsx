import Card from "../Components/Card";
import { useSelector } from "react-redux";

const Main = () => {
  const items = useSelector((store) => store.item);
  return (
    <div className=" flex flex-row items-center justify-center gap-3 flex-wrap">
      {items.map((item) => 
        <Card key={item.id} item={item} />
      )}
    </div>
  );
};

export default Main;

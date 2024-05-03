import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

function ListPage() {
  const PropertyList = useLoaderData();
  return <div className="listPage">
    <div className="mapContainer">
      <Map items={PropertyList} />
    </div>
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        <hr />
        {PropertyList.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    
  </div>;
}

export default ListPage;

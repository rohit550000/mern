import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ListPage() {
  const PropertyList = useLoaderData();
  const { pathname } = useLocation()
  const currentpath = pathname.split('/').filter(Boolean)[0]
  return <div className="listPage" style={{ padding: currentpath == 'admindashboard' ? '0 .8rem 0 4rem' : ' ' }}>
    <div className="mapContainer" style={currentpath == 'admindashboard' ? { height: '100vh', position: 'sticky', top: 0, } : {}}>
      <Map items={PropertyList} />
    </div>
    <div className="listContainer">
      <div className="wrapper">
        <Filter currentpath={currentpath} />
        <hr />
        {PropertyList.map(item => (
          <Card key={item.id} item={item} currentpath={currentpath} />
        ))}
      </div>
    </div>

  </div>;
}

export default ListPage;

import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Skelton from "../Components/Skelton";
import Loader from "../Components/Loader";
import { useSelector } from "react-redux";
export default function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div>
      <Header />
      <Skelton />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
}

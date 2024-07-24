import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { useDispatch } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <div>CatalogPage</div>;
};
export default CatalogPage;

// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
// import { useForm } from "react-hook-form";
import { Button } from "primereact/button";

import { useTestQuery } from "../../store/state/userApiSlice.jsx";
import ItemCarousel from "../../components/itemCarousel/itemCarousel.jsx";
import ItemCard from "../../components/itemCard/itemCard.jsx";
// import { Button } from "primereact/button";
import Review from "../../components/reviews/reviews.jsx";
import Landing from "../../components/landing/landing.jsx";
import GlobalLayout from "../../components/Layouts/GlobalLayout.jsx";

function Groceries() {
  const { token, isLoading } = useAuth();

  useEffect(() => {
    console.log(token);
  }, [token]);

  if (isLoading) {
    return <p> Loading...</p>;
  }
  return <GlobalLayout>test</GlobalLayout>;
}

export default Groceries;

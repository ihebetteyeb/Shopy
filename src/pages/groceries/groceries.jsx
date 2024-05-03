import React, { useEffect } from "react";
import GlobalLayout from "../../components/Layouts/GlobalLayout.jsx";
import "./groceries.css";
import DataViewer from "../../components/dataViewer/dataViewer.jsx";
import { usePendingOrderQuery } from "../../store/state/userApiSlice";
import { ProgressSpinner } from "primereact/progressspinner";

function Groceries() {

  const { data } = usePendingOrderQuery({ userId: 1 });
  const [order, setOrder] = React.useState({ id: undefined, cartItems: [] });
  useEffect(() => {
    if (!data || !data.id || !data.orderItems) return;
    setOrder({
      id: data.id,
      cartItems: data.orderItems.map((orderItem) => ({
        ...orderItem.item,
        _quantity: orderItem.quantity,
      })),
    });
  }, [data, setOrder]);

  // const { token, isLoading } = useAuth();
  const [products, setProducts] = useState([]);
  // const { data, isLoading: isLoading2 } = useItemsQuery();
  // const [addItemCart, { isError, isSuccess, isLoading }] =
  //   useItemCartMutation();
  // useEffect(() => {
  //     console.log(token);
  //   }, [token]);
  // useEffect(() => {
  //   console.log(data);
  //   setProducts(data?.slice(0, 12));
  // }, [data]);

  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");

  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  // if (isLoading) {
  //   return <p> Loading...</p>;
  // }
  // if (isLoading2) {
  //   return <p> Loading...</p>;
  // }

  const items = [{ label: "Groceries" }];
  const home = { icon: "pi pi-home", url: "" };

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const header = () => {
    return (
      <Dropdown
        options={sortOptions}
        value={sortKey}
        optionLabel="label"
        placeholder="Sort By Price"
        onChange={onSortChange}
        className="w-[250px] sm:w-14rem"
      />
    );
  };

  const listTemplate = (products, layout) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {products.map((product, index) => itemTemplate(product, layout, index))}
      </div>
    );
  };

  const itemTemplate = (product, index) => {
    if (!product) {
      return;
    }

    return gridItem(product, index);
  };

  const handleCartClick = (product) => {
    console.log(product);

    addItemCart({ body: product, userId: 2 })
      .unwrap()
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gridItem = (product) => {
    return (
      <div className="col-12 p-2" key={product.code}>
        <div className="p-4 border surface-border surface-card rounded">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.category}</span>
            </div>
            <Tag
              value={product.inventoryStatus}
              severity={getSeverity(product)}
            ></Tag>
          </div>
          <div className="flex flex-col items-center gap-3 py-5">
            <img
              className=" shadow-2 border-rounded"
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
            />
            <div className="text-2xl font-bold">{product.name}</div>
            <Rating value={product.rating} readOnly cancel={false}></Rating>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">${product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              disabled={product.inventoryStatus === "OUTOFSTOCK"}
              onClick={() => handleCartClick(product)}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };


  return (
    <>
      {!order.id && <ProgressSpinner />}
      {order.id && (
        <GlobalLayout order={order} setOrder={setOrder}>
          <DataViewer setOrder={setOrder} orderId={order.id}></DataViewer>
        </GlobalLayout>
      )}
    </>
  );
}

export default Groceries;

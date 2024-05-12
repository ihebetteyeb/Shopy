import { Button } from "primereact/button";
import { useEffect } from "react";
import { useValidateOrderMutation } from "../../store/state/itemApiSlice";
import { useNavigate } from "react-router-dom";

export default function SideBar({ orderId, cardList, setOrder }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(cardList);
  }, [cardList]);

  const [validateOrder] = useValidateOrderMutation();
  const handleRemoveItem = (code) => {
    setOrder((order) => ({
      id: order.id,
      cartItems: order.cartItems.filter((item) => item.code !== code),
    }));
  };
  const onCheckout = () => {
    validateOrder({ orderId })
      .unwrap()
      .then((payload) => {
        console.log("order update successed: ", payload);
        setOrder({ id: undefined, cartItems: [] });
        navigate("/order");
      })
      .catch((error) => {
        console.log("order update failed: ", error);
      });
  };
  return (
    <>
      <div className="flex flex-col gap-[20px] ">
        <div className="flex flex-col flex-grow justify-center w-full gap-[20px] border-b-[1px] pb-5 ">
          {cardList.length > 0 ? (
            cardList.map((item, index) => (
              <div className="flex p-[2px] gap-[5px]" key={index}>
                <img
                  src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                  className="w-[64px] h-[64px] rounded"
                  alt={item.name}
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex justify-between">
                    <p>{item.name}</p>
                    <i
                      className="pi pi-times-circle"
                      style={{ borderColor: "#9E9E9E", color: "#9E9E9E" }}
                      onClick={() => handleRemoveItem(item.code)}
                    ></i>
                  </div>
                  <div>
                    <p>
                      {item._quantity} x £{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className="flex">
          <Button
            label="Checkout"
            className="w-full "
            disabled={cardList.length == 0}
            onClick={onCheckout}
          />
        </div>
      </div>
    </>
  );
}

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useEffect } from "react";

export default function SideBar({ cardList }) {
  useEffect(() => {
    console.log(cardList);
  }, [cardList]);

  return (
    <>
      <div className="flex flex-col gap-[20px] ">
        <div className="flex flex-col flex-grow justify-center w-full gap-[20px] border-b-[1px] pb-5 ">
          {cardList.map((item, index) => (
            <div className="flex  p-[2px]  gap-[5px] " key={index}>
              <img
                src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                className="w-[64px] h-[64px]  rounded"
              ></img>
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <p>{item.name}</p>
                  <i
                    className="pi pi-times-circle"
                    style={{ borderColor: "#9E9E9E", color: "#9E9E9E" }}
                  ></i>
                </div>
                <div>
                  <p>1 x £{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <Button label="Checkout" className="w-full " />
        </div>
      </div>
    </>
  );
}

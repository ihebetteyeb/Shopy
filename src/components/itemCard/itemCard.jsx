import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./itemCard.css";
export default function ItemCard() {
  const footer = (
    <>
      <div
        className="bg-contain bg-no-repeat bg-right h-40 w-full flex  items-start"
        style={{
          backgroundImage:
            "url('https://nearlynakedveg.co.uk/cdn/shop/products/Depositphotos_169272482_S.jpg?v=1681411963')",
        }}
      >
        <div>
          <Button label="Shop now" icon="pi pi-arrow-right" iconPos="right" />
        </div>
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center w-full max-w-6xl">
        <Card title="Farm Fresh Fruits" footer={footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
        <Card title="Farm Fresh Fruits" footer={footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>

        <Card title="Farm Fresh Fruits" footer={footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
      </div>
    </div>
  );
}

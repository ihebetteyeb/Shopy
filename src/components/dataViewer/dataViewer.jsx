import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import "./dataViewer.css";
import { Slider } from "primereact/slider";
import {
  useItemsQuery,
  useUpdateOrderMutation,
} from "../../store/state/itemApiSlice.jsx";
import ItemQuantity from "./ItemQuantity.jsx";
import { Navigate } from "@tanstack/react-router";

export default function DataViewer({ orderId, setOrder }) {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");
  const navigate = useNavigate();

  const [updateOrder] = useUpdateOrderMutation();
  const [searchFilter, setSearchFilter] = useState({
    term: undefined,
    range: [0, 200],
  });

  //search for max price and set it as the max value for the slider
  const { data } = useItemsQuery();

  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  const getFilteredProduct = () =>
    products.filter((product) => {
      if (searchFilter.term && searchFilter.term !== "")
        return product.name
          .toLowerCase()
          .includes(searchFilter.term.toLowerCase());
      if (searchFilter.range)
        return (
          product.price >= searchFilter.range[0] &&
          product.price <= searchFilter.range[1]
        );
    });

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchFilter((oldSearchFilter) => ({
      ...oldSearchFilter,
      term: searchTerm,
    }));
  };

  const handlePriceFilterChange = (values) => {
    setSearchFilter((oldSearchFilter) => ({
      ...oldSearchFilter,
      range: values,
    }));
  };

  useEffect(() => {
    if (!data) return;
    setProducts(
      data.map((product) => {
        return { ...product, _quantity: 0 };
      })
    );
  }, [data]);

  const handleCartClick = (product) => {
    console.log("handleCartClick", product);
    if (product._quantity > 0) {
      setOrder((order) => {
        return {
          id: order.id,
          cartItems: [
            ...order.cartItems.filter((items) => items.code != product.code),
            { ...product },
          ],
        };
      });
      updateOrder({
        itemCode: product.code,
        orderId: orderId,
        quantity: product._quantity,
      })
        .unwrap()
        .then((payload) => {
          console.log("order update successed: ", payload);
        })
        .catch((error) => {
          console.log("order update failed: ", error);
        });
    }
  };
  const updateProductQty = (updatedProduct, qts) => {
    updatedProduct._quantity = qts;
    setProducts((products) =>
      products.map((product) =>
        product.code === updatedProduct.code ? updatedProduct : product
      )
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

  const listItem = (product, index) => {
    return (
      <div
        className="lg:col-span-4 md:col-span-3 sm:col-span-2 xs:col-span-1 "
        key={product.code}
      >
        <div
          className={classNames(
            "flex flex-row xl:flex-row xl:items-start p-4 gap-4",
            { "border-t-2": index !== 0 }
          )}
        >
          <img
            className="w-24 lg:w-40 block xl:block mx-auto"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            onClick={() => navigate("/product", { state: { product } })}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="text-xl font-bold">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
              <span className="text-xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    return (
      <div className="p-2" key={product.code}>
        <div className="p-4 border-2 border-inherit rounded">
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
              className="w-24 lg:w-40 block xl:block mx-auto"
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
              onClick={() => navigate("/product", { state: { product } })}
            />
            <div className="text-xl font-bold">{product.name}</div>
            <Rating value={product.rating} readOnly cancel={false}></Rating>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">${product.price}</span>
            <ItemQuantity
              initialValue={product._quantity}
              maxValue={product.quantity}
              onValueChange={(qty) => updateProductQty(product, qty)}
            />
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

  const itemTemplate = (product, layout, index) => {
    if (!product) {
      return;
    }

    if (layout === "list") return listItem(product, index);
    else if (layout === "grid") return gridItem(product);
  };

  const listTemplate = (products, layout) => {
    if (products?.length === 0)
      return (
        <div className="flex justify-center text-2xl font-bold pt-10">
          No item found
        </div>
      );
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
        {products?.map((product, index) =>
          itemTemplate(product, layout, index)
        )}
      </div>
    );
  };

  const header = () => {
    return (
      <div className="grid grid-cols-2">
        <div className="flex justify-start">
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By Price"
            onChange={onSortChange}
          />
        </div>
        <div className="flex justify-end">
          <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };
  const filteredItems = getFilteredProduct();
  return (
    <div className="grid grid-cols-5 p-4 gap-2">
      <div className="flex  border col-span-1 justify-center">
        <div className="pt-7 pl-2">
          <span className="p-input-icon-left pr-2">
            <i className="pi pi-search" />
            <InputText
              id="search"
              value={searchFilter.term}
              onChange={handleInputChange}
              placeholder="Type to search"
            />
          </span>
          <div className="pt-10">
            <p className="pb-3">Filter by price</p>
            <Slider
              value={searchFilter.range}
              onChange={(e) => handlePriceFilterChange(e.value)}
              className="mr-4 ml-4"
              range
            />
            <div className="grid grid-cols-1 pt-3">
              <div className="flex justify-end p-1">
                <InputText
                  id="filter_price1"
                  value={searchFilter.range[0]}
                  onChange={(e) => handlePriceFilterChange(e.target.value)}
                />
                <InputText
                  id="filter_price2"
                  value={searchFilter.range[1]}
                  onChange={(e) => handlePriceFilterChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 p-3 border">
        <DataView
          value={filteredItems}
          listTemplate={listTemplate}
          layout={layout}
          header={header()}
          sortField={sortField}
          sortOrder={sortOrder}
          paginator={filteredItems?.length}
          emptyMessage={true}
          rows={8}
        />
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";

function ProductCategoryRow({ category }) {
  return (
    <div className="tr">
      <tr>
        <th colspan="2">{category}</th>
      </tr>
    </div>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr className="tr2">
      <td className="name">{name}</td>

      <td className="price">{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr clasName="title">
          <th className="a">Name</th>
          <th className="b">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." className="search" />
      <label>
        <input type="checkbox" className="checkbox" />{" "}
        <span className="span"> show products in stock</span>
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div className="">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "Rs.100", stocked: true, name: "Apple" },
  { category: "Fruits", price: "Rs.400", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "Rs.150", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "Rs.80", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "Rs.45", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "Rs.60", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProductContext } from "../../context/productsContext";
import Card from "../../components/Card";

function Catalog() {
  const { productsList } = useContext(ProductContext);
  const [region, setRegion] = useState("");
  const [grindOption, setGrindOption] = useState("");
  const [inputText, setInputText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  let catalog = true;

  useEffect(() => {
    let filtered = productsList;

    if (inputText.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(inputText.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter(
        (product) => product.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (grindOption) {
      filtered = filtered.filter((product) =>
        product.grind_option.includes(grindOption)
      );
    }

    setFilteredProducts(filtered);
  }, [region, inputText, grindOption, productsList]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleGrindChange = (event) => {
    setGrindOption(event.target.value);
  };

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="pb-10 ">
      <Header />
      <div>
        {/* Filter options */}
        <h1 className="text-2xl w-full px-10 syne font-semibold underline md:text-2.5xl lg:text-3xl">
          Filters
        </h1>
        <div className="syne px-10 py-5 flex gap-3 flex-col justify-evenly lg:flex-row">
          <div>
            <label htmlFor="inputText" className="text-xl">Search Coffee: </label>
            <input type="text" name="inputText" onChange={handleInputText} className="bg-[#e5e7e9] outline-none rounded-md p-1 px-5" placeholder="Rainforest.."/>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="text-xl">Region</h2>
            <select
              name="region"
              className="outline-none p-2 px-5 rounded-md bg-[#e5e7e9]"
              value={region}
              onChange={handleRegionChange}
            >
              <option value="">All</option>
              <option value="Central America">Central America</option>
              <option value="Africa">Africa</option>
              <option value="South America">South America</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Middle East">Middle East</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="text-xl">Grind options</h2>
            <select
              name="grind"
              className="outline-none p-2 px-5 rounded-md bg-[#e5e7e9]"
              value={grindOption}
              onChange={handleGrindChange}
            >
              <option value="">All</option>
              <option value="Whole Bean">Whole Bean</option>
              <option value="Cafetiere">Cafetiere</option>
              <option value="Filter">Filter</option>
              <option value="Espresso">Espresso</option>
              <option value="Pour Over">Pour Over</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        {/* Filtered products */}
        <div className="w-full flex flex-col items-center lg:p-[50px]">
          <h1 className="text-2xl w-full text-center syne font-semibold mb-10 underline md:text-2.5xl lg:text-3xl">
            Products
          </h1>
          {filteredProducts.length === 0 ? (
            <h1 className="text-3xl syne text-violet-500">
              No Products found ...
            </h1>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 ">
              {filteredProducts?.map((product) => (
                <Card key={product._id} {...product} catalog={catalog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryData from "../../data/categoryData.json";
import { FaUtensils, FaShoppingBasket, FaTv, FaTshirt } from "react-icons/fa";
import "./Category.css";

const Category = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const matched = categoryData.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
    );
    setCategory(matched);
  }, [categoryName]);

  if (!category) return <p>Category not found</p>;

  return (
    <div className="category-page">
      <h2>{category.name}</h2>
      <p>{category.description}</p>
      <img src={category.image} alt={category.name} className="category-img" />
    </div>
  );
};

export default Category;

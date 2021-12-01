import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))}
    </Container>
  );
};

export default ProductList;

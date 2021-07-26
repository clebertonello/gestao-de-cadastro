import * as S from "./style"
import React, { useState } from "react";


const ProductBody = () => {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [counter, setCounter] = useState(0);


  const handleSubmit = () => {
    const productDetails = {
      'Name': name,
      'Description': description,
      'Price': price,
    };

    localStorage.setItem(`ProductDetails-${counter}`, JSON.stringify(productDetails));
    setCounter(counter + 1);
  }

  return (
    <div>
      <S.Container>
        <h2>Cadastro de Produtos</h2>
      </S.Container>
      <S.Container>
        <form>
          <fieldset>
            <label>
              Nome:
              <input type="text" name="nameInput" placeholder="Nome" onChange={e => setName(e.target.value)} />
            </label>
            <label>
              Descrição:
              <input type="text" name="descInput" placeholder="Descrição" onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="number" name="priceInput" placeholder="Preço" onChange={e => setPrice(e.target.value)} />
            </label>
            <S.DivCenter>
              <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </S.DivCenter>
          </fieldset>
        </form>
      </S.Container>
    </div>
  )
};

export default ProductBody;

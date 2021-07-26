import * as S from "./style"
import React, { useState } from "react";


const UserBody = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [counter, setCounter] = useState(0);


  const handleSubmit = () => {
    const userDetails = {
      'Name': name,
      'Email': email,
      'Tel': tel,
    };

    localStorage.setItem(`UserDeatails-${counter}`, JSON.stringify(userDetails));
    setCounter(counter + 1);
  }

  return (
    <div>
      <S.Container>
        <h2>Cadastro de Clientes</h2>
      </S.Container>
      <S.Container>
        <form>
          <fieldset>
            <label>
              Nome:
              <input type="text" name="nameInput" placeholder="Nome" onChange={e => setName(e.target.value)}></input>
            </label>
            <label>
              Email:
              <input type="email" name="emailInput" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
            </label>
            <label>
              Celular:
              <input type="tel" name="telInput" placeholder="Celular" onChange={e => setTel(e.target.value)}></input>
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

export default UserBody

import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  height: calc(50% - 20px);

  input {
    padding: 7px;
    margin: 2px 2px;
  }

  label {
    padding: 5px;
  }

  button {
    color: #fff;
    background-color: #212529;
    border-color: #212529;

    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: .15rem .55rem;
    font-size: 1rem;
    border-radius: .25rem;
  }
`;

export const DivCenter = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

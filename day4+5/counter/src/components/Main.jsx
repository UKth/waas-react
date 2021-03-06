import React, {useState, useEffect} from 'react';
import ClickButton from './ClickButton';
import {GoChevronUp, GoChevronDown} from 'react-icons/go'
import styled from 'styled-components'

const Main = () => {
  const [value, setValue] = useState(100);

  const Container = styled.div`
    margin-left: 20vw;
    width: 60vw;
    background: #DDD;
    border-radius: 0.2rem;
    padding: 1.5rem;
    box-sizing: border-box;
    display: grid;
    height: 11rem;
    grid-template-columns: auto 2.5rem 1rem 8rem auto;
    grid-template-rows: 3rem 2.5rem 2.5rem;
    .text {
      grid-row: 2 / 4;
      grid-column: 4 / 5;
      font-size: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    }
    .title {
      grid-row: 1 / 2;
      grid-column: 1 / 6;
      font-size: 2rem;
      user-select: none;
    }
  `;

  useEffect(() => {
    document.title = `Counter: ${value}`;
  })
  const updateValue = (delta) => {
    setValue(value + delta);
  }
  return (
    <Container>
      <span className="title">Counter</span>
      <span className="text">{value}</span>
      <ClickButton index={1} onClick={() => updateValue(1)}>
        <GoChevronUp />
      </ClickButton>
      <ClickButton index={2} onClick={() => updateValue(-1)}>
        <GoChevronDown />
      </ClickButton>
    </Container>
  );
};

export default Main;

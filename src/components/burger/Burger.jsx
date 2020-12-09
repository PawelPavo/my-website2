import * as React from 'react';
import styled from 'styled-components';

const Burger = ({ open, setOpen, checked }) => {
    
    const handleClick = () => {
        setOpen(!open);
    }
    
    return (
        <StyledBurger className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" open={open} onClick={handleClick}>
            <div className={`${checked ? 'bg-white' : 'bg-primary'}`} />
            <div className={`${checked ? 'bg-white' : 'bg-primary'}`} />
            <div className={`${checked ? 'bg-white' : 'bg-primary'}`} />
        </StyledBurger>
    );
};

export const StyledBurger = styled.button`
  position: absolute;
  top:0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 1.35rem;
  margin-bottom: 1rem;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.15rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Burger;
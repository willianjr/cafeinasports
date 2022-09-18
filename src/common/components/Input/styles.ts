import styled from "styled-components";

export const Container = styled.div`
  border: none;
  border-radius: 0.25rem;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  >label{
    text-transform: uppercase;
    border-bottom: 1px solid #FAFAFA;
    text-align: center;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }
  >input{
    border: none;
    border-radius: 0.25rem;
    padding: 1rem;
    font-size: 25pt;
    text-align: center;
  }
`;


import styled from 'styled-components';
import { nanoid } from 'nanoid';

export const ContactFormTitle = styled.h3``;
export const ContactFormBody = styled.form``;
export const ContactFormInput = styled.input`
  height: 30px;
  font-size: 18px;
  margin-bottom: 15px;
`;
export const ContactFormBtn = styled.button`
  display: block;
  border: 2px solid black;
  border-radius: 5px;
  line-height: 1;
  padding: 8px;
  color: black;
  font-weight: 700;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  :active {
    color: green;
    border: 2px solid green;
  }
`;

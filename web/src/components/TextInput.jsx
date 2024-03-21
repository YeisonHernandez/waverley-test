import { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.div`
  width: 100%;
  height: 100%;

  .text-area { 
    width: 90%;
    height: 90%;
    resize: none;
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
`;

function TextInput({ setText, text }) {

  const [errorMessage, setErrorMessage] = useState('');

  const handleTextChange = (event) => {
    try {
      setErrorMessage('');
      if (event.target.value.length <= 500) {
        setText(event.target.value);
      } else {
        setErrorMessage('Text exceeds the maximum length of 500 characters.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const fileContent = e.target.result;
        if (text?.length + fileContent.length <= 500) {
          setText(fileContent);
        } else {
          setErrorMessage('Text exceeds the maximum length of 500 characters.');
        }
      };
  
      reader.onerror = () => {
        setErrorMessage('Error occurred while reading the file.');
      };
  
      reader.readAsText(file);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <TextArea>
      <textarea className='text-area' value={text} onChange={handleTextChange} />
      <p>{text?.length}/500</p>
      <span className='error-message'>{errorMessage}</span>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
    </TextArea>
  );
}

export default TextInput;
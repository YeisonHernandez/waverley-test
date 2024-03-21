import { useState } from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';
import SummarizationOptions from './components/SummarizationOptions';

// Services
import { summarizeText } from './services/summarizationService';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;

  .styled-row {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 30%;
    padding: 0 0 5rem 0;
  }

  @media (max-width: 768px) {
    .styled-row {
      flex-direction: column;
      height: 50%;
    }
  }

  .submit-options-parent {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
    padding: 2rem 0 0 0;
  }

  .submit-button {
    width: 50%;
    height: 3rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

function App() {
  const [text, setText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');
  const [summaryLength, setSummaryLength] = useState('Short');
  const [summaryRatio, setSummaryRatio] = useState(0.5);
  const [confidenceScore, setConfidenceScore] = useState(0);

  const handleSubmit = async () => {
    try {
      if (text && text.trim().length > 0) {
        const response = await summarizeText(text, summaryLength, summaryRatio);
        setConfidenceScore(response?.confidenceScore);
        setSummarizedText(response?.summarizedText);
      }
    } catch (error) {
      console.error('Error occurred during summarization:', error);
    }
  };

  return (
    <StyledApp>
      <div className='styled-row'>
        <TextInput
          setText={setText}
          text={text}
        />
        <TextOutput summarizedText={summarizedText} confidenceScore={confidenceScore} />
      </div>
      <div className='submit-options-parent'>
        <SummarizationOptions
          summaryLength={summaryLength}
          setSummaryLength={setSummaryLength}
          summaryRatio={summaryRatio}
          setSummaryRatio={setSummaryRatio}
        />
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      </div>
    </StyledApp>
  );
}

export default App;

import styled from 'styled-components';

const TextOutputContainer = styled.div`
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 2px;
    color: #888;
    font-family: Arial, sans-serif;
    width: 90%;
    height: 90%;

    .text-result {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
`;

const TextOutput = ({ summarizedText, ratio }) => {
    const temporaryRatio = ratio;

    return (
        <TextOutputContainer>
            <div className='text-result'>
                {summarizedText && (<span className='span-output'>{summarizedText}</span>)}
            </div>
            {summarizedText && (
                <>
                    <p className='text-length'>Result length: {summarizedText?.length}</p>
                    <p>Ratio: {temporaryRatio}</p> {/* Use the temporaryRatio constant */}
                </>
            )}
        </TextOutputContainer>
    );
};

export default TextOutput;
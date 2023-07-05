import { func, string } from 'prop-types';


import StyledForm from './styled-movie-form';
import { StyledSection } from 'components/Section/styled-section';
import { StyledContainer } from 'components/Container/styled-container';

const MovieForm = ({onSubmit, onChange, query}) => {
 

    return (
        <StyledSection>
            <StyledContainer>
                <StyledForm onSubmit={onSubmit}> {/* Form component for movie search */}
                    {/* Input field for entering the search query */}
                    <input 
                        type='text'
                        placeholder='movie search'
                        value={query} // Current value of the input field
                        onChange={onChange} // Triggered when input value changes
                    />
                    <button aria-label='search'type='submit'></button> {/* Search button */}
                </StyledForm>
            </StyledContainer>
        </StyledSection>
    );
};

MovieForm.propTypes = {
    onSubmit: func.isRequired,
    onChange: func.isRequired,
    query: string.isRequired
};

export default MovieForm;
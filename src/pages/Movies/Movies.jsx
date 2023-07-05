import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IMAGE_URL } from "API/api-params";
import { getSearch } from "API/get-search";

import MovieForm from "components/MovieForm/MovieForm";
import {StyledMovie, StyledCard} from "./styled-movies";
import { StyledTitle } from "pages/Home/styled-home";
import { StyledSection } from "components/Section/styled-section";
import { StyledContainer } from "components/Container/styled-container";
import NotFound from "pages/NotFound/NotFound";
import { Loader } from "components/Loader/Loader";

// Define the status values
const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

const Movies = () => {
    //Define State
    const [query, setQuery] = useState(''); // Stores the current search query
    const [searchData, setSearchData] = useState([]); // Stores the search results
    const [searchParams, setSearchParams] = useSearchParams(); // Manages query parameter in URL
    const [status, setStatus] = useState(STATUS.IDLE); // Tracks API request status 
    const location = useLocation();
   
    useEffect(() => {
    // Trigger the API request when searchParams change
        if (searchParams.get('query') !== null) {
            const newQuery = searchParams.get('query');
            setStatus(STATUS.PENDING); // Set status while fetching data
            getSearch(newQuery)
        .then(resp => {
            setSearchData(resp); // Update the search data state with API response
            setStatus(STATUS.RESOLVED); // Set status after successful fetch
            console.log(resp);
            resetForm(); // Reset the form after receiving the data
        })
        .catch(error => {
            console.log(error);
            setStatus(STATUS.REJECTED); // Set status if there's an error
        });
        }
    }, [searchParams]);

    const handleQueryChange = (e) => {
        setQuery(e.currentTarget.value.toLowerCase()); //updates query state as user inputs search
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            return;
        }
       setSearchParams({ query: query }); // Update the URL with the new query parameter
    };
    
    const resetForm = () => {
        setQuery(''); 
    }
    
    return (
        <StyledSection>
        <StyledContainer>
            <StyledMovie>
                <h1 className='aria-hidden'>Movie Search</h1>
                <MovieForm
                    onSubmit={handleFormSubmit}
                    onChange={handleQueryChange}
                    query={query} />
                {/* Render different content based on the status */}
                {status === STATUS.IDLE && <h1>Enter a query to search for any movie in our database.</h1>}
                {status === STATUS.PENDING && <Loader />}
                {status === status.REJECTED && <NotFound />}
                    {status === STATUS.RESOLVED && searchData && (
                        <>
                            {/* Render 'NotFound' component if searchData is empty */}
                            {searchData.length === 0 ? (
                                <NotFound />
                            ) : (
                                // Render search results if searchData is not empty                
                                <ul>
                                    {searchData.map((data, idx) => (
                                        <li key={idx}>
                                            <Link to={`./${data.id}`} state={{ from: location.pathname + location.search }}>
                                                <StyledCard>
                                                    <img src={data.poster_path
                                                        ? IMAGE_URL + data.poster_path
                                                        : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'}
                                                        alt={data.title ? data.title : 'Title coming soon'}
                                                    />
                                                    <StyledTitle>
                                                        <h3>{data.title
                                                            ? data.title
                                                            : data.original_title}
                                                        </h3>
                                                        <p>{data.release_date
                                                            ? new Date(data.release_date).getFullYear()
                                                            : '---'}
                                                        </p>
                                                    </StyledTitle>
                                                </StyledCard>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
            </StyledMovie>
        </StyledContainer>
        </StyledSection>
    );
};

export default Movies;
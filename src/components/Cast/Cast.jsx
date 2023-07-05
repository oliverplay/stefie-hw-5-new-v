import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCredits } from "API/get-cast";

import StyledCast from "./styled-cast";
import { IMAGE_URL } from "API/api-params";

const Cast = () => {
    const { movieID } = useParams();
    const [castData, setCastData] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        getCredits(movieID)
            .then(data => {
                if (mounted) {
                    setCastData(data.cast);
                };
            });
        return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <StyledCast>
            <ul>
                {castData.length === 0
                    ? (
                       <p>There is no data in the TMDB database for the cast of this film.</p>
                    )
                    : castData.map((cast, idx) => (
                        <li key={idx}>
                            <img src={ cast.profile_path
                                ? IMAGE_URL + cast.profile_path
                                :'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                                }
                                alt={cast.name ? cast.original_name: 'Actor coming soon'}
                            
                            />
                            <h3>{cast.name}</h3>
                            <p>{cast.character}</p>
                            
                        </li>
                    
                    ))
                }
            </ul>
        </StyledCast>
    );
};

export default Cast;
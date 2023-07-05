import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getReviews } from 'API/get-reviews';

import StyledReviews from './styled-reviews';

const Reviews = () => {
  const { movieID } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getReviews(movieID).then(data => {
      if (mounted) {
        setReviewsData(data.results);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledReviews>
      <ul>
        {reviewsData.length === 0 ? (
          <li>There are no reviews in the TMDB database for this film.</li>
        ) : (
          reviewsData.map((review, idx) => (
            <li key={idx}>
              <h4>Author</h4>
              <p>{review.author}</p>
              <h4>Review</h4>
              <h5>{review.content}</h5>
            </li>
          ))
        )}
      </ul>
    </StyledReviews>
  );
};

export default Reviews;

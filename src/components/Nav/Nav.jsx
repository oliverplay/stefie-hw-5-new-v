import { string } from 'prop-types';

import { StyledLink } from './styled-nav';
const Nav = ({className}) => {
    return (
        <div className={className}>
            <nav>
                <StyledLink to="/">Home</StyledLink>{' '}
                <StyledLink to="/movies">Movies</StyledLink>
            </nav>
        </div>
    );
};
Nav.propTypes = {
    className: string,
};
export {Nav};
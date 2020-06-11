import React from 'react';
import { connect } from 'react-redux';

import { getJokes } from '../actions';

const JokesGeneratorForm = props => {

    const handleGetJokes = e => {
        e.preventDefault();
        props.getJokes();
    }

    return (
        <>{props.isFetchingJokes ? (
            <div><span role='img' aria-label='loading emoji'>🌀</span>We are fetching data<span role='img' aria-label='loading emoji'>🌀</span></div>
        ) : (
                <button onClick={handleGetJokes} className='button'>Get jokes</button>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingJokes: state.isFetchingJokes
    }
}

export default connect(
    mapStateToProps,
    { getJokes }
)(JokesGeneratorForm);
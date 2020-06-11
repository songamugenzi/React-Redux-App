import React from 'react';
import { connect } from 'react-redux';

const JokesList = props => {
    return (
        <>
            {props.error ? (
                <div className='error'>{props.error}</div>
            ) : (
                    props.jokes.map((joke, idx) => (
                        <div key={idx} className='joke'>
                            <h2>{joke.setup}</h2>
                            <h3>{joke.punchline}</h3>
                        </div>
                    )))}
        </>
    );
};

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(JokesList);
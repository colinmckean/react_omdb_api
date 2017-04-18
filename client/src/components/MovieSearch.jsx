import React from 'react';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            value: ''
        }
    }
    render() {
        return ( 
            <div>
                <form onSubmit = {
                    (event) => {
                        this.props.searchFunction(this.state.value);
                        event.preventDefault();
                    }
                }>
                <input id = "search-query"
                placeholder = "Enter a movie name"
                value = {
                    this.state.value
                }
                onChange = {
                    (event) => this.setState({
                        value: event.target.value
                    })
                }
                />  <input type = "submit"
                value = "Search" />
                </form>  
            </div>
        );
    }
}

export default MovieSearch;
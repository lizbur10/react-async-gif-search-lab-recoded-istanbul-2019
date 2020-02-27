import React from 'react';

class GifSearch extends React.Component {
    constructor(props) {
        super()
        this.state = {
            query: props.query
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchGifs(this.state.query);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Enter a Search Term</h4>
                <input 
                    type="text" 
                    name="query" 
                    id="query"
                    onChange={this.handleChange}
                    value={this.state.query} 
                />
                <input type="submit" />
            </form>
        )
    }
}

export default GifSearch;
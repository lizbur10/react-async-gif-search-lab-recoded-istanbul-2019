import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (query="norwich%20terriers") => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0,3)
            })
        });
    }

    render() {
        return (
            <div>
                <GifSearch query="" fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs();
    }
}

export default GifListContainer;
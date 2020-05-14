import React from 'react';
import Media from 'react-media';

import '../stylesheets/Image.css'

export default class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageSize: '',
            imageHeight: 0,
            imageWidth: 0
        }
    }
    componentDidMount(){
        this.setState({
            imageSize: this.props.imageSize,
            imageHeight: this.props.imageSize==='large'? 19: 12,
            imageWidth: this.props.imageSize==='large'? 16: 19
        })
    }
    render() {
        let height = this.state.imageHeight;
        let width = this.state.imageWidth;
        return (
            <a href={this.props.projectLink}>
                <Media
                    queries={{
                        large: "(min-width: 1024px)",
                        small:"(max-width: 1023px)"
                    }}
                    onChange={(matches) => {
                        matches.large && 
                            this.setState({ 
                                imageHeight: this.state.imageSize === 'large' ? 17: 12,
                                imageWidth: this.state.imageSize === 'large' ? 14: 19
                            });
                        matches.small && this.setState({ 
                            imageHeight: this.state.imageSize === 'large' ? 17: 14,
                            imageWidth: this.state.imageSize === 'large' ? 14: 22
                        })
                        }
                    }
                />
                <div className="image-wrapper " data-aos="fade">
                    <div className="image-border" style={{height:`${height}em`,width:`${width}em`}}></div>
                    <div className="image-cover" style={{height:`${height}em`,width:`${width}em`}}></div>
                    <img 
                        src={this.props.imageLink} 
                        className="image" 
                        alt=''
                        style={{height:`${height}em`,width:`${width}em`}}
                    />
                </div>
            </a>
        )
    }
}
/*
1: https://user-images.githubusercontent.com/19610074/78087285-38236880-73de-11ea-8554-01e2b11a3f7f.png
2: https://user-images.githubusercontent.com/19610074/78087286-38bbff00-73de-11ea-8b03-8cccc3cda37a.png
*/
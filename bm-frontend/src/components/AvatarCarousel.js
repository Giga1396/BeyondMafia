import React, { Component } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "../css/AvatarGallery.css"

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/default-avis/', false, /\.(png|jpe?g|svg)$/));

export default class AvatarCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: images[0].default
        };
        this.onSlide = this.onSlide.bind(this);
    }

    onSlide(index) {
        this.setState({ selected: images[index].default });
    }

    render() {
        return ( <
            div className = "Gallery" >
            <
            ImageGallery showPlayButton = { false }
            showFullscreenButton = { false }
            showThumbnails = { false }
            items = {
                images.map(function(image) {
                    return { original: image.default, originalHeight: 100 };
                })
            }
            onSlide = { this.onSlide }
            /> < /
            div >
        );
    }
};
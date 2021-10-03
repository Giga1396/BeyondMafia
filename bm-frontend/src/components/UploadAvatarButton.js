import React, { Component } from 'react';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import { File, FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import AvatarCarousel from './AvatarCarousel.js'

// Register the plugins
import '../css/UploadButton.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFileEncode)



class UploadAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            base64: ''
        }
    }

    render() {
        window.avatar = this.state.base64;
        if (this.state.files.length === 0) {
            var avatarPrompt = < h3 className = "avatarPrompt" > Upload a file from your device,
                image should be square, at least 184 px x 184 px < /h3>
            var selection = <
                div >
                <
                AvatarCarousel / >
                <
                div className = "upload" >
                <
                h2 > OR < /h2> <
                /div> <
                /div>
        }
        return ( <
            div style = {
                { paddingTop: "10px" } } > { selection } <
            div className = "uploadButton" >
            <
            FilePond className = "uploadButton"
            files = { this.state.files }
            name = "files"
            labelIdle = '<span class="filepond--label-action">UPLOAD</span> YOUR OWN AVATAR '
            imagePreviewHeight = { 184 }
            imageResizeTargetWidth = { 184 }
            imageResizeTargetHeight = { 184 }
            imageResizeMode = "force"
            onupdatefiles = {
                (fileItems) => {
                    // Set current file objects to this.state
                    this.setState({
                        files: fileItems.map((fileItem) => fileItem.file),
                    });
                }
            }
            onpreparefile = {
                (item) => {
                    this.setState({ base64: item.getFileEncodeDataURL() });
                }

            }
            onremovefile = {
                (error, file) => {
                    this.setState({ base64: '' });
                }
            }
            credits = { false }
            /> { avatarPrompt } <
            /div>




            <
            /div>
        );
    }
}

export default UploadAvatar;
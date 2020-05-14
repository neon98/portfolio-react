import React from 'react';
import '../stylesheets/TypedText.css';
import data from '../assets/data.json'

 export default class TypedText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150
        }
        this.handleType = this.handleType.bind(this)
    }
    componentDidMount(){
        this.handleType();
    }
    handleType(){
        let dataText = data.dataStrings;
        const {text, isDeleting, loopNum, typingSpeed} = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];
        this.setState({
            text: isDeleting?fullText.substring(0, text.length-1): fullText.substring(0, text.length+1),
            typingSpeed: isDeleting? 30: 150
        });

        if(!isDeleting && text === fullText){
            setTimeout(()=>this.setState({
                isDeleting: true
            }), 500);
        } else if(isDeleting && text === ''){
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType, typingSpeed)
    }
    render(){
        return(
            <p className="canvas-text-subtitle">
                <span>{this.state.text}</span>
                <span id="cursor"></span>
            </p>
        )
    }
 }
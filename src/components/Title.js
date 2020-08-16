import React, { Component } from 'react';

const TITLES = [
    'A Software Developer',
    'A Music Lover',
    'An Enthusuastic Learner',
    'An Adventure Seeker'
];


class Title extends Component{
    state = {titleIndex: 0, fadeIn: true };

    componentDidMount(){
        this.animateTitles();   
        this.Timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);     
    }

    componentWillMount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.Timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.Timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
            this.setState({ titleIndex: titleIndex, fadeIn: true});

        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[this.state.titleIndex];

        return(
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title} </p>
        );
    }
}

export default Title;
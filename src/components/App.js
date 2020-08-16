import React, { Component } from 'react';
import PROJECTS from '../data/projects';
import Projects from './Projects';
import Profile from './SocialProfile'
import profile from '../assets/profile.png'; //for profile pic
import Title from './Title';
import Header from './Header';
import Jokes from './Jokes';


class App extends Component {
   state = { displayBio: false}
    // constructor(){
    //     super();
    //     this.state = { displayBio: false}; 
        // this.showMore = this.showMore.bind(this);  
        // this.showLess = this.showLess.bind(this);
        // this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    // as we make callback funt for toggle now we don't need to bind this and we dont need constuctor either 
    // showMore(){
    //     this.setState({displayBio: true});
    // }
    // showLess(){
    //     this.setState({displayBio: false});
    // }
    // lets make much clean code for show more and show less
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }
    render() {
        return(
            <div>
                <Header />
                <img src={profile} className="profile" />
                <h2>This Portfolio is made by using React JS</h2>
                <p>I am Irtaza.</p>
                <Title />
                <p>Working With React is awesome</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I am currently Working on React</p>
                            <p>My Goal is to make a Netflix clone as my first portfolio project</p>
                            <p>Other then that i also love playing games and Listen to music</p>
                            {/* <button onClick={this.showLess}>Show Less</button> */}
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            {/* <button onClick={this.showMore}>See More</button> */}
                            <button onClick={this.toggleDisplayBio}>Show More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <Profile />
                <hr />
                <Jokes />
            </div>
        );
    }
}

export default App;
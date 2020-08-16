import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

class Social extends Component {
    render() {
        const { link, image }= this.props.social;
        return(
            <span style={{display: 'inline-block', margin: 10}}>
                <a href={link}><img src={image} alt='profile' style={{ width: 50, height: 50}} /></a>
            </span>
        );
    }
}

class Profile extends Component {
    render(){
        return(
            <div>
                <h2>Feel Free To Contact</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {  
                            return(
                                <Social key={SOCIAL_PROFILE.id} social={SOCIAL_PROFILE}
                                />
                                );
                        })
                    }
                </div>
            </div>
            
        );
    }
}

export default Profile; 
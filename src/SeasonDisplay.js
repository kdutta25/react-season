import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text:'Let\'s Hit The Beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr Its Chilly',
        iconName:'snowflake'
    }
};

const getSeason = (lat, month)=>{
    if (month >=3 && month <=8){
        return lat>0 ? 'summer' :'winter';
    }
    else {
        return lat > 0 ? 'winter' :'summer';
    }
}
const SeasonDisplay =(props) => {
    
    const season = getSeason(props.lat, new Date().getMonth());
    // const expression = season==='summer' ? 'Lets Hit The Beach': 'Burr Its Chilly'
    // const icon = season === 'summer'? 'sun':'winter'
    const {text, iconName} = seasonConfig[season]; //Return would be a{text, iconName}
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
              <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
         
          
     );

};
export default SeasonDisplay;



                                                                               

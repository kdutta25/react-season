import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from'./SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{

    /*constructor(props){

        super(props);
        //this is the only time where we do direct assignment otherwise we need to use setState
        //this.state is a property and state is a predefined property
        //this.state= {lat:null, errorMessageLat:''};
        //this.state= {long:null, errorMessageLong:''};
    }*/
    state={  lat:null, errorMessageLat:'', long:null, errorMessageLong:''};// this single line of code is equivalent of writing the constructor and writing this.state

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            
            position=>{
                this.setState({lat:position.coords.latitude});
                //this.setState({long:position.coords.longitude}); 
            },
            err=> {
                this.setState({errorMessageLat:err.message});
                //this.setState({errorMessageLong:err.message});
            }
        );

    }
    // React says we have to define the render function
    //render() method is executed as soon as the components get created

    renderContent(){

        if(this.state.errorMessageLat && !this.state.lat){
            return (
               <div> 
                   Latitude Error: {this.state.errorMessageLat} 
               </div>
            );   
       }
       if(!this.state.errorMessageLat && this.state.lat){
           return <SeasonDisplay lat= {this.state.lat}/>          
      }
       return <Spinner message="Please Allow Location Request" />;     
    }


    render(){

        /*if(this.state.errorMessageLat && !this.state.lat){
            return <div>Latitude Error: {this.state.errorMessageLat}</div>
        }*/
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
         
    };
};
ReactDOM.render(<App/>,document.querySelector('#root'))
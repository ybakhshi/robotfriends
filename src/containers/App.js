import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state ={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots:users}));
        // another to use fetch , it is a window method to make request from sever
        //.then(response =>{return response.json();})
        //.then(users =>{this.setState({robots:users});});
        
        
    }
    onSearchChange =(event)=>{
        this.setState({searchfield: event.target.value});
        //console.log(filterRobots);
    }
    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length === 0){
            return <h1>Loading ...</h1>
        }
        else
        {
            return (
                <div className='container text-center'>
                    <h1>RobotFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>    
                        <div className ='row mt-3'>
                            <ErrorBoundry>
                            <CardList robots ={filterRobots}/>
                            </ErrorBoundry>   
                        </div>
                    </Scroll>
                </div>
                );
        }
        
    }
}

/*const App = () =>{
    return (
        <div className='container text-center'>
            <h1>RobotFriends</h1>
            <SearchBox/>
            <div className ='row mt-5'>
                <CardList robots ={robots}/>
            </div>
        </div>
        );
}*/

export default App;
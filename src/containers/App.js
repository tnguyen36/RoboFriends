import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';


class App extends React.Component {
    

    componentDidMount() {
        this.props.requestRobots();
        
    }

    onSearchChange = (event) => {
        this.props.setSearchField(event.target.value);
    }

    
    render() {
        const {searchField, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading</h1> :      
        (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );
        
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


export default connect(mapStateToProps, {setSearchField, requestRobots})(App);

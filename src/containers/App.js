import React from 'react';
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';
import MainPage from '../components/MainPage';


class App extends React.Component {
    

    componentDidMount() {
        this.props.requestRobots();
        
    }

    onSearchChange = (event) => {
        this.props.setSearchField(event.target.value);
    }

    
    render() {
       return <MainPage {...this.props} />       
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

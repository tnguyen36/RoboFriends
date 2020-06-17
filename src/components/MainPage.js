import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';




class MainPage extends React.Component {
    

    componentDidMount() {
        this.props.requestRobots();
        
    }

    onSearchChange = (event) => {
        this.props.setSearchField(event.target.value);
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }
    
    render() {
        const {isPending} = this.props;       
        return isPending ?
            <h1>Loading</h1> :      
        (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.filteredRobots()} />
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );
        
    }
}



export default MainPage;

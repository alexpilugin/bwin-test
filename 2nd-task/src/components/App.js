import React from 'react';
import './App.css';
import {Grid, Tabs, Tab } from 'react-bootstrap';
import GameCategory from './GameCategory';
import 'whatwg-fetch'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      categories: {},
      games: {},
    };
  }
  //Global context implementation
  getChildContext() {
    return {
      games: this.state.games,
    }  
  }
  componentWillMount() {
    const categoriesURL = 'api/categories.json';
    this.loadData(categoriesURL, (json) => {
        this.setState({ categories: json.data });
        //console.log(this.state.categories);
    });
    const gamesURL = 'api/games.json';
    this.loadData(gamesURL, (json) => {
        this.setState({ games: json.data });
        //console.log(this.state.games);
    });
  }
  loadData(url, success) {
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success);
  }
  checkStatus(response) {
    if (response.ok && response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }
  parseJSON(response) {
    return response.json();
  }
  hundleShowMore(categoryName, quantity){
    console.log("Show More clicked: " + categoryName + " category, " + quantity);
  }
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>

            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Home">
                <GameCategory 
                  ref='new'
                  title='New' 
                  category={this.state.categories['new']}
                  showMoreClick={this.hundleShowMore} 
                  showMore
                  />
                <GameCategory 
                  ref='scratchcards'
                  title='Scratch Cards'
                  category={this.state.categories['scratchcards']} 
                  showMoreClick={this.hundleShowMore} 
                  showMore
                  />
                <GameCategory 
                  ref='jackpot'
                  title='Jackpot' 
                  category={this.state.categories['jackpot']}
                  showMoreClick={this.hundleShowMore} 
                  showMore
                  />
              </Tab>

              <Tab eventKey={2} title="New">
                <GameCategory
                  ref='new'  
                  title='New'
                  category={this.state.categories['new']}
                />  
              </Tab>

              <Tab eventKey={3} title="Scratch Cards">
                <GameCategory 
                  ref='scratchcards'
                  title='Scratch Cards'
                  category={this.state.categories['scratchcards']}
                /> 
              </Tab>

              <Tab eventKey={4} title="Jackpot">
                <GameCategory 
                  ref='jackpot'
                  title='Jackpot'
                  category={this.state.categories['jackpot']}
                /> 
              </Tab>

            </Tabs>
    
        </Grid>
      </div>
    );
  }
}

//Global context definition:
App.childContextTypes = {
  games: React.PropTypes.object,
};


export default App;

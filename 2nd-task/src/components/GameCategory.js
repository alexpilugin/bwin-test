import React from 'react';
import GameItem from './GameItem';
import {Row, Col, Button} from 'react-bootstrap';

class GameCategory extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      counter: 5,
      showMore: this.props.showMore,
    };

    this.hundleShowtMore = this.hundleShowtMore.bind(this)
  }
  hundleShowtMore() {
      var quantity = this.state.counter + 5;
      //console.log("quantity: " + quantity + " counter: " + this.state.counter);

      if(this.props.category) {
        const len = this.props.category.length; //Object.keys(games).length; 
        if(quantity >= len) {
            quantity  =  len; 
            //console.log("quantity: " + quantity + " len: " + len);
            this.setState({
                showMore: false,   
            })
        }           
      } else {
        this.setState({ 
            showMore: true,   
        })          
      }
      this.setState({
        counter: quantity,  
      })
      this.props.showMoreClick(this.props.title, this.state.counter);
  }
  render() {
    // const { showMore, ...props } = this.props; 
    //if(this.props.category) console.log(this.props.category);
    //console.log(this.context.games);

    var items = [];
    if(this.props.category !== undefined && this.context.games !== undefined) {
        const games = this.context.games;
        var quantity = this.state.counter; 

        if(!this.props.showMoreClick) {
            const len = this.props.category.length; 
            quantity = len;  
        }
        
        for (var i = 0; i < quantity; i++) {
            const gameId = this.props.category[i].gameId;
            //console.log("gameId: " + gameId + " games[gameId]: " + games[gameId].toString());

            //Next line generates an error in Google Chrome (not in Safari) : "Uncaught (in promise) TypeError: Cannot read property 'titleText' of undefined"
            const titleText = games[gameId].titleText ? games[gameId].titleText : gameId.toString(); //gameId.toString() if titleText is undefined
            const descriptionText = games[gameId].descriptionText ? games[gameId].descriptionText : gameId.toString();

            items.push(
                <GameItem 
                    key={gameId} 
                    title={titleText}
                    description={descriptionText}
                    pic={games[gameId].fileReference}
                    playURL='playURL' 
                />
            )
        }

    } else {
        items.push(
            <GameItem
                key={'error'} 
                title='Error' 
                description='There is some error with Game Category'
                playURL='error' 
            />    
        )   
    }
    return (
            <Row className="flex-row">
                <Col xs={12}><h2>{this.props.title}</h2></Col>

                {items}

                {/* if this.props.showMoreClick provided, show the Button "Show more" */}
                {  this.state.showMore && 
                    <Col xs={12}>
                        <Button bsStyle="primary" block onClick={this.hundleShowtMore}>
                            SHOW MORE
                        </Button>
                    </Col> 
                }         
            </Row>
        )
    }
}

const propTypes = {
  showMore: React.PropTypes.bool,
  showMoreClick: React.PropTypes.func,
};

const defaultProps = {
  showMore: false,
  showMoreClick: null,
};

GameCategory.propTypes = propTypes;
GameCategory.defaultProps = defaultProps;

//Child context definition:
GameCategory.contextTypes = {
    games: React.PropTypes.object,
}

export default GameCategory;
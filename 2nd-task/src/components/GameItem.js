import React from 'react';
import {Col, Thumbnail, Button} from 'react-bootstrap';

class GameItem extends React.Component {
  render() {
      const playURL = this.props.playURL;
      return (
        <Col className="col-xs-half-5 col-sm-1-5">
            <Thumbnail src={this.props.pic} alt="picture" className="GameItem">
                <h3>{this.props.title.toUpperCase()}</h3>
                <p>{this.props.description}</p>
                <p>
                    <Button bsStyle="success" href={'#launch-$'+playURL}>Game CTA</Button>&nbsp;
                </p>
            </Thumbnail>
        </Col>
      )
  }
}


export default GameItem;
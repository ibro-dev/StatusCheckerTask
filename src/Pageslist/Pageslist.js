import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pageslist.css';
import { addStatusPageUrl } from "../actions";

class Pageslist extends Component {
    constructor() {
        super()
        this.state = {
            url: ''
        }
    }

    handlestatusPageChange = (e) => {
        this.setState({url: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addStatusPageUrl(this.state);
        }

    render() { 
        return (
            <div className="container">
                <form onSubmit={e => this.checkLogin(e)}>
                    <br></br>
                    <input type = "text" name= "statusPage" value={ this.state.url } onChange={this.handlestatusPageChange} placeholder="
                    Enter status Page URL and get real time Infos"></input>
                    <input type = "submit" value = "Get Status"></input>
                    <br></br>
                </form>
                <br></br>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addStatusPageUrl: url => {
        dispatch(addStatusPageUrl(url));
      }
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(Pageslist);
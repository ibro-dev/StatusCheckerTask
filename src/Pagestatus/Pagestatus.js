import React, { Component } from 'react';
import { connect } from "react-redux";
import './Pagestatus.css';
import { fetchPageContent } from "../actions";

class Pagestatus extends Component {
    constructor () {
        super();
    }

    componentDidMount() {
        this.props.fetchPageContent();
    }

    render() {
        return (
            <div className="container">
                <div className="status--section container">
                    {this.props.contents.map((content, index) => {   
                        if (index === 6 || index === 12 ) {          
                    return(
                        <div key={index}>
                            <div className="columns status--section__box">
                            <h2>{content.url}</h2>
                                <div className="column btc--section">
                                    <h5>{content.name}</h5>
                                </div>
                                <div className="column eth--section">
                                    <h5>{content.status} <span style={{color:"green"}}> &#10004; </span></h5>
                                </div>
                            </div>
                        </div>
                        )}
                    })}
                </div>

                <div className="status--section container">
                    {this.props.contents.map((content, index) => {   
                        if (index === 0 || index === 2 || index === 4 ) {          
                    return(
                        <div key={index}> 
                            
                            <div className="columns status--section__box">
                            <h2>{content.url}</h2>
                                <div className="column btc--section">
                                    <h5>{content.name}</h5>
                                </div>
                                <div className="column btc--section">
                                <h5>{content.region}</h5>
                                <h5>{content.region}</h5>
                                </div>
                                <div className="column eth--section">
                                <h5>{content.status} <span style={{color:"green"}}> &#10004; </span></h5>
                                <h5>{content.status} <span style={{color:"green"}}> &#10004; </span></h5>
                                </div>
                            </div>
                        </div>
                        )}
                    })}
                </div>
            </div>  
        );
    }
}

const mapStateToProps = ({ contents = {} }) => ({
    contents
  });
const mapDispatchToProps = { fetchPageContent };

export default connect(mapStateToProps, mapDispatchToProps)(Pagestatus);
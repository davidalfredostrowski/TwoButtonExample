import React, { Component } from "react";



class Instruction extends React.Component {



    state = {
      johnnyCount: 1
     , amberCount: 1
    }


    Unilevel = () => {
        this.setState((prevState) =>({ johnnyCount : prevState.johnnyCount + 1 }));
    };

    Scllevel = () => {
        this.setState((prevState) => ({ amberCount : prevState.amberCount + 1   }));
    };

    render() {
        return (
            <>
                <div>
                    <button onClick={this.Unilevel}> Uni Instruction</button>
                    <button onClick={this.Scllevel}> School Instruction</button>
                </div>
                <h5>Johnny count: {this.state.johnnyCount}</h5>
                <h5>Amber count: {this.state.amberCount}</h5>
            </>
        );
    }
}

export default Instruction;

import React, { Component } from 'react';

class RecursiveBracket extends Component {
    constructor(props){
        super(props);

        let next = [];
        if(props.teams.length > 1){
            for(let i = 0; i < props.teams.length/2; i++){
                next.push(null);
            }
        }

        this.state = {
            next
        }
    }

    handleClick = (t, i) => {
        // get a copy of the list for immutability;
        let temp = this.state.next.slice();
        temp[Math.floor(i/2)] = t;

        this.setState({
            next: temp 
        });
    }

    render(){
        const { teams } = this.props;

        return (
            <div style={{border: "red 1px solid"}}>
                {/* keys need to be unique, duh, but doing it recursivly you can't use the same key */}
                { teams.map((t, i) => t
                    ? <div key={t+Math.random()}>
                          <button onClick={(e) => this.handleClick(t, i)}>
                              {t}
                          </button>
                      </div>
                    : <div key={t+Math.random()}>-</div>) }
                { this.state.next.length > 0 && 
                    <RecursiveBracket teams={this.state.next} />
                }
            </div>
        );
    }
}

export default RecursiveBracket;
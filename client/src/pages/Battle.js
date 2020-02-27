import React, { Component } from "react";
import MoveText from "../components/moveText"
import Moving from "../components/movement"
class Battle extends Component {
    render() {
        return (
            <>
                <Moving />
                <MoveText />
            </>
        )
    }
}

export default Battle
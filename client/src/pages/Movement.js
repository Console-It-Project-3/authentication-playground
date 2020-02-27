import React, { Component } from "react";
import Moving from "../components/movement"
import MoveText from "../components/moveText"
class Movement extends Component {
    render() {
        return (
            <>
                <Moving />
                <MoveText />
            </>
        )
    }
}

export default Movement
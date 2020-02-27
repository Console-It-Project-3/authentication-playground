import React, { Component } from "react";
import Sprite from "../components/Character"
import Scroll from "../components/scroll"
class Character extends Component {
    render() {
        return (
            <div className="charContain">
                <div className="row">
                    <div className="col-md-6">
                        <Sprite />
                    </div>
                    <div className="col-md-6">
                        <Scroll />
                    </div>
                </div>
            </div>
        )
    }
}

export default Character
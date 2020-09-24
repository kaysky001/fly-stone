import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container text-muted ">
                        <ul className="float-right list-inline my-2">
                            <p className="list-inline-item">Copyright© 2020 羽石株式会社 All Rights Reserved.</p>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent

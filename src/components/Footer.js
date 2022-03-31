import React, { Component } from 'react'


export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">Bill Munene</span>
                
                <span className="float-right">
                        <a alt="GITHUB page"    target="_blank" href="https://github.com/nexsct/" rel="noopener noreferrer"> 
                            <i className="pr-3 fab fa-github"></i>
                        </a>
                        <a alt="LinkeIN page"   target="_blank" href="https://www.linkedin.com/in/bill-munene-3839a8179/" rel="noopener noreferrer">
                            <i className="pr-3 fab fa-linkedin"></i>
                        </a>
                </span>

                

            </div>
        </footer>
    )
  }
}

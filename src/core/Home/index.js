import React, { Component } from 'react'
// import ShoppingList from 'core/ShoppingList'
import Game from 'core/Game'
import {fetchPdf} from 'api/pdfService'

class Home extends Component {
  viewHandler = async () => {
    await fetchPdf();
  }

  render() {
    return (
      <div className="Home">
        <h1>This is the Home page</h1>

        <div>
          <button onClick={this.viewHandler}> View Pdf </button>{" "}
        </div>
        
        {/* <ShoppingList name="Nathan" /> */}
        <Game />
      </div>
    )  
  }  
}

export default Home

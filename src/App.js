import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
        <header>
          <div className="inner_header">
            <img
              src="https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg"
              alt="logo"
            />
          </div>
        </header>
        <main>
          <div id="content">
            <input type="text" id="search" placeholder="Search" />
            <div className="filter_container">
              <div className="filter">
                <input
                  defaultChecked
                  defaultValue="title"
                  name="filter"
                  id="title"
                  type="radio"
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="card_book_container">
              <div className="card_book">
                <p className="title">Classical Mythology</p>
                <p className="author">Mark P. O. Morford</p>
                <p className="publisher">Oxford University Press 2002</p>
              </div>
              <div className="card_book">
                <p className="title">Rules of the Wild</p>
                <p className="author">Francesca marciano</p>
                <p className="publisher">Random House Inc 1998</p>
              </div>
              <div className="card_book">
                <p className="title">Clara Callan</p>
                <p className="author">Richard Bruce Wright</p>
                <p className="publisher">HerperFlaminggo Canada 2001</p>
              </div>
              <div className="card_book">
                <p className="title">Wild Animus</p>
                <p className="author">Rich Shapero</p>
                <p className="publisher">Too Far 2004</p>
              </div>
              <div className="card_book">
                <p className="title">Tage der Unchuld</p>
                <p className="author">Richard North Patterson</p>
                <p className="publisher">Goldman 2000</p>
              </div>
              <div className="card_book">
                <p className="title">The Hellfire Club</p>
                <p className="author">Peter Straub</p>
                <p className="publisher">Random House Inc 1996</p>
              </div>
              <div className="card_book">
                <p className="title">The Night Listener</p>
                <p className="author">Armisted Maupin</p>
                <p className="publisher">HerperCollins Publisher 2000</p>
              </div>
              <div className="card_book">
                <p className="title">Night Tales</p>
                <p className="author">Nora Roberts</p>
                <p className="publisher">Silhouette 2000</p>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;

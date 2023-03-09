import React from 'react'
import TopBar from './TopBar';

function MainComponent(props) {
  return (
    <div id="MainSectionContainer">
        <section id="MainSection">
          <TopBar
          deleteAll={props.deleteAll}
          toggleMode={props.toggleMode}
          />
            <div id="responseContainer">
                {props.bubbles.map((element, index) => {
                  const bubbleClass = element.side === 'client' ? 'bubble client' : 'bubble server' && element.side === 'delete' ? 'bubble delete' : 'bubble server';
                  return (
                    <div className={bubbleClass} key={index}>
                      {element.response}
                    </div>
                  );
                })}


            </div>
            <div id="sendBoxContainer">
                <input placeholder='Type a message or query...' id="sendBox" type="text"/>
                <i onClick={props.initFunction} id="sendButton" className="fa-regular fa-paper-plane"></i>
            </div>
        </section>
    </div>
  )
}

export default MainComponent;

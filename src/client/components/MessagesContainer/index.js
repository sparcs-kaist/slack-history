import React from 'react';
import ReactDOM from 'react-dom';
import styles from './MessagesContainer.scss';
import Message from '../Message';
import Andmore from '../Andmore';

import $ from 'jquery';

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    
    // // Manually bind this method to the component instance...
    this.state = {
      id: 0,
      messages: []
    }
    this.loadHistory = this.loadHistory.bind(this);
  }

  loadHistory() {
    console.log('here');
    console.log(this.state.messages);
    var id = this.state.id + 1;
    console.log(id);
    $.ajax({
      url: '/messages/jangteo/' + id,
      dataType: 'json'
    }).done( data => {
      var data = data.map((d) => {
        return d;
      })
      this.setState({ id: id, messages: data.concat(this.state.messages) })
    })
  }

  componentDidMount() {
    this.refs.container.scrollTop = 500;  
    $.ajax({
      url: '/messages/jangteo/0',
      dataType: 'json'
    }).done( data => {
      var data = data.map((d) => {
        return d;
      });
      this.setState({ messages: data })
    })
  }

  render() {
    return (
      <div className={styles.messagesContainer} ref="container">
        <Andmore onClick={this.loadHistory} />
        { this.state.messages.map((message, i) => {
          /**
           * @todo conditionally render thumbnail 
           */
          return (<Message message={message} key={i}/>);
        })}
      </div>
    );  
  }
}

// function MessagesContainer({ messages }) {
//   return (
//     <div className={styles.messagesContainer}>
//       <Andmore />
//       { messages.map((message, i) => {
//         /**
//          * @todo conditionally render thumbnail 
//          */
//         return (<Message message={message} key={i}/>);
//       })}
//     </div>
//   );
// }


var messages =             [{
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            },
            {
              member: {
                name: "undead"
              },
              text: "ㅠㅠ 전 항상 \"역시 과거의 나는 똑똑했어...!!\"하고 감탄하는데"
            }]


export default MessagesContainer;

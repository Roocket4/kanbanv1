import React, { Component } from 'react';
import { Icon, Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class CardActionButton extends Component {
  state = {
    formOpen: false,
    text: "",

  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state; 

    if(text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text))
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if(text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listID, text))
    }
  };

  renderAddButton = ()=> {
  const { list } = this.props;
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return(
      <div 
        onClick = {this.openForm}
        style={{ 
         ...styles.openForButtonGroup,
         opacity: buttonTextOpacity,
         color: buttonTextColor, 
         backgroundColor: buttonTextBackground 
         }}
         >
        <Icon>+</Icon>
        <p>{buttonText}</p>
      </div>
    )
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter a title for the new list..." : "Enter a title for the new card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    return(
      <div>
        <Card style={{ minHeight: 80, minWidth: 272, padding: "6px 8px 2px" }}>
        <Textarea 
          placeholder={placeholder} 
          autoFocus 
          onBlur= {this.closeForm} 
          value= {this.state.text}
          onChange= {this.handleInputChange}
          style={{ resize: "none", width: "100%", outline: "none", border: 'none', overflow: "visible", }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button 
            onMouseDown={ list ? this.handleAddList : this.handleAddCard}
            variant="contained" 
            style={{ color: "white", backgroundColor: "#5aac44"}}>
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>X</Icon>
        </div>
      </div>
    )
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  }
};


export default connect()(CardActionButton);
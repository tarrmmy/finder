import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = (e) => {
    e.prevenDefault();
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
    <div>
      <form className='form' onSubmit={this.onSubmit}>
        <input style={{ height:'40px', width:'100%', margin:'10px 0px',color: 'black' }} 
        type="text" name="text" placeholder="Search users..." 
        value={this.state.text} onChange={this.onChange}/>

        <input style={{ height:'40px', width:'100%', margin:'10px 0px' }} 
        type="submit" value="Search" className="btn btn-dark btn-block"/>
      </form>
    </div>
    )
  }
}

export default Search;

import { Component } from 'react';
import './App.css';
import Navbar  from './components/layout/Navbar';
import Search from './components/user/Search';
import Users from './components/user/Users';
import axios from 'axios';
class App extends Component {
  state = {
    user: [],
    loading: false,
  }
  async componentDidMount(){
   this.setState({ loading: true })

  const res = await axios.get(`https://api.github.com/users?client_id=
  ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({ user: res.data, loading:false })
}
  render() {
    return(
      <div>  
        <Navbar title="Guthub Finder" />
        <div className='container'>
          <Search />
          <Users loading = {this.state.loading} users={this.state.user}/>
        </div>
      </div>
    )
  }
}

export default App;

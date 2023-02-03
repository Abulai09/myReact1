import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import UsersContainerAPI from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeadderContainer';
import Login from './components/Login/login';
import SectionContainer from './components/Section/Section';
import DiologsContainer from './components/Diologs/Diologs';
import NewsContainer from './components/News/News';
import { compose } from 'redux';
import withRouter from './components/withRouter/withRouter';  
import { connect } from 'react-redux';
import Loading from './components/Loader/loading';
import {setInitializeTC} from './redux/app-reducer'



class App extends React.Component {
  componentDidMount() {
    this.props.setInitializeTC();
  }

  render() {
    
    if (!this.props.initializing) {
      return <Loading />;
    }
    
    return (
      <div className="App">
        <div className="content">
          <HeaderContainer />
          <div className="wrapper">
            <Routes>
              <Route path="/" element={       <SectionContainer state={this.props.state} />}/>
              <Route path="/:id" element={<SectionContainer state={this.props.state} />}/>
              <Route path="/Diologs/" element={<DiologsContainer state={this.props.state} />}/>
              <Route path="/Diologs/:id" element={<DiologsContainer state={this.props.state} />}/>
              <Route path="/Users" element={<UsersContainerAPI />} />
              <Route path="/News" element={<NewsContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <div className="conteiner">
          <Footer />
        </div>
      </div>  
    );
  }
}

let mapStateToProps = (state) =>{
    return{
        initializing:state.app.initializing
    }
}

export default compose(withRouter, 
    connect(mapStateToProps,{setInitializeTC}))(App);
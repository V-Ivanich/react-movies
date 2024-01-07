import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'

export default class App extends React.Component {
  render() {
    // TODO: implement component
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
      // <main className='container content'>
      //   <Movies props={this.state.movies} />
      // </main>
    )
  }
}

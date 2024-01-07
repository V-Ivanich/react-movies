import React from 'react'

class Search extends React.Component {
  state = { search: '', type: 'all' }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      },
    )
  }

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='search'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn'
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }>
            Search
          </button>
          <div className='block-radio-btn'>
            <label className='radio-btn'>
              <input
                className='with-gap'
                type='radio'
                name='group3'
                data-type='all'
                checked={this.state.type === 'all'}
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>

            <label className='radio-btn'>
              <input
                className='with-gap'
                type='radio'
                name='group3'
                data-type='movie'
                checked={this.state.type === 'movie'}
                onChange={this.handleFilter}
              />
              <span>Movies Only</span>
            </label>

            <label className='radio-btn'>
              <input
                className='with-gap'
                type='radio'
                name='group3'
                data-type='series'
                checked={this.state.type === 'series'}
                onChange={this.handleFilter}
              />
              <span>Series Only</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Search

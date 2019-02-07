import React, {Component} from 'react';
import NewsList from './NewsList';
import DropDown from '../DropDown';
//import SearchOption from './SearchOption';
import axios from 'axios';

//component called news
class News extends Component {
  //to create a state within a component you use constructor(). Initialisse contructor with props
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      authorSelected: 'all',
      authorValues: [],
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleChange.bind(this);
  }

//lifecyle method
  componentDidMount() {
      const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cd67d54910a142feb557398804e8923d';
      axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data.articles,
        })
      })
      .catch((error) => console.log(error));
  }


  renderItems1() {

    const authors = this.state.data.map(item => item.author);

    // const authorMatch = (this.state.authorSelected === item.author || this.state.authorSelected === 'all');

    return (

      <DropDown  options={authors} name="authorSelected" handleChange={this.handleChange} label="Filter by author" selected={this.state.authorSelected} />


    );

    // return(
    //   <DropDown filtered={['all'].concat(this.state.authorValues)} name="authorSelected" handleChange={this.handleChange} label="Filter by nationality" selected={this.state.authorSelected} />
    // )

  }

  //this is the function that will iterate through the data that we get from database
  renderItems2() {
        return this.state.data .map((item) => (
        <NewsList key={item.url} item={item}  />
     ));
    }


    handleChange(event) {
      // handle both of the <select> UI elements
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      console.log(value);
      this.setState({
        [name]: value
      });
    }
    handleClick(event) {
          // handle the toggle <button>
          const name = event.target.name;
          this.setState(prevState => ({
         [name]: !prevState[name]
        }));
      }

render() {
      // if results are to be sorted, create a copy of the user data and sort it,
       // otherwise just use the original data from the state
       const data = this.state.sort === 'no' ? this.state.users : [].concat(this.state.users)
       .sort((a, b) => {
         if(a.name < b.name) return -1;
         if(a.name > b.name) return 1;
         return 0;
   });

      //  let newsList = his.state.data .map(news)
      return (
        <div className="container">
          <div className="row">
              {this.renderItems1()}
              </div>
              <div className="row">
              {this.renderItems2()}

           </div>
         </div>
      );
    }
  }

  export default News;

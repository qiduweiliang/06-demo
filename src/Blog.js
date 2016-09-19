import React, { PropTypes } from 'react'
import { getBlog } from './utils/helpers';
import marked from 'marked';
import higl from 'highlight.js';

class Blog extends React.Component {
  constructor(){
     super();
     this.state={
       data:'',
       wait:true
     }
   }
  componentDidMount(){
    let add = this.props.params.title;
    getBlog(add)
    .then( (recData) => {
        this.setState({
           data:recData.getBlog,
           wait:false
         })
         console.log(this.state.data);
       });
   }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return higl.highlightAuto(code).value;
      }
    });
    let content = this.state.wait? '请稍等' : marked(this.state.data);
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;

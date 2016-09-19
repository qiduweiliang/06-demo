import React, { PropTypes } from 'react'
import marked from 'marked'


class Maked extends React.Component {
  render () {
    let content = marked('# I am using markdown');
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Maked;

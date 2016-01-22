import React from 'react'

class TimePoint extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        showContext: false
    }
  }

  showContext() {
      this.setState({
          showContext: true
      });
  }

  hiddenContext() {
      this.setState({
          showContext: false
      });
  }
  render() {
    const { liWidth, pointContext } = this.props;
    let show = {
        display: this.state.showContext ? 'block' : 'none'
    }
    return (
        <li className='time-container' style={{width: liWidth}}>
            <div className='time-line'></div>
            <div className='time-point'
                onMouseEnter={this.showContext.bind(this)}
                onMouseOut={this.hiddenContext.bind(this)}></div>
            <span>{pointContext.time}</span>
            <div className='time-point-content' style={show}>
                {pointContext.context}
            </div>
        </li>
    )
  }
}

export default TimePoint;

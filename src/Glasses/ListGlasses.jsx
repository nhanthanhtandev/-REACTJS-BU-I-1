import React, { Component } from 'react'

export default class ListGlasses extends Component {
  renderListGlasses = () =>{
    let {dataListGlasses,handleListGlasses} = this.props;
    return dataListGlasses.map((glasses)=>{
        console.log(glasses.url);
        <div className='col-auto'>
            <span><img src="./public/glassesImage/v1.png" style={{width:"110px"}} /></span>
            <a href="#" className="btn btn-primary" onClick={()=> handleListGlasses(glasses) }>Thử kính</a>
        </div>
    })
  }
  render() {
    return <div className='row justify-content-between'>{this.renderListGlasses()}</div>
  }
}

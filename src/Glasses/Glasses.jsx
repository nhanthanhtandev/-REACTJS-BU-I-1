import React, { Component } from 'react'
import ListGlasses from './ListGlasses';
const dataListGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];
export default class Glasses extends Component {
    state = {
        arrayCart:[
            {
                "id": 1,
                "price": 30,
                "name": "GUCCI G8850U",
                "url": "./public/glassesImage/v1.png",
                "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
            },
        ]
              
    }
    renderDataListGlasses = () =>{
        return dataListGlasses.map((glasses)=>{

            return (
                    
                      
                    <span className='img_span' onClick={()=>this.handleUseGlasses(glasses) }><img src={glasses.url}/></span>
                       
                   );
        });
    };
    
    handleUseGlasses = (glasses)=>{
        console.log(glasses);
        this.setState({
            glass:glasses.url,
            name:glasses.name,
            desc:glasses.desc,
        })
    }
    render() {
    return (
        <div className='backGround'>
            <div className='overlay'>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.34)', padding: '1rem'}}>
                    <h1 className="display-5  text-center text-secondary">TRY GLASSES APP ONLINE</h1>
                </div>
                <div className='container' style={{height:"560px"}}>
                    <div className='row mt-5'>
                        <div className='col-6 text-center' style={{position:"relative"}}>
                            <img style={{width:"50%",position:"relative"}} src="./glassesImage/model.jpg" alt="model" />
                            <div className="tryGlasses">
                                <img src={this.state.glass} alt style={{width: 154, opacity: '0.7'}} />
                            </div>
                            <div><h6 className="d-none" /><p className="d-none" /></div>
                        </div>
                        <div className="col-6 text-center">
                            <img style={{width:"50%"}} src="./glassesImage/model.jpg" alt="model" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 p-5 mt-5 bg-white text-center glasses">
                            
                                { this.renderDataListGlasses()}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

import React from 'react'
import ligaImg from '../images/liga.svg'
import './styles/Card.css'
import circlesIMG from '../images/circles.png'

class Card extends React.Component{

render(){
const {tittle, description,img,leftcolor,rightcolor} = this.props
return (
    <div className="card mx-auto Fitness-Card" style={{
        backgroundImage: `url(${circlesIMG}), linear-gradient(to right, ${leftcolor}, ${rightcolor})`
    }}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
            <img src={img}></img>
              </div>
        <div className="col-6"> 
            <h1>{tittle}</h1>
            <p>{description}</p>
                </div>
        </div>
        </div>
    </div>
)

}

}

export default Card
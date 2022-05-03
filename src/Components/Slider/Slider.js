import React, {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from "./BtnSlider";


function Slider() {

    const [slideAnim, setSlideAnim ] = useState ({
        index:1,
        inProgress:false,
    })

    const nextSlide = () => {
      console.log("NEXT");
    
      if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

          setSlideAnim({index: slideAnim.index + 1, inProgress: true})

          setTimeout(()=> {
            setSlideAnim({index: slideAnim.index +1, inProgress: false})
                  // on repasse setTimeout a false pour redemander une autorisation
          }, 400)
          // au de 0.4s je repasse a true 
      }

      else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

        setSlideAnim({index:1, inProgress: true})

        setTimeout(()=>{
          setSlideAnim({index:1, inProgress:false})
        }, 400)

      }
        
    }

    const movDot = index => {
      setSlideAnim({index: index, inProgress: false})
    }


    const prevSlide = () => {
      console.log("prev");

    if(slideAnim.index !== 1 && !slideAnim.inProgress) {

        setSlideAnim({index: slideAnim.index - 1, inProgress: true})

          setTimeout(()=> {
            setSlideAnim({index: slideAnim.index-1, inProgress: false});
          }, 400)
    
    }
     else if (slideAnim.index===1 && !slideAnim.inProgress){

     
       setSlideAnim({index:5 , inProgress:true})

        setTimeout(()=>{
          setSlideAnim({index:5, inProgress: false})
        }, 400)

     }
     // car la longueur du tableau length est de 5 
     // mise a jour du state 
     //pour remettre a la premiere image
    
    
    }
    
  

  return (
      <div className ="container-slider">
        {dataSlider.map((obj, index) => {
            return (
              <div 
              key={obj.id}
              className={slideAnim.index === index + 1 ? 'slide active-anim' : "slide"}
              >
                <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
            </div>

            )
          })}

          <BtnSlider moveSlide = {nextSlide}  direction={"next"} />
          <BtnSlider moveSlide = {prevSlide} direction={"prev"} />

          <button className="container-dots">
            {Array.from({length: 5}).map((item, index) => {
              return <div className={slideAnim.index === index + 1 ? 
                "dot active" : "dot"}
                onClick = {() => movDot(index +1)}
                ></div>  
            })}

          
            </button>
          </div> 


      
      
            )
}

export default Slider
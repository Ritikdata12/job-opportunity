import React from 'react';
import "./Jobpart.css";

import $ from 'jquery';
import 'owl.carousel'; 
import Companies from './Companies';
const Jobpart = () => {
  return (

    <>


    
<div className="boxsize">
<h2 className='hhh'>Top Companies Recuters in japan</h2>
    <div className="row g-2">
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://th.bing.com/th/id/OIP.3PJ83LAykFG1_1FmmsK1VAHaE8?w=293&h=196&c=7&r=0&o=5&pid=1.7" className="rounded-circle" height="200px" width="200px"/>
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Bruce Hardy</h5>
                    <span>Software Developer</span>
                    <p>
                    Zeals is a company that provides AI-powered customer service tools. 

The company has been providing great
 customer support through its AI-powered chatbot since 2014. Their product “Zeals” allows customers to shop online by simply talking to an AI chatbot assistant, which
 aims to provide customers with classic Japanese hospitality
                    </p>
                    
                </div>
                
                <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    
                </div>
                
            </div>
        </div>
        
        <div className="col-md-4">
            
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://th.bing.com/th/id/OIP.fslZAm4hoGMLI9QPcqLnagHaLH?w=131&h=196&c=7&r=0&o=5&pid=1.7" className="rounded-circle" height="200px" width="200px"/>
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Mark Smith</h5>
                    <span>Web Developer</span>
                  <p>
                  Mercari is Japan's first unicorn startup, and they provide the largest C2C marketplace in Japan. The Mercari app allows customers to easily buy and sell “previously loved” items.

The company works on a flex-time basis, with core hours being
 between 12:00 PM and 4:00 PM. With Mercari’s “Your Choice” policy, employees can choose to work from home or at the office, and they hire from overseas too, of course.


                    </p>  
                </div>
                
                <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    
                </div>
                
            </div>
            
        </div>
        
        <div className="col-md-4">
            
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://th.bing.com/th/id/OIP.q-qwJkH6NiU8_Av0tsscbgHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7" className="rounded-circle"  height="200px" width="200px"/>
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Veera  Duncan</h5>
    
                    <span>Software Architect</span>
<p>
Founded in 2011, Mujin provides “intelligent robot controllers” using a technology called motion planning. This technology allows industrial robots to enter areas where the environment is dynamic and unpredictable.

The Tokyo-based company hires from abroad, and it has a pretty diverse environment with employees from 26 different countries. They sponsor visas for employees from abroad and provide a relocation
 fee in addition to covering flight ticket expenses.
    </p>                    
                </div>
                
                
                
            </div>
            
        </div>
        
        
    </div>
    
</div>
<Companies/>




<br/>


    </>
  );
}

export default Jobpart;

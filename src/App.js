import KayImage from "./Image/img 1.jpg"
import DanImage from "./Image/image 2.jpg"
import GozImage from "./Image/Image3.jpg"

function App() {
  return (
    
        <div className='container-fluid amby bg-info col-12'>
          <div className=" push">

                 <div className="fill">
                      <h2> The Moz Story</h2>
                      <p>We know SEO. In fact, we wrote the blog on it</p>
                 </div>

                 <div className="main-body">
                                      <div className="content">
                                                  <p>At Moz, we believe there is a better way to do marketing. A more valuable way where 
                                                 customers are earned rather than bought. We’re obsessively passionate about it, and our 
                                                  mission is to help people achieve it. We focus on search engine optimization. It’s one of 
                                                  the least understood and least transparent aspects of great marketing, and we see 
                                                   that as an opportunity.
                                                  We’re excited to simplify SEO for everyone through our software, education, and community</p>
                                     </div>


                              <div className="inview">
                      
          
                                             <img src={KayImage} 
                                             alt="simple pic"
                                             className="inview-image" 
                                          style={{width: "250px", height: "180px", padding: "25px",}}//resize here
                                              /> 
                                             
                                    

                                    <div className="inview-text">
                                               <h3>Our founding</h3>
                                                <p>At Moz, we believe there is a better way to do marketing. A more valuable way where 
                                         customers are earned rather than bought. We’re obsessively passionate about it, and our 
                                       mission is to help people achieve it. We focus on search engine optimization. It’s one of 
                                         the least understood and least transparent aspects of great marketing, and we see 
                                        that as an opportunity. We’re excited to simplify SEO for everyone through our software,
                                           education, and community</p>
                                  </div>
                              
                       </div>

                       <div className="inline">
            

             <div className="inline-text">
                        <h2>Early Growth & Funding</h2>
                         <p>At Moz, we believe there is a better way to do marketing. A more valuable way where 
                  customers are earned rather than bought. We’re obsessively passionate about it, and our 
                mission is to help people achieve it. We focus on search engine optimization. It’s one of 
                  the least understood and least transparent aspects of great marketing, and we see 
                 that as an opportunity. We’re excited to simplify SEO for everyone through our software,
                    education, and community</p>
           </div>
       
           <img src={DanImage} 
                      alt="simple pic"
                      className="inline-image" 
                      
                   style={{width: "200px", height: "180px", padding: "25px",}}//resize here
                       /> 
</div>




                  <div className="inkay">
                      
          
                                             <img src={GozImage} 
                                             alt="simple pic"
                                             className="inkay-image" 
                                          style={{width: "250px", height: "180px", padding: "25px",}}//resize here
                                              /> 
                                             
                                    

                                    <div className="inkay-text">
                                               <h2>Series B founding</h2>
                                                <p>At Moz, we believe there is a better way to do marketing. A more valuable way where 
                                         customers are earned rather than bought. We’re obsessively passionate about it, and our 
                                       mission is to help people achieve it. We focus on search engine optimization. It’s one of 
                                         the least understood and least transparent aspects of great marketing, and we see 
                                        that as an opportunity. We’re excited to simplify SEO for everyone through our software,
                                           education, and community</p>
                                  </div>
                              
                       </div>



                       <div className="infav">
            

            <div className="infav-text">
                       <h2>Early Growth & Funding</h2>
                        <p>At Moz, we believe there is a better way to do marketing. A more valuable way where 
                 customers are earned rather than bought. We’re obsessively passionate about it, and our 
               mission is to help people achieve it. We focus on search engine optimization. It’s one of 
                 the least understood and least transparent aspects of great marketing, and we see 
                that as an opportunity. We’re excited to simplify SEO for everyone through our software,
                   education, and community</p>
          </div>
      
          <img src={KayImage} 
                     alt="simple pic"
                     className="infav-image" 
                     
                  style={{width: "200px", height: "180px", padding: "25px",}}//resize here
                      /> 
</div>




     </div>
 </div>

 </div>      
  );
}

export default App;

import React from 'react'
import'./serviceallpage.css';
import NavBarall from '../../NavBar/navbar';
import img1 from '../../img/AestheticWeddingDecor_Services.jpg';
import img2 from '../../img/photography_Services.jpg';
import img3 from '../../img/brindalMakeup_Services.jpg';
import img4 from '../../img/Catering_Services.jpg';
import img5 from '../../img/CelebrityManagement_Services.jpg';

function Photography() {
  return (
    <>
    <NavBarall/>
        <div class="container15">
            <div class="row">
                <div class="col-md-12">
                <h1 class="viv_website_title">Aesthetic wedding decor</h1>
            {/* <h3 style="text-align: center;"><span class="fa fa-bullhorn"></span></h3> */}
            <h3>&nbsp;</h3>                    
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-5">
                        <img src={img1} alt="creative-dc1" class="img-responsive"/>
                    </div>
                    <div class="col-md-7">
                        <h4 class="viv_planning_headng_txt">Betrothal</h4>
                        <p>&nbsp;</p>
                        <p class="viv_website_para">We also provide excellent <a>
                           wedding decoration</a> services for betrothal/engagements.
                           Whether it is a small family gathering or a big engagement party we can assist you to make it a success.</p>
                        <p class="viv_website_para">We specialize to provide an exclusive
                             range of Betrothal Service to our clients, as per their requirement.</p>
                    </div>
                </div>
            </div>
            <h5>&nbsp;</h5>
            <hr/>
            <h5>&nbsp;</h5>
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-7">
                        <h4 class="viv_planning_headng_txt">Wedding Decoration</h4>
                        <p>&nbsp;</p>
                        <p class="viv_website_para">Vivid Wedding Planner - Best <a >wedding decorators</a> 
                          in Trichy gives you and your visitors a chance to encounter an extreme 
                          wedding knowledge by making an ideal topic tweaked by your particular needs.
                           We give stylistic layout subject in various shading and according to your spending limit. </p>
                        <p class="viv_website_para">Since this is where the marriage 
                          is really solemnized, unique consideration is given towards its 
                          beautification.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={img2} alt="creative-dc2" class="img-responsive"/>
                    </div>                            
                </div>
            </div>
            <h5>&nbsp;</h5>
            <hr/>
            <h5>&nbsp;</h5>
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-5">
                        <img src={img3}  alt="creative-dc3" class="img-responsive"/>
                    </div>                            
                    <div class="col-md-7">
                        <h4 class="viv_planning_headng_txt">Reception Decoration</h4>
                        <p>&nbsp;</p>
                        <p class="viv_website_para">Wedding is itself a major festival and celebration 
                          in our nation. Our administrations help the customers in recalling the marriage and 
                          post-marriage gathering capacities genuinely critical. We give a subject based 
                          enhancement administrations for the customers including wedding settings, gatherings
                           backgrounds, darbar seat front curve, name board, mukoortha medai embellishment, 
                           festoons, mugappu,...</p>
                    </div>                            
                </div>
            </div>
            <h5>&nbsp;</h5>
            <hr/>
            <h5>&nbsp;</h5>
            <div class="row">
                <div class="col-md-12">                            
                    <div class="col-md-7">
                        <h4 class="viv_planning_headng_txt">Valaikaapu (Baby Shower)</h4>
                        <p>&nbsp;</p>
                        <p class="viv_website_para">Be it a custom made design or a 
                          selection from our styling catalogue, Styled baby shower Events can theme your 
                          next event with unique and inspiring flair. marriages, baby shower, Parties, Seated 
                          Dinners, marriage functions or birthday party; we can accommodate all theming 
                          requirements</p>
                    </div>
                    <div class="col-md-5">
                        <img src={img4} alt="creative-dc4" class="img-responsive"/>
                    </div>                                                        
                </div>
            </div>
            <h5>&nbsp;</h5>
            <hr/>
            <h5>&nbsp;</h5>
            <div class="row">
                <div class="col-md-12">                            
                    <div class="col-md-5">
                        <img src={img5}  alt="creative-dc5" class="img-responsive"/>
                    </div> 
                    <div class="col-md-7">
                        <h4 class="viv_planning_headng_txt">Get Together Party</h4>
                        <p>&nbsp;</p>
                        <p class="viv_website_para">Family gatherings are an exceptional time that brings 
                          Aunts and Uncles/Niece and Nephews/Grand Dads and Moms together. You should make up 
                          for lost time with new things that are going on in their lives, think back about bygone
                           eras, and go through multi day of fun together. Commend this extraordinary event with
                            scrumptious nourishment with family get-together providing food administrations from us.</p>
                        <p class="viv_website_para">Utilizing over the abilities of our certified
                           group of experts, we are instrumental in giving Get Together Event Management.
                            This administration is given according to the customers necessities.</p>
                    </div>                                                                                   
                </div>
            </div>
           
        </div>
    </div>
    <h5>&nbsp;</h5>
</div>
    </>
  )
}

export default Photography
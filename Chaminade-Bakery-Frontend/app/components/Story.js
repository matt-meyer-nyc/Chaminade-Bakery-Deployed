import React from 'react'
import Footer from './Footer'
import Header from './Header'


const Story = React.createClass({
  render: function () {
  return (
    <div>
     <Header />
      <div className='storyContainer'>
        <img className='coupleImage' src='http://www.austinchronicle.com/imager/b/original/739673/15f5/food_feature1-1.jpg' />
         <p className='storyDescrip'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
        <img className='innerPhoto' src='http://previews.123rf.com/images/johnnydevil/johnnydevil1207/johnnydevil120700002/14392481-PRAGUE-CZECH-REPUBLIC-JUNE-29-Panoramic-view-of-a-bakery-shop-interior-on-June-29-2012-in-Prague-Cze-Stock-Photo.jpg'/>
       </div>
      <Footer />
    </div>

  )
 }
})



export default Story

import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
// import IMG from '../../assets/portfolio2.png'
// import IMG from '../../assets/portfolio3.png'
// import IMG from '../../assets/portfolio4.png'
// import IMG from '../../assets/portfolio5.png'
// import IMG from '../../assets/portfolio6.png'

const List=[{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
},{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
},{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
},{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
},{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
},{id:0,image:IMG1,title:'This is portfolio item title',Github:'https://github.com',livedemo:'https://dribbble.com/signup/new'
}]
const Portfolio = () => {
  const article=List.map(listItem=><article className="portfolio_item">
  <div className="portfolio_item-image">
  <img src={listItem.image} alt="" />
  </div>
  <h3>{listItem.title}</h3>
  
  <div className='portfolio_item-cta'><a href={listItem.Github} className='btn'target='_blank'>Github</a>
  <a href={listItem.livedemo} className='btn btn-primary' target='_blank'>Live Demo</a></div>
</article>);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        
        
        {article}
        
      </div>

    </section>
  )
}

export default Portfolio

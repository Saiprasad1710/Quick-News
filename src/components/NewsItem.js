import React from 'react'

const NewsItem = (props) => {
    
    let{title,description,imgurl,date,source} = props;
    return (
      <div className='my-3'>
       <div className="card" >

        <div className='flex'>
       <span className="badge rounded-pill bg-danger" id='badge'> {source} </span>
        </div>

        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">on {new Date(date).toGMTString() }</small></p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">View More</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem

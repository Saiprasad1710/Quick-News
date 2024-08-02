import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import './NewsCSS.css'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(0);
    // const [loding,setLoading] = useState(true);
    const [totalResults,setTotalResults] = useState(0);
    // document.title = `NewsToday-${capitalizeFirstLetter(props.category)}`;



    const capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    // articles = [];
    // constructor(props){
    //     super(props);
    //     state = {
    //         articles : articles,
    //         page:1,
    //         loading:true,
    //         totalResults:0
    //     }
    // }

    const updateNow = async () => {
      props.setProgress(10);

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData  = await data.json();
        props.setProgress(60);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);


    }

    useEffect (()=>{
      updateNow();
    
    },[])


    // const handlePreviousClick = async ()=>{
    //   await setState({
    //      page : page-1})
    //     updateNow();
    // }

    // const handleNextClick = async () =>{
    //   await setState({
    //     page : page+1})
    //     updateNow();
    // }

    const fetchMoreData = async ()=>{
      
      //  setState({
        //   page:page+1
        // })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
       setPage(page+1);
        // setState({loading:false})
        let data = await fetch(url);
        let parsedData  = await data.json();
        
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

        // setState({
        //   articles:articles.concat(parsedData.articles),
        //   totalResults:parsedData.totalResults,
        //   // loading:false
        // });

    }

    return (
      <>
        <h1 className='text-center' style={{marginTop:'90px'}} >NewsToday - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

  
                <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length <= totalResults}
                  loader={<Spinner/>} >
                <div className="container">
                <div className="row my-3">
                {articles.map((element) => {
                 
                
                return <div className="col-md-4">
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage} 
                date={element.publishedAt} source={element.source.name} />
                
                </div>  
              })}

               </div>
              </div>
              </InfiniteScroll>
      </>



                
    )
  
}

News.defaultProps = {
  country:'in',
  pageSize: 9,
  category:'general'
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  totalResults:PropTypes.number
}

export default News
import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchNews,changePage } from './newsSlice';
import { Link } from 'react-router-dom';


const NewsView = () => {

    //Buradan
    const [currentIndex, setCurrentIndex] = useState(0);

    const chatOptions = ["Yapay zeka ile sohbet et", "Yapay zeka ile duygusal destek al", "Yapay zeka ile sohbet et"];
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % chatOptions.length);
        }, 3000);
      
        return () => clearInterval(interval);
    }, []);
          
    //Buraya kadar sayfanın sol altındaki yapay zeka linki



    const dispatch=useDispatch();
    let newsData=useSelector((state)=>state.newsReducer);

    const [pageNumber,setPageNumber]=useState(0);
    
    useEffect(()=>{
        if (pageNumber>=0) {
            dispatch(changePage(pageNumber));
        }
        dispatch(fetchNews());
    },[pageNumber]);

    console.log(newsData.news.result)

  return (
    <div className='mt-[15vh]'>


        <div>

            {newsData.loading && "fetching data"}
            {newsData.error && "fetching error"}
            {newsData.news.result && newsData.news.result.length > 0 && 
                <div>
                    <div className='textone text-2xl md:text-4xl text-center mt-[3vh] mb-[8vh]'>Artificial Intelligence</div>
                    <div className='flex flex-row gap-x-[5vw]'>
                    {/* Haber Kısmı */}
                        <div>
                            {newsData.news.result.map((val) => (
                                <div key={val.key} className='md:w-[60vw] w-[95vw] mx-[5vw] md:mx-[0vw]'>
                                    <Link  to={val.url}>
                                        <div className='flex gap-x-[4vw] md:gap-x-[4vw] md:ml-[5vw] h-[25vh] md:px-[0] px-[2vw]' >
                                            <div className='w-[30vw] md:order-none order-2'>
                                                <img className='w-[30vw] h-[10vh] md:h-[20vh] md:mr-[0vw]' src={val.image} alt='not found' /> 
                                            </div>
                                            <div className='w-[70vw]'>
                                                <div className='mb-[1vh] font-light'>{val.source}</div>
                                                <div className='mb-[3vh] text-one font-semibold text-lg md:text-2xl hover:underline'>{val.name}</div>
                                                <div className='font-light'>
                                                {val.date.split("T")[0].split("-")[1]}
                                                /
                                                {val.date.split("T")[0].split("-")[2]}
                                                /
                                                {val.date.split("T")[0].split("-")[0]}
                                                </div>
                                            </div>   
                                        </div>
                                    </Link>

                                    <div className='bg-gray-100 py-[1px] w-[90vw] md:w-[60vw] md:ml-[5vw] ml-[0vw] my-[5vh] md:my-[3vh]'></div>

                                </div>
                            ))}                     
                        </div>

                        <div>
                            <iframe
                                title="Chatbot"
                                width="500"
                                height="500"
                                // src='https://chat.openai.com/'
                                src="https://hix.ai/chat"
                            ></iframe>
                        </div>
                    </div>

                    {/* İleri Geri buton kısmı */}
                    <div className='flex items-center justify-evenly mr-[30vw] md:mr-[50vw] gap-x-[25vw] md:gap-x-[20vw] my-[10vh]'>
                        <div className='cursor-pointer'> 
                            <i onClick={()=>{if(pageNumber>0) setPageNumber(pageNumber-1)}} className="fa-solid fa-angle-left" style={{color: "#737373;"}}></i>   
                        </div>
                        <div className="bg-blue-500 text-white font-semibold px-[1.5vw] py-[1.2vh] cursor-pointer hover:bg-gray-500 transition-all duration-300" onClick={()=>setPageNumber(pageNumber+1)}>To see more</div>
                    </div>

                    {/* Yapay zeka kısmı Burası İptal Oldu Sayfanın Sağ Kısmına Yerleştirilcek */}
                    {/* <Link to="ai">
                        <div className='fixed flex bottom-[2vh] left-[5vh] bg-gray-300 hover:opacity-80 transition-all duration-500 cursor-pointer px-[2vw] py-[1vh] rounded-2xl'>
                            <div className='mr-[1vw] text-green-600'> <i className="fa-solid fa-robot"></i> </div>
                            <div>{chatOptions[currentIndex]}</div>
                            <div className='ml-[1vw] mb-[0.5vh] text-red-700'> <i class="fa-solid fa-xmark"></i>  </div>
                        </div>
                    </Link> */}

                    

                </div>
            }

        </div>

    </div>
  )


}

export default NewsView
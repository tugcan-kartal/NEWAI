import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading: false,
    news: [],
    currentPage: 0,
    error: "",
};

export const fetchNews = createAsyncThunk(
    "fetchNews",
    async (_, { getState }) => {                   
      const currentPage = getState().newsReducer.currentPage;
      const response=await axios.get(`https://api.collectapi.com/news/getNews?country=tr&tag=general&paging=${currentPage}`,{
        headers: {
            "authorization": "apikey 04AvgEqQLEFStaauCy82nn:68OmigvPjtvZdi5dcUg57S"
        }
    })
      console.log(currentPage);
      return response.data;
    }
);

const newsSlice=createSlice({
    name: "news",
    initialState,
    reducers: {
        changePage: (state,action)=>{
            state.currentPage=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchNews.pending,(state,action)=>{
            state.loading=true
            state.news=[]
            state.error=""
        })
        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            state.loading=false
            state.news=action.payload
            state.error=""
        })
        builder.addCase(fetchNews.rejected,(state,action)=>{
            state.loading=true
            state.news=[]
            state.error="Bad fetching"
        })
    }
})

export const {changePage}=newsSlice.actions;
export default newsSlice.reducer;
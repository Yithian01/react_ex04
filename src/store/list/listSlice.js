import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
// Thunk 은 toolkit에 default로 설치가 되었다.
// createAsyncThunk  : Thunk 비동기 작업

 export const getList = createAsyncThunk(
    "GET_List",
    async()=>{
        try{    
            const res = await axios.get("http://localhost:8000/list")
            return res.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const addList = createAsyncThunk(
    "ADD_LIST",
    async(newList)=>{
        try{    
            const res = await axios.post("http://localhost:8000/list",newList)
            return res.data;
        }catch(err){
            console.log(err);
        }
    }
)

const initialState = {
    data:[],
    message : 'default'

}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {   // 현재 슬라이스는 동기적으로 처리하는 것이 없기에 리듀서스는 사용하지 않는다.
        
  },
  extraReducers:(builder)=> {
    builder.addCase(getList.fulfilled, (state, action) => {
        state.message = "리스트업 완료";
        state.data = action.payload;
      })
      builder.addCase(addList.fulfilled, (state, action) => {
        state.message = "리스트업 추가 완료했습니다.";
        state.data.push(action.payload);
      })
   },
   
})



//export const {  } = listSlice.actions
export default listSlice.reducer
import './App.css';
import ListItem from './components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getList ,addList } from './store/list/listSlice';


function App() {
  const dispatch = useDispatch();
  const listdata = useSelector((state)=>state.list);
  const [inputValue, setInputValue] = useState("");
  useEffect(()=>{   // 초기에 json서버에서 정보 가져오기 
    dispatch(getList());
  },[])


  const onCreate = (e)=>{ //추가 버튼 눌렀을 때 넣기 
    e.preventDefault();
    if(inputValue){
      const newList = {content : inputValue}
      dispatch(addList(newList));
      setInputValue('');
    }else{
      alert("내용을 입력하세요.");  
    }
  }
  return (
    <div className="App">
      <form onSubmit={onCreate}>
        <h1>글목록</h1>
        <div className='List'>
          {
            listdata.data.map((ele) => {
              return(
                <ListItem key={ele.id} content ={ele.content} id ={ele.id}/>
              )
            })
          }
        </div>
        <input
         type='text'
         value = {inputValue}
           onChange={(e)=>setInputValue(e.target.value)}
         />

        <button type='submit' >목록추가</button> 
      </form>
    </div>
  );
}

export default App;

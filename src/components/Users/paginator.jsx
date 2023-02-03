import s from "./users.module.css";
import React,{useState} from "react";

const   Paginator = (props) =>{

  props.getUsersCountThunk()

    let portionSize = 5

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  
    let pages = [];
  
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1)*portionSize+1
    let rightPortionPageNumber = portionNumber * portionSize


    return(
        <div>
        { portionNumber>1 &&
         <button onClick={ ()=> {setPortionNumber(portionNumber-1)} } >Prev</button> }


        {pages
          .filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
          .map(p => {
            return (
              <span className={props.currentPage === p && s.selectedPage} key={p} onClick={ ()=>props.onPageChanged(p) }>{p} </span>);
            })
        }

        { portionCount>portionNumber && <button onClick={ ()=>{setPortionNumber(portionNumber+1)} } >Next</button> }


      </div>
    )
}

export default Paginator  
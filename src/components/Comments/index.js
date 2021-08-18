import { useEffect } from "react";
import Comment from "./Comment";
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { getAllComments } from '../../api'
import '../../App.css';
import { createGenerateClassName } from "@material-ui/core";

const Comments = ({ setCommentsData, commentsData, isLoading, setLoading }) => {

   // const handleClick = () => {
   //    getAllComments(commentsData.per_page + 10)
   //       .then(res => setCommentsData(res))
   // }

   const handleChange = (page) => {
      setLoading(true)
      getAllComments(10, page)
      .then((res) => {
         setCommentsData(res)
         setLoading(false)
      })
   }

   useEffect(() => {
      getAllComments()
         .then((res) => setCommentsData(res))
   }, [])

   return (
      < div className='App'>
         {
            commentsData.data.map(item => (
               <div key={item.id}>
                  <Comment name={item.name} text={item.text} createdAt={item.created_at}/>
               </div>
            ))
         }
         <Pagination className='MuiPagination-ul'
            count={commentsData.last_page}
            shape="rounded"
            onChange={(event, page) => handleChange(page)}
            disabled={isLoading}
         />
         {/* <Button 
            onClick={handleClick}
            variant="contained"
            color="primary"
         >
            Load More
         </Button> */}
      </div>
   )
}

export default Comments;

import { useState } from "react";
import Form from "./Form";
import Comments from "./Comments";

const CommentsBlock  = () => {
   const [commentsData, setCommentsData] = useState({data: []})
   const [isLoading, setLoading] = useState(false)

   return (
      <>
         <Form setCommentsData={setCommentsData} isLoading={isLoading} setLoading={setLoading}/> 
         <Comments commentsData={commentsData} setCommentsData={setCommentsData} isLoading={isLoading} setLoading={setLoading}/>
      </>
   )
};

export default CommentsBlock;

import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendComment } from '../../api';


const Form = ({ setCommentsData, isLoading, setLoading }) => {
   const [name, setName] = useState('')
   const [commentText, setCommentText] = useState('')

   const handleSubmit = (event) => {
      event.preventDefault()
      setLoading(true)
      sendComment({name, text: commentText})
         .then(() => {
            setName('');
            setCommentText('');
            setLoading(false)
         }) 
   }

  return (
    <div className="App">
      <form onSubmit={() => handleSubmit()}>
        <TextField required label='name' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField required label="leave your comment" multiline value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          Primary
        </Button>
      </form>
    </div>
  )
};

export default Form;

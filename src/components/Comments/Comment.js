import moment from 'moment';
import '../../App.css';

const Comment = ({ createdAt, name, text }) => {
   return (
      <div>
         <div className='coment'>
            <div >
               {name}
            </div>
            <div>
               {text}
            </div>
            <div>
               {moment(createdAt).format('lll')}
            </div>
         </div>
      </div>
   )
};

export default Comment;
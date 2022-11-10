const React = require('react');

const CommentCard = ({ comment, user }) => {
   
   const date = new Date(comment.updatedAt).toLocaleString()
   return (
      <div data-id={comment.id} className="cardComment" style={{ width: "18rem" }}>
         <div className="card-body">
            <p className='card-text'>Имя пользователя: {user.name}</p>
            <p className='card-text'>{date}</p>
            <p className='card-text'>Комментарий:{comment.comment}</p>
            {user && (user.id === comment.userId) && (<button type='button' className='commentButton'>Удалить</button> )}
            
         </div>
      </div>
   )
}

module.exports = CommentCard
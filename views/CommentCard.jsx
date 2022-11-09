const React = require('react');

const CommentCard = ({ comment }) => {
   return (
      <div className="card" style={{ width: "18rem" }}>
         <div className="card-body">
            <p className='card-text'>{comment.comment}</p>
         </div>
      </div>
   )
}

module.exports = CommentCard
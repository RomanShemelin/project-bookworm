const React = require('react');

const CommentCard = require('../views/CommentCard.jsx');
const Layout = require('../views/Layout');
const Header = require('../views/Header')


const Commentar = ({ comments, user, book }) => {
   return (
      <Layout>
         <Header user={user} />
         <section className='container'>
            <p className='titleAddComment'>Добавить комментарий</p>
            <form method='post' action={`/comments/${book.id}`} className='commentForm'>
               <input className='commentInput' name='commentText' type='text' autoComplete='off' required></input>
               <button type='submit' className='commentButton'>Сохранить</button>
            </form>
            <div className='titleAddComment'>
         <p >Все комментарии к книге "{book.name}": </p>
         </div>
         </section>
         <div className='commentlist'>
            {comments.map((comment) => <CommentCard key={comment.id} comment={comment} user={user} />)}
         </div>
         <script defer src='/js/comment.js'></script>
         <script defer src='/js/deleteComment.js'></script>
      </Layout>
   )
}

module.exports = Commentar
const React = require('react');

const CommentCard = require('../views/CommentCard.jsx');
const Layout = require('../views/Layout');
const Header = require('../views/Header')


const Commentar = ({ comments, user, book }) => {
   return (
      <Layout>
         <Header user={user} />
         <section className='container'>
            <h5>Добавить комментарий</h5>
            <form method='post' action={`/comment/${book.id}`} className='commentForm'>
               <input className='commentInput' name='commentText' type='text'></input>
               <button type='submit' className='commentButton'>Сохранить</button>
            </form>
         </section>
         <section className='commentlist'>

            {comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)}

         </section>
         <script src='/js/comment.js'></script>
      </Layout>
   )
}

module.exports = Commentar
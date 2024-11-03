import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Title</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">Person</div>
            <div className="post__date">2024.01.01 Sat</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">Delete</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>Edit</Link>
            </div>
          </div>
          <div className="post__text">Today is ...</div>
        </div>
      </div>
    </>
  );
}

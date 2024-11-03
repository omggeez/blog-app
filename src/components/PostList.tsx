import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            ALL
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            My Posts
          </div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((el, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">Person{index}</div>
                <div className="post__date">2024.01.01 Sat</div>
              </div>
              <div className="post__title">Post {index}</div>
              <div className="post__text">Today is ...</div>
              <div className="post__utils-box">
                <div className="post__delete">Delete</div>
                <div className="post__edit">Edit</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

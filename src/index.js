import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui-container comments">
      <CommentDetail
        pic={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 4:45"
        blogComment="WOW!!"
      />
      <CommentDetail
        pic={faker.image.avatar()}
        author="Alex"
        timeAgo="Today at 5:45"
        blogComment="That's it?!"
      />
      <CommentDetail
        pic={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday at 4:45"
        blogComment="Nice Work!!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

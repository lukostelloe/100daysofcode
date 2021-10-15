import React from "react";
import Data from "../../data.json";

function JsonThing() {
  return (
    <div>
      <div className="posts">
        {Data.map((post) => {
          return (
            <div>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JsonThing;

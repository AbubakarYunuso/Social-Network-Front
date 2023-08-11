import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Comments: React.FC = ({item, handleComment}) => {
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getAllComments())
  // }, [])
  // const comments = useSelector((state) => state.comments.comments);
 
  
  return (
    <span className={styles.span} aria-hidden="true">
      <Link onClick={() => handleComment(item._id)} to={"#"}>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" 
          fillRule="evenodd"
          >
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
              fill="#929292"
              // fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      </Link>
    </span>
  );
};

export default Comments;

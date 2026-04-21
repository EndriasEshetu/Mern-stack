import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>

      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on {moment(date).format("YYYY/MM/DD")}
        </p>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => addLike(_id)}
        >
          <FontAwesomeIcon icon={faThumbsUp} />{" "}
          {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => removeLike(_id)}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && auth.user && user === auth.user._id && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deletePost(_id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem,
);

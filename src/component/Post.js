import React from "react";

const Post = (props) => {
  return (
    <div className="col-md-4">
      <div className="work-box">
        {/* <a href="img/work-1.jpg" data-lightbox="gallery-mf"> */}
        <div className="work-img">
          <img src="img/work-1.jpg" className="img-fluid" />
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{props.title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{props.content}</span>
                {/* <span className="w-date">18 Sep. 2018</span> */}
              </div>
            </div>
            <div className="col-sm-4">
              {/* <button
                  className="button button-a "
                  onClick={() => props.onDelete(props.idArtikel)}
                > */}
              <button
                className="button button-a"
                onClick={() => {
                  if (window.confirm("Are you sure to delete this article?"))
                    props.onDelete(props.idArticle);
                }}
              >
                <span className="ion-ios-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
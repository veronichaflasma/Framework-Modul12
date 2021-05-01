import React from "react";

const PostMahasiswa = (props) => {
  return (
    <div class="col-md-6">
      <div class="service-box">
        <div class="service-content">
          <h2 class="s-title">{props.nama}</h2>
          <p>
            <span class="title-s">
              NIM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </span>{" "}
            <span>{props.nim}</span>
          </p>
          <p>
            <span class="title-s">Alamat&nbsp;: </span>{" "}
            <span>{props.alamat}</span>
          </p>
          <p>
            <span class="title-s">Phone&nbsp;&nbsp;: </span> <span>{props.hp}</span>
          </p>
          <p>
            <span class="title-s">Angkatan&nbsp;: </span>{" "}
            <span>{props.angkatan}</span>
          </p>
          <p>
            <span class="title-s">Status&nbsp;&nbsp;&nbsp;: </span>{" "}
            <span>{props.status}</span>
          </p>

          <p className="s-description text-right">
            <button
              type="submit"
              className="button button-a "
              onClick={() => props.onDelete(props.idMhs)}
            >
              <span className="ion-ios-trash" />
            </button>
            </p>
   
        </div>
      </div>
    </div>
  );
};

export default PostMahasiswa;

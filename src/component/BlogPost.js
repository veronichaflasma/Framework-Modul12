import React, { Component } from "react";
import Post from "./Post";
import firebaseConfig from "../firebase/config";
import firebase from "firebase";

class BlogPost extends Component {
  constructor(props) {
    super(props);

    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    
    this.state = {
      listArticle: [],
    };
  }

  fetchDataFromAPI = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  saveDataToServerAPI = () => {
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.saveDataToServerAPI();
      console.log(this.state)
    }
  }

  handleDelete = (idArticle) => {
    const { listArticle } = this.state;
    const newState = listArticle.filter((data) => {
      return data.uid !== idArticle;
    });
    this.setState({ listArticle: newState });
  };

  handleSave = (event) => {
    let title = this.refs.articleTitle.value;
    let body = this.refs.articleBody.value;
    let uid = this.refs.uid.value;

    if (uid && title && body) {
      const { listArticle } = this.state;
      const articleIndex = listArticle.findIndex((data) => {
        return data.uid === uid;
      });
      listArticle[articleIndex].title = title;
      listArticle[articleIndex].body = body;
      this.setState({ listArticle });
    } else if (title && body) {
      const uid = new Date().getTime().toString();
      const { listArticle } = this.state;
      listArticle.push({ uid, title, body });
      this.setState({ listArticle });
    }
    this.refs.articleTitle.value = "";
    this.refs.articleBody.value = "";
    this.refs.uid.value = "";
  };

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-10" style={{ marginLeft: 80 }}>
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div>
                      <form className="contactForm">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <h5 className="title-left">Add Article</h5>
                          </div>
                          <div
                            className="col-md-12 mb-3"
                            style={{ marginLeft: 30 }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                name="title"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                                ref="articleTitle"
                              />
                            </div>
                          </div>
                          <div
                            className="col-md-12 mb-3"
                            style={{ marginLeft: 30 }}
                          >
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="uid"
                                rows={5}
                                data-rule="required"
                                placeholder="Body"
                                ref="articleBody"
                              />
                            </div>
                          </div>
                          <input type='hidden' name='uid' ref='uid'/>
                          <div className="col-md-12">
                            <p className="s-description text-right">
                              <button
                                className="button button-a button-big button-rouded"
                                onClick={this.handleSave}
                              >
                                Save
                              </button>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">List Article</h3>
                <p className="subtitle-a">Praktikum Modul 12</p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {/* post */}
            {this.state.listArticle.map((article) => {
              return (
                <Post
                  key={article.uid}
                  idArticle={article.uid}
                  title={article.title}
                  content={article.body}
                  onDelete={(id) => this.handleDelete(id)}
                />
              );
            })}
            {/* end post */}
          </div>
        </div>
      </section>
    );
  }
}

export default BlogPost;
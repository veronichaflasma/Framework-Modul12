import React, { Component } from "react";
import Post from "./PostMahasiswa";
import API from "../Task/Services/index";

class BlogPost extends Component {
  state = {
    listMahasiswa: [], // variabel array digunakan untuk menyimpan data API
    insertMahasiswa: {
      NIM: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDariServerAPI = () => {
    API.getMahasiswa().then((result) => {
      this.setState({
        listMahasiswa: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusMahasiswa = (data) => {
    API.deleteMahasiswa(data).then((result) => {
      this.ambilDataDariServerAPI()
    });
  };

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleTombolSimpan = () => {
    API.postMahasiswa(this.state.insertMahasiswa).then((Response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{marginLeft:300}}>
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    {/* <div className="col-md-6"> */}
                      <div className="title-box-2">
                        <h5 className="title-left">ADD MAHASISWA</h5>
                      </div>
                      <div>
                        <form
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="NIM"
                                  className="form-control"
                                  placeholder="NIM"
                                  onChange={this.handleTambahMahasiswa}
                                />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                    type="text"
                                    name="nama"
                                    className="form-control"
                                    placeholder="Full Name"
                                    onChange={this.handleTambahMahasiswa}
                                  />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                    type="text"
                                    name="alamat"
                                    className="form-control"
                                    placeholder="Address"
                                    onChange={this.handleTambahMahasiswa}
                                  />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                  <input
                                      type="text"
                                      name="status"
                                      className="form-control"
                                      placeholder="Status"
                                      onChange={this.handleTambahMahasiswa}
                                    />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                  <input
                                      type="text"
                                      name="hp"
                                      className="form-control"
                                      placeholder="Phone Number"
                                      onChange={this.handleTambahMahasiswa}
                                    />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                  <input
                                      type="text"
                                      name="angkatan"
                                      className="form-control"
                                      placeholder="Angkatan"
                                      onChange={this.handleTambahMahasiswa}
                                    />
                                <div className="validation" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <p className="s-description text-right">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                                onClick={this.handleTombolSimpan}
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
          </div>
      </div>     
      </section>

      <section id="service" class="services-mf route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  LIST MAHASISWA
                </h3>
                <p class="subtitle-a">
                  task
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
             {/* post */}
             {this.state.listMahasiswa.map((mahasiswa) => {
                //looping dan masukkan untuk setiap data yang ada di listMahasiswa ke variabel Mahasiswa
                  return (
                    <Post
                      idMhs={mahasiswa.id}
                      nim={mahasiswa.NIM}
                      nama={mahasiswa.nama}
                      alamat={mahasiswa.alamat}
                      hp={mahasiswa.hp}
                      angkatan={mahasiswa.angkatan}
                      status={mahasiswa.status}
                      onDelete={(id) => this.handleHapusMahasiswa(id)}
                    />
                  ); // mapping data json dari API sesuai dg kategori
                })}
                {/* end post */}
          </div>
        </div>
      </section>

      </div>
    );
  }
}

export default BlogPost;

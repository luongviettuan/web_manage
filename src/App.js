import React from 'react';
import Header from './common/header';
import MenuLeft from './common/menu_left';
function App() {
  return (
        <div className="skin-blue sidebar-mini">
          <div className="wrapper">
              <Header />
              <MenuLeft />
              <div className="content-wrapper" style={{minHeight: '811px'}}>

                  <section className="content">
                      <div id="fade-spinner"></div>
                      <div id="modal-spinner">
                          <img id="loader" src={require( './public/img/icon/loading_spinner.gif')} alt="" />
                      </div>
                      <div className="servers-index">
                          <div className="row actionServer top">
                              <div className="col-md-4 col-xs-6 ">
                                  <div className="form-group">
                                      <a className="btn btn-success btn_addnew" href="https://camera-cms.viettel.vn/servers/create?site_id=722"><span
                                className="glyphicon glyphicon-plus-sign"></span> Tạo Mới</a>
                                  </div>
                              </div>
                              <div className="col-md-4 col-xs-6 offset-4">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="q"
                                            className="form-control"
                                            placeholder="Nhập Từ Khóa Tìm Kiếm ..."
                                        />
                                    </div>
                              </div>
                          </div>
                          <div className="lisviewcontent">
                              <div className="grid-view">
                                  <div className="box box-primary">
                                      <div className="box-body">
                                          <div id="w0" className="row">
                                              <div className="col-sm-12">
                                                  <table className="table">
                                                      <thead>
                                                          <tr>
                                                              <th>STT</th>
                                                              <th>Tên</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>
                                                              <td className="styleStt">1</td>
                                                              <td>
                                                                <a href="https://camera-cms.viettel.vn/servers/update?id=147558&amp;site_id=722">hồng nguyễn(f8:17:02:c0:61:dd)</a>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td className="styleStt">2</td>
                                                              <td>
                                                                <a href="https://camera-cms.viettel.vn/servers/update?id=123984&amp;site_id=722">KN72(f8:17:02:c0:61:d9)</a>
                                                              </td>
                                                               
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </section>
              </div>
          </div>
      </div>
          )
        }
        
        export default App;

import React from "react";
import "../style/ChatPages.css";
import profile from "../assets/profile.jpg";
import logo from "../assets/logo.png";
import { Container, Form } from "react-bootstrap";
import NavbarProduct from "../components/Navbar";

class User extends React.Component {
  render() {
    return (
      <div className="bgHome">
        <NavbarProduct />
        <Container>
          <div className="maincontainer">
            <div class="container py-5 px-4">
              <div class="row">
                <div class="col-3 px-0">
                  <div class="bg-black">
                    <div class="messages-box">
                      <div class="list-group rounded-0">
                        <div class="chat">
                          <div class="media d-flex">
                            <img
                              src={logo}
                              alt="user"
                              width="50"
                              class="rounded-circle"
                            />
                            <div class="media-body ml-4">
                              <div class="d-flex align-items-center justify-content-between mb-1">
                                <h6 class="user">Admin</h6>
                              </div>
                              <p class="font-italic mb-0 text-small text-white">
                                Yes, Is there anything i can help?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-9 px-0">
                  <div class="px-4 py-5 chat-box bg-black">
                    <div class="bubble-user w-10 mb-3 d-flex flex-end">
                      <div class="media-body ml-5">
                        <div class="bg-dark rounded py-2 px-3 mb-2">
                          <p class="text-small mb-0 text-white">
                            Yes, Is there anything i can help?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="bubble w-50 mb-3 d-flex">
                      <img
                        src={profile}
                        alt="user"
                        width="10%"
                        class="rounded-circle"
                      />
                      <div class="media-body ml-5">
                        <div class="bg-color rounded py-2 px-3 mb-2 ">
                          <p class="text-small mb-0 text-white ">
                            Hello Admin, I need your help
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Form action="#" class="bg-dark">
                    <div class="input-group rounded">
                      <input
                        type="text"
                        placeholder="Type a message"
                        aria-describedby="button-addon2"
                        class="form-control border-0 py-1 bg-dark rounded-2"
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default User;

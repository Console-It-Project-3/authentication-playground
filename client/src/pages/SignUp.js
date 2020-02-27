import React, { Component } from "react";
import "./SignUp.css"
class Signup extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <form class="needs-validation" novalidate>
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom01">First name</label>
                                <input type="text" class="form-control" value="Mark" required />
                                <div class="valid-feedback">
                                    Looks good!
      </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom02">Last name</label>
                                <input type="text" class="form-control" value="Otto" required />
                                <div class="valid-feedback">
                                    Looks good!
      </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustomUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" i>@</span>
                                    </div>
                                    <input type="text" class="form-control" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
        </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" />
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom05">Zip</label>
                                <input type="text" class="form-control" required />
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
      </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
      </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
      </div>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup;
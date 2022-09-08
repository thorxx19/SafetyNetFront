import React from "react";




function Nav (){
    return (
        <div>
            <h1>PersonsComponent</h1>
            <div className="container text-start col-4">
                <div>
                    <form className="row justify-content-center">
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingFirstName" placeholder="FirstName"/>
                            <label for="floatingFirstName">FirstName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingLastName" placeholder="LastName"/>
                            <label for="floatingLastName">LastName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingAddress" placeholder="Address"/>
                            <label for="floatingAddress">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingCity" placeholder="City"/>
                            <label for="floatingCity">City</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingZip" placeholder="Zip"/>
                            <label for="floatingZip">Zip</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="tel" class="form-control" id="floatingTel" placeholder="Tel"/>
                            <label for="floatingTel">Phone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingMail" placeholder="Mail"/>
                            <label for="floatingMail">Email</label>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    )
}

export default Nav
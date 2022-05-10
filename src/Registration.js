const Registration = () =>{
    return (
        <div classname="Registration">
            <section>
                <label for="Surname">Surname</label>
                <input id="Surname" placeholder="Surname" type="text"class="textInput" />
            </section>
            <section>
                <label for="First name">First name</label>
                <input id="First name" placeholder="First name" type="text"class="textInput" />
            </section>
            <section>
                <label for="Other names">Other name</label>
                <input id="Other names" placeholder="Other name" type="text"class="textInput" />
            </section>
            <section>
            <label for="Username">Username</label>
            <input id="Username" placeholder="Username" type="text"class="textInput" />
            </section>
            <section>
            <label for="Password">Password</label>
            <input id="Password" placeholder="Password" type="text"class="textInput" />
            </section> 
            <br/>
            <button>Submit</button>


        </div>

    );
    

}

export default Registration;


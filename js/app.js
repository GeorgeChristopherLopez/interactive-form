document.querySelector('.container');
container.innerHTML = `
   <div class="header"></div>
    <div class="form">
        <form>
            <fieldset style="display:grid; grid-template-columns:1fr;">
                <legend>Basic Info</legend>
                <label for="name">Name: </label>
                <input id="name" class="name" type="text" required />
                <label for="email">Email: </label>
                <input id="email" class="email" type="email" required />
                <label for="job">Job Role</label>
                <select>
                    <option>Fullstack Javascript Developer</option>
                    <option>Front End Developer</option>
                    <option>Back End Developer</option>
                    <option>Designer</option>
                    <option>Student</option>
                    <option>Rockstar</option>
                    <option>Ninja</option>
                    <option>Unicorn</option>
                    <option>Goat</option>
                    <option>Other</option>
                </select>
            </fieldset>
            <fieldset class="tshirts">

                <legend>T-Shirt Info</legend>
                <ul>
                    <li>
                        <label for="size">Size:</label>
                        <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </li>
                    <li class="design">
                   <label for="design">Design:  </label>
                        <select>
                        <option class="love">Theme - I Love JS</option>
                        <option class="puns">Theme - JS Puns</option>
                        </select>
                    </li>
                    <li class="pun_colors">
                        <label for="color">Color:</label>
                        <select>
                     <option>Dark Slate Grey(Puns only)</option>
                     <option>Cornflower Blue(Puns only)</option>
                     <option>Gold is best(puns only)</option>
                        </select>
                    </li>
                    <li class="love_colors">
                        <label for="color">Color:</label>
                        <select>
                            <option>Dark Slate Grey(Puns only)</option>
                            <option>Cornflower Blue(Puns only)</option>
                            <option>Gold is best(puns only)</option>


                        </select>
                    </li>
                </ul>



            </fieldset>
            <fieldset class="activities">
                <legend>Register for Activities</legend>
                <ul>
                    <li>
                        <input type="checkbox" class="main" /> <label id="main" for="main">Main Conference - $200</label>
                    </li>
                    <li>
                        <input type="checkbox" class="frameworks" /> <label for="frameworks"> JavaScript Frameworks Workshop - $200</label>

                    </li>
                </ul>
               
            </fieldset>
            <fieldset class="payment">
                <legend>Payment Info</legend>
                <ul>
                    <li>
                        <label for="paymentType">
                            I'm going to pay with:
                        </label>
                    </li>
                    <li>
                        <select>

                            <option>Credit Card</option>
                            <option>Paypal</option>
                            <option>Bitcoin</option>
                        </select>
                    </li>
                </ul>
                <ul class="card">

                    <li>
                        <label>Card Number:</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>Zip Code:</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>CW:</label>
                        <input type="text" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>Expiration Date:</label>
                       
                    </li>
                    <li>

                        <select>

                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </li>
                    <li>
                        <label>Expiration Year:</label>
                    </li>
                    <li>
                  
                        <select name="year">
          <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>

     </select>
                 
                    </li>
                </ul>


            </fieldset>
        </form>
    </div>



`;
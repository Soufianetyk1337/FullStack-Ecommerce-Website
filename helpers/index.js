import confetti from 'canvas-confetti';
import React from 'react';
import Star from '../components/Star';

export const formatProductName = (name) =>
    name?.toLowerCase().replace(/\s+/g, "-").slice(0, 96);

export const calculateDiscount = (price, discount) => {
    const priceAfterDiscount = price - (price * discount) / 100
    return formatter.format(priceAfterDiscount)
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


export const runCelebrationConfetti = () => {
    var duration = 2 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}


export const averageRatingToStars = (averageRating, starIndex) => {
    let starElements = [];
    if (averageRating > 0) {
        let newRating = averageRating * 10;

        for (let i = 0; i < 5; i++) {
            if (newRating > 0) {
                starElements.push(
                    <Star
                        height="16px"
                        width="16px"
                        classes="mr-2"
                        fillColorOffset={newRating > 10 ? 100 : newRating * 10}
                        fillColor="rgba(248,102,87,100)"
                        emptyColor="#FFCF9F"
                        index={(i + 1) * 5 + (starIndex + 1)}
                    />
                );
                newRating -= 10;

            } else {
                starElements.push(
                    <Star
                        height="16px"
                        width="16px"
                        classes="mr-2"
                        fillColorOffset={0}
                        fillColor="rgba(248,102,87,100)"
                        emptyColor="#FBDCBC"
                        index={(i + 1) * 5 + (starIndex + 1)}

                    />
                );
            }
        }

    }
    return React.createElement(React.Fragment, {}, ...starElements);
};

export const htmlEmailTemplate = () => `<body style="height:100vh; 
ovewrflow:hidden;
background: rgba( 255, 255, 255, 0.5 );
box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
">
<table align="center" border="0" cellpadding="0" cellspacing="0"
  width="550" bgcolor="white" style="border-radius:4px;
         background-image: linear-gradient(315deg,hsla(3,80%,65%,.25) 30%,rgba(93,148,231,.25) 70%);
  ">
  <tbody>
    <tr>
      <td align="center">
        <table align="center" border="0" cellpadding="0"
          cellspacing="0" class="col-550" width="550">
          <tbody>
            <tr>
              <td align="center" style="
       
              
                  height: 50px;">

                <a href="#" style="text-decoration: none;">
                  <p style="color:white;
                      font-weight:bold;">
                    Nike 
                  </p>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>

    <tr style="display: inline-block;">
      <td style="height: 150px;
          padding: 20px;
          border: none;
          
          background-color: white;">
        
        <h2 style="text-align: left;  color:#EE6961;
            align-items: center;">
          Newsletter Subscription
      </h2>
        <p class="data"
        style="text-align: justify-all;
            align-items: center;
            font-size: 15px;
            padding-bottom: 12px;">
         You have successfully subsribed to our newsletter. Well keep you updated with our news products ,news and discounts.
        </p>
      
      </td>
    </tr>
    <tr style="border: none;
    
    
    height: 40px;
    color:white;
    padding-bottom: 20px;
    text-align: center;">
      
<td height="40px" align="center">
<p style="color:white;
line-height: 1.5em;">
Nike
</p>
<a href="https://twitter.com/nike"
style="border:none;
  text-decoration: none;
  padding: 5px;">
    
<img height="30"
src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/icon-twitter_20190610074030.png"
width="30" />
</a>

<a href="#"
style="border:none;
text-decoration: none;
padding: 5px;">

<img height="30"
src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/icon-linkedin_20190610074015.png"
width="30" />
</a>

<a href="#"
style="border:none;
text-decoration: none;
padding: 5px;">

<img height="20"
src=
"https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/facebook-letter-logo_20190610100050.png"
  width="24"
  style="position: relative;
    padding-bottom: 5px;" />
</a>
</td>
</tr>
<tr>
<td style="font-family:'Open Sans', Arial, sans-serif;
  font-size:11px; line-height:18px;
  color:rgba(0,0,0,.7);"
valign="top"
align="center">
      © 2022 Nike. All Rights Reserved.<br>
      If you do not wish to receive any further
      emails from us, please
      <a href="#"
      target="_blank"
      style="text-decoration:none;
          color:#999999;">unsubscribe</a>
    </td>
    </tr>
    </tbody></table></td>
  </tr>
  <tr>
  <td class="em_hide"
  style="line-height:1px;
      min-width:700px;
      background-color:#ffffff;">
    <img alt=""
    src="images/spacer.gif"
    style="max-height:1px;
    min-height:1px;
    display:block;
    width:700px;
    min-width:700px;"
    width="700"
    border="0"
    height="1">
    </td>
  </tr>
  </tbody>
</table>
</body>`
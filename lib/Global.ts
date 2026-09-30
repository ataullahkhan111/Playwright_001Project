import {Page} from '@playwright/test'

export class Amazon
{
    constructor(public page :Page)
    {

    }
// Test data
    public url : string  = "https://www.amazon.in/"
    public email : string = "ataullahkhan909090wert@gmail.com"
    public mobileno : string = "6307896085"
    public yourname : string = "AZMA"
    public emailBody : string = "373455 is your Amazon OTP.";

//  Test Object
public SignInhover : string ="//div[@id='nav-link-accountList']"
public starthere : string = "//a[text() = 'Start here.']"

public newsignIn : string ="(//a[@class='nav-a nav-a-2   nav-progressive-attribute'])[1]"
public SignInclick : string = "//span[@class='nav-action-inner']"

public usernamelogin :  string = "//input[@id='ap_email_login']"
public continuebtn : string = "//input[@type='submit']"

public passwordlogin :  string = "//input[@type='password']"
public passwordbtn :  string = "//input[@id='signInSubmit']"

public email_txt : string = "//input[@id='ap_email_login']"
public btn : string ="//input[@type='submit']"
public proceedtocreateAccount :  string = "//input[@class='a-button-input']"
public mobilenonew : string = "//input[@name='email']"
public yournamedoc : string ="//input[@id='ap_customer_name']"
public verifymobileno : string ="//input[@id='continue']"
public newOtp : string = "//input[@id='cvf-input-code']"


public btncreateaccount : string = "(//input[@class='a-button-input'])[1]"

}
import {expect } from '@playwright/test'
import { DDT } from './DDT'
import {Amazon} from './Global'

export class general extends Amazon
{
    async openApplication()
    {
      await this.page.goto(this.url)
      console.log("Open Application successfully")
    }

    async waitsmt()
    { 
    await this.page.waitForTimeout(3000)
    }

    async signInuser()
    {
        await this.page.locator(this.newsignIn).hover()
        await this.page.locator(this.SignInclick).click()
    }

    async loginuser(usernamelogin:string , passwordlogin:string)
    {
        await this.page.locator(this.usernamelogin).fill(usernamelogin)
   await expect(
        this.page.locator(this.usernamelogin)
    ).toHaveValue(usernamelogin);

        await this.page.screenshot({path : 'C:\\Users\\Ataullah Khan\\OneDrive\\Desktop\\Playwright_WS\\Learning_TS_JS\\Amazon_Framework\\Screenshot\\webpage.png' ,fullPage :true})
        await this.page.locator(this.continuebtn).click()
        await this.page.locator(this.passwordlogin).fill(passwordlogin)
        await this.page.locator(this.passwordbtn).click()
    }

     /*async screenshot()
     {
        await this.page.screenshot({path : 'C:\Users\Ataullah Khan\OneDrive\Desktop\Playwright_WS\Learning_TS_JS\Amazon_Framework\Screenshot\webpage.png' ,fullPage :true})
     } */


    async NewCustomerUser()
    {
        await this.page.locator(this.SignInhover)
        await this.page.locator(this.starthere)
        await this.page.locator(this.email_txt).fill("email")
        await this.page.locator(this.btn).click()
        await this.page.locator(this.proceedtocreateAccount).click()
        await this.page.locator(this.mobilenonew).fill("mobileno")
        await this.page.locator(this.yournamedoc).fill("yourname")
        await this.page.locator(this.verifymobileno).click()
        await this.page.locator(this.newOtp).fill("emailBody")
    }
}


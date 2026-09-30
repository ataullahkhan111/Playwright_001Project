import {test} from '@playwright/test'
import {general} from  '../lib/General'
import { DDT } from '../lib/DDT'

test('DDT_login' , async({page})=>
{
        let obj = new general(page)
        const ddt = new DDT();
    
        await obj.openApplication()
        await obj.signInuser()
        await obj.waitsmt()
        await obj.loginuser(ddt.username_data, ddt.password_data)
        // console.log("Test cases")
})

import {test} from '@playwright/test'

//headed -> UI is visible, slower 
//headless -> UI is not visible, faster

test('launch the url', async({page})=>{
    await page.goto('https://www.instagram.com/accounts/login/?hl=ennpx')
})

// test('launch the url', async({page})=>{
//     await page.goto('https://www.instagram.com/accounts/login/?hl=ennpx')
// })
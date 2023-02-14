
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4001/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo displays #player-duo div', async () => {
    const addToDuo = await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('all-bots'))
    const displayed =  await playerDuo.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('Clicking Draw displays #choices div', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed =  await choices.isDisplayed()
    expect(displayed).toBe(true)

})
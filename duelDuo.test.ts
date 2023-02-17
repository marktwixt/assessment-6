
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4002/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Draw displays #choices div', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed =  await choices.isDisplayed()
    expect(displayed).toBe(true)

})

test('Add to duo displays the div "player-duo', async () => {
    const addDuo = await driver.findElement(By.id("player-duo"));
    const displayed = await addDuo.isDisplayed();
    expect(displayed).toBe(true);
  });
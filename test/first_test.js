import { Application } from "stimulus"
import ExampleController from "../src/controllers/example_controller"

describe("Example controller", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <h1 id="header" data-controller="example"></h1>
    `

    const application = Application.start()
    application.register("example", ExampleController)
  })
  it("Renders 'It works!'", () => {
    const header = document.getElementById("header")
    console.log(header.innerHTML)
    expect(header.innerHTML).toEqual("It works!")
  })
})

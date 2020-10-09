import { LoaderRunner } from './loader-runner-0'
import path from 'path'


test('can run loader', async () => {

  const runner = new LoaderRunner() 

  const res = await runner.run(
    require.resolve('../src/test/index-1.js'),
    /main\.css$/,
    require.resolve('../dist/index.js'))
  
  const contents = (<any>res.volume).readFileSync(res.outputPath, 'utf8')


  const link = document.createElement("link") 
  link.rel = 'stylesheet'
  link.href = 'file://' + path.resolve(__dirname, '../src/test/main.css')
  document.head.appendChild(link) 
  const promise1 = new Promise<void>((resolve, reject) => {

    const savedOnload = link.onload
    link.onload = (ev) => {
      resolve()
      let result = undefined
      if (savedOnload) {
        result = savedOnload.call(this, ev)
      }
      link.onload = savedOnload
      return result
    }
  })
 
  document.body.innerHTML = '<p></p>' 
  const script = document.createElement("script")
  script.type = 'text/javascript'
  script.appendChild(document.createTextNode(contents))

  await promise1
   
  
  // workaround not to set href when jsdom load link tag dynamically.
  if (!document.styleSheets[0].href) {
    const styleObj = <any>document.styleSheets[0]
    styleObj.href = link.href
  }
 
  const promise2 = new Promise<void>((resolve, reject) => {
    script.onload = () => {
      resolve()
    }
  })
  document.head.appendChild(script)

  await promise2

  const resTags = document.getElementsByTagName('p')

  const output = resTags[0].innerText
  expect(output).toBe(link.href)
})


// vi: se ts=2 sw=2 et:

const postcss = require('postcss')
const test = require('tape-async')

const plugin = require('./')

function run(input, opts) {
  return postcss([plugin(opts)])
    .process(input, {
      from: undefined
    })
    .then(o => o.css)
}

test('Basic usage', async t => {
  const input = `.foo {
    color: purple;
    font-size: 1.2rem;
    margin: 0.5rem;
  }`
  const ouput = `.foo {
    color: purple;
    font-size: 21.6;
    margin: 9;
  }`
  t.equal(await run(input), ouput)
})

test('Multiple values', async t => {
  const input = `.foo {
    color: purple;
    margin: 0.5rem 1rem;
  }`
  const ouput = `.foo {
    color: purple;
    margin: 9 18;
  }`
  t.equal(await run(input), ouput)
})

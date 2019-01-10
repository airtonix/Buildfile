import {main} from './index'
import {join} from 'path'

describe('main', () => {

  const testBuildFile = join(__dirname, '..', 'Buildfile.test')

  describe('-h/--help', () => {
    it('prints help', async () => {
      await main(['--help'])
    })
  })

  describe('execute', () => {
    it('executes', async () => {
      await main(['-f', testBuildFile, '--', 'a', 'b'])
    })
  })

  describe('execute in parallel', () => {
    it('executes in parallel', async () => {
      await main(['-f', testBuildFile, '--parallel', '--', 'a', 'b'])
    })
  })

})
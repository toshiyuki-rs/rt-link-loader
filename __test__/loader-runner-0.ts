import path from 'path'
import webpack from 'webpack'
import { createFsFromVolume, Volume } from 'memfs'

/**
 * loader runner
 */
class LoaderRunner {


  run(
    entryName: string, 
    loaderMatch: string | RegExp,
    loader: string):
      Promise<{
        stats: webpack.Stats,
        volume: typeof Volume,
        outputPath: string
      }> {
    const config: webpack.Configuration  = {
      context: __dirname,
      mode: 'development',
      entry: `${entryName}`,
      output: {
        path: __dirname,
        filename: 'bundle.js'
      },
      resolve: {
        alias: {
          'index.php': path.resolve(__dirname, 'index.php'),
          'main.css' : path.resolve(__dirname, '../src/test/main.css')
         }
      },
      module: {
        rules: [
          {
            test: loaderMatch,
            use: [
              loader
            ]
          }
        ]
      }
    }

    const outputPath = path.join(config.output.path, 'bundle.js')

    const compiler = webpack(config)
    const volume = new Volume()
    const ofsBase = createFsFromVolume(volume)
    const outputFileSystem: any  = {
      ...ofsBase,
      join: path.join.bind(path)
    } 
    compiler.outputFileSystem = <webpack.OutputFileSystem>outputFileSystem

    const result = new Promise<{ stats: webpack.Stats, 
        volume: typeof Volume,
        outputPath: string }>((resolve, reject) => {
      compiler.run((err: Error, stats: webpack.Stats) => {
        if (err) {
          reject(err)
        } else if (stats.hasErrors()) {
          reject(new Error(stats.toJson().errors[0]))
        } else {
          const vol = <typeof Volume>(<any>volume)
          resolve({ stats, volume: vol, outputPath })
        }
      })
    })
    return result
  }
}

export { LoaderRunner }

// vi: se ts=2 sw=2 et:

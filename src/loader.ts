import { RawSourceMap } from 'source-map'
import webpack from 'webpack'
import path from 'path'

/**
 * loader
 */
class Loader {
  /**
   * handle link source
   */
  static handleLinkSource(
    source: string | Buffer,
    sourceMap?: RawSourceMap): string | undefined | void | Buffer {
      
    const self = <webpack.loader.LoaderContext>(<any>this)
    
    const styleSheetQuery = path.relative(self.context, self.resource)
    const result = Loader.createStyleSheetsQuery(styleSheetQuery)
    return result
  }

  /**
   * create style sheet query
   */
  static createStyleSheetsQuery(styleSheetName): string {
    const result = `
function findStyleSheet(styleSheetName) {
   var styleSheets = document.styleSheets
   var i
   var result = undefined
   for (i = 0; i < styleSheets.length; i++) {
     var styleSheet = styleSheets[i]
      if (styleSheet.href) {
        if (styleSheet.href.endsWith(styleSheetName)) {
          result = styleSheet
          break
        }
      }
   }
   return result
}

var styleSheetRef = findStyleSheet('${styleSheetName}')

export { styleSheetRef as default }
`
    return result
  }

}

export { Loader }
// vi: se ts=2 sw=2 et:

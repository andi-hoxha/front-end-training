/**
 * Created by LeutrimNeziri on 21/03/2019.
 */
import React from 'react'
import {popoverPositions} from 'ui/utils/Props'

export default class Position {

  /**
   * it determines where to place a container depending on the given properties
   * e.g place a container horizontally from left of the target or vertically  from middle of the target etc
   * @param anchorEl - the target from where the element container will pop out
   * @param options -
   */
  static getPoperPositions(anchorEl, options) {

    let element
    if (React.isValidElement(anchorEl)) {
      element = ReactDOM.findDOMNode(anchorEl)
    } else {
      element = anchorEl
    }

    const {verticalOffset, horizontalOffset, placeHorizontally, placeVertically} = options
    const {right, left, middle} = popoverPositions.horizontalOptions
    const {top, bottom, center} = popoverPositions.verticalOptions

    /**
     * get coordinates of the anchor element
     * @type {ClientRect}
     */
    let rect = element.getBoundingClientRect()

    console.log('rect', rect)
    let style = {}
    const body = document.body
    const convertToPositive = number => {
      if (number < 0) {
        return -number
      }
      return number
    }

    // console.log(rect)
    switch (placeHorizontally) {
      case right:
        let rightVal = Math.round(body.offsetWidth - rect.right + horizontalOffset)
        style = {
          ...style,
          right: convertToPositive(rightVal)
        }
        break
      case left:
        let leftVal = 0
        leftVal = Math.round(rect.left + horizontalOffset)
        style = {
          ...style,
          right: undefined,
          left: convertToPositive(leftVal)
        }
        break
      case middle:
        leftVal = Math.round(rect.left - (rect.width / 2) + horizontalOffset)
        // rightVal = Math.round(rect.right - (rect.width / 2) + horizontalOffset)
        style = {
          ...style,
          left: convertToPositive(leftVal),
          // right: convertToPositive(rightVal),
        }
        console.log(style)
        break
    }
    switch (placeVertically) {
      case top:
        let topVal = Math.round(rect.top + rect.height + verticalOffset)
        style = {
          ...style,
          top: convertToPositive(topVal)
        }
        break
      case bottom:
        style = {...style, top: Math.round(rect.top + rect.height + horizontalOffset)}
        break
      case center:
        style = {...style, left: Math.round(rect.top - (rect.height / 2) + horizontalOffset)}
        break
    }

    return style
  }
}

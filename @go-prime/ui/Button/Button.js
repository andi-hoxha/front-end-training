/**
 * Created by LeutrimNeziri on 21/02/2019.
 */
import React from 'react'
import withStyles from 'ui/withStyles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {rgba} from 'polished'

const buttonVariants = {
  raised: 'raised',
  outlined: 'outlined',
  flat: 'flat',
}
const buttonColors = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  inherit: 'inherit',
}

const styles = ({palette, size, transitions, typography, shadows}) => ({
  /**
   * ======== ELEMENTS CLASSES =========
   */
  root: {
    cursor: 'pointer',
    width: 'auto',
    display: 'inline-flex',
    padding: [size.spacing * 2 - size.spacing / 2, size.spacing * 2],
    borderRadius: size.baseRadius,
    transition: transitions.common,
    lineHeight: 1,
    border: 'none',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none'
    },
    '&$disabled': {
      cursor: 'not-allowed',
      opacity: 0.6
    },
    '&:active:not($disabled), &$pressed:not($disabled)': {
      transition: 'none',
      boxShadow: `inset 1px 1px 4px -1px ${rgba(palette.common.black, 0.3)}`
    },
  },
  /**
   * ======== STATE CLASSES =========
   * these rules will override the rules that has been set from variant classes and default classes
   */
  pressed: {},
  disabled: {},
  fullWidth: {
    width: '100%'
  },

  /**
   * ======== VARIANT CLASSES =========
   * these rules are meant to be used only to change the look and feel of each button variant
   * note: style the elements from the root class name for the given variant
   */
  flat: {
    '&:hover:not($disabled), &$pressed:not($disabled)': {
      backgroundColor: rgba(palette.common.black, 0.1)
    },
    '&$inherit': {
      color: 'inherit'
    },
    '&$default': {
      color: palette.textColor
    },
    '&$primary': {
      color: palette.leadColor,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.leadColor, 0.1)
      }
    },
    '&$error': {
      color: palette.error,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.error, 0.1)
      }
    },
    '&$success': {
      color: palette.success,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.success, 0.1)
      }
    },
    '&$warning': {
      color: palette.warning,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.warning, 0.1)
      }
    }
  },
  outlined: {
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    '&:hover:not($disabled)': {
      backgroundColor: rgba(palette.common.black, 0.1)
    },
    '&:active:not($disabled)': {
      borderColor: 'transparent',
      backgroundColor: rgba(palette.common.black, 0.15)
    },
    '&$default': {
      color: palette.textColor,
      borderColor: palette.borderColor,
    },
    '&$primary': {
      color: palette.leadColor,
      borderColor: palette.leadColor,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.leadColor, 0.1)
      },
      '&:active:not($disabled)': {
        borderColor: 'transparent'
      },
    },
    '&$error': {
      color: palette.error,
      borderColor: palette.error,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.error, 0.1)
      },
      '&:active:not($disabled)': {
        borderColor: 'transparent'
      },
    },
    '&$success': {
      color: palette.success,
      borderColor: palette.success,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.success, 0.1)
      },
      '&:active:not($disabled)': {
        borderColor: 'transparent'
      },
    },
    '&$warning': {
      color: palette.warning,
      borderColor: palette.warning,
      '&:hover:not($disabled), &$pressed:not($disabled)': {
        backgroundColor: rgba(palette.warning, 0.1)
      },
      '&:active:not($disabled)': {
        borderColor: 'transparent'
      },
    },
  },
  raised: {
    backgroundColor: palette.common.white,
    color: palette.textColorInverse,
    boxShadow: shadows.default,
    '&:hover:not($disabled):not(:active):not($pressed)': {
      boxShadow: shadows.hover
    },
    '&$default': {
      color: palette.textColor,
    },
    '&$primary': {
      backgroundColor: palette.leadColor
    },
    '&$error': {
      backgroundColor: palette.error
    },
    '&$success': {
      backgroundColor: palette.success
    },
    '&$warning': {
      backgroundColor: palette.warning
    },
  },
  inherit: {},
  default: {},
  primary: {},
  error: {},
  success: {},
  warning: {}
})
export class Button extends React.Component {

  static get defaultProps() {
    return {
      variant: buttonVariants.flat,
      color: buttonColors.default,
      disabled: false,
      fullWidth: false
    }
  }

  ref = null

  setButtonRef = btnRef => {
    this.ref = btnRef
  }

  render() {
    const {
      children,
      className: classNameProp,
      disabled,
      fullWidth,
      pressed,
      classes,
      variant,
      color,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseOver,
      onClick,
      onMouseOut,
      ...props
    } = this.props


    let variantClasses
    let colorClasses
    switch (variant) {
      case buttonVariants.raised:
        variantClasses = classes.raised
        break
      case buttonVariants.outlined:
        variantClasses = classes.outlined
        break
      case buttonVariants.flat:
      default:
        variantClasses = classes.flat
    }

    switch (color) {
      case buttonColors.primary:
        colorClasses = classes.primary
        break
      case buttonColors.success:
        colorClasses = classes.success
        break
      case buttonColors.warning:
        colorClasses = classes.warning
        break
      case buttonColors.error:
        colorClasses = classes.error
        break
      case buttonColors.inherit:
        colorClasses = classes.inherit
        break
      default:
        colorClasses = classes.default
    }

    const className = classNames(
      classes.root,
      variantClasses,
      colorClasses,
      disabled && classes.disabled,
      fullWidth && classes.fullWidth,
      pressed && classes.pressed,
      classNameProp
    )

    let listeners = disabled ? {} : {
      onClick: onClick,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut
    }

    return (
      <button className={className}
              ref={this.setButtonRef}
              {...listeners}
              {...props}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  /**
   * variant: It determines how the button will look after it gets rendered,
   * options are: raised, flat, outlined and default(if not specified, default option will be applied).
   */
  variant: PropTypes.oneOf(Object.keys(buttonVariants)),
  /**
   * color: It determines the color of the standard buttons,
   * note: try to avoid changing colors from style or class names in order have the button styled in every state other vise properties will be overwritten
   */
  color: PropTypes.oneOf(Object.keys(buttonColors)),
  /**
   * disabled: if true, buttons will appear as disabled half visible and will not fire any event
   */
  disabled: PropTypes.bool,
  /**
   * classes the class names to style the button,
   * you can use classes for a specific state such are hover, pressed or the ones representing the colors such are success warning and others
   */
  classes: PropTypes.object,
  /**
   * if set to true the button will get the 100% width of the parent element
   */
  fullWidth: PropTypes.bool,
  /**
   * if true buttons will appear as pressed, helpful when used to attach a drop down menu under it
   */
  pressed: PropTypes.bool
}

export default withStyles(styles)(Button)

/**
 * Created by LeutrimNeziri on 11/03/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'
import {lighten} from 'polished'
import uuid from 'uuid'

const inputVariants = {
  underlined: 'underlined',
  bordered: 'bordered',
  filled: 'filled',
  default: 'default'
}

const styles = ({size, palette, typography, transitions}) => ({
  /**
   * ======== ELEMENTS CLASSES =========
   */
  root: {
    display: 'flex',
    width: 300,
    flexFlow: 'column nowrap',
    position: 'relative',
    marginTop: size.spacing,
    marginBottom: size.spacing
  },
  placeholder: {
    width: 'auto',
    display: 'inline-flex',
    position: 'absolute',
    color: palette.disabledColor,
    transformOrigin: 'top left',
    top: 0,
    fontSize: size.defaultFontSize,
    lineHeight: 1,
    transition: transitions.common,
    padding: [0, size.spacing * 2]
  },
  /**
   * this class name helps to draw top lines for input when variant is set to default
   * note: do not use ore override this class it will break functionality
   */
  hiddenPlaceholder: {
    width: '100%',
    display: 'inline-flex',
    position: 'absolute',
    color: 'transparent',
    transformOrigin: 'top left',
    top: 0,
    lineHeight: 1,
    padding: [0, size.spacing * 2],
    fontSize: size.defaultFontSize * 0.75,
    letterSpacing: -8,
    pointerEvents: 'none',
    userSelect: 'none',
    transition: transitions.common
  },
  inputWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    position: 'relative',
    transition: transitions.common,
    height: size.spacing * 5 - size.spacing / 4
  },
  input: {
    width: '100%',
    padding: [0, size.spacing * 2],
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 1,
    fontSize: size.defaultFontSize,
    '&:focus': {
      outline: 'none'
    }
  },
  helperText: {
    display: 'inline-flex',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    color: 'inherit',
    marginTop: size.spacing,
    fontSize: size.smallFontSize
  },
  /**
   * ======== END OF ELEMENTS CLASSES =========
   */
  /**
   * ======== STATE CLASSES =========
   * these rules will override the rules that has been set from variant classes and default classes
   */
  warning: {
    '&$underlined:not($error)': {
      '&$dirty': {
        '& $input,&$focused $placeholder,& $helperText': {
          color: palette.warning
        },
        '& $inputWrapper': {
          '&:after': {
            backgroundColor: palette.warning
          }
        }
      }
    },
    '&$bordered:not($error)': {
      '&$dirty': {
        '& $input,& $helperText': {
          color: palette.warning
        },
        '& $inputWrapper': {
          borderColor: palette.warning
        }
      }
    },
    '&$filled:not($error)': {
      '&$dirty': {
        '& $helperText': {
          color: palette.warning
        },
        '& $inputWrapper': {
          backgroundColor: lighten(0.25, palette.warning)
        }
      }
    },
    '&$default:not($error)': {
      '&$dirty': {
        '& $helperText, & $input, &$focused $placeholder': {
          color: palette.warning
        },
        '& $hiddenPlaceholder, & $inputWrapper': {
          borderColor: palette.warning
        }
      }
    }
  },
  error: {
    '&$underlined': {
      '&$dirty': {
        '& $input,&$focused $placeholder,& $helperText': {
          color: palette.error
        },
        '& $inputWrapper': {
          '&:after': {
            backgroundColor: palette.error
          }
        }
      }
    },
    '&$bordered': {
      '&$dirty': {
        '& $input,& $helperText': {
          color: palette.error
        },
        '& $inputWrapper': {
          borderColor: palette.error
        }
      }
    },
    '&$filled': {
      '&$dirty': {
        '& $helperText': {
          color: palette.error
        },
        '& $inputWrapper': {
          backgroundColor: lighten(0.25, palette.error)
        }
      }
    },
    '&$default': {
      '&$dirty': {
        '& $helperText, & $input, &$focused $placeholder': {
          color: palette.error
        },
        '& $hiddenPlaceholder, & $inputWrapper': {
          borderColor: palette.error
        }
      }
    }
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },
  fullWidth: {
    width: '100%'
  },
  focused: {
    '&$underlined': {
      /**
       *if focused scale and place the label in top left corner
       */
      '& $placeholder': {
        //scale down the label to have 10px height
        transform: `translate(${size.spacing / 2}px, -${size.spacing}px) scale(0.75)`,
      },
      /**
       * if focused and it has no error make the label and underline active
       */
      '&:not($error) $placeholder': {
        color: palette.leadColor
      },
      '&:not($error) $inputWrapper': {
        '&:after': {
          backgroundColor: palette.leadColor
        }
      }
    },
    '&$bordered': {
      '&:not($error) $helperText': {
        color: palette.leadColor
      },
      '&:not($error) $inputWrapper': {
        borderColor: palette.leadColor
      }
    },
    '&$filled': {
      '&:not($error):not($warning) $helperText': {
        color: palette.leadColor
      },
      '&:not($error):not($warning) $inputWrapper': {
        borderColor: palette.leadColor
      }
    },
    '&$default': {
      /**
       * same approach as the underlined variant
       */
      '& $placeholder': {
        transform: `translate(${size.spacing / 2}px, -${size.spacing / 2}px) scale(0.75)`,
      },
      '& $hiddenPlaceholder': {
        letterSpacing: 'initial',
        '&:before': {
          marginRight: size.spacing
        },
        '&:after': {
          marginLeft: size.spacing,
        }
      },
      '&:not($error) $hiddenPlaceholder': {
        borderColor: palette.leadColor
      },
      '&:not($error) $placeholder': {
        color: palette.leadColor
      },
      '&:not($error) $inputWrapper': {
        borderColor: palette.leadColor
      }
    },
  },
  dirty: {
    '&$underlined': {
      /**
       *if dirty(has value) and variant underlined scale and place the label in top left corner
       */
      '& $placeholder': {
        //scale down the label to have 10px height
        transform: `translate(${size.spacing / 2}px, -${size.spacing}px) scale(0.75)`,
      }
    },
    '&$default': {
      '& $placeholder': {
        //scale down the label to have 10px height
        transform: `translate(${size.spacing / 2}px, -${size.spacing / 2}px) scale(0.75)`,
      },
      '& $hiddenPlaceholder': {
        letterSpacing: 'initial',
        '&:before': {
          marginRight: size.spacing
        },
        '&:after': {
          marginLeft: size.spacing,
        }
      },
    }
  },
  /**
   * ======== END OF STATE CLASSES =========
   */

  /**
   * ======== VARIANT CLASSES =========
   * these rules are meant to be used only to change the look and feel of each input
   * note: style the elements from the root class name for the given variant
   */
  /*** if variant === underlined */
  underlined: {
    /**
     * if is not focused move the label in line with input
     */
    '& $placeholder': {
      transform: `translate(0, ${size.spacing + size.spacing / 2}px) scale(1)`,
      cursor: 'text'
    },
    '& $inputWrapper': {
      position: 'relative',
      '&:after': {
        content: '""',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 1,
        transition: transitions.common,
        backgroundColor: palette.disabledColor
      }
    },
    '& $input': {
      '&::placeholder': {
        opacity: 0
      }
    }
  },
  /*** if variant === bordered */
  bordered: {
    '& $inputWrapper': {
      borderRadius: size.baseRadius,
      border: `1px solid ${palette.disabledColor}`
    },
    '& $input': {
      '&::placeholder': {
        opacity: 1,
        color: palette.disabledColor
      }
    }
  },
  /*** if variant === filled */
  filled: {
    '& $inputWrapper': {
      border: `1px solid transparent`,
      borderRadius: size.baseRadius,
      backgroundColor: lighten(0.2, palette.disabledColor)
    },
    '& $input': {
      '&::placeholder': {
        opacity: 1,
        color: palette.disabledColor
      }
    }
  },
  /*** if variant === default */
  default: {
    '& $placeholder': {
      transform: `translate(0, ${size.spacing + size.spacing / 2}px) scale(1)`,
      cursor: 'text'
    },
    '& $hiddenPlaceholder': {
      borderColor: palette.disabledColor,
      '&:after, &:before': {
        content: '""',
        flex: 1,
        borderRadius: [0, size.baseRadius, size.baseRadius, 0],
        borderTop: `1px solid`,
        borderColor: 'inherit'
      },
      '&:before': {
        borderRadius: [size.baseRadius, 0, 0, size.baseRadius],
        maxWidth: size.spacing,
        marginLeft: -size.spacing * 2
      },
      '&:after': {
        marginRight: -size.spacing * 2
      }
    },
    '& $inputWrapper': {
      borderRadius: size.baseRadius,
      border: `1px solid ${palette.disabledColor}`,
      borderTop: 0
    },
    '& $input': {
      '&::placeholder': {
        opacity: 0
      }
    }
  }
  /**
   * ======== END OF VARIANT CLASSES =========
   */
})

class Input extends React.Component {

  static get defaultProps() {
    return {
      variant: inputVariants.default,
      type: 'text', // all other types of input, number , date, range
      placeholder: '',
      helperText: '',
      error: false,
      warning: false,
      value: undefined,
      fullWidth: true,
      disabled: false
    }
  }

  state = {
    focused: false,
    dirty: false,
    value: undefined,
    /**
     * Provide an id from prop or generate a new one in order to get the input focused even when user clicks in input label as well
     */
    id: this.props.id || uuid.v1()
  }


  static getDerivedStateFromProps(props, state) {
    /**
     * TODO: Check also when adding support for chip inputs and for select input if an option is selected
     */
    if (props.value || state.value) {
      return {
        dirty: true
      }
    }
    return {dirty: false}
  }


  /**
   *
   * @param event
   */
  onFocus = event => {
    const {onFocus} = this.props
    this.setState({focused: true})
    if (onFocus) onFocus(event)
  }

  /**
   *
   * @param event
   */
  onBlur = event => {
    const {onBlur} = this.props
    this.setState({focused: false})
    if (onBlur) onBlur(event)
  }

  /**
   *
   * @param event
   */
  onChange = event => {
    const {onChange, value} = this.props
    /*
     for uncontrolled component register value in local state in order to detect if it is dirty
     */
    if (value === undefined) {
      this.setState({value: event.target.value})
    }

    if (onChange) onChange(event)
  }


  /**
   * renders an input depending of the given props
   * @return {React}
   */
  render() {
    const {
      classes,
      className: classNameProp,
      placeholder,
      helperText,
      error,
      warning,
      fullWidth,
      //Input Props
      type,
      disabled,
      readOnly,
      variant,
      value,
      name,
      //other props
      other
    } = this.props

    const {focused, dirty, id} = this.state

    const className = classNames(
      classes.root,
      error && classes.error,
      warning && classes.warning,
      focused && classes.focused,
      disabled && classes.disabled,
      dirty && classes.dirty,
      fullWidth && classes.fullWidth,
      variant === inputVariants.underlined && classes.underlined,
      variant === inputVariants.bordered && classes.bordered,
      variant === inputVariants.filled && classes.filled,
      variant === inputVariants.default && classes.default,
      classNameProp
    )
    let inputListeners = (!disabled || !readOnly) && {
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }
    let showPlaceholder = (placeholder && (variant === inputVariants.underlined || variant === inputVariants.default))
    return (
      <div className={className}>
        <div className={classes.inputWrapper}>
          {showPlaceholder &&
          <label htmlFor={id} className={classes.placeholder}>{placeholder}</label>}
          {variant === inputVariants.default &&
          <label className={classes.hiddenPlaceholder}>{placeholder}</label>}
          <input className={classes.input}
                 value={value}
                 type={type}
                 id={id}
                 name={name}
                 placeholder={placeholder}
                 {...inputListeners}
                 {...other}/>
        </div>
        {helperText && <span className={classes.helperText}>{helperText}</span>}
      </div>
    )
  }
}

Input.propTypes = {
  /**
   * variant: It determines how the input will look after it gets rendered,
   * options are: filled, underlined, bordered and default(if not specified, default option will be applied).
   */
  variant: PropTypes.oneOf(Object.keys(inputVariants)),
  /**
   * placeholder: It shows a text or a label that determines what the input does, eg. name, password etc...
   */
  placeholder: PropTypes.string,
  /**
   * helperText: It shows a small text under the input that informs you something, useful for handling errors and warnings,
   * note: if input has error or any warning this text will be coloured with the theme colors for Errors and Warnings.
   */
  helperText: PropTypes.string,
  /**
   * error: If true, it will make the colors and borders with the error color.
   */
  error: PropTypes.bool,
  /**
   * warning: If true, it will make the colors and borders with the warning color.
   */
  warning: PropTypes.bool,
  /**
   * fullWidth: If true, it will fill the available space determined from the container.
   */
  fullWidth: PropTypes.bool,
  /**
   * disabled: If true, it will appear as a disabled(half transparent) input and it will not fire any event at all.
   */
  disabled: PropTypes.bool
}

export default withStyles(styles)(Input)

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase())
}

export const validate = (string: string) => {
  switch (true) {
    case string.length <= 0:
      return 'empty'
    case string.length <= 6:
      return 'notenoughlength'
    default: {
      return true
    }
  }
}
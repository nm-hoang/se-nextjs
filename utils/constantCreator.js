/** @format */

export const createRequestTypes = (
  base,
  action = ['request', 'success', 'failure']
) => {
  const Types = action.reduce((acc, type) => {
    const key = `${base.toUpperCase()}_${type.toUpperCase()}`
    acc[key] = `${key}`

    return acc
  }, {})

  return Types
}

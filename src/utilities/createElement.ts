import { WidgetSchema } from '../types'
export function createDivElement(elementData: WidgetSchema): HTMLElement {
  const { type, attrs, children, value } = elementData

  const element = document.createElement(type)

  // Set attributes
  for (const [attr, value] of Object.entries(attrs || {})) {
    element.setAttribute(attr, value)
  }
  if (value) {
    element.textContent = value
  }

  // Append children
  children &&
    children.forEach((childData) => {
      const childElement = createDivElement(childData)
      element.appendChild(childElement)
    })

  return element
}

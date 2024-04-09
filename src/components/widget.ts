import { CohortInterface } from '../defaults/cohort'
import { createDivElement } from '../utilities/createElement'
import { WidgetSchema } from '../types'

export default abstract class Widget {
  protected container: HTMLElement
  constructor(
    private readonly containerSelector: string,
    protected readonly cohort: CohortInterface,
  ) {
    this.cohort = cohort
    this.container = document.querySelector(containerSelector) as HTMLElement
    if (!this.container) {
      throw new Error(
        `Container element not found for selector: ${containerSelector}`,
      )
    }
  }

  render(): void {
    const widgetElement = this.createDivElement(this.schema())
    this.container.appendChild(widgetElement)
  }

  abstract schema(): WidgetSchema

  createDivElement(elementData: WidgetSchema): HTMLElement {
    return createDivElement(elementData)
  }
}

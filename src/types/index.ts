import { CohortSize } from '../enums'
export type CohortOptions = {
  cohort: string
  container: string
  size: CohortSize | undefined
}

export type WidgetSchema = {
  type: string
  attrs?: Record<string, string>
  value?: string
  children?: WidgetSchema[]
}

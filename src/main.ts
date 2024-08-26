import { CohortInterface } from './defaults/cohort'
import { CohortOptions } from './types'
import { CohortSize } from './enums'
import Widget from './components/widget'
import LargeWidget from './components/large'
import MediumWidget from './components/medium'
import BannerWidget from './components/banner'
import './styles/main.css'

class Cohort {
  constructor(
    protected readonly cohort: CohortInterface | undefined = undefined,
  ) {
    this.cohort = cohort
  }

  get(): CohortInterface | undefined {
    return this.cohort
  }
}

export default class CohortCard {
  private readonly options: CohortOptions
  private cohort: Cohort
  private readonly baseUrl: string

  constructor(options: CohortOptions) {
    // @ts-ignore
    this.options = Object.assign(
      {},
      {
        container: '.cohort-card',
        size: CohortSize.LARGE,
      },
      options,
    )
    // @ts-ignore
    this.baseUrl = airley_base || 'https://pre-api.airley.io/api'
    this.cohort = new Cohort()
  }

  async fetch() {
    const that = this
    let [countRequest, cohortRequest] = await Promise.all([
      fetch(
        `${this.baseUrl}/enrollments/count/${this.options.cohort}`,
      ),
      fetch(
        `${this.baseUrl}/cohort/is-slug-unique/${this.options.cohort}`,
      ),
    ])

    if (countRequest.status !== 200 || cohortRequest.status !== 200) {
      throw new Error('Failed to fetch cohort data')
    }

    const { results: cohort } = await cohortRequest.json()
    const { count } = await countRequest.json()

    that.cohort = new Cohort({
      ...(cohort && cohort[0]),
      enrollments: count,
    })
  }

  render() {
    const cohort = this.cohort.get()
    if (!cohort) {
      return
    }

    let widget: Widget

    switch (this.options.size) {
      case CohortSize.LARGE:
        widget = new LargeWidget(this.options.container, cohort)
        break
      case CohortSize.MEDIUM:
        widget = new MediumWidget(this.options.container, cohort)
        break
      case CohortSize.BANNER:
        widget = new BannerWidget(this.options.container, cohort)
        break
      default:
        throw new Error('Invalid widget type')
    }

    widget.render()
  }
}

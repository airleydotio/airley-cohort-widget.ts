// BannerWidget.ts
import { formatAmount } from '../utilities'
import { WidgetSchema } from '../types'
import Widget from './widget'

class BannerWidget extends Widget {
  schema(): WidgetSchema {
    return {
      type: 'div',
      attrs: {
        id: 'banner',
        class: 'grid w-full rounded-lg bg-[#F1FBF3] shadow-sm',
      },
      children: [
        {
          type: 'div',
          attrs: { class: 'grid bg-white p-2 py-6 sm:p-4' },
          children: [
            {
              type: 'div',
              attrs: {
                class:
                  'relative flex flex-col justify-between rounded-lg border',
              },
              children: [
                {
                  type: 'div',
                  attrs: {
                    class:
                      'grid grid-cols-2 gap-8 rounded-t-lg bg-white p-2 sm:grid-cols-4 sm:p-5',
                  },
                  children: [
                    {
                      type: 'div',
                      attrs: { class: 'hidden flex-col sm:flex' },
                      children: [
                        {
                          type: 'span',
                          attrs: { class: 'text-lg text-gray-500' },
                          children: [
                            {
                              type: 'text',
                              value: `${this.cohort.profile.name} starts on`,
                            },
                          ],
                        },
                        {
                          type: 'span',
                          attrs: { class: 'text-xl font-medium' },
                          children: [
                            {
                              type: 'text',
                              value: new Date(
                                this.cohort.profile.start_date,
                              ).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              }),
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'div',
                      attrs: { class: 'hidden flex-col sm:flex' },
                      children: [
                        {
                          type: 'span',
                          attrs: { class: 'text-lg text-gray-500' },
                          children: [
                            { type: 'text', value: 'Available Seats' },
                          ],
                        },
                        {
                          type: 'div',
                          attrs: { class: 'flex items-center space-x-2' },
                          children: [
                            {
                              type: 'span',
                              attrs: { class: 'text-xl font-medium' },
                              children: [
                                {
                                  type: 'text',
                                  value:
                                    (
                                      this.cohort?.profile?.max_students -
                                      this.cohort.enrollments
                                    ).toString() ?? '0',
                                },
                              ],
                            },
                            {
                              type: 'span',
                              attrs: {
                                class:
                                  'w-max rounded-md bg-red-600 px-2 py-0.5 text-sm text-white',
                              },
                              children: [
                                { type: 'text', value: 'Filling Fast' },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'div',
                      attrs: { class: 'flex flex-col' },
                      children: [
                        {
                          type: 'span',
                          attrs: { class: 'text-base font-medium sm:text-xl' },
                          children: [{ type: 'text', value: 'Cost' }],
                        },
                        {
                          type: 'div',
                          attrs: {
                            class:
                              'flex flex-col items-start space-x-1 sm:flex-row sm:items-end',
                          },
                          children: [
                            {
                              type: 'span',
                              attrs: {
                                class: 'text-xl font-medium sm:text-3xl',
                              },
                              children: [
                                {
                                  type: 'text',
                                  value: formatAmount(
                                    this.cohort.profile.price,
                                    this.cohort.profile.currency,
                                  ),
                                },
                              ],
                            },
                            {
                              type: 'span',
                              attrs: {
                                class:
                                  'text-sm font-medium text-gray-500 line-through sm:text-lg',
                              },
                              children: [
                                {
                                  type: 'text',
                                  value: formatAmount(
                                    this.cohort.profile.price * 1.15,
                                    this.cohort.profile.currency,
                                  ),
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'a',
                      attrs: {
                        target: '_blank',
                        href: `https://app.airley.io/onboarding/cohort/${this.cohort.profile.url_slug}`,
                      },
                      children: [
                        {
                          type: 'button',
                          attrs: {
                            class:
                              'my-auto h-max w-full rounded-lg bg-[#2D6A4F] py-3 text-white',
                          },
                          children: [{ type: 'text', value: 'Enroll Now' }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  }
}

export default BannerWidget

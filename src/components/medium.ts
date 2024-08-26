// MediumWidget.ts
import { formatAmount } from '../utilities'
import { WidgetSchema } from '../types'
import Widget from './widget'

class MediumWidget extends Widget {
  schema(): WidgetSchema {
    return {
      type: 'div',
      attrs: {
        id: 'medium',
        class: 'grid w-full rounded-lg bg-[#F1FBF3] shadow-sm',
      },
      children: [
        {
          type: 'div',
          attrs: { class: 'grid bg-white p-4 py-6' },
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
                  attrs: { class: 'absolute right-4 top-0' },
                  children: [
                    {
                      type: 'svg',
                      attrs: {
                        width: '60',
                        height: '97',
                        viewBox: '0 0 60 97',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      children: [
                        {
                          type: 'path',
                          attrs: {
                            d: 'M0.152344 0.638672H46.5998V66.737L22.4828 52.1438L0.152344 66.737V0.638672Z',
                            fill: '#2D6A4F',
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: 'span',
                      attrs: {
                        class: 'absolute left-2 top-1 font-medium text-white',
                      },
                      children: [{ type: 'text', value: '15% OFF' }],
                    },
                  ],
                },
                {
                  type: 'div',
                  attrs: { class: 'flex flex-col justify-between rounded-t-lg bg-white p-5' },
                  children: [
                    {
                      type: 'div',
                      attrs: { class: 'flex flex-col' },
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
                      attrs: { class: 'flex flex-col' },
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
                          attrs: { class: 'text-xl font-medium' },
                          children: [{ type: 'text', value: 'Cost' }],
                        },
                        {
                          type: 'div',
                          attrs: { class: 'flex items-end space-x-1' },
                          children: [
                            {
                              type: 'span',
                              attrs: { class: 'text-3xl font-medium' },
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
                                  'text-lg font-medium text-gray-500 line-through',
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
                        {
                          type: 'span',
                          attrs: { class: 'mt-2 text-gray-600' },
                          children: [
                            {
                              type: 'text',
                              value: 'Last date to enroll 15th Mar, 2024',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'div',
                  attrs: {
                    class:
                      'bottom-0 right-0 w-full rounded-b-lg bg-[#F1FBF3] p-4',
                  },
                  children: [
                    {
                      type: 'a',
                      attrs: {
                        href: `https://app.airley.io/onboarding/cohort/${this.cohort.profile.url_slug}`,
                        target: '_blank',
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

export default MediumWidget

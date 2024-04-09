export interface CohortInterface {
  id: 0
  profile: {
    name: ''
    cover_photo: {
      id: 0
      url: ''
    }
    url_slug: ''
    start_date: ''
    end_date: ''
    payment_deadline_date: ''
    student_portal_open_date: ''
    is_paid: false
    price: 0
    currency: ''
    is_deleted: false
    max_students: 0
  }
  course: {
    profile: {
      name: ''
      description: ''
    }
  }
  enrollments: 0
}

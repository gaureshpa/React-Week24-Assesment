import './LeaveRequestCard.css'

type LeaveType = 'Annual Leave' | 'Sick Leave' | 'Casual Leave'
type RequestStatus = 'Pending' | 'Approved' | 'Rejected'

interface LeaveRequest {
  id: number
  leaveType: LeaveType
  days: number
  startDate: string
  endDate: string
  reason: string
  submittedDate: string
  status: RequestStatus
  statusMessage: string
}

interface LeaveRequestCardProps {
  request: LeaveRequest
}

function LeaveTypeIcon({ leaveType }: { leaveType: LeaveType }) {
  if (leaveType === 'Annual Leave') {
    return (
      <svg
        viewBox="0 -16.79 122.88 122.88"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fillRule="evenodd" d="M67.71,49.7l6.45-1.6,2.58-1.32,4.94-5.65A2.44,2.44,0,0,1,
        85.36,44l-3.31,5.12c-1.75,2.72-1.39,2.17-4.34,3.58-1.69.82-3.71,1.68-5.63,2.39l7.52,
        6.22c3.15-.43,6.21-1,9.31-1.45,3.55-.52,3.62-.06,6.23,2l12.22,9.54c3.23,2.85.79,5.79-2.11,
        5.27L93.82,68.59c-2.54-1.79-2.09-1.57-5.17-.41-3.5,1.32-7.4,3.15-11.11,3C73,71,72,68.36,68.89,
        65.66A26.28,26.28,0,0,1,64,60.75c-.77-1.19-1.58-2.16-2.07-3.13a3.58,3.58,0,0,1,0-3.59c1.29-2.47,
        2.11-3.5,5.82-4.33ZM36.5,32V82.46h3.4l7.42-4.81H43.38v-5H64.52L50.78,57.44l3.7-3.33L71.23,72.67h20.2a2.46,
        2.46,0,0,1,1.88.86l15.74,8.94h13.83V89.3H.4V82.46H31.15V32H1.94A1.94,1.94,0,0,1,0,30.08a1.28,1.28,0,0,1,0-.19A21.91,
        21.91,0,0,1,2.58,19.06C16.46-6,49.42-6.41,64.5,18.29a21.46,21.46,0,0,1,3,11.79A1.92,1.92,0,0,1,65.61,32H36.5ZM46.63,
        82.47H102L90.41,77.66H54.05l-7.42,4.81ZM45.11,6.13c4.31,6.23,6.46,14.54,6.56,22H63.61C63,19,53.41,9.9,45.11,6.13ZM39.45,
        3.68a33.86,33.86,0,0,0-3.66-.43v24.9h12c-.07-5.69-3.61-21.43-8.36-24.47ZM31.9,3.24a32.94,32.94,0,0,0-3.61.4C23.47,6.69,20,22.4,
        19.88,28.14h12V3.24ZM22.65,6C14.29,9.79,4.57,18.65,3.94,28.15H16c.08-7.39,2.28-16,6.62-22.12Zm38.1,31.09a6.26,6.26,0,1,0,6.82,
        5.64,6.27,6.27,0,0,0-6.82-5.64Z"
        />
      </svg>
    )
  }

  if (leaveType === 'Sick Leave') {
    return (
        <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M29.59375 0C28.3125 0 27.152344 0.367188 26.125 0.9375L20.53125 4L16 4C14.355469 
                4 13 5.355469 13 7C13 7.207031 13.023438 7.398438 13.0625 7.59375C13.0625 7.605469 13.0625 
                7.613281 13.0625 7.625C13.140625 8.023438 13.289063 8.367188 13.5 8.6875C13.710938 9.007813 
                13.996094 9.289063 14.3125 9.5C14.628906 9.710938 14.980469 9.859375 15.375 9.9375C15.382813 
                9.941406 15.398438 9.933594 15.40625 9.9375C15.59375 9.972656 15.796875 10 16 10L20.53125 10L26.21875 
                13.09375L26.21875 13.0625C27.246094 13.632813 28.394531 14 29.59375 14L43 14C46.84375 14 50 10.84375 
                50 7C50 3.15625 46.84375 0 43 0 Z M 29.59375 2L30 2L30 4L32 4L32 2L34 2L34 4L36 4L36 2L38 2L38 4L40 
                4L40 2L42 2L42 4L44 4L44 2.09375C46.273438 2.5625 48 4.589844 48 7C48 9.753906 45.753906 12 43 12L29.59375 
                12C28.792969 12 27.960938 11.742188 27.1875 11.3125L21.28125 8.125C21.191406 8.078125 21.097656 8.046875 21 
                8.03125L21 7L15 7C15 6.445313 15.445313 6 16 6L20.8125 6C20.976563 5.996094 21.136719 5.953125 21.28125 5.875L27.09375 
                2.6875C27.867188 2.257813 28.675781 2 29.59375 2 Z M 23 6L23 8L44 8L44 6 Z M 3 17C1.355469 17 0 18.355469 0 20L0 50L6 
                50L6 45L44 45L44 50L50 50L50 37.15625C50.003906 37.105469 50.003906 37.050781 50 37L50 31C50 28.253906 47.746094 26 
                45 26L19 26C18.96875 26 18.9375 26 18.90625 26C18.390625 26.046875 17.996094 26.480469 18 27L18 36L6 36L6 20C6 18.355469 
                4.644531 17 3 17 Z M 12 36C14.75 36 17 33.75 17 31C17 28.25 14.75 26 12 26C9.25 26 7 28.25 7 31C7 33.75 9.25 36 12 36 Z M 3 
                19C3.554688 19 4 19.445313 4 20L4 38L48 38L48 48L46 48L46 43L4 43L4 48L2 48L2 20C2 19.445313 2.445313 19 3 19 Z M 12 28C13.667969 28 
                15 29.332031 15 31C15 32.667969 13.667969 34 12 34C10.332031 34 9 32.667969 9 31C9 29.332031 10.332031 28 12 28 Z M 20 28L45 28C46.65625 
                28 48 29.34375 48 31L48 36L20 36Z"
            />
        </svg>
    )
  }

  return (
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        >
            <path d="M259.431,268.8l140-140-27.785-27.785A208.333,208.333,0,0,0,77.019,395.646L104.8,
                423.431l132-132L401.372,456h45.256ZM224.333,72a175.182,175.182,0,0,1,124.686,51.646l5.157,
                5.158-57.058,57.058a477.658,477.658,0,0,0-62.879-53.924C209.023,114.1,184.8,101.609,162.245,
                94.807a152.909,152.909,0,0,0-17.092-4.129A175.58,175.58,0,0,1,224.333,72ZM104.8,378.176l-5.158-5.157A176.637,
                176.637,0,0,1,66.678,169.153a153.129,153.129,0,0,0,4.129,17.092c6.8,22.556,19.3,46.778,37.131,71.994a477.658,
                477.658,0,0,0,53.924,62.879Zm79.7-79.7c-11.857-11.634-32.231-32.977-50.438-58.718-22.872-32.336-46.59-77.9-33.753-115.45,
                37.421-12.793,82.8,10.736,115.005,33.437,25.864,18.233,47.431,38.815,59.158,50.759Z"
            />
        </svg>
  )
}

function StatusIcon({ status }: { status: RequestStatus }) {
  if (status === 'Pending') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }

  if (status === 'Approved') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </svg>
  )
}

function LeaveRequestCard({ request }: LeaveRequestCardProps) {
  const typeClass = request.leaveType
    .toLowerCase()
    .replace(' leave', '')

  return (
    <article className="leave-request-card">
      <div className="leave-request-card__main">
        <div
          className={`leave-request-card__icon leave-request-card__icon--${typeClass}`}
        >
          <LeaveTypeIcon leaveType={request.leaveType} />
        </div>

        <div className="leave-request-card__content">
          <div className="leave-request-card__title-row">
            <div className="request-card__leave-type">
              <h3>{request.leaveType}</h3>
              <span className="leave-request-card__duration">
                {request.days} {request.days === 1 ? 'day' : 'days'}
              </span>
            </div>
          </div>          
        </div>

        <span
          className={`leave-request-card__status leave-request-card__status--${request.status.toLowerCase()}`}
        >
          <StatusIcon status={request.status} />
          {request.status}
        </span>
      </div>

      <div className="leave-request-details">
        <p className="leave-request-card__dates">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 10h18" />
              <path d="M7 14h.01M12 14h.01M17 14h.01M7 17h.01M12 17h.01" />
            </svg>

            <span>
              {request.startDate} – {request.endDate}
            </span>
          </p>

          <p className="leave-request-card__reason">
            Reason: "{request.reason}"
          </p>
      </div>

      <div className="leave-request-card__footer">
        <p className='leave-request-card__submitted-date'>
          Submitted on {request.submittedDate}
        </p>

        <div>
          <p
            className={`leave-request-card__message leave-request-card__message--${request.status.toLowerCase()}`}
          >
            {request.status === 'Pending' && (
              <span className="leave-request-card__message-dot" />
            )}
            {request.status === 'Approved' && (
              <span className="leave-request-card__message-dot" />
            )}
            {request.statusMessage}
          </p>
        </div>
      </div>
    </article>
  )
}

export default LeaveRequestCard
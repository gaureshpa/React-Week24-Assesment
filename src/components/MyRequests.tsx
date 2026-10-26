import { useState } from 'react'
import './MyRequests.css'
import LeaveRequestCard from './LeaveRequestCard'

type LeaveType = 'Annual Leave' | 'Sick Leave' | 'Casual Leave'
type RequestStatus = 'Pending' | 'Approved' | 'Rejected'
type RequestFilter = 'All' | RequestStatus

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

const leaveRequests: LeaveRequest[] = [
  {
    id: 1,
    leaveType: 'Annual Leave',
    days: 3,
    startDate: 'Oct 26',
    endDate: 'Oct 28, 2026',
    reason: 'Family vacation',
    submittedDate: 'Oct 18, 2026',
    status: 'Pending',
    statusMessage: 'Awaiting Lead Review',
  },
  {
    id: 2,
    leaveType: 'Sick Leave',
    days: 2,
    startDate: 'Oct 12',
    endDate: 'Oct 13, 2026',
    reason: 'Medical rest',
    submittedDate: 'Oct 11, 2026',
    status: 'Approved',
    statusMessage: 'Approved by Sarah Miller',
  },
  {
    id: 3,
    leaveType: 'Casual Leave',
    days: 1,
    startDate: 'Sep 25, 2026',
    endDate: 'Sep 25, 2026',
    reason: 'Personal work',
    submittedDate: 'Sep 20, 2026',
    status: 'Rejected',
    statusMessage: 'Overlaps with Team Sprint Review',
  },
]

function MyRequests() {
  const [activeFilter, setActiveFilter] = useState<RequestFilter>('All')

  const filters: RequestFilter[] = [
    'All',
    'Pending',
    'Approved',
    'Rejected',
  ]

  const filteredRequests =
    activeFilter === 'All'
      ? leaveRequests
      : leaveRequests.filter(
          (request) => request.status === activeFilter,
        )

  function getFilterCount(filter: RequestFilter) {
    if (filter === 'All') {
      return leaveRequests.length
    }

    return leaveRequests.filter(
      (request) => request.status === filter,
    ).length
  }

  return (
    <section className="my-requests">
      <div className="my-requests__top">
        <div className="my-requests__header">
          <div className="my-requests__title-row">
            <div className="request-form__header-icon" aria-hidden="true">
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path
                        d="M30.707,9.293L26,4.586V1c0-0.552-0.448-1-1-1H3C2.448,0,2,0.448,2,1v30c0,0.552,0.448,1,1,
                        1 h22c0.552,0,1-0.448,1-1V15.414l4.707-4.707C31.098,10.317,31.098,9.683,30.707,9.293z M11.921,
                        17.628l4.452,4.452l-5.194,0.742 L11.921,17.628z M17.146,21.439l-4.586-4.586l8.293-8.293l4.586,
                        4.586L17.146,21.439z M26.146,12.439l-4.586-4.586L24,5.414v0 L28.586,10L26.146,12.439z M4,30V2h20v2l-4,
                        4H8v1h11l-2,2H8v1h8l-2,2H8v1h5l-1.764,1.764c-0.069,0.069-0.124,0.15-0.17,0.236H8v1 h2.857l-0.286,2H8v1h2.429l-0.286,
                        2H8v1h2l6.67-0.953c0.214-0.031,0.413-0.13,0.566-0.283L24,16v14H4z"
                    />
                </svg>
            </div>

            <h2>My Requests</h2>
          </div>

          <p>View and track your submitted leave requests.</p>
        </div>

        <div
          className="my-requests__filters"
          role="group"
          aria-label="Filter leave requests"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`my-requests__filter ${
                activeFilter === filter
                  ? 'my-requests__filter--active'
                  : ''
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              <span>{filter}</span>
              <span className="my-requests__filter-count">
                ({getFilterCount(filter)})
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="my-requests__list">
        {filteredRequests.map((request) => (
          <LeaveRequestCard
            key={request.id}
            request={request}
          />
        ))}

        {filteredRequests.length === 0 && (
          <p className="my-requests__empty">
            No {activeFilter.toLowerCase()} leave requests.
          </p>
        )}
      </div>
    </section>
  )
}

export default MyRequests

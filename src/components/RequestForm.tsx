import { useState } from "react";
import './RequestForm.css'

function RequestForm() {
    const [leaveType, setLeaveType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [reason, setReason] = useState('')

    const calculateWorkingDays = (start: string, end: string) => {
        if (!start || !end || end < start) return 0

        const current = new Date(`${start}T12:00:00`)
        const last = new Date(`${end}T12:00:00`)

        let days = 0

        while (current <= last) {
            const day = current.getDay()

            if (day !== 0 && day !== 6) {
                days++
            }

            current.setDate(current.getDate() + 1)
        }

        return days
    }

    const estimatedDuration = calculateWorkingDays(startDate, endDate)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(endDate < startDate) {
            alert('End date cannot be earlier than start date.')
            return
        }

        console.log({
            leaveType, startDate, endDate, reason, estimatedDuration
        })
    }

    return (
        <section className="request-form">
            <div className="request-form__header">
                <div className="request-form__header-icon" aria-hidden="true">
                    <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    >
                    <path
                        d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>

                    
                </div>

                <div className="request-form__header-text">
                    <h2>Request Time Off</h2>
                    <p>Fill in the details to submit your leave request</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="request-form__field">
                    <label htmlFor="leaveType">Leave Type <span className="request-form__required">*</span> </label>

                    <select 
                        id="leaveType"
                        value={leaveType}
                        onChange={(event)=> setLeaveType(event.target.value)}
                        required
                    >
                        <option value="" disabled>Select leave type...</option>
                        <option value="Annual">Annual Leave</option>
                        <option value="Sick">Sick</option>
                        <option value="Casual">Casual</option>
                    </select>
                </div>

                <div className="request-form__date">
                    <div className="request-form__field">
                        <label htmlFor="startDate">Start Date <span className="request-form__required">*</span> </label>
                        <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={(event) => setStartDate(event.target.value)}
                        />
                    </div>
                    <div className="request-form__field">
                        <label htmlFor="endDate">End Date <span className="request-form__required">*</span> </label>
                        <input
                            type="date"
                            id="endDate"
                            min={startDate || undefined}
                            value={endDate}
                            onChange={(event) => setEndDate(event.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="request-form__duration" aria-live="polite">
                    <div className="request-form__duration-wrapper">
                        <span className="request-form__duration-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <rect width="24" height="24" fill="none" />
                                    <path
                                        d="M12,12,6.12,20.09a10,10,0,0,1-2.21-14A9.71,9.71,0,0,1,12,2Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12,12V2a10,10,0,0,1,0,20,9.58,9.58,0,0,1-5.88-1.91Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </span>
                        <span>Estimated Duration:</span>
                    </div>

                    <div className="request-form__duration-days">
                        <strong>
                            {estimatedDuration}{' '}
                            {estimatedDuration === 1? 'Day' : 'Days'}
                        </strong>
                    </div>
                </div>

                <div className="request-form__field">
                    <label htmlFor="reason">Reason for Leave <span className="request-form__required">*</span> </label>
                    <textarea 
                        value={reason} 
                        id="reason"
                        onChange={(event) => setReason(event.target.value)}
                        placeholder="Briefly describe the reason for your leave."
                        rows={4}
                        required
                    />
                </div>

                <button className="request-form__submit" type="submit">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 
                            18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 
                            5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 
                            12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 
                            17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 
                            4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 
                            11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 
                            12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Submit Request</span>
                </button>
            </form>

        </section>
    )
}

export default RequestForm
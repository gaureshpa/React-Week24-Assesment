import './Header.css'

function Header() {
  return (
    <header className="header">
        <div className="header__brand">
            <span className="header__brand-name">LeaveFlow</span>
        </div>

        <div className="header__actions">
            <button 
                type="button"
                className="header__notification"
                aria-label="Notifications"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21h4" />
                </svg>

                <span className="header__notification-dot" />
            </button>

            <div className="header__profile">
                <div className="header__avatar" aria-hidden="true">
                    AD
                    <span className="header__avatar-dot"></span>
                </div>

                <div className="header__profile-info">
                    <span className="header__name">Amal Davies</span>
                    <span className="header__role">Product Designer</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
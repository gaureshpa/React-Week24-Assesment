import './LeaveBalanceCard.css'

interface LeaveBalanceCardProps {
    title: string
    remaining: number
    total: number
    icon?: React.ReactNode
}

function LeaveBalanceCard({
    title, remaining, total, icon
}: LeaveBalanceCardProps) {
    const used = total-remaining;
    const usedPercentage = (used/total) * 100
    const remainingPercentage = Number((100 - usedPercentage).toFixed(0));

    return (
        <article className="balance-card">
            {icon && (
                <div 
                    className="balance-card__icon" 
                    aria-hidden="true"
                    data-leave-type={title.toLowerCase().split(' ')[0]}
                >
                    {icon}
                </div>
            )}

            <h3 className="balance-card__title">{title.toUpperCase()}</h3>

            <p className="balance-card__remaining">
                {remaining} <span className="days-left">days left</span>
            </p>

            <div 
                className="balance-card__progress" 
                role='progressbar'
                aria-label={`${title} used`}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={used}
            >   
                <div 
                    className="balance-card__progress-fill"
                    style={{ width: `${usedPercentage}%` }}
                >
                </div>

                
            </div>

            <div className="balance-card__summary">
                <p className="balance-card__used">{used} of {total} days used</p>
                <span className="remaining-percentage">{remainingPercentage}% remaining</span>
            </div>

        </article>
    )
}

export default LeaveBalanceCard

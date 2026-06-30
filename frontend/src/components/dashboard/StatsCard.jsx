import "../../styles/StatsCard.css";
function StatsCard({
    icon,
    title,
    value,
    subtitle,
    color
}) {

    return (

        <div className="stats-card">

            <div
                className="stats-strip"
                style={{ background: color }}
            ></div>

            <div className="stats-body">

                <div
                    className="stats-icon"
                    style={{
                        background: color + "20",
                        color: color
                    }}
                >
                    {icon}
                </div>

                <p className="stats-title">{title}</p>

                <h2 className="stats-value">{value}</h2>

                <p className="stats-subtitle">{subtitle}</p>

            </div>

        </div>

    );
}

export default StatsCard;
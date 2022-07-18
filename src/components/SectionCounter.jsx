export const SectionCounter = function (prop) {
    return (
        <div className="section-counter">
            <i>
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H29L21 10L29 20H0V0Z" fill="#343434"/>
                </svg>
            </i>
            <span>{prop.count}</span>
        </div>
    )
}
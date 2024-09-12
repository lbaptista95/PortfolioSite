import React from 'react';

export default function ProjectTitle(props) {
    const { title } = props;
    const titleBoxRef = React.useRef(null)
    const titleRef = React.useRef(null);

    React.useEffect(() => {
        if (titleRef.current) {
            const titleWidth = titleRef.current.scrollWidth;
            titleBoxRef.current.style.setProperty('--title-width', `${titleWidth}px`);
        }
    }, [title]);

    return (
        <div className="project-item-info-title-box" ref={titleBoxRef}>
            <h3 className="project-item-info-title" ref={titleRef}>
                {title}
            </h3>
        </div>
    );
}

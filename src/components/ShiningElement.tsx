type PropsType = {
    elementIndex: number;
    svgElement: any;
};

export const ShiningElement = ({ elementIndex, svgElement }: PropsType) => {

    return (
        <div
            className={`shineEffect shineEffect--${elementIndex}`}
        >
            {svgElement}
        </div>
    );
};

export const MarqueeImg = ({ img }: { img: string }) => {
    return (
        <img
            src={img}
            className="w-20 h-20 xl:w-28 xl:h-28 object-contain grayscale mx-4 xl:mx-8"
            alt=""
        />
    );
};
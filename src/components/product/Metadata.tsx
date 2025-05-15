interface Props {
    seoTitle: string;
    seoDescription: string;
}

export default function Metadata({ seoTitle, seoDescription }: Props) {
    return (
        <>
            <title>{seoTitle}</title>
            <meta name="og:title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta name="og:description" content={seoDescription} />
        </>
    );
}
export default function Cards({title, description, imageUrl, ...props}) {
    return (
        <div className="bg-card rounded-lg py-8 px-4 md:min-h-32" {...props}>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="flex justify-end pt-5"><img className="object-contain h-32" alt={title} src={imageUrl}/></div>
        </div>
    )
}
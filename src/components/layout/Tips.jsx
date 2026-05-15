export default function Tips() {
    const videos=[
        {id:"aFA8cpM4Uvs", title:"Tip 1"},
        {id:"8J8z8ekeYVQ", title:"Tip 2"},
    ]
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-2">
        {videos.map((videos)=>(
            <div key={videos.id}>
                <iframe
                src={`https://www.youtube.com/embed/${videos.id}`}
                title={videos.title}
                allowFullScreen
                className="w-full aspect-video"
                />
            </div>
        ))}
    </div>
  )
}


export default function Card(props){
    return (
         <div>
         <div className="card mb-3">
          <div className="row g-0">
           <div className="col-md-4">
           <img src={props.item.imageUrl} className="img-fluid rounded-start " alt="..."/>
         </div>
         <div className="col-md-8">
         <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.content}</p>
        <div className="d-flex flex-row justify-content-between" >
        <p className="card-text"><small class="text-muted">{props.item.data}</small></p>
        <a className="btn btn-primary" rel = "noreferrer" href={props.item.readMoreUrl} target = "_blank">Read more</a>
        </div>
        
      </div>
    </div>
  </div>
</div>
         </div>
    )
}
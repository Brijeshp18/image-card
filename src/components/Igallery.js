import React ,{useEffect,useState} from 'react'
import './igallery.css'
function Igallery() {
const [images, setImages] = useState([])
useEffect(() => {
   
       const data =[
        { id:1,
          url:'https://picsum.photos/id/1/300/200',
          title:'Image 1',
        }  ,
        { id:2,
          url:'https://picsum.photos/id/2/300/200',
          title:'Image 2',
        }  ,
        { id:3,
          url:'https://picsum.photos/id/3/300/200',
          title:'Image 3',
        }  ,
        { id:4,
          url:' https://picsum.photos/id/4/300/200',
          title:'Image 4',
        }  ,
        { id:5,
          url:'https://picsum.photos/id/5/300/200',
          title:'Image 5'
        }  
       ]
      setImages(data)
      
    

   
}, [])

const deleteButton =(id)=>{
    setImages(images.filter((images)=>images.id !==id)) //  ! not equal to
}

  return (
    <div className='container'>
    <h1>Image Gallery App</h1> 
    {
        images.length >0 ?(     <div className='imagegrid'>
        {
        
            images.map((image)=>(
                <div className='imagecard' key={image.id}>
                    <img src={image.url} alt='images'/>
         <div className='details'>
          <h3>{image.title}</h3>
          <button onClick={()=>deleteButton(image.id)} className='btn'>Delete</button>   
         </div>
        
        </div>
            ))
        
         
        }
              
        
        
             </div>):
             <p className='else'>No Images Found</p>
    }




    </div>
  )
}

export default Igallery
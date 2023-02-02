import React, { useState } from 'react'

const FolderExplorer=({data})=> {
    const [isExpand, toggleExpand]=useState(false);
    if(data.isFolder === true){
        return(
            <>
                <h6 style={{padding:'5px', width:'200px', borderBottom:'solid #cacaca 0px', cursor:'pointer'}} onClick={()=>toggleExpand(!isExpand)}><i class="bi bi-folder-fill" style={{color:'#e7c766'}}></i> {data.name}</h6>
                {
                    isExpand && data.items.map((item)=><FolderExplorer data={item}/>)                    
                }
            </>
        )
    }
  return (
    <p style={{paddingLeft:'20px', color:'#565656'}}><i class="bi bi-file-earmark-text-fill" style={{color:'#98927e'}}></i> {data.name}</p>
  )
}

export default FolderExplorer
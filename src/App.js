import React from "react";

// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin

export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create' style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}>Create</button>
      <button className='button-update' style={{ backgroundColor: 'orange', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}>Update</button>
      <button className='button-delete' style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
    </span>
  )
}
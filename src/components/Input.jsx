import React, {useState} from 'react';

function Input({id, info, reg, error, errorMsg, type='string', register, rules={} }) {
console.log(id);

  return (
    <div className='admin-login'>
        <label htmlFor={id}> {info}</label>
      <input 
      {...reg(info, rules)}
      ref={register}
      type={type}
      id={id}
      placeholder={info}
      />
        {error && <span>{errorMsg}</span>}
    </div>
  )
}

export default Input



// import React, {useState} from 'react';

// function Input({id, info, reg, error,errorMsg, register, type='string', rules={} }) {


//   return (
//     <div className='admin-login'>
//         <label htmlFor={id}> {info}</label>
//       <input 
//       {...reg(info, rules)}
    
//       ref={register}
//       type={type}
//       id={id}
//       placeholder={info}
//       />
//         {error && <span>{errorMsg}</span>}
//     </div>
//   )
// }

// export default Input



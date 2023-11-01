import React, { useState } from 'react'

function MainPage() {
    const [value,setValue]= useState('');

    const evalueExpresion = () => {
        try{
          const evaluar = eval(value)
          setValue(evaluar.toString())
        }catch(error){
            setValue('syntax error');
        }
      }
    
  return (
    <>
    <div style={{height:'100vh'}} className=' main d-flex justify-content-center align-items-center'>
        <div>
            <div className='calculator-div'>
                <div className='input-div w-100 mb-3 d-flex align-items-center justify-content-end p-3' style={{height:'120px'}}>
                    <input className='input-area' type="text" value={value}/>
                </div>
                
                <hr style={{color:'white'}} />
                <div className="buttons">
                    <input className='span-1 btn' style={{backgroundColor:'rgb(206, 37, 158'}} type="button" value={'AC'} onClick={e=>setValue('')} />
                    <button value={'/'} className='btn btn-danger'onClick={e=>setValue(value.slice(0,-1))}><i style={{color:'#ffff'}} class="fa-solid fa-delete-left fa-l"></i></button>
                    <button value={'/'} className='btn btn-warning'onClick={e=>setValue(value+e.target.value)}><i className='fa-solid fa-divide'></i></button>
                    <input type="button" value={7} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={8} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={9} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <button value={'*'} className='btn btn-primary'onClick={e=>setValue(value+e.target.value)}><i className='fa-solid fa-xmark'></i></button>
                    <input type="button" value={4} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={5} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={6} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <button value={'+'} className='btn btn-success'onClick={e=>setValue(value+e.target.value)}><i className='fa-solid fa-plus'></i></button>
                    <input type="button" value={1} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={2} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={3} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <button value={'-'} className='btn btn-info'onClick={e=>setValue(value+e.target.value)}><i className='fa-solid fa-minus'></i></button>
                    <input type="button" value={0} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <input type="button" value={'.'} className='btn btn-light'onClick={e=>setValue(value+e.target.value)} />
                    <button value={'='} className='span-2 btn' style={{backgroundColor: 'rgb(15, 241, 188)'}} onClick={evalueExpresion}><i className='fa-solid fa-equals'></i></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainPage
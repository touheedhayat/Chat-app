
const GenderCheckBox = () => {

    return(
    <div className='flex mt-2'>
        <div className='form-control'>

            <label  className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-cyan-50'>Male</span>
                <input type='checkbox' className=' checkbox border-slate-600'/>
            </label>

        </div>

        <div className='form-control'>
    <label htmlFor="" className={'label gap-2 cursor-pointer'}>
    <span className='label-text text-cyan-50'>Female</span>
    <input type='checkbox' className=' checkbox border-slate-800'/>
</label>

</div>

    </div>
    )
}

export default GenderCheckBox;



// STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
// 	return (
		// <div className='flex'>
		// 	<div className='form-control'>
		// 		<label className={`label gap-2 cursor-pointer`}>
		// 			<span className='label-text'>Male</span>
		// 			<input type='checkbox' className='checkbox border-slate-900' />
		// 		</label>
		// 	</div>
		// 	<div className='form-control'>
		// 		<label className={`label gap-2 cursor-pointer`}>
		// 			<span className='label-text'>Female</span>
		// 			<input type='checkbox' className='checkbox border-slate-900' />
		// 		</label>
		// 	</div>
		// </div>
// 	);
// };
// export default GenderCheckbox;
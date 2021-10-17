import loader from "./PreLoader.module.css";

const PreLoader = () => {
	return (
		<div className='col-lg-12 mt-5'>
			<div className={loader.PreLoader}>Loading...</div>;
		</div>
	);
};

export default PreLoader;

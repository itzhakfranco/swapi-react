const Header = ({ title }) => {
	return (
		<div className='border-bottom mb-4'>
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
			</div>
		</div>
	);
};

export default Header;
